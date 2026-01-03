export interface User {
  username: string;
  password: string;
  authorities: Authority[];
}

export enum Authority {
  ADMIN = "ROLE_ADMIN",
  MANAGER = "ROLE_MANAGER",
  DEVELOPER = "ROLE_DEVELOPER",
}

export interface SessionUser {
  username: User["username"];
  authorities: User["authorities"];
}

export interface SessionLogin {
  username: User["username"];
  password: User["password"];
}
