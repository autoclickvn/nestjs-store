import { UserStatus, UserType } from '../schema/user.schema';

export type UserAddress = {
  province: {
    id: number;
    detail: string;
  };
  district: {
    id: number;
    detail: string;
  };
  village: {
    id: number;
    detail: string;
  };
  provinceId: number;
  districtId: number;
  villageId: number;
  detail: string;
};

export class BaseUserDto {
  id: number;
  type: UserType;
  fullname: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  address: UserAddress;
  phone: string;
  status: UserStatus;
  email?: string;
  gender?: string;
  avatar?: string;
  age?: number;
  birthday?: Date;
  facebookId?: string;
  googleId?: string;
  _id?: string;
}
