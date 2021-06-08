import { Request } from "express";
import { Document, Model } from "mongoose";

export interface UserEntity extends Document {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	tokens: Array<{ _id?: string; token: string }>;
	oldPasswords: Array<{ id?: string; password: string }>;
	generateAuthToken(): Promise<string>;
}

export type UserPropType = "firstName" | "lastName" | "email" | "password";

export interface AuthRequestEntity extends Request {
	user?: UserEntity;
}

export interface DecodedTokenEntity {
	_id: string;
	iat: number;
	exp: number;
}

export interface UserModelEntity extends Model<UserEntity> {
	findByCredentials(email: string, password: string): Promise<UserEntity>;
}