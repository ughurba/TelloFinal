// interface ISpecification {
//   brand: string;
//   type: string;
//   Network: string;
//   eSim: string;
//   countSim;
//   screenSize;
//   displayPermission;
//   operatingMemory;
//   prosessorType;
// }

export interface IUserPay {
  address: string;
  building: string;
  courier: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  card: boolean;
  cash: boolean;
}

export interface IGoods {
  name: string;
  id: string;
  imgUrl: string;
  rating: number;
  MainImgUrl: string[];
  ChildImgUrl: string[];
  specifications: string[];
  color: string[];
  storage: string[];
  title: string;
  price: number;
  paragraph: string;
  count: number;
  total: string;
  discount: number;
}

export interface ISlider {
  id: string;
  imgUrl: string;
  title: string;
  paragraph: string;
  type: string;
}
