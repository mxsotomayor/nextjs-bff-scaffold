// add basic user service
import { UserRepository } from "../repo/UserRepository";
import type { AuthUserModel } from "@/lib/definitions/AuthUserModel";
import bcrypt from 'bcrypt';

import { sql } from "../db";
import { v4 as uuidv4 } from "uuid";
const userRepository = new UserRepository();
export class UserService {

  static async registerUser(name: string, email: string, password: string): Promise<AuthUserModel> {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    const id = uuidv4();
    await sql`INSERT INTO users (id, name, email, password) VALUES (${id}, ${name}, ${email}, ${hashedPassword})`;
    return { id, name, email };
  }

  static async authenticateUser(email: string, password: string): Promise<AuthUserModel | null> {
    const user = await userRepository.getUserByEmail(email);
    if (user && await bcrypt.compare(password, user.password ?? "")) {
      return user;
    }
    return null;
  }
}