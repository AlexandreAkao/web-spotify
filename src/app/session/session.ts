export interface Session {
  user: {
    id: Number;
    username: string;
    email: string;
  };
  token: string;
}
