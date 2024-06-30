/* eslint-disable no-unused-vars */
import { USER_ROLE } from './user.constant';

export interface TUser {
  username: string;
  password: string;
  role: 'superAdmin' | 'admin';
}

export type TUserRole = keyof typeof USER_ROLE;