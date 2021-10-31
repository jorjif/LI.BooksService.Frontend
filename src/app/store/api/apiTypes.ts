export interface IUserRegistration {
  userId: number;
  firstName: string;
  lastName: string;
  secondName: string;
  email: string;
  userName: string;
  password: string;
  rating: number;
  createdAt: string;
  enabled: boolean;
  avatar: null | string;
  isStaff: boolean;
  isSuperAdmin: boolean;
  token: string;
  offerLists: any;
  userAddresses: any;
  claims: any;
  identities: any;
  identity: any;
}

export interface IRegisterData {
  firstName: string;
  lastName: string;
  secondName: string;
  email: string;
  userName: string;
  password: string;
  addrCity: string;
  addrStreet: string;
  addrStructure: string;
  addrHouse: string;
  addrApart: string;
  addrIndex: string;
}

export interface ILoginBody {
  userName: string;
  password: string;
}
