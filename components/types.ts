export enum ACTION_BUTTON_TYPE {
  STANDARD = "standard",
  ACTION = "action",
  SPECIAL = "special",
}

// Generic func
function newGen<T>(one: T){
  return one as T;
}

export const assignedTo = newGen<string>('New generation');