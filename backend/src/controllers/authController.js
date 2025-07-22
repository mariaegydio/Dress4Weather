// src/controllers/authController.js
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const register = async (req, res) => {
  const { nome, email, senha } = req.body

  try {
    const userExists = await prisma.usuario.findUnique({ where: { email } })
    if (userExists) {
      return res.status(400).json({ error: 'Email já cadastrado' })
    }

    const hashedPassword = await bcrypt.hash(senha, 10)

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: hashedPassword
      }
    })

    res.status(201).json({ message: 'Usuário cadastrado com sucesso', usuario: novoUsuario })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro interno ao registrar usuário' })
  }
}

export const login = async (req, res) => {
  const { email, senha } = req.body

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } })
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha)
    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha incorreta' })
    }

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    })

    res.json({ message: 'Login realizado com sucesso', token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro interno ao fazer login' })
  }
}
