type ListItem = {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  iconColor?: string;
  bgColor?: string;
};

export enum AuthMode {
  LOGIN = 'login',
  REGISTER = 'register',
}

export type { ListItem };
