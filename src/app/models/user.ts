type Role = 'admin' | 'worker';

export interface User {
  email: string;
  password: string;
  role: Role;
}
