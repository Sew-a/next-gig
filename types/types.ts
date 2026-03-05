export type UserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  access: string;
};

export type ImageTypeProps = {
  id: string;
  name: string;
  url: string;
  type: string;
};

export interface AppContextType {
  users: UserType[];
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
  imageFiles: ImageTypeProps[];
  setImageFiles: React.Dispatch<React.SetStateAction<ImageTypeProps[]>>;
}
