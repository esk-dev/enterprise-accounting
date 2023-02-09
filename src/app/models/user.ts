type Role = 'ROLE_ADMIN' | 'ROLE_USER';

export interface User {
  email: string;
  password: string;
  role: Role;
}
