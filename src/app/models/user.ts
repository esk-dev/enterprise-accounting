type Role = 'ROLE_ADMIN' | 'ROLE_WORKER';

export interface IUser {
  email: string;
  password: string;
  role: Role;
}
