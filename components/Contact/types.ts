export interface FormState {
  firstName: string;
  mail: string;
  message: string;
}

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export interface User {
  id: string;
  userName: string;
  email: string;
  message: string;
}

export interface GetUsersData {
  getUsers: User[];
}

export interface GetUserData {
  getUserById: User;
}

export interface GetUserVars {
  id: string;
}

export interface CreateUserData {
  createUser: User;
}

export interface CreateUserVars {
  userName: string;
  email: string;
  message: string;
}