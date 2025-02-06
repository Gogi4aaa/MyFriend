export class UnprocessableContent extends Error{
    constructor(message?: string) {
        super("Unexpected error occurred!");
    }
  }
