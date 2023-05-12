import { NextApiResponse } from 'next'

export class ServerError extends Error {
  constructor(stack: string) {
    super('Internal Server Error')
    this.name = 'ServerError'
    this.stack = stack
  }
}

export function serverError(res: NextApiResponse, error: string) {
  res.status(500).json({ error: new ServerError(error) })
}
