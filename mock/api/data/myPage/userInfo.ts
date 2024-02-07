import { faker } from "@faker-js/faker";
import { UserInfo } from "@typings/myPage";

export function createRandomUserInfo() {
  return {
    nickName: faker.person.fullName(),
    id: faker.internet.password(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 10, max: 80 }),
    role: "판매자",
  };
}

export const getUserInfoData = {
  UserInfo: createRandomUserInfo(),
};
