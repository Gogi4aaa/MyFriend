export class Conflict extends Error {
  static TYPE_USERNAME_ALREADY_EXISTS = 'api/username-already-exists';
  static TYPE_EMAIL_ALREADY_EXISTS = 'api/email-already-exists';
  constructor(message:string) {
    super(message);
  }

  static usernameAlreadyExists() {
    return new Conflict("This username already exists!");
  }
  static emailAlreadyExists() {
    return new Conflict("This email already exists!");
  }
}