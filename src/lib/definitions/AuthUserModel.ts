export interface AuthUserModel {
  id: string;
  name: string;
  email: string;
  password?: string; // Optional, only used for internal purposes
}
