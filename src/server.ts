import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  return prisma.user.findMany()
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })
