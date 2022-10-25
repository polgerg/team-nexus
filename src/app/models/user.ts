export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  zip: number;
  password?: string;
  validated: boolean;
  created_at: string;
}
