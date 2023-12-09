import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ versionKey: false })
export class User {
  @IsString()
  @IsNotEmpty()
  @Prop({ required: true })
  first_name: string;

  @IsEmail()
  @Prop({ required: true })
  last_name: string;

  @IsString()
  @IsNotEmpty()
  @Prop({ required: true })
  phone_number: string;

  @Prop({ default: null })
  hashed_token: string;

  @Prop({ default: null })
  password: string;

  @Prop({ default: null })
  image: string;

  @Prop({ default: null })
  role: string;

  @Prop({ default: true })
  status: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
