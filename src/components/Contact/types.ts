export interface FormState {
  name: string;
  email: string;
  message: string;
}

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export interface ContactResponse {
  ok?: boolean;
  error?: string;
}
