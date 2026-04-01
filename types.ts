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
  isIdeMode: boolean;
  setIsIdeMode: React.Dispatch<React.SetStateAction<boolean>>;
  currentFile: string;
  setCurrentFile: React.Dispatch<React.SetStateAction<string>>;
  isHacked: boolean;
  setIsHacked: React.Dispatch<React.SetStateAction<boolean>>;
  theme: 'orchid-red' | 'default';
  setTheme: React.Dispatch<React.SetStateAction<'orchid-red' | 'default'>>;
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