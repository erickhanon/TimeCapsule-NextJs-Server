import fastify from 'fastify'
import { routes } from './routes/memories'
import cors from '@fastify/cors'
import 'dotenv/config'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
  origin: 'http://localhost:3000',
})

app.register(jwt, {
  secret: 'godIsDead',
})

app.register(routes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })
