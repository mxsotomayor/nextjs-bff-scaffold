
// add user reppository
import { sql } from "../db";
import type { AuthUserModel } from "@/lib/definitions/AuthUserModel";
import { v4 as uuidv4 } from "uuid";

export class UserRepository {
  async createUser(name: string, email: string): Promise<AuthUserModel> {
    const id = uuidv4();
    await sql`INSERT INTO users (id, name, email) VALUES (${id}, ${name}, ${email})`;
    return { id, name, email };
  }

  async getUserByEmail(email: string): Promise<AuthUserModel | null> {
    const user = await sql<AuthUserModel[]>`SELECT * FROM users WHERE email = ${email}`;
    return user[0] || null;
  }
}