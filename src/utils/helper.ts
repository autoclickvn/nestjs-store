import { BaseUserDto } from 'users/dto/base-user.dto';

export const getUserInfo = (user: BaseUserDto) => {
  if (!user) {
    return null;
  }
  const { password, _id, ...userInfo } = user;

  return userInfo;
};
