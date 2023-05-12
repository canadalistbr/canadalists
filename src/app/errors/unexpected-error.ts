export class UnexpectedError extends Error {
    constructor () {
      super('Sorry for the inconvenience, something went wrong. Try again later!')
      this.name = 'UnexpectedError'
    }
  }
  