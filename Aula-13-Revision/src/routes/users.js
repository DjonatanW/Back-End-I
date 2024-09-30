import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'


const router = express.Router()

// Exportação nomeada
export const users = []

// Exportação deafault
export default router

