import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export interface SignUpInfo {
  nickName: string;
  email: string;
  loginId: string;
  password: string;
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

// export interface VerificationMessage   {
//   VerificationSuccess
// }
//
// { data: VerificationMessage }
// |
