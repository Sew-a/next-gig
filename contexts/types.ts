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
  isIdeMode: boolean;
  currentFile: string;
  isHacked: boolean;
  theme: 'secondary-theme' | 'default';

  setImageFiles: React.Dispatch<React.SetStateAction<ImageItemProps[]>>;
  setIsIdeMode: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentFile: React.Dispatch<React.SetStateAction<string>>;
  setIsHacked: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<'secondary-theme' | 'default'>>;
}

//  Actions list types
export const ACTION_NAMES = {
  OPEN: "OPEN",
  RENAME: "RENAME",
  DELETE: "DELETE",
  DOWNLOAD: "DOWNLOAD",
  UPLOAD: "UPLOAD",
}

export type ActionTypes = {
  Open: 'OPEN';
  Rename: 'RENAME';
  Delete: 'DELETE';
  Download: 'DOWNLOAD';
}