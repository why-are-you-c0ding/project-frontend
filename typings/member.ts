import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export interface LoginInfo {
  loginId: string;
  password: string;
}
export interface SignUpInfo extends LoginInfo {
  nickName: string;
  email: string;
  checkPassword: string;
  age: number;
  authKey: string;
}

export interface VerificationSuccess {
  data: {
    message: string;
  };
}

export interface VerificationFail {
  error: FetchBaseQueryError | SerializedError;
}
