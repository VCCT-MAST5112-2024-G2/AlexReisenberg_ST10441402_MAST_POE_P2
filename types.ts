// types.ts
export type MenuItem = {
  dishName: string;
  description: string;
  course: string;
  price: number;
};

export type AppStackParamList = {
  Home: { newItem?: MenuItem, filter?: string }; // newItem is optional
  AddMenu: undefined;
  Filter: undefined;
};
