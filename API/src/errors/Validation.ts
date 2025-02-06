export class Validation extends Error {
    e:any
    constructor(e: any) {
      super()
      this.e = e
    }
}