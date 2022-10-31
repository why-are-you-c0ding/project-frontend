"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[55],{11921:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(67294);const a=n(97083).Z.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1000;
`,r=({children:e,show:t,onCloseModal:n,closeButton:r})=>t?l.createElement("div",null,l.createElement(a,{onClick:n},l.createElement("div",null,e))):null;r.defaultProps={closeButton:!0};const o=r},66985:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(67294),a=n(97083);const r=a.Z.div`
  margin-bottom: 9rem;

  @media screen and (max-width: 769px) {
    margin-bottom: 0;
`,o=a.Z.div`
  background-color: white;
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,i=a.Z.div`
  padding: 0.5rem 3rem;
  //border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & span a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`,c=a.Z.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    margin-left: 1rem;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`,m=a.Z.div`
  padding: 0.8rem 2rem;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  & div {
    display: flex;
    align-items: center;
  }

  & span {
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    margin-left: 2rem;
    cursor: pointer;
  }

  & span > label {
    position: relative;

    display: flex;
    align-items: center;

    cursor: pointer;

    & > input {
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      width: 10rem;
      height: 2.3rem;

      font-size: 1.1rem;
    }

    & .icon {
      margin-left: 0.5rem;
    }
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (min-width: 769px) {
    .faBars {
      display: none;
    }
  }
  @media screen and (max-width: 769px) {
    padding: 1rem 1rem;

    .hidden {
      display: none;
    }

    & span {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`,s=a.Z.div`
  font-size: 2rem;
  & a {
    text-decoration: none;
    color: inherit;
  }
`;var d=n(17625),u=n(51436),p=n(11921);const h=a.Z.button`
  border: none;
  background-color: inherit;

  font-size: 35px;

  position: absolute;
  right: 10px;
  top: 10px;

  cursor: pointer;
`,g=a.Z.div`
  position: fixed;
  right: 0;

  width: 60vw;
  height: 100%;

  background-color: white;

  & > div {
    display: flex;
    flex-direction: column;

    margin-top: 80px;
    font-size: 1.6rem;

    width: 100%;

    & label {
      width: 100%;
    }

    & > div {
      padding: 20px 0;
      padding-left: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`,b=a.Z.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 40vw;
  height: 100%;
`;var E=n(73727);const x=({onCloseModal:e})=>{const[t,n]=(0,l.useState)(null!==localStorage.getItem("jwt")),a=(0,l.useCallback)((e=>{localStorage.removeItem("jwt"),n(!1)}),[]),r=(0,l.useCallback)((e=>{e.stopPropagation()}),[]);return l.createElement("div",{onClick:r},l.createElement(b,{onClick:e}),l.createElement(g,null,l.createElement(h,{onClick:e},"X"),l.createElement("div",null,l.createElement("div",null,l.createElement(E.rU,{to:"/ProductPage"},"shop")),l.createElement("div",null,l.createElement(E.rU,{to:"/mypage/like"},"장바구니")),l.createElement("div",null,l.createElement(E.rU,{to:"/mypage/buying"},"주문내역")),l.createElement("div",null,l.createElement(E.rU,{to:"/sellpage/selllist"},"등록 상품 조회")),l.createElement("div",null,l.createElement(E.rU,{to:"/sellpage/sellorderlist"},"주문 내역 조회")),l.createElement("div",null,t?l.createElement("div",{onClick:a},"로그아웃"):l.createElement(E.rU,{to:"/login"},"로그인")))))};var f=n(38678);const v=({sideBar:e})=>{const[t,n]=(0,l.useState)(!1),[a,h,g]=(0,f.Z)(""),b=(0,l.useCallback)((()=>{n((e=>!e))}),[]);(0,l.useEffect)((()=>{const e=()=>{window.innerWidth>769&&n(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const[v,w]=(0,l.useState)(null!==localStorage.getItem("jwt")),C=(0,l.useCallback)((e=>{localStorage.removeItem("jwt"),w(!1)}),[]);return l.createElement(r,{sideBar:e},l.createElement(o,null,l.createElement(i,null,l.createElement(c,null,l.createElement("span",null,l.createElement(E.rU,{to:"/sellpage/sellregister"},"판매 페이지")),l.createElement("span",null,l.createElement(E.rU,{to:"/mypage/like"},"장바구니")),l.createElement("span",null,l.createElement(E.rU,{to:"/mypage/buying"},"마이 페이지")),l.createElement("span",null,v?l.createElement("div",{onClick:C},"로그아웃"):l.createElement(E.rU,{to:"/login"},"로그인")))),l.createElement(m,null,l.createElement(s,null,l.createElement("a",{href:"/"},"WAYC")),l.createElement("div",null,l.createElement("span",{className:"hidden"},l.createElement(E.rU,{to:"/ProductPage"},"Shop")),l.createElement("span",null,l.createElement("label",null,l.createElement("input",{type:"text",value:a,onChange:h}),l.createElement(E.rU,{to:{pathname:"/searchitem",state:{word:a}}},l.createElement(d.G,{className:"icon",icon:u.Y$T})))),l.createElement("span",{className:"faBars",onClick:b},l.createElement(d.G,{icon:u.xiG}))))),t&&l.createElement(p.Z,{show:t,onCloseModal:b},l.createElement(x,{onCloseModal:b})))}},38678:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(67294);const a=e=>{const[t,n]=(0,l.useState)(e);return[t,(0,l.useCallback)((e=>{n(e.target.value)}),[]),n]}},10055:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var l=n(67294),a=n(38678),r=n(73727),o=n(9669),i=n.n(o),c=n(73046),m=n(66985),s=n(11921),d=n(97083);const u=d.Z.div`
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  background-color: white;

  width: 35vw;
  min-width: 400px;
  height: 30vh;
  min-height: 180px;

  margin: 26vh auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  & > form > button {
    border: none;
    background-color: inherit;

    position: absolute;
    top: 1rem;
    right: 1rem;

    font-size: 2rem;
  }
`,p=d.Z.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
`,h=d.Z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`,g=d.Z.header`
  font-size: 1.2rem;
`,b=d.Z.button`
  width: 4rem;
  height: 1.5rem;
  border-radius: 5px;
  background-color: #e8e1e1;
  color: inherit;
  border: transparent;
  text-align: center;
  margin: 10px 1rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
`,E=d.Z.input`
  box-sizing: border-box;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  width: 20rem;
  height: 2rem;
  outline: none;
  font-size: 1rem;
`,x=({id:e,onChangeId:t,onCloseCheckIdModal:n,setId:a,setCheckId:r})=>{const[o,m]=(0,l.useState)(!1),[s,d]=(0,l.useState)(!1),x=(0,l.useCallback)((t=>{t.preventDefault(),(e||e.trim())&&i().post("https://waycabvav.shop/verification/login-id",{loginId:e},{withCredentials:!0}).then((t=>{m(!0),a(e),r(!0),e.length<6&&(m(!1),r(!1))})).catch((e=>{m(!1),r(!1),console.log(e.response)})).finally((()=>{d(!0)}))}),[e,a]),f=(0,l.useCallback)((e=>{e.stopPropagation()}),[]);return l.createElement(u,{onClick:f},l.createElement(p,{onSubmit:x},l.createElement(h,null,l.createElement(g,null,"아이디 중복 검사"),l.createElement(b,{type:"submit"},"검사")),l.createElement(E,{type:"text",id:"id",onChange:t,name:"id",value:e}),l.createElement("button",{onClick:n},"X"),s&&!o&&e.length>0&&l.createElement(c.jj,null,"아이디를 사용하실 수 없습니다."),s&&o&&l.createElement(c.Eh,null,"아이디 사용이 가능합니다.")))},f=d.Z.div`
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  background-color: white;

  width: 35vw;
  min-width: 400px;
  height: 30vh;
  min-height: 180px;

  margin: 50vh auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  & > form > button {
    border: none;
    background-color: inherit;

    position: absolute;
    top: 1rem;
    right: 1rem;

    font-size: 2rem;
  }
`,v=({nickname:e,onChangeNickname:t,onCloseCheckIdModal:n,setNickname:a,setCheckNickname:r})=>{const[o,m]=(0,l.useState)(!1),[s,d]=(0,l.useState)(!1),u=(0,l.useCallback)((t=>{t.preventDefault(),(e||e.trim())&&i().post("https://waycabvav.shop/verification/nick-name",{nickName:e},{withCredentials:!0}).then((t=>{m(!0),a(e),r(!0),e.length<2&&(m(!1),r(!1))})).catch((e=>{m(!1),r(!1),console.log(e.response)})).finally((()=>{d(!0)}))}),[e,a]),x=(0,l.useCallback)((e=>{e.stopPropagation()}),[]);return l.createElement(f,{onClick:x},l.createElement(p,{onSubmit:u},l.createElement(h,null,l.createElement(g,null,"닉네임 중복 검사"),l.createElement(b,{type:"submit"},"검사")),l.createElement(E,{type:"text",id:"nickname",onChange:t,name:"nickname",value:e}),l.createElement("button",{onClick:n},"X"),s&&!o&&e.length>0&&l.createElement(c.jj,null,"닉네임을 사용하실 수 없습니다."),s&&o&&l.createElement(c.Eh,null,"닉네임 사용이 가능합니다.")))},w=d.Z.div`
  margin-top: 1rem;
  margin-left: -1rem;

  & span {
    color: #6495ec;
  }

  & input {
    margin-left: 1rem;
    width: 6vw;
    min-width: 80px;
  }
`,C=({email:e,onChangeEmail:t,onCloseCheckEmailModal:n,setCheckEmail:a,authKey:r,onChangeAuthKey:o})=>{const[m,s]=(0,l.useState)(!1),[d,u]=(0,l.useState)(!1),x=(0,l.useCallback)((t=>{t.preventDefault(),(e||e.trim())&&i().post("https://waycabvav.shop/verification/email",{receiveEmail:e},{withCredentials:!0}).then((e=>{s(!0),alert("이메일 발송했습니다. 5분 안에 입력해주세요."),console.log(e)})).catch((e=>{alert("이메일 발송에 실패했습니다."),s(!1),console.log(e.response)}))}),[e]),v=(0,l.useCallback)((t=>{t.preventDefault(),(r||r.trim())&&i().post("https://waycabvav.shop/verification/email/auth-key",{email:e,authKey:r},{withCredentials:!0}).then((e=>{u(!0),a(!0),console.log(e)})).catch((e=>{u(!1),a(!1),alert("인증 번호를 다시 입력해주세요."),console.log(e.response)}))}),[r]),C=(0,l.useCallback)((e=>{e.stopPropagation()}),[]);return l.createElement(f,{onClick:C},l.createElement(p,{onSubmit:x},l.createElement(h,null,l.createElement(g,null,"이메일 인증"),l.createElement(b,{type:"submit"},"보내기")),l.createElement(E,{type:"email",id:"email",onChange:t,name:"email",value:e}),l.createElement("button",{onClick:n},"X"),d&&l.createElement(c.Eh,null,"이메일 인증이 완료되었습니다.")),m&&!d&&l.createElement(w,null,l.createElement("form",{onSubmit:v},l.createElement("span",null,"인증 번호 입력"),l.createElement("input",{type:"text",value:r,onChange:o}),l.createElement(b,{type:"submit"},"검사"))))},k=()=>{const[e,t,n]=(0,a.Z)(""),[o,,d]=(0,a.Z)(""),[u,,p]=(0,a.Z)(""),[h,g,b]=(0,a.Z)(""),[E,f,w]=(0,a.Z)(""),[k,y,Z]=(0,a.Z)(""),[z,S]=(0,l.useState)(0),[I,j,_]=(0,a.Z)(""),[M,U]=(0,l.useState)(!1),[N,P]=(0,l.useState)(!1),[B,L]=(0,l.useState)(!1),[D,K]=(0,l.useState)(!1),[X,$]=(0,l.useState)(!1),[A,J]=(0,l.useState)(!1),[W,G]=(0,l.useState)(!1),[R,Y]=(0,l.useState)(!1),[q,T]=(0,l.useState)(!1),[F,H]=(0,l.useState)(!1),[O,Q]=(0,l.useState)(!1);(0,l.useEffect)((()=>{const e=(new Date).getFullYear().toString().slice(0,4);S(parseInt(e)-parseInt(k.slice(0,4))+1)}),[k,y,Z]),(0,l.useEffect)((()=>{o.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/)?$(!0):$(!1)}),[o,d]);const V=(0,l.useCallback)((e=>{d(e.target.value),K(e.target.value===u)}),[u,d]),ee=(0,l.useCallback)((e=>{p(e.target.value),K(e.target.value===o)}),[o,p]),te=(0,l.useCallback)((()=>{T((e=>!e))}),[]),ne=(0,l.useCallback)((()=>{H((e=>!e))}),[]),le=(0,l.useCallback)((()=>{Q((e=>!e))}),[]),ae=(0,l.useCallback)((()=>{U((e=>!e))}),[M]),re={"X-Requested-With":"XMLHttpRequest"},oe=(0,l.useCallback)((t=>{t.preventDefault(),A&&D&&X&&(k||k.trim())&&R&&W?i().post(M?"https://waycabvav.shop/members/sellers":"https://waycabvav.shop/members/consumers",{nickName:E,email:h,loginId:e,password:o,checkPassword:u,age:z,authKey:I},{withCredentials:!0,headers:re}).then((e=>{alert("회원가입에 성공하셨습니다. 로그인을 해주세요"),L(!0),n(""),d(""),p(""),b(""),w(""),Z(""),S(0),_("")})).catch((e=>{alert("아이디, 패스워드를 확인해주세요."),console.log(e.response)})):alert("전부 조건에 맞게 입력해주세요!")}),[e,o,u,k,z,h,E,A,W,D,X,M,I]);return l.createElement("div",null,l.createElement(m.Z,null),l.createElement(c.im,null,l.createElement(c.h4,null,"회원가입"),l.createElement(c.l0,{onSubmit:oe},l.createElement(c.ZC,null,l.createElement(c.__,null,l.createElement("span",null,"아이디*"),l.createElement(c.II,{type:"text",id:"id",name:"id",value:e,onChange:t,placeholder:"예) Wayc123, 6자 이상"})),l.createElement(c.zx,{type:"button",onClick:te},"중복 체크")),l.createElement(c.__,null,l.createElement("span",null,"비밀 번호*"),l.createElement("div",null,l.createElement("span",{style:{fontSize:"0.7rem",color:"rgba(0,0,0,0.4)",marginTop:"0.5rem"}},"비밀번호는 8자 이상 및 영문, 숫자, 특수 문자 1자 이상 포함"),l.createElement(c.II,{type:"password",id:"password",name:"password",value:o,onChange:V,placeholder:"예) 영문, 숫자, 특수문자 조합 8-15자",minLength:8,maxLength:15})),!X&&o.length>0&&l.createElement(c.jj,null,"비밀번호 조건에 일치하지 않습니다!",l.createElement(c.Je,null)),X&&l.createElement(c.Eh,null,"비밀번호 조건에 일치합니다!",l.createElement(c.MZ,null))),l.createElement(c.__,null,l.createElement("span",null,"비밀 번호 체크* "),l.createElement("div",null,l.createElement(c.II,{type:"password",id:"password-check",name:"password-check",value:u,onChange:ee,placeholder:"예) 영문, 숫자, 특수문자 조합 8-15자",minLength:8,maxLength:15})),!D&&u.length>0&&l.createElement(c.jj,null," ","비밀번호가 일치하지 않습니다!",l.createElement(c.Je,null)),D&&u.length>7&&l.createElement(c.Eh,null," ","비밀번호가 일치합니다!",l.createElement(c.MZ,null))),l.createElement(c.__,null,l.createElement("span",null,"생년 월일*"),l.createElement(c.II,{type:"date",value:k,onChange:y})),l.createElement(c.ZC,null,l.createElement(c.__,null,l.createElement("span",null,"이메일 주소*"),l.createElement(c.II,{type:"email",id:"email",name:"email",value:h,onChange:g,placeholder:"예) wayc@google.com"})),l.createElement(c.zx,{type:"button",onClick:le},"인증 번호")),l.createElement(c.ZC,null,l.createElement(c.__,null,l.createElement("span",null,"닉네임*"),l.createElement(c.II,{type:"text",id:"nickname",name:"nickname",value:E,onChange:f,placeholder:"예) 나비, 2자 이상",minLength:2})),l.createElement(c.zx,{type:"button",onClick:ne},"중복 체크")),l.createElement(c.r_,null,l.createElement("span",null,"*판매자로 가입하시려면 체크해주세요"),l.createElement("input",{type:"checkbox",onChange:ae})),N&&l.createElement(c.jj,null,N),B&&l.createElement(c.Eh,null,"회원가입되었습니다! 로그인해주세요."),l.createElement(c.BM,{type:"submit"},"가입하기")),l.createElement(c.Ji,null,"이미 회원이신가요?  ",l.createElement(r.rU,{to:"/login"},"로그인 하러가기")),l.createElement(s.Z,{show:q,onCloseModal:te},l.createElement(x,{id:e,onChangeId:t,onCloseCheckIdModal:te,setId:n,setCheckId:J})),l.createElement(s.Z,{show:F,onCloseModal:ne},l.createElement(v,{nickname:E,onChangeNickname:f,onCloseCheckIdModal:ne,setNickname:w,setCheckNickname:G})),l.createElement(s.Z,{show:O,onCloseModal:le},l.createElement(C,{email:h,onChangeEmail:g,onCloseCheckEmailModal:le,setCheckEmail:Y,authKey:I,onChangeAuthKey:j}))))}},73046:(e,t,n)=>{n.d(t,{BM:()=>u,Eh:()=>g,II:()=>d,Je:()=>p,Ji:()=>x,MZ:()=>b,Rj:()=>E,ZC:()=>o,__:()=>s,bU:()=>c,h4:()=>r,im:()=>a,jj:()=>h,l0:()=>m,r_:()=>f,zx:()=>i});var l=n(97083);const a=l.Z.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 6rem;
`,r=l.Z.header`
  font-weight: bolder;
  font-size: 3em;
  letter-spacing: -0.75px;
  margin-bottom: 2rem;
`,o=l.Z.div`
  position: relative;
`,i=l.Z.button`
  width: 4rem;
  height: 1.5rem;
  border-radius: 5px;
  background-color: #e8e1e1;
  color: inherit;
  border: transparent;
  text-align: center;
  margin-left: 1rem;
  font-weight: bold;
  cursor: pointer;

  position: absolute;
  top: 0;
  left: 4.5rem;
`,c=l.Z.div`
  font-weight: bolder;
  font-size: 20px;
  letter-spacing: -0.75px;
  margin-bottom: 30px;
`,m=l.Z.form`
  margin: 0 auto;
  width: 100vw;
  max-width: 400px;
`,s=l.Z.label`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 2rem;

  & span {
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;

    width: 7rem;
  }
`,d=l.Z.input`
  position: relative;
  box-sizing: border-box;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #ebebeb;
  width: 25rem;
  height: 2rem;
  outline: none;
  font-size: 1rem;
  padding: 10px 0 14px;
  margin-top: 0.6rem;
  :focus {
    border-bottom: 2px solid black;
  }
  ::placeholder {
    font-size: 0.9rem;
  }
`,u=l.Z.button`
  width: 25rem;
  height: 4rem;
  background-color: cornflowerblue;
  color: white;
  border: transparent;
  border-radius: 20px;
  text-align: center;
  outline: none;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    background-color: blueviolet;
    border: none;
  }
`,p=l.Z.div`
  background-color: red;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
`,h=l.Z.div`
  color: red;
  margin: 8px 0 16px;
  font-weight: bold;
`,g=l.Z.div`
  color: green;
  margin: 10px 0 10px;
  font-weight: bold;
`,b=l.Z.div`
  background-color: green;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
`,E=l.Z.div`
  text-align: center;
  & span {
    padding: 20px;
    font-size: 1.2rem;
    font-weight: bolder;

    & a {
      text-decoration: none;
      color: inherit;
    }
  }
`,x=l.Z.p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`,f=l.Z.div`
  color: dodgerblue;
  font-size: 1rem;

  & span {
    margin-right: 0.3rem;
  }
`}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBUzVELEVBQUFBLEVBQUFBLE1BQWM7Ozs7Ozs7Ozs7Ozs7OztFQWlCdkJpSyxFQUFZakssRUFBQUEsRUFBQUEsR0FBVzs7Ozs7RUFPdkJ5RCxFQUFPekQsRUFBQUEsRUFBQUEsSUFBWTs7OztFQU1uQmtLLEVBQVFsSyxFQUFBQSxFQUFBQSxLQUFhOzs7Ozs7Ozs7Ozs7Ozs7RUFpQnJCNkQsRUFBUTdELEVBQUFBLEVBQUFBLEtBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxQnJCbUssRUFBWW5LLEVBQUFBLEVBQUFBLE1BQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CMUJvSyxFQUFjcEssRUFBQUEsRUFBQUEsR0FBVzs7Ozs7Ozs7O0VBV3pCcUssRUFBUXJLLEVBQUFBLEVBQUFBLEdBQVc7Ozs7RUFNbkJzSyxFQUFVdEssRUFBQUEsRUFBQUEsR0FBVzs7OztFQU1yQnVLLEVBQWdCdkssRUFBQUEsRUFBQUEsR0FBVzs7Ozs7Ozs7O0VBVzNCd0ssRUFBWXhLLEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7Ozs7OztFQWN2QnlLLEVBQWdCekssRUFBQUEsRUFBQUEsQ0FBUzs7Ozs7Ozs7Ozs7Ozs7RUFnQnpCMEssRUFBYzFLLEVBQUFBLEVBQUFBLEdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL01lbnUvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL01lbnUvaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvU3RhdHVzQmFyL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9NZW51TGlzdC9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvTWVudUxpc3QvaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvU3RhdHVzQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9ob29rcy91c2VJbnB1dC50cyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL0NoZWNrSWRNb2RhbC9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvQ2hlY2tJZE1vZGFsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL0NoZWNrTmlja25hbWVNb2RhbC9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvQ2hlY2tOaWNrbmFtZU1vZGFsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL1NlbmRQcm92ZUVtYWlsL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9TZW5kUHJvdmVFbWFpbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vcGFnZXMvU2lnblVwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9wYWdlcy9TaWduVXAvc3R5bGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IENyZWF0ZU1vZGFsID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgei1pbmRleDogMTAwMDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDcmVhdGVNb2RhbCB9IGZyb20gXCJAY29tcG9uZW50cy9NZW51L3N0eWxlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaG93OiBib29sZWFuO1xuICBvbkNsb3NlTW9kYWw6IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pID0+IHZvaWQ7XG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHt9Pjtcbn1cblxuY29uc3QgTWVudTogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHNob3csIG9uQ2xvc2VNb2RhbCwgY2xvc2VCdXR0b24gfSkgPT4ge1xuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDcmVhdGVNb2RhbCBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9PlxuICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvQ3JlYXRlTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xvc2VCdXR0b246IHRydWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBCYXJXcmFwcGVyID0gc3R5bGVkLmRpdjx7IHNpZGVCYXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgfT5gXG4gIG1hcmdpbi1ib3R0b206IDlyZW07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJhciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA5OTk7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN1YkJhciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xuICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgJiBzcGFuIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN1Yk1lbnUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNYWluQmFyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMC44cmVtIDJyZW07XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbiAgJiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICYgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYgc3BhbiA+IGxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmID4gaW5wdXQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgIGhlaWdodDogMi4zcmVtO1xuXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG5cbiAgICAmIC5pY29uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuICB9XG5cbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgIC5mYUJhcnMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XG5cbiAgICAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJiBzcGFuIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IENsb3NlQnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuXG4gIGZvbnQtc2l6ZTogMzVweDtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuXG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgJiA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcblxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJiBsYWJlbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmID4gZGl2IHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCbGFuayA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB3aWR0aDogNDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJsYW5rLCBDbG9zZUJ0biwgTGlzdCB9IGZyb20gXCJAY29tcG9uZW50cy9NZW51TGlzdC9zdHlsZXNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNsb3NlTW9kYWw6IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IE1lbnVMaXN0OiBGQzxQcm9wcz4gPSAoeyBvbkNsb3NlTW9kYWwgfSkgPT4ge1xuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKSAhPT0gbnVsbCk7XG5cbiAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dFwiKTtcbiAgICBzZXRJc0xvZ2luKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtzdG9wUHJvcGFnYXRpb259PlxuICAgICAgPEJsYW5rIG9uQ2xpY2s9e29uQ2xvc2VNb2RhbH0+PC9CbGFuaz5cbiAgICAgIDxMaXN0PlxuICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZU1vZGFsfT5YPC9DbG9zZUJ0bj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvUHJvZHVjdFBhZ2VcIj5zaG9wPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9teXBhZ2UvbGlrZVwiPuyepeuwlOq1rOuLiDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvbXlwYWdlL2J1eWluZ1wiPuyjvOusuOuCtOyXrTwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2VsbHBhZ2Uvc2VsbGxpc3RcIj7rk7HroZ0g7IOB7ZKIIOyhsO2ajDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2VsbHBhZ2Uvc2VsbG9yZGVybGlzdFwiPuyjvOusuCDrgrTsl60g7KGw7ZqMPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IWlzTG9naW4gPyAoXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+66Gc6re47J24PC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkxvZ291dH0+66Gc6re47JWE7JuDPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGlzdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQmFyLFxuICBCYXJXcmFwcGVyLFxuICBNYWluQmFyLFxuICBOYW1lLFxuICBTdWJCYXIsXG4gIFN1Yk1lbnUsXG59IGZyb20gXCJAY29tcG9uZW50cy9TdGF0dXNCYXIvc3R5bGVzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYU1hZ25pZnlpbmdHbGFzcywgZmFCYXJzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBjb21wb25lbnRzL01lbnVcIjtcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiQGNvbXBvbmVudHMvTWVudUxpc3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiQGNvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIkBob29rcy91c2VJbnB1dFwiO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpZGVCYXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdGF0dXNCYXI6IEZDPFByb3BzPiA9ICh7IHNpZGVCYXIgfSkgPT4ge1xuICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3dvcmQsIG9uQ2hhbmdlV29yZCwgc2V0V29yZF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICBjb25zdCBvbkNsaWNrQmFyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE1lbnUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY5KSB7XG4gICAgICAgIHNldE1lbnUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihgcmVzaXplYCwgd2luZG93UmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihgcmVzaXplYCwgd2luZG93UmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIikgIT09IG51bGwpO1xuXG4gIGNvbnN0IG9uTG9nb3V0ID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJqd3RcIik7XG4gICAgc2V0SXNMb2dpbihmYWxzZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCYXJXcmFwcGVyIHNpZGVCYXI9e3NpZGVCYXJ9PlxuICAgICAgPEJhcj5cbiAgICAgICAgPFN1YkJhcj5cbiAgICAgICAgICA8U3ViTWVudT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9zZWxscGFnZS9zZWxscmVnaXN0ZXJcIj7tjJDrp6Qg7Y6Y7J207KeAPC9MaW5rPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL215cGFnZS9saWtlXCI+7J6l67CU6rWs64uIPC9MaW5rPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL215cGFnZS9idXlpbmdcIj7rp4jsnbQg7Y6Y7J207KeAPC9MaW5rPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHshaXNMb2dpbiA/IChcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPuuhnOq3uOyduDwvTGluaz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uTG9nb3V0fT7roZzqt7jslYTsm4M8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDwvU3ViQmFyPlxuICAgICAgICA8TWFpbkJhcj5cbiAgICAgICAgICA8TmFtZT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+V0FZQzwvYT5cbiAgICAgICAgICA8L05hbWU+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKuuqqOuRkCDsmYTshLHrkJjrqbQg7ZWY64KYIOyngOyasOuptOuQqCDqtazrp6TtjpjsnbTsp4AqL31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlblwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9Qcm9kdWN0UGFnZVwiPlNob3A8L0xpbms+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VXb3JkfSAvPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvc2VhcmNoaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgIHdvcmQ6IHdvcmQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImljb25cIn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFNYWduaWZ5aW5nR2xhc3N9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhQmFyc1wiIG9uQ2xpY2s9e29uQ2xpY2tCYXJ9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9NYWluQmFyPlxuICAgICAgPC9CYXI+XG4gICAgICB7bWVudSAmJiAoXG4gICAgICAgIDxNZW51IHNob3c9e21lbnV9IG9uQ2xvc2VNb2RhbD17b25DbGlja0Jhcn0+XG4gICAgICAgICAgezxNZW51TGlzdCBvbkNsb3NlTW9kYWw9e29uQ2xpY2tCYXJ9IC8+fVxuICAgICAgICA8L01lbnU+XG4gICAgICApfVxuICAgIDwvQmFyV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1c0JhcjtcbiIsImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCBVSUV2ZW50LCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBSZXR1cm5UeXBlczxUID0gQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4+ID0gW1xuICAgIFQsXG4gICAgKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFQ+Pixcbl07XG5cbmNvbnN0IHVzZUlucHV0ID0gPFQgPSBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pj4oaW5pdGlhbFZhbHVlOiBUKTogUmV0dXJuVHlwZXM8VD4gPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUgYXMgdW5rbm93biBhcyBUKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgd2lkdGg6IDM1dnc7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzB2aDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG5cbiAgbWFyZ2luOiAyNnZoIGF1dG87XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmID4gZm9ybSA+IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuXG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwIGF1dG87XG5gO1xuXG5leHBvcnQgY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZm9udC1zaXplOiAxLjJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGUxZTE7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogMnJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuYDtcbiIsImltcG9ydCBSZWFjdCwge1xuICBDaGFuZ2VFdmVudCxcbiAgRGlzcGF0Y2gsXG4gIEZDLFxuICBGb3JtRXZlbnQsXG4gIFNldFN0YXRlQWN0aW9uLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBEaXYsXG4gIEZvcm0sXG4gIEhlYWRlcixcbiAgSW5wdXQsXG4gIFdyYXBwZXIsXG59IGZyb20gXCJAY29tcG9uZW50cy9DaGVja0lkTW9kYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBDb3JyZWN0LCBFcnJvciB9IGZyb20gXCJAcGFnZXMvU2lnblVwL3N0eWxlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpZDogc3RyaW5nO1xuICBvbkNoYW5nZUlkOiAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG4gIG9uQ2xvc2VDaGVja0lkTW9kYWw6ICgpID0+IHZvaWQ7XG4gIHNldElkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgc2V0Q2hlY2tJZDogKGZyYWc6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IENoZWNrSWRNb2RhbDogRkM8UHJvcHM+ID0gKHtcbiAgaWQsXG4gIG9uQ2hhbmdlSWQsXG4gIG9uQ2xvc2VDaGVja0lkTW9kYWwsXG4gIHNldElkLFxuICBzZXRDaGVja0lkLFxufSkgPT4ge1xuICBjb25zdCBbZmFpbFVzZUlELCBzZXRGYWlsVXNlSWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xpY2tDaGVjaywgc2V0Q2xpY2tDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXRJZCA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIWlkICYmICFpZC50cmltKCkpIHJldHVybjtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXG4gICAgICAgICAgXCJodHRwczovL3dheWNhYnZhdi5zaG9wL3ZlcmlmaWNhdGlvbi9sb2dpbi1pZFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvZ2luSWQ6IGlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldEZhaWxVc2VJZCh0cnVlKTtcbiAgICAgICAgICBzZXRJZChpZCk7XG4gICAgICAgICAgc2V0Q2hlY2tJZCh0cnVlKTtcblxuICAgICAgICAgIGlmIChpZC5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgICBzZXRGYWlsVXNlSWQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0Q2hlY2tJZChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgc2V0RmFpbFVzZUlkKGZhbHNlKTtcbiAgICAgICAgICBzZXRDaGVja0lkKGZhbHNlKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHNldENsaWNrQ2hlY2sodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgW2lkLCBzZXRJZF1cbiAgKTtcblxuICBjb25zdCBzdG9wUHJvcGFnYXRpb24gPSB1c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuU3ludGhldGljRXZlbnQ8RXZlbnRUYXJnZXQ+KSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIG9uQ2xpY2s9e3N0b3BQcm9wYWdhdGlvbn0+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRJZH0+XG4gICAgICAgIDxEaXY+XG4gICAgICAgICAgPEhlYWRlcj7slYTsnbTrlJQg7KSR67O1IOqygOyCrDwvSGVhZGVyPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPuqygOyCrDwvQnV0dG9uPlxuICAgICAgICA8L0Rpdj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiaWRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfVxuICAgICAgICAgIG5hbWU9XCJpZFwiXG4gICAgICAgICAgdmFsdWU9e2lkfVxuICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlQ2hlY2tJZE1vZGFsfT5YPC9idXR0b24+XG4gICAgICAgIHtjbGlja0NoZWNrICYmICFmYWlsVXNlSUQgJiYgaWQubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPEVycm9yPuyVhOydtOuUlOulvCDsgqzsmqntlZjsi6Qg7IiYIOyXhuyKteuLiOuLpC48L0Vycm9yPlxuICAgICAgICApfVxuICAgICAgICB7Y2xpY2tDaGVjayAmJiBmYWlsVXNlSUQgJiYgKFxuICAgICAgICAgIDxDb3JyZWN0PuyVhOydtOuUlCDsgqzsmqnsnbQg6rCA64ql7ZWp64uI64ukLjwvQ29ycmVjdD5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybT5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja0lkTW9kYWw7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgd2lkdGg6IDM1dnc7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzB2aDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG5cbiAgbWFyZ2luOiA1MHZoIGF1dG87XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmID4gZm9ybSA+IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuXG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5gOyIsImltcG9ydCBSZWFjdCwge1xuICBDaGFuZ2VFdmVudCxcbiAgRGlzcGF0Y2gsXG4gIEZDLFxuICBGb3JtRXZlbnQsXG4gIFNldFN0YXRlQWN0aW9uLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBEaXYsXG4gIEZvcm0sXG4gIEhlYWRlcixcbiAgSW5wdXQsXG59IGZyb20gXCJAY29tcG9uZW50cy9DaGVja0lkTW9kYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBDb3JyZWN0LCBFcnJvciB9IGZyb20gXCJAcGFnZXMvU2lnblVwL3N0eWxlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCJAY29tcG9uZW50cy9DaGVja05pY2tuYW1lTW9kYWwvc3R5bGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5pY2tuYW1lOiBzdHJpbmc7XG4gIG9uQ2hhbmdlTmlja25hbWU6IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbiAgb25DbG9zZUNoZWNrSWRNb2RhbDogKCkgPT4gdm9pZDtcbiAgc2V0Tmlja25hbWU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xuICBzZXRDaGVja05pY2tuYW1lOiAoZnJhZzogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2hlY2tOaWNrbmFtZU1vZGFsOiBGQzxQcm9wcz4gPSAoe1xuICBuaWNrbmFtZSxcbiAgb25DaGFuZ2VOaWNrbmFtZSxcbiAgb25DbG9zZUNoZWNrSWRNb2RhbCxcbiAgc2V0Tmlja25hbWUsXG4gIHNldENoZWNrTmlja25hbWUsXG59KSA9PiB7XG4gIGNvbnN0IFtmYWlsVXNlTmlja25hbWUsIHNldEZhaWxVc2VOaWNrbmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjbGlja0NoZWNrLCBzZXRDbGlja0NoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdE5pY2tuYW1lID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghbmlja25hbWUgJiYgIW5pY2tuYW1lLnRyaW0oKSkgcmV0dXJuO1xuXG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcbiAgICAgICAgICBcImh0dHBzOi8vd2F5Y2FidmF2LnNob3AvdmVyaWZpY2F0aW9uL25pY2stbmFtZVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5pY2tOYW1lOiBuaWNrbmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cbiAgICAgICAgKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRGYWlsVXNlTmlja25hbWUodHJ1ZSk7XG4gICAgICAgICAgc2V0Tmlja25hbWUobmlja25hbWUpO1xuICAgICAgICAgIHNldENoZWNrTmlja25hbWUodHJ1ZSk7XG5cbiAgICAgICAgICBpZiAobmlja25hbWUubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgc2V0RmFpbFVzZU5pY2tuYW1lKGZhbHNlKTtcbiAgICAgICAgICAgIHNldENoZWNrTmlja25hbWUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHNldEZhaWxVc2VOaWNrbmFtZShmYWxzZSk7XG4gICAgICAgICAgc2V0Q2hlY2tOaWNrbmFtZShmYWxzZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgc2V0Q2xpY2tDaGVjayh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBbbmlja25hbWUsIHNldE5pY2tuYW1lXVxuICApO1xuXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgb25DbGljaz17c3RvcFByb3BhZ2F0aW9ufT5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdE5pY2tuYW1lfT5cbiAgICAgICAgPERpdj5cbiAgICAgICAgICA8SGVhZGVyPuuLieuEpOyehCDspJHrs7Ug6rKA7IKsPC9IZWFkZXI+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+6rKA7IKsPC9CdXR0b24+XG4gICAgICAgIDwvRGl2PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJuaWNrbmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XG4gICAgICAgICAgbmFtZT1cIm5pY2tuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17bmlja25hbWV9XG4gICAgICAgID48L0lucHV0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2VDaGVja0lkTW9kYWx9Plg8L2J1dHRvbj5cbiAgICAgICAge2NsaWNrQ2hlY2sgJiYgIWZhaWxVc2VOaWNrbmFtZSAmJiBuaWNrbmFtZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8RXJyb3I+64uJ64Sk7J6E7J2EIOyCrOyaqe2VmOyLpCDsiJgg7JeG7Iq164uI64ukLjwvRXJyb3I+XG4gICAgICAgICl9XG4gICAgICAgIHtjbGlja0NoZWNrICYmIGZhaWxVc2VOaWNrbmFtZSAmJiAoXG4gICAgICAgICAgPENvcnJlY3Q+64uJ64Sk7J6EIOyCrOyaqeydtCDqsIDriqXtlanri4jri6QuPC9Db3JyZWN0PlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrTmlja25hbWVNb2RhbDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgSW5wdXRLZXkgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogLTFyZW07XG5cbiAgJiBzcGFuIHtcbiAgICBjb2xvcjogIzY0OTVlYztcbiAgfVxuXG4gICYgaW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIHdpZHRoOiA2dnc7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7XG4gIENoYW5nZUV2ZW50LFxuICBEaXNwYXRjaCxcbiAgRkMsXG4gIEZvcm1FdmVudCxcbiAgU2V0U3RhdGVBY3Rpb24sXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIERpdixcbiAgRm9ybSxcbiAgSGVhZGVyLFxuICBJbnB1dCxcbn0gZnJvbSBcIkBjb21wb25lbnRzL0NoZWNrSWRNb2RhbC9zdHlsZXNcIjtcbmltcG9ydCB7IENvcnJlY3QgfSBmcm9tIFwiQHBhZ2VzL1NpZ25VcC9zdHlsZXNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvQ2hlY2tOaWNrbmFtZU1vZGFsL3N0eWxlc1wiO1xuaW1wb3J0IHsgSW5wdXRLZXkgfSBmcm9tIFwiQGNvbXBvbmVudHMvU2VuZFByb3ZlRW1haWwvc3R5bGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIG9uQ2hhbmdlRW1haWw6IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbiAgb25DbG9zZUNoZWNrRW1haWxNb2RhbDogKCkgPT4gdm9pZDtcbiAgc2V0Q2hlY2tFbWFpbDogKGZyYWc6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGF1dGhLZXk6IHN0cmluZztcbiAgb25DaGFuZ2VBdXRoS2V5OiAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNlbmRQcm92ZUVtYWlsOiBGQzxQcm9wcz4gPSAoe1xuICBlbWFpbCxcbiAgb25DaGFuZ2VFbWFpbCxcbiAgb25DbG9zZUNoZWNrRW1haWxNb2RhbCxcbiAgc2V0Q2hlY2tFbWFpbCxcbiAgYXV0aEtleSxcbiAgb25DaGFuZ2VBdXRoS2V5LFxufSkgPT4ge1xuICBjb25zdCBbZmFpbFVzZUVtYWlsLCBzZXRGYWlsVXNlRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvdmVFYW1pbCwgc2V0UHJvdmVFYW1pbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXRFbWFpbCA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIWVtYWlsICYmICFlbWFpbC50cmltKCkpIHJldHVybjtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXG4gICAgICAgICAgXCJodHRwczovL3dheWNhYnZhdi5zaG9wL3ZlcmlmaWNhdGlvbi9lbWFpbFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlY2VpdmVFbWFpbDogZW1haWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0RmFpbFVzZUVtYWlsKHRydWUpO1xuICAgICAgICAgIGFsZXJ0KFwi7J2066mU7J28IOuwnOyGoe2WiOyKteuLiOuLpC4gNeu2hCDslYjsl5Ag7J6F66Cl7ZW07KO87IS47JqULlwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBhbGVydChcIuydtOuplOydvCDrsJzshqHsl5Ag7Iuk7Yyo7ZaI7Iq164uI64ukLlwiKTtcbiAgICAgICAgICBzZXRGYWlsVXNlRW1haWwoZmFsc2UpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBbZW1haWxdXG4gICk7XG5cbiAgY29uc3Qgb25TdWJtaXRQcm92ZUVtYWlsID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghYXV0aEtleSAmJiAhYXV0aEtleS50cmltKCkpIHJldHVybjtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXG4gICAgICAgICAgXCJodHRwczovL3dheWNhYnZhdi5zaG9wL3ZlcmlmaWNhdGlvbi9lbWFpbC9hdXRoLWtleVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIGF1dGhLZXk6IGF1dGhLZXksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0UHJvdmVFYW1pbCh0cnVlKTtcbiAgICAgICAgICBzZXRDaGVja0VtYWlsKHRydWUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHNldFByb3ZlRWFtaWwoZmFsc2UpO1xuICAgICAgICAgIHNldENoZWNrRW1haWwoZmFsc2UpO1xuICAgICAgICAgIGFsZXJ0KFwi7J247KadIOuyiO2YuOulvCDri6Tsi5wg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgW2F1dGhLZXldXG4gICk7XG5cbiAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0PikgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBvbkNsaWNrPXtzdG9wUHJvcGFnYXRpb259PlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0RW1haWx9PlxuICAgICAgICA8RGl2PlxuICAgICAgICAgIDxIZWFkZXI+7J2066mU7J28IOyduOymnTwvSGVhZGVyPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPuuztOuCtOq4sDwvQnV0dG9uPlxuICAgICAgICA8L0Rpdj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZUNoZWNrRW1haWxNb2RhbH0+WDwvYnV0dG9uPlxuICAgICAgICB7cHJvdmVFYW1pbCAmJiA8Q29ycmVjdD7snbTrqZTsnbwg7J247Kad7J20IOyZhOujjOuQmOyXiOyKteuLiOuLpC48L0NvcnJlY3Q+fVxuICAgICAgPC9Gb3JtPlxuICAgICAge2ZhaWxVc2VFbWFpbCAmJiAhcHJvdmVFYW1pbCAmJiAoXG4gICAgICAgIDxJbnB1dEtleT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRQcm92ZUVtYWlsfT5cbiAgICAgICAgICAgIDxzcGFuPuyduOymnSDrsojtmLgg7J6F66ClPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2F1dGhLZXl9IG9uQ2hhbmdlPXtvbkNoYW5nZUF1dGhLZXl9IC8+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7qsoDsgqw8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvSW5wdXRLZXk+XG4gICAgICApfVxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbmRQcm92ZUVtYWlsO1xuIiwiaW1wb3J0IFJlYWN0LCB7XG4gIENoYW5nZUV2ZW50LFxuICBGb3JtRXZlbnQsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiQGhvb2tzL3VzZUlucHV0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHtcbiAgRm9ybSxcbiAgRXJyb3IsXG4gIENvcnJlY3QsXG4gIEVycm9yQ2lyY2xlLFxuICBDb3JyZWN0Q2lyY2xlLFxuICBIZWFkZXIsXG4gIElucHV0LFxuICBMYWJlbCxcbiAgU2lnblVwQnRuLFxuICBXcmFwcGVyLFxuICBMaW5rQ29udGFpbmVyLFxuICBCdXR0b24sXG4gIERpdixcbiAgQ2hlY2tTZWxsZXIsXG59IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IFN0YXR1c0JhciBmcm9tIFwiQGNvbXBvbmVudHMvU3RhdHVzQmFyXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiQGNvbXBvbmVudHMvTWVudVwiO1xuaW1wb3J0IENoZWNrSWRNb2RhbCBmcm9tIFwiQGNvbXBvbmVudHMvQ2hlY2tJZE1vZGFsXCI7XG5pbXBvcnQgQ2hlY2tOaWNrbmFtZU1vZGFsIGZyb20gXCJAY29tcG9uZW50cy9DaGVja05pY2tuYW1lTW9kYWxcIjtcbmltcG9ydCBTZW5kUHJvdmVFbWFpbCBmcm9tIFwiQGNvbXBvbmVudHMvU2VuZFByb3ZlRW1haWxcIjtcblxuY29uc3QgU2lnblVwID0gKCkgPT4ge1xuICBjb25zdCBbaWQsIG9uQ2hhbmdlSWQsIHNldElkXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsICwgc2V0UGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZENoZWNrLCAsIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbCwgc2V0RW1haWxdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZSwgc2V0Tmlja25hbWVdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtiaXJ0aERheSwgb25DaGFuZ2VCaXJ0aERheSwgc2V0QmlydGhEYXldID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2F1dGhLZXksIG9uQ2hhbmdlQXV0aEtleSwgc2V0QXV0aEtleV0gPSB1c2VJbnB1dChcIlwiKTtcbiAgY29uc3QgW3NlbGxlciwgc2V0U2VsbGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbc2lnblVwRXJyb3IsIHNldFNpZ25VcEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NpZ25VcFN1Y2Nlc3MsIHNldFNpZ25VcFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvKiogcGFzc3dvcmQgbWlzbWF0Y2ggKi9cbiAgY29uc3QgW21pc21hdGNoRXJyb3IsIHNldE1pc21hdGNoRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWlzbWF0Y2hDb25kaXRpb24sIHNldE1pc21hdGNoQ29uZGl0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbY2hlY2tJZCwgc2V0Q2hlY2tJZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaGVja05pY2tuYW1lLCBzZXRDaGVja05pY2tuYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NoZWNrRW1haWwsIHNldENoZWNrRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtjaGVja0lkTW9kYWwsIHNldENoZWNrSWRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaGVja05pY2tuYW1lTW9kYWwsIHNldENoZWNrTmlja25hbWVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaGVja0VtYWlsTW9kYWwsIHNldENoZWNrRW1haWxNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8g7Jes6riwIOuzgOyImOuhnCDrgpjsnbQg6rOE7IKwXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGhpc1llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5zbGljZSgwLCA0KTtcbiAgICBzZXRBZ2UocGFyc2VJbnQodGhpc1llYXIpIC0gcGFyc2VJbnQoYmlydGhEYXkuc2xpY2UoMCwgNCkpICsgMSk7XG4gIH0sIFtiaXJ0aERheSwgb25DaGFuZ2VCaXJ0aERheSwgc2V0QmlydGhEYXldKTtcblxuICAvLyBwYXNzd29yZCDsobDqsbQg6rKA7IOJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVnZXhwID1cbiAgICAgIC9eKD89LipbQS1aYS16XSkoPz0uKlxcZCkoPz0uKlskQCQhJSojPyZdKVtBLVphLXpcXGQkQCQhJSojPyZdezgsMTV9JC87XG4gICAgaWYgKHBhc3N3b3JkLm1hdGNoKHJlZ2V4cCkpIHNldE1pc21hdGNoQ29uZGl0aW9uKHRydWUpO1xuICAgIGVsc2Ugc2V0TWlzbWF0Y2hDb25kaXRpb24oZmFsc2UpO1xuICB9LCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgc2V0TWlzbWF0Y2hFcnJvcihlLnRhcmdldC52YWx1ZSA9PT0gcGFzc3dvcmRDaGVjayk7XG4gICAgfSxcbiAgICBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRdXG4gICk7XG5cbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZENoZWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldE1pc21hdGNoRXJyb3IoZS50YXJnZXQudmFsdWUgPT09IHBhc3N3b3JkKTtcbiAgICB9LFxuICAgIFtwYXNzd29yZCwgc2V0UGFzc3dvcmRDaGVja11cbiAgKTtcblxuICBjb25zdCBvbkNsb3NlQ2hlY2tJZE1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldENoZWNrSWRNb2RhbCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25DbG9zZUNoZWNrTmlja25hbWVNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDaGVja05pY2tuYW1lTW9kYWwoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uQ2xvc2VDaGVja0VtYWlsTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Q2hlY2tFbWFpbE1vZGFsKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNoYW5nZVNlbGxlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTZWxsZXIoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW3NlbGxlcl0pO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcbiAgfTtcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKFxuICAgICAgICAhY2hlY2tJZCB8fFxuICAgICAgICAhbWlzbWF0Y2hFcnJvciB8fFxuICAgICAgICAhbWlzbWF0Y2hDb25kaXRpb24gfHxcbiAgICAgICAgKCFiaXJ0aERheSAmJiAhYmlydGhEYXkudHJpbSgpKSB8fFxuICAgICAgICAhY2hlY2tFbWFpbCB8fFxuICAgICAgICAhY2hlY2tOaWNrbmFtZVxuICAgICAgKSB7XG4gICAgICAgIGFsZXJ0KFwi7KCE67aAIOyhsOqxtOyXkCDrp57qsowg7J6F66Cl7ZW07KO87IS47JqUIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcbiAgICAgICAgICBzZWxsZXJcbiAgICAgICAgICAgID8gXCJodHRwczovL3dheWNhYnZhdi5zaG9wL21lbWJlcnMvc2VsbGVyc1wiXG4gICAgICAgICAgICA6IFwiaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9tZW1iZXJzL2NvbnN1bWVyc1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5pY2tOYW1lOiBuaWNrbmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIGxvZ2luSWQ6IGlkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgY2hlY2tQYXNzd29yZDogcGFzc3dvcmRDaGVjayxcbiAgICAgICAgICAgIGFnZTogYWdlLFxuICAgICAgICAgICAgYXV0aEtleTogYXV0aEtleSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlLCBoZWFkZXJzIH1cbiAgICAgICAgKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBhbGVydChcIu2ajOybkOqwgOyeheyXkCDshLHqs7XtlZjshajsirXri4jri6QuIOuhnOq3uOyduOydhCDtlbTso7zshLjsmpRcIik7XG4gICAgICAgICAgc2V0U2lnblVwU3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICBzZXRJZChcIlwiKTtcbiAgICAgICAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICAgICAgICBzZXRQYXNzd29yZENoZWNrKFwiXCIpO1xuICAgICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICAgIHNldE5pY2tuYW1lKFwiXCIpO1xuICAgICAgICAgIHNldEJpcnRoRGF5KFwiXCIpO1xuICAgICAgICAgIHNldEFnZSgwKTtcbiAgICAgICAgICBzZXRBdXRoS2V5KFwiXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCLslYTsnbTrlJQsIO2MqOyKpOybjOuTnOulvCDtmZXsnbjtlbTso7zshLjsmpQuXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBbXG4gICAgICBpZCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgcGFzc3dvcmRDaGVjayxcbiAgICAgIGJpcnRoRGF5LFxuICAgICAgYWdlLFxuICAgICAgZW1haWwsXG4gICAgICBuaWNrbmFtZSxcbiAgICAgIGNoZWNrSWQsXG4gICAgICBjaGVja05pY2tuYW1lLFxuICAgICAgbWlzbWF0Y2hFcnJvcixcbiAgICAgIG1pc21hdGNoQ29uZGl0aW9uLFxuICAgICAgc2VsbGVyLFxuICAgICAgYXV0aEtleSxcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFN0YXR1c0JhciAvPlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxIZWFkZXI+7ZqM7JuQ6rCA7J6FPC9IZWFkZXI+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPERpdj5cbiAgICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgICAgPHNwYW4+7JWE7J2065SUKjwvc3Bhbj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwiaWRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJpZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JiIKSBXYXljMTIzLCA27J6QIOydtOyDgVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbG9zZUNoZWNrSWRNb2RhbH0+XG4gICAgICAgICAgICAgIOykkeuztSDssrTtgaxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgIDxzcGFuPuu5hOuwgCDrsojtmLgqPC9zcGFuPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC43cmVtXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsMCwwLDAuNClcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg67mE67CA67KI7Zi464qUIDjsnpAg7J207IOBIOuwjyDsmIHrrLgsIOyIq+yekCwg7Yq57IiYIOusuOyekCAx7J6QIOydtOyDgSDtj6ztlahcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JiIKSDsmIHrrLgsIOyIq+yekCwg7Yq57IiY66y47J6QIOyhsO2VqSA4LTE17J6QXCJcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg9ezh9XG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxNX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyFtaXNtYXRjaENvbmRpdGlvbiAmJiBwYXNzd29yZC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPEVycm9yPlxuICAgICAgICAgICAgICAgIOu5hOuwgOuyiO2YuCDsobDqsbTsl5Ag7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpCFcbiAgICAgICAgICAgICAgICA8RXJyb3JDaXJjbGU+PC9FcnJvckNpcmNsZT5cbiAgICAgICAgICAgICAgPC9FcnJvcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bWlzbWF0Y2hDb25kaXRpb24gJiYgKFxuICAgICAgICAgICAgICA8Q29ycmVjdD5cbiAgICAgICAgICAgICAgICDruYTrsIDrsojtmLgg7KGw6rG07JeQIOydvOy5mO2VqeuLiOuLpCFcbiAgICAgICAgICAgICAgICA8Q29ycmVjdENpcmNsZT48L0NvcnJlY3RDaXJjbGU+XG4gICAgICAgICAgICAgIDwvQ29ycmVjdD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICA8c3Bhbj7ruYTrsIAg67KI7Zi4IOyytO2BrCogPC9zcGFuPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWNoZWNrXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmQtY2hlY2tcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENoZWNrfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsmIgpIOyYgeusuCwg7Iir7J6QLCDtirnsiJjrrLjsnpAg7KGw7ZWpIDgtMTXsnpBcIlxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17OH1cbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE1fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IW1pc21hdGNoRXJyb3IgJiYgcGFzc3dvcmRDaGVjay5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPEVycm9yPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICDruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpCFcbiAgICAgICAgICAgICAgICA8RXJyb3JDaXJjbGU+PC9FcnJvckNpcmNsZT5cbiAgICAgICAgICAgICAgPC9FcnJvcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bWlzbWF0Y2hFcnJvciAmJiBwYXNzd29yZENoZWNrLmxlbmd0aCA+IDcgJiYgKFxuICAgICAgICAgICAgICA8Q29ycmVjdD5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAg67mE67CA67KI7Zi46rCAIOydvOy5mO2VqeuLiOuLpCFcbiAgICAgICAgICAgICAgICA8Q29ycmVjdENpcmNsZT48L0NvcnJlY3RDaXJjbGU+XG4gICAgICAgICAgICAgIDwvQ29ycmVjdD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICA8c3Bhbj7sg53rhYQg7JuU7J28Kjwvc3Bhbj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtiaXJ0aERheX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQmlydGhEYXl9XG4gICAgICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIDxEaXY+XG4gICAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICAgIDxzcGFuPuydtOuplOydvCDso7zshowqPC9zcGFuPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JiIKSB3YXljQGdvb2dsZS5jb21cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xvc2VDaGVja0VtYWlsTW9kYWx9PlxuICAgICAgICAgICAgICDsnbjspp0g67KI7Zi4XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0Rpdj5cblxuICAgICAgICAgIDxEaXY+XG4gICAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICAgIDxzcGFuPuuLieuEpOyehCo8L3NwYW4+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cIm5pY2tuYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmlja25hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VOaWNrbmFtZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyYiCkg64KY67mELCAy7J6QIOydtOyDgVwiXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoPXsyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xvc2VDaGVja05pY2tuYW1lTW9kYWx9PlxuICAgICAgICAgICAgICDspJHrs7Ug7LK07YGsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0Rpdj5cblxuICAgICAgICAgIDxDaGVja1NlbGxlcj5cbiAgICAgICAgICAgIDxzcGFuPirtjJDrp6TsnpDroZwg6rCA7J6F7ZWY7Iuc66Ck66m0IOyytO2BrO2VtOyjvOyEuOyalDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17b25DaGFuZ2VTZWxsZXJ9IC8+XG4gICAgICAgICAgPC9DaGVja1NlbGxlcj5cblxuICAgICAgICAgIHtzaWduVXBFcnJvciAmJiA8RXJyb3I+e3NpZ25VcEVycm9yfTwvRXJyb3I+fVxuICAgICAgICAgIHtzaWduVXBTdWNjZXNzICYmIChcbiAgICAgICAgICAgIDxDb3JyZWN0Pu2ajOybkOqwgOyeheuQmOyXiOyKteuLiOuLpCEg66Gc6re47J247ZW07KO87IS47JqULjwvQ29ycmVjdD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxTaWduVXBCdG4gdHlwZT1cInN1Ym1pdFwiPuqwgOyehe2VmOq4sDwvU2lnblVwQnRuPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDxMaW5rQ29udGFpbmVyPlxuICAgICAgICAgIOydtOuvuCDtmozsm5DsnbTsi6DqsIDsmpQ/ICZuYnNwO1xuICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+66Gc6re47J24IO2VmOufrOqwgOq4sDwvTGluaz5cbiAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICB7XG4gICAgICAgICAgPE1lbnUgc2hvdz17Y2hlY2tJZE1vZGFsfSBvbkNsb3NlTW9kYWw9e29uQ2xvc2VDaGVja0lkTW9kYWx9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICA8Q2hlY2tJZE1vZGFsXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlSWQ9e29uQ2hhbmdlSWR9XG4gICAgICAgICAgICAgICAgb25DbG9zZUNoZWNrSWRNb2RhbD17b25DbG9zZUNoZWNrSWRNb2RhbH1cbiAgICAgICAgICAgICAgICBzZXRJZD17c2V0SWR9XG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tJZD17c2V0Q2hlY2tJZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBzaG93PXtjaGVja05pY2tuYW1lTW9kYWx9XG4gICAgICAgICAgICBvbkNsb3NlTW9kYWw9e29uQ2xvc2VDaGVja05pY2tuYW1lTW9kYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICA8Q2hlY2tOaWNrbmFtZU1vZGFsXG4gICAgICAgICAgICAgICAgbmlja25hbWU9e25pY2tuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlTmlja25hbWU9e29uQ2hhbmdlTmlja25hbWV9XG4gICAgICAgICAgICAgICAgb25DbG9zZUNoZWNrSWRNb2RhbD17b25DbG9zZUNoZWNrTmlja25hbWVNb2RhbH1cbiAgICAgICAgICAgICAgICBzZXROaWNrbmFtZT17c2V0Tmlja25hbWV9XG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tOaWNrbmFtZT17c2V0Q2hlY2tOaWNrbmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIDxNZW51IHNob3c9e2NoZWNrRW1haWxNb2RhbH0gb25DbG9zZU1vZGFsPXtvbkNsb3NlQ2hlY2tFbWFpbE1vZGFsfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgPFNlbmRQcm92ZUVtYWlsXG4gICAgICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRW1haWw9e29uQ2hhbmdlRW1haWx9XG4gICAgICAgICAgICAgICAgb25DbG9zZUNoZWNrRW1haWxNb2RhbD17b25DbG9zZUNoZWNrRW1haWxNb2RhbH1cbiAgICAgICAgICAgICAgICBzZXRDaGVja0VtYWlsPXtzZXRDaGVja0VtYWlsfVxuICAgICAgICAgICAgICAgIGF1dGhLZXk9e2F1dGhLZXl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VBdXRoS2V5PXtvbkNoYW5nZUF1dGhLZXl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICB9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBtYXJnaW4tdG9wOiA2cmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGUxZTE7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA0LjVyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgU3ViSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogNDAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgJiBzcGFuIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgIHdpZHRoOiA3cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG4gIHdpZHRoOiAyNXJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDEwcHggMCAxNHB4O1xuICBtYXJnaW4tdG9wOiAwLjZyZW07XG4gIDpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2lnblVwQnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDI1cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRXJyb3JDaXJjbGUgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogOHB4IDAgMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29ycmVjdCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29ycmVjdENpcmNsZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoQm94ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmIHNwYW4ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcblxuICAgICYgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2MTYwNjE7XG4gIG1hcmdpbjogMCBhdXRvIDhweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICAmIGEge1xuICAgIGNvbG9yOiAjMTI2NGEzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tTZWxsZXIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuXG4gICYgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsiQ3JlYXRlTW9kYWwiLCJzdHlsZWQiLCJNZW51IiwiY2hpbGRyZW4iLCJzaG93Iiwib25DbG9zZU1vZGFsIiwiY2xvc2VCdXR0b24iLCJvbkNsaWNrIiwiZGVmYXVsdFByb3BzIiwiQmFyV3JhcHBlciIsIkJhciIsIlN1YkJhciIsIlN1Yk1lbnUiLCJNYWluQmFyIiwiTmFtZSIsIkNsb3NlQnRuIiwiTGlzdCIsIkJsYW5rIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJ1c2VTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvbkxvZ291dCIsInVzZUNhbGxiYWNrIiwiZSIsInJlbW92ZUl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJ0byIsInNpZGVCYXIiLCJtZW51Iiwic2V0TWVudSIsIndvcmQiLCJvbkNoYW5nZVdvcmQiLCJzZXRXb3JkIiwidXNlSW5wdXQiLCJvbkNsaWNrQmFyIiwicHJldiIsInVzZUVmZmVjdCIsIndpbmRvd1Jlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhyZWYiLCJjbGFzc05hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInBhdGhuYW1lIiwic3RhdGUiLCJpY29uIiwiZmFNYWduaWZ5aW5nR2xhc3MiLCJmYUJhcnMiLCJpbml0aWFsVmFsdWUiLCJzZXRWYWx1ZSIsInRhcmdldCIsIldyYXBwZXIiLCJGb3JtIiwiRGl2IiwiSGVhZGVyIiwiQnV0dG9uIiwiSW5wdXQiLCJpZCIsIm9uQ2hhbmdlSWQiLCJvbkNsb3NlQ2hlY2tJZE1vZGFsIiwic2V0SWQiLCJzZXRDaGVja0lkIiwiZmFpbFVzZUlEIiwic2V0RmFpbFVzZUlkIiwiY2xpY2tDaGVjayIsInNldENsaWNrQ2hlY2siLCJvblN1Ym1pdElkIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiYXhpb3MiLCJsb2dpbklkIiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwibGVuZ3RoIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmaW5hbGx5Iiwib25TdWJtaXQiLCJuYW1lIiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwic2V0Tmlja25hbWUiLCJzZXRDaGVja05pY2tuYW1lIiwiZmFpbFVzZU5pY2tuYW1lIiwic2V0RmFpbFVzZU5pY2tuYW1lIiwib25TdWJtaXROaWNrbmFtZSIsIm5pY2tOYW1lIiwiSW5wdXRLZXkiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJvbkNsb3NlQ2hlY2tFbWFpbE1vZGFsIiwic2V0Q2hlY2tFbWFpbCIsImF1dGhLZXkiLCJvbkNoYW5nZUF1dGhLZXkiLCJmYWlsVXNlRW1haWwiLCJzZXRGYWlsVXNlRW1haWwiLCJwcm92ZUVhbWlsIiwic2V0UHJvdmVFYW1pbCIsIm9uU3VibWl0RW1haWwiLCJyZWNlaXZlRW1haWwiLCJhbGVydCIsIm9uU3VibWl0UHJvdmVFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInNldEVtYWlsIiwiYmlydGhEYXkiLCJvbkNoYW5nZUJpcnRoRGF5Iiwic2V0QmlydGhEYXkiLCJhZ2UiLCJzZXRBZ2UiLCJzZXRBdXRoS2V5Iiwic2VsbGVyIiwic2V0U2VsbGVyIiwic2lnblVwRXJyb3IiLCJzZXRTaWduVXBFcnJvciIsInNpZ25VcFN1Y2Nlc3MiLCJzZXRTaWduVXBTdWNjZXNzIiwibWlzbWF0Y2hFcnJvciIsInNldE1pc21hdGNoRXJyb3IiLCJtaXNtYXRjaENvbmRpdGlvbiIsInNldE1pc21hdGNoQ29uZGl0aW9uIiwiY2hlY2tJZCIsImNoZWNrTmlja25hbWUiLCJjaGVja0VtYWlsIiwiY2hlY2tJZE1vZGFsIiwic2V0Q2hlY2tJZE1vZGFsIiwiY2hlY2tOaWNrbmFtZU1vZGFsIiwic2V0Q2hlY2tOaWNrbmFtZU1vZGFsIiwiY2hlY2tFbWFpbE1vZGFsIiwic2V0Q2hlY2tFbWFpbE1vZGFsIiwidGhpc1llYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsInNsaWNlIiwicGFyc2VJbnQiLCJtYXRjaCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJvbkNsb3NlQ2hlY2tOaWNrbmFtZU1vZGFsIiwib25DaGFuZ2VTZWxsZXIiLCJoZWFkZXJzIiwiY2hlY2tQYXNzd29yZCIsIlN0YXR1c0JhciIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIiwibWFyZ2luVG9wIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiU3ViSGVhZGVyIiwiTGFiZWwiLCJTaWduVXBCdG4iLCJFcnJvckNpcmNsZSIsIkVycm9yIiwiQ29ycmVjdCIsIkNvcnJlY3RDaXJjbGUiLCJTZWFyY2hCb3giLCJMaW5rQ29udGFpbmVyIiwiQ2hlY2tTZWxsZXIiXSwic291cmNlUm9vdCI6IiJ9