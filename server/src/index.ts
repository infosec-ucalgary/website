import { Hono } from 'hono'
import { cors } from 'hono/cors'
import type { ApiResponse } from 'shared/dist'

// This is here if we need a server

const app = new Hono()

app.use(cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/ping', async (c) => {
  const data: ApiResponse = {
    message: "Pong!",
    success: true
  }

  return c.json(data, { status: 200 })
})

export default app
