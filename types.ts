export type UserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  access: string;
};

export type ActionType = typeof ACTION_NAMES[keyof typeof ACTION_NAMES];

export type ImageItemProps = {
  id: string;
  name: string;
  url: string;
  type: string;
  handleClick: (action: ActionType, id: string, url: string) => void;
};

export interface AppContextType {
  imageFiles: ImageItemProps[];
  setImageFiles: React.Dispatch<React.SetStateAction<ImageItemProps[]>>;
}

//  Actions list types
export const ACTION_NAMES = {
  OPEN: "OPEN",
  RENAME: "RENAME",
  DELETE: "DELETE",
  DOWNLOAD: "DOWNLOAD",
  UPLOAD: "UPLOAD",
}

export type ActionTypes  = {
Open: 'OPEN';
Rename: 'RENAME';
Delete: 'DELETE';
Download: 'DOWNLOAD';
}