import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AddressSchema } from './address.schema';

export type UserDocument = User & Document;

export type UserType = 'ADMIN' | 'USER';

export type UserStatus = 1 | 0;

@Schema()
export class User {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  type: UserType;

  @Prop({ required: true })
  fullname: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  address: AddressSchema;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  status: UserStatus;

  @Prop()
  email?: string;

  @Prop()
  facebookId?: string;

  @Prop()
  _id?: string;

  @Prop()
  googleId?: string;

  @Prop()
  gender?: string;

  @Prop()
  avatar?: string;

  @Prop()
  age?: number;

  @Prop()
  birthday?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
