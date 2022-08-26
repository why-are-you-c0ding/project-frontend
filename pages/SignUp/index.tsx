import React from "react";
import {Form, Header, Input, Label, SignUpBtn, Wrapper} from './styles'
import StatusBar from "@components/StatusBar";

const SignUp = () => {
  return (
      <Wrapper>
          <StatusBar />
        <Header>회원가입</Header>
        <Form>
            <Label>
                <span>아이디*</span>
                <button>중복 체크</button>
                <div>
                    <Input type="text" value={''}  placeholder="예) Wayc"  />
                </div>
            </Label>
            <Label>
                <span>비밀 번호*</span>
                <div>
                    <Input type="password"  value={''} placeholder="예) 영문, 숫자, 특수문자 조합 8-16자"  />
                </div>
            </Label>
            <Label>
                <span>비밀 번호 체크*</span>
                <div>
                    <Input type="password" value={''}  placeholder="예) 비밀번호를 정확히 입력해주세요"  />
                </div>
            </Label>
            <Label>
                <span>이메일 주소*</span>
                <button>중복 체크</button>
                <div>
                    <Input type="email"  value={''}  placeholder="예) Wayc@Wayc.co.kr"  />
                </div>
            </Label>
            <Label>
                <span>닉네임*</span>
                <button>중복 체크</button>
                <div>
                    <Input type="text" value={''}  placeholder="예) 홍길동"  />
                </div>
            </Label>
            <SignUpBtn>가입하기</SignUpBtn>
        </Form>
      </Wrapper>
  )
};

export default SignUp;
