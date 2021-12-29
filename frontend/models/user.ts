export interface  UserName {
  title: string;
  first : string;
  last: string
}

export interface  Location {
  street: string;
  city: string;
  state: string;
  country: string;
  postCode: number;
}
export interface User extends UserName {
  gender: string;
  location: Location;
  email: string;
  phone: string;
  cell: string;
}
