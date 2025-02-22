// src/types/express.d.ts
import { User } from './models/User'; // Import your user model or interface

declare global {
  namespace Express {
    interface Request {
      user?: User; // Define the user type, make sure to replace `User` with your actual type or interface
    }
  }
}
