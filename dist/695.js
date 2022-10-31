"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[695],{11921:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const o=n(97083).Z.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1000;
`,l=({children:e,show:t,onCloseModal:n,closeButton:l})=>t?r.createElement("div",null,r.createElement(o,{onClick:n},r.createElement("div",null,e))):null;l.defaultProps={closeButton:!0};const a=l},66985:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(67294),o=n(97083);const l=o.Z.div`
  margin-bottom: 9rem;

  @media screen and (max-width: 769px) {
    margin-bottom: 0;
`,a=o.Z.div`
  background-color: white;
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,i=o.Z.div`
  padding: 0.5rem 3rem;
  //border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & span a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`,d=o.Z.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    margin-left: 1rem;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`,c=o.Z.div`
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
`,s=o.Z.div`
  font-size: 2rem;
  & a {
    text-decoration: none;
    color: inherit;
  }
`;var m=n(17625),p=n(51436),u=n(11921);const g=o.Z.button`
  border: none;
  background-color: inherit;

  font-size: 35px;

  position: absolute;
  right: 10px;
  top: 10px;

  cursor: pointer;
`,h=o.Z.div`
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
`,b=o.Z.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 40vw;
  height: 100%;
`;var x=n(73727);const f=({onCloseModal:e})=>{const[t,n]=(0,r.useState)(null!==localStorage.getItem("jwt")),o=(0,r.useCallback)((e=>{localStorage.removeItem("jwt"),n(!1)}),[]),l=(0,r.useCallback)((e=>{e.stopPropagation()}),[]);return r.createElement("div",{onClick:l},r.createElement(b,{onClick:e}),r.createElement(h,null,r.createElement(g,{onClick:e},"X"),r.createElement("div",null,r.createElement("div",null,r.createElement(x.rU,{to:"/ProductPage"},"shop")),r.createElement("div",null,r.createElement(x.rU,{to:"/mypage/like"},"장바구니")),r.createElement("div",null,r.createElement(x.rU,{to:"/mypage/buying"},"주문내역")),r.createElement("div",null,r.createElement(x.rU,{to:"/sellpage/selllist"},"등록 상품 조회")),r.createElement("div",null,r.createElement(x.rU,{to:"/sellpage/sellorderlist"},"주문 내역 조회")),r.createElement("div",null,t?r.createElement("div",{onClick:o},"로그아웃"):r.createElement(x.rU,{to:"/login"},"로그인")))))};var E=n(38678);const v=({sideBar:e})=>{const[t,n]=(0,r.useState)(!1),[o,g,h]=(0,E.Z)(""),b=(0,r.useCallback)((()=>{n((e=>!e))}),[]);(0,r.useEffect)((()=>{const e=()=>{window.innerWidth>769&&n(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const[v,w]=(0,r.useState)(null!==localStorage.getItem("jwt")),Z=(0,r.useCallback)((e=>{localStorage.removeItem("jwt"),w(!1)}),[]);return r.createElement(l,{sideBar:e},r.createElement(a,null,r.createElement(i,null,r.createElement(d,null,r.createElement("span",null,r.createElement(x.rU,{to:"/sellpage/sellregister"},"판매 페이지")),r.createElement("span",null,r.createElement(x.rU,{to:"/mypage/like"},"장바구니")),r.createElement("span",null,r.createElement(x.rU,{to:"/mypage/buying"},"마이 페이지")),r.createElement("span",null,v?r.createElement("div",{onClick:Z},"로그아웃"):r.createElement(x.rU,{to:"/login"},"로그인")))),r.createElement(c,null,r.createElement(s,null,r.createElement("a",{href:"/"},"WAYC")),r.createElement("div",null,r.createElement("span",{className:"hidden"},r.createElement(x.rU,{to:"/ProductPage"},"Shop")),r.createElement("span",null,r.createElement("label",null,r.createElement("input",{type:"text",value:o,onChange:g}),r.createElement(x.rU,{to:{pathname:"/searchitem",state:{word:o}}},r.createElement(m.G,{className:"icon",icon:p.Y$T})))),r.createElement("span",{className:"faBars",onClick:b},r.createElement(m.G,{icon:p.xiG}))))),t&&r.createElement(u.Z,{show:t,onCloseModal:b},r.createElement(f,{onCloseModal:b})))}},38678:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=e=>{const[t,n]=(0,r.useState)(e);return[t,(0,r.useCallback)((e=>{n(e.target.value)}),[]),n]}},29695:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),o=n(73046),l=n(66985),a=n(38678),i=n(73727),d=n(9669),c=n.n(d),s=n(5977);const m=()=>{const[e,t,n]=(0,a.Z)(""),[d,m,p]=(0,a.Z)(""),[u,g]=(0,r.useState)(!1),h={"X-Requested-With":"XMLHttpRequest"},[b,x]=(0,r.useState)(null!==localStorage.getItem("jwt")),f=(0,r.useCallback)((t=>{t.preventDefault(),g(!1),c().post("https://waycabvav.shop/login",{loginId:e,password:d},{withCredentials:!0,headers:h}).then((e=>{alert("성공"),localStorage.setItem("jwt",e.data.jwt),x(!0)})).catch((e=>{alert("에러"),g(401===e.response?.data?.statuseCode)}))}),[e,d]);return b?r.createElement(s.l_,{to:"/main"}):r.createElement(o.im,null,r.createElement(l.Z,null),r.createElement(o.h4,null,"WAYC"),r.createElement(o.bU,null,"Why Are You Coding?"),r.createElement(o.l0,{onSubmit:f},r.createElement(o.__,null,r.createElement("span",null,"아이디"),r.createElement("div",null,r.createElement(o.II,{type:"text",id:"id",name:"id",value:e,onChange:t,placeholder:"예) Wayc"}))),r.createElement(o.__,null,r.createElement("span",null,"비밀 번호*"),r.createElement("div",null,r.createElement(o.II,{type:"password",id:"password",name:"password",value:d,onChange:m,placeholder:"예) 영문, 숫자, 특수문자 조합 8-16자"})),u&&r.createElement(o.jj,null,"이메일과 비밀번호 조합이 일치하지 않습니다.")),r.createElement(o.BM,{type:"submit"},"Log In")," ",r.createElement(o.Rj,null,r.createElement("span",null,r.createElement(i.rU,{to:"/signup"},"회원 가입")))))}},73046:(e,t,n)=>{n.d(t,{BM:()=>p,Eh:()=>h,II:()=>m,Je:()=>u,Ji:()=>f,MZ:()=>b,Rj:()=>x,ZC:()=>a,__:()=>s,bU:()=>d,h4:()=>l,im:()=>o,jj:()=>g,l0:()=>c,r_:()=>E,zx:()=>i});var r=n(97083);const o=r.Z.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 6rem;
`,l=r.Z.header`
  font-weight: bolder;
  font-size: 3em;
  letter-spacing: -0.75px;
  margin-bottom: 2rem;
`,a=r.Z.div`
  position: relative;
`,i=r.Z.button`
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
`,d=r.Z.div`
  font-weight: bolder;
  font-size: 20px;
  letter-spacing: -0.75px;
  margin-bottom: 30px;
`,c=r.Z.form`
  margin: 0 auto;
  width: 100vw;
  max-width: 400px;
`,s=r.Z.label`
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
`,m=r.Z.input`
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
`,p=r.Z.button`
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
`,u=r.Z.div`
  background-color: red;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
`,g=r.Z.div`
  color: red;
  margin: 8px 0 16px;
  font-weight: bold;
`,h=r.Z.div`
  color: green;
  margin: 10px 0 10px;
  font-weight: bold;
`,b=r.Z.div`
  background-color: green;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
`,x=r.Z.div`
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
`,f=r.Z.p`
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
`,E=r.Z.div`
  color: dodgerblue;
  font-size: 1rem;

  & span {
    margin-right: 0.3rem;
  }
`}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjk1LmpzIiwibWFwcGluZ3MiOiJrSkFFTyxNQUFNQSxFLFNBQWNDLEVBQUFBLEdBQVc7Ozs7Ozs7O0VDUWhDQyxFQUFrQixFQUFHQyxTQUFBQSxFQUFVQyxLQUFBQSxFQUFNQyxhQUFBQSxFQUFjQyxZQUFBQSxLQUNsREYsRUFHSCwyQkFDRSxnQkFBQ0osRUFBRCxDQUFhTyxRQUFTRixHQUNwQiwyQkFBTUYsS0FMTSxLQVdwQkQsRUFBS00sYUFBZSxDQUNsQkYsYUFBYSxHQUdmLFcsMkRDeEJPLE1BQU1HLEVBQWFSLEVBQUFBLEVBQUFBLEdBQTZDOzs7OztFQU8xRFMsRUFBTVQsRUFBQUEsRUFBQUEsR0FBVzs7Ozs7Ozs7RUFVakJVLEVBQVNWLEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7Ozs7OztFQWNwQlcsRUFBVVgsRUFBQUEsRUFBQUEsR0FBVzs7Ozs7Ozs7OztFQVlyQlksRUFBVVosRUFBQUEsRUFBQUEsR0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtRXJCYSxFQUFPYixFQUFBQSxFQUFBQSxHQUFXOzs7Ozs7dUNDOUd4QixNQUFNYyxFQUFXZCxFQUFBQSxFQUFBQSxNQUFjOzs7Ozs7Ozs7OztFQWF6QmUsRUFBT2YsRUFBQUEsRUFBQUEsR0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9DbEJnQixFQUFRaEIsRUFBQUEsRUFBQUEsR0FBVzs7Ozs7aUJDM0NoQyxNQWlEQSxFQWpENEIsRUFBR0ksYUFBQUEsTUFDN0IsTUFBT2EsRUFBU0MsSUFBY0MsRUFBQUEsRUFBQUEsVUFBeUMsT0FBaENDLGFBQWFDLFFBQVEsUUFFdERDLEdBQVdDLEVBQUFBLEVBQUFBLGNBQWFDLElBQzVCSixhQUFhSyxXQUFXLE9BQ3hCUCxHQUFXLEtBQ1YsSUFFR1EsR0FBa0JILEVBQUFBLEVBQUFBLGNBQ3JCQyxJQUNDQSxFQUFFRSxvQkFFSixJQUdGLE9BQ0UsdUJBQUtwQixRQUFTb0IsR0FDWixnQkFBQ1YsRUFBRCxDQUFPVixRQUFTRixJQUNoQixnQkFBQ1csRUFBRCxLQUNFLGdCQUFDRCxFQUFELENBQVVSLFFBQVNGLEdBQW5CLEtBQ0EsMkJBQ0UsMkJBQ0UsZ0JBQUMsS0FBRCxDQUFNdUIsR0FBRyxnQkFBVCxTQUVGLDJCQUNFLGdCQUFDLEtBQUQsQ0FBTUEsR0FBRyxnQkFBVCxTQUVGLDJCQUNFLGdCQUFDLEtBQUQsQ0FBTUEsR0FBRyxrQkFBVCxTQUVGLDJCQUNFLGdCQUFDLEtBQUQsQ0FBTUEsR0FBRyxzQkFBVCxhQUVGLDJCQUNFLGdCQUFDLEtBQUQsQ0FBTUEsR0FBRywyQkFBVCxhQUVGLDJCQUNJVixFQUdBLHVCQUFLWCxRQUFTZ0IsR0FBZCxRQUZBLGdCQUFDLEtBQUQsQ0FBTUssR0FBRyxVQUFULFksZUN2QmQsTUErRkEsRUEvRjZCLEVBQUdDLFFBQUFBLE1BQzlCLE1BQU9DLEVBQU1DLElBQVdYLEVBQUFBLEVBQUFBLFdBQVMsSUFFMUJZLEVBQU1DLEVBQWNDLElBQVdDLEVBQUFBLEVBQUFBLEdBQVMsSUFFekNDLEdBQWFaLEVBQUFBLEVBQUFBLGNBQVksS0FDN0JPLEdBQVNNLElBQVVBLE1BQ2xCLEtBRUhDLEVBQUFBLEVBQUFBLFlBQVUsS0FDUixNQUFNQyxFQUFlLEtBQ2ZDLE9BQU9DLFdBQWEsS0FDdEJWLEdBQVEsSUFNWixPQUZBUyxPQUFPRSxpQkFBa0IsU0FBU0gsR0FFM0IsS0FDTEMsT0FBT0csb0JBQXFCLFNBQVNKLE1BRXRDLElBRUgsTUFBT3JCLEVBQVNDLElBQWNDLEVBQUFBLEVBQUFBLFVBQXlDLE9BQWhDQyxhQUFhQyxRQUFRLFFBRXREQyxHQUFXQyxFQUFBQSxFQUFBQSxjQUFhQyxJQUM1QkosYUFBYUssV0FBVyxPQUN4QlAsR0FBVyxLQUNWLElBRUgsT0FDRSxnQkFBQ1YsRUFBRCxDQUFZb0IsUUFBU0EsR0FDbkIsZ0JBQUNuQixFQUFELEtBQ0UsZ0JBQUNDLEVBQUQsS0FDRSxnQkFBQ0MsRUFBRCxLQUNFLDRCQUNFLGdCQUFDLEtBQUQsQ0FBTWdCLEdBQUcsMEJBQVQsV0FFRiw0QkFDRSxnQkFBQyxLQUFELENBQU1BLEdBQUcsZ0JBQVQsU0FFRiw0QkFDRSxnQkFBQyxLQUFELENBQU1BLEdBQUcsa0JBQVQsV0FFRiw0QkFDSVYsRUFHQSx1QkFBS1gsUUFBU2dCLEdBQWQsUUFGQSxnQkFBQyxLQUFELENBQU1LLEdBQUcsVUFBVCxVQU9SLGdCQUFDZixFQUFELEtBQ0UsZ0JBQUNDLEVBQUQsS0FDRSxxQkFBRzhCLEtBQUssS0FBUixTQUVGLDJCQUVFLHdCQUFNQyxVQUFVLFVBQ2QsZ0JBQUMsS0FBRCxDQUFNakIsR0FBRyxnQkFBVCxTQUVGLDRCQUNFLDZCQUNFLHlCQUFPa0IsS0FBSyxPQUFPQyxNQUFPZixFQUFNZ0IsU0FBVWYsSUFDMUMsZ0JBQUMsS0FBRCxDQUNFTCxHQUFJLENBQ0ZxQixTQUFVLGNBQ1ZDLE1BQU8sQ0FDTGxCLEtBQU1BLEtBSVYsZ0JBQUMsSUFBRCxDQUNFYSxVQUFXLE9BQ1hNLEtBQU1DLEVBQUFBLFNBS2Qsd0JBQU1QLFVBQVUsU0FBU3RDLFFBQVM2QixHQUNoQyxnQkFBQyxJQUFELENBQWlCZSxLQUFNRSxFQUFBQSxVQUs5QnZCLEdBQ0MsZ0JBQUM1QixFQUFBLEVBQUQsQ0FBTUUsS0FBTTBCLEVBQU16QixhQUFjK0IsR0FDN0IsZ0JBQUMsRUFBRCxDQUFVL0IsYUFBYytCLFEsZ0RDdkduQyxNQVFBLEVBUnFEa0IsSUFDakQsTUFBT1AsRUFBT1EsSUFBWW5DLEVBQUFBLEVBQUFBLFVBQVNrQyxHQUluQyxNQUFPLENBQUNQLEdBSFF2QixFQUFBQSxFQUFBQSxjQUFhQyxJQUN6QjhCLEVBQVM5QixFQUFFK0IsT0FBT1QsU0FDbkIsSUFDcUJRLEssc0lDSzVCLE1Bd0ZBLEVBeEZjLEtBQ1osTUFBT0UsRUFBSUMsRUFBWUMsSUFBU3hCLEVBQUFBLEVBQUFBLEdBQVMsS0FDbEN5QixFQUFVQyxFQUFrQkMsSUFBZTNCLEVBQUFBLEVBQUFBLEdBQVMsS0FDcEQ0QixFQUFZQyxJQUFpQjVDLEVBQUFBLEVBQUFBLFdBQVMsR0FFdkM2QyxFQUFVLENBQ2QsbUJBQW9CLG1CQUdmL0MsRUFBU0MsSUFBY0MsRUFBQUEsRUFBQUEsVUFBeUMsT0FBaENDLGFBQWFDLFFBQVEsUUFFdEQ0QyxHQUFXMUMsRUFBQUEsRUFBQUEsY0FDZEMsSUFDQ0EsRUFBRTBDLGlCQUNGSCxHQUFjLEdBRWRJLElBQUFBLEtBRUksK0JBQ0EsQ0FDRUMsUUFBU1osRUFDVEcsU0FBVUEsR0FFWixDQUFFVSxpQkFBaUIsRUFBTUwsUUFBQUEsSUFFMUJNLE1BQU1DLElBQ0xDLE1BQU0sTUFDTnBELGFBQWFxRCxRQUFRLE1BQU9GLEVBQVNHLEtBQUtDLEtBQzFDekQsR0FBVyxNQUVaMEQsT0FBT0MsSUFDTkwsTUFBTSxNQUNOVCxFQUFvRCxNQUF0Q2MsRUFBTU4sVUFBVUcsTUFBTUksa0JBRzFDLENBQUN0QixFQUFJRyxJQUdQLE9BQUkxQyxFQUNLLGdCQUFDLEtBQUQsQ0FBVVUsR0FBSSxVQUlyQixnQkFBQyxLQUFELEtBQ0UsZ0JBQUMsSUFBRCxNQUNBLGdCQUFDLEtBQUQsYUFDQSxnQkFBQyxLQUFELDRCQUNBLGdCQUFDLEtBQUQsQ0FBTXNDLFNBQVVBLEdBQ2QsZ0JBQUMsS0FBRCxLQUNFLG1DQUNBLDJCQUNFLGdCQUFDLEtBQUQsQ0FDRXBCLEtBQUssT0FDTFcsR0FBRyxLQUNIdUIsS0FBSyxLQUNMakMsTUFBT1UsRUFDUFQsU0FBVVUsRUFDVnVCLFlBQVksY0FJbEIsZ0JBQUMsS0FBRCxLQUNFLHNDQUNBLDJCQUNFLGdCQUFDLEtBQUQsQ0FDRW5DLEtBQUssV0FDTFcsR0FBRyxXQUNIdUIsS0FBSyxXQUNMakMsTUFBT2EsRUFDUFosU0FBVWEsRUFDVm9CLFlBQVksOEJBR2ZsQixHQUNDLGdCQUFDLEtBQUQsa0NBR0osZ0JBQUMsS0FBRCxDQUFXakIsS0FBSyxVQUFoQixVQUE0QyxJQUM1QyxnQkFBQyxLQUFELEtBQ0UsNEJBQ0UsZ0JBQUMsS0FBRCxDQUFNbEIsR0FBRyxXQUFULGUsd0xDaEdMLE1BQU1zRCxFQUFVakYsRUFBQUEsRUFBQUEsR0FBVzs7Ozs7OztFQVNyQmtGLEVBQVNsRixFQUFBQSxFQUFBQSxNQUFjOzs7OztFQU92Qm1GLEVBQU1uRixFQUFBQSxFQUFBQSxHQUFXOztFQUlqQm9GLEVBQVNwRixFQUFBQSxFQUFBQSxNQUFjOzs7Ozs7Ozs7Ozs7Ozs7RUFpQnZCcUYsRUFBWXJGLEVBQUFBLEVBQUFBLEdBQVc7Ozs7O0VBT3ZCc0YsRUFBT3RGLEVBQUFBLEVBQUFBLElBQVk7Ozs7RUFNbkJ1RixFQUFRdkYsRUFBQUEsRUFBQUEsS0FBYTs7Ozs7Ozs7Ozs7Ozs7O0VBaUJyQndGLEVBQVF4RixFQUFBQSxFQUFBQSxLQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcUJyQnlGLEVBQVl6RixFQUFBQSxFQUFBQSxNQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQjFCMEYsRUFBYzFGLEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7OztFQVd6QjJGLEVBQVEzRixFQUFBQSxFQUFBQSxHQUFXOzs7O0VBTW5CNEYsRUFBVTVGLEVBQUFBLEVBQUFBLEdBQVc7Ozs7RUFNckI2RixFQUFnQjdGLEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7OztFQVczQjhGLEVBQVk5RixFQUFBQSxFQUFBQSxHQUFXOzs7Ozs7Ozs7Ozs7RUFjdkIrRixFQUFnQi9GLEVBQUFBLEVBQUFBLENBQVM7Ozs7Ozs7Ozs7Ozs7O0VBZ0J6QmdHLEVBQWNoRyxFQUFBQSxFQUFBQSxHQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9NZW51L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9NZW51L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL1N0YXR1c0Jhci9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvTWVudUxpc3Qvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL01lbnVMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL1N0YXR1c0Jhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vaG9va3MvdXNlSW5wdXQudHMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vcGFnZXMvTG9nSW4vaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL3BhZ2VzL1NpZ25VcC9zdHlsZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlTW9kYWwgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcblxuICB6LWluZGV4OiAxMDAwO1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENyZWF0ZU1vZGFsIH0gZnJvbSBcIkBjb21wb25lbnRzL01lbnUvc3R5bGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNob3c6IGJvb2xlYW47XG4gIG9uQ2xvc2VNb2RhbDogKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0PikgPT4gdm9pZDtcbiAgY2xvc2VCdXR0b24/OiBib29sZWFuO1xuICBjaGlsZHJlbjogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+O1xufVxuXG5jb25zdCBNZW51OiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgc2hvdywgb25DbG9zZU1vZGFsLCBjbG9zZUJ1dHRvbiB9KSA9PiB7XG4gIGlmICghc2hvdykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENyZWF0ZU1vZGFsIG9uQ2xpY2s9e29uQ2xvc2VNb2RhbH0+XG4gICAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9DcmVhdGVNb2RhbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICBjbG9zZUJ1dHRvbjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IEJhcldyYXBwZXIgPSBzdHlsZWQuZGl2PHsgc2lkZUJhcjogYm9vbGVhbiB8IHVuZGVmaW5lZCB9PmBcbiAgbWFyZ2luLWJvdHRvbTogOXJlbTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQmFyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgU3ViQmFyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XG4gIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAmIHNwYW4gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3ViTWVudSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1haW5CYXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwLjhyZW0gMnJlbTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAmIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJiBzcGFuIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJiBzcGFuID4gbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICYgPiBpbnB1dCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgaGVpZ2h0OiAyLjNyZW07XG5cbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cblxuICAgICYgLmljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICB9XG4gIH1cblxuICAmIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgLmZhQmFycyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmIHNwYW4ge1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYW1lID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAycmVtO1xuICAmIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cbiAgZm9udC1zaXplOiAzNXB4O1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG5cbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAmID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmIGxhYmVsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICYgPiBkaXYge1xuICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAmIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJsYW5rID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHdpZHRoOiA0MHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmxhbmssIENsb3NlQnRuLCBMaXN0IH0gZnJvbSBcIkBjb21wb25lbnRzL01lbnVMaXN0L3N0eWxlc1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2xvc2VNb2RhbDogKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0PikgPT4gdm9pZDtcbn1cblxuY29uc3QgTWVudUxpc3Q6IEZDPFByb3BzPiA9ICh7IG9uQ2xvc2VNb2RhbCB9KSA9PiB7XG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpICE9PSBudWxsKTtcblxuICBjb25zdCBvbkxvZ291dCA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiand0XCIpO1xuICAgIHNldElzTG9naW4oZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0PikgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9e3N0b3BQcm9wYWdhdGlvbn0+XG4gICAgICA8Qmxhbmsgb25DbGljaz17b25DbG9zZU1vZGFsfT48L0JsYW5rPlxuICAgICAgPExpc3Q+XG4gICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9Plg8L0Nsb3NlQnRuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9Qcm9kdWN0UGFnZVwiPnNob3A8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL215cGFnZS9saWtlXCI+7J6l67CU6rWs64uIPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9teXBhZ2UvYnV5aW5nXCI+7KO866y464K07JetPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9zZWxscGFnZS9zZWxsbGlzdFwiPuuTseuhnSDsg4Htkogg7KGw7ZqMPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9zZWxscGFnZS9zZWxsb3JkZXJsaXN0XCI+7KO866y4IOuCtOyXrSDsobDtmow8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHshaXNMb2dpbiA/IChcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj7roZzqt7jsnbg8L0xpbms+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uTG9nb3V0fT7roZzqt7jslYTsm4M8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaXN0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCYXIsXG4gIEJhcldyYXBwZXIsXG4gIE1haW5CYXIsXG4gIE5hbWUsXG4gIFN1YkJhcixcbiAgU3ViTWVudSxcbn0gZnJvbSBcIkBjb21wb25lbnRzL1N0YXR1c0Jhci9zdHlsZXNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhTWFnbmlmeWluZ0dsYXNzLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiQGNvbXBvbmVudHMvTWVudVwiO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCJAY29tcG9uZW50cy9NZW51TGlzdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9TZWFyY2hcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiQGhvb2tzL3VzZUlucHV0XCI7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2lkZUJhcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0YXR1c0JhcjogRkM8UHJvcHM+ID0gKHsgc2lkZUJhciB9KSA9PiB7XG4gIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbd29yZCwgb25DaGFuZ2VXb3JkLCBzZXRXb3JkXSA9IHVzZUlucHV0KFwiXCIpO1xuXG4gIGNvbnN0IG9uQ2xpY2tCYXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TWVudSgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB3aW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjkpIHtcbiAgICAgICAgc2V0TWVudShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGByZXNpemVgLCB3aW5kb3dSZXNpemUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGByZXNpemVgLCB3aW5kb3dSZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKSAhPT0gbnVsbCk7XG5cbiAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dFwiKTtcbiAgICBzZXRJc0xvZ2luKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJhcldyYXBwZXIgc2lkZUJhcj17c2lkZUJhcn0+XG4gICAgICA8QmFyPlxuICAgICAgICA8U3ViQmFyPlxuICAgICAgICAgIDxTdWJNZW51PlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NlbGxwYWdlL3NlbGxyZWdpc3RlclwiPu2MkOunpCDtjpjsnbTsp4A8L0xpbms+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvbXlwYWdlL2xpa2VcIj7snqXrsJTqtazri4g8L0xpbms+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvbXlwYWdlL2J1eWluZ1wiPuuniOydtCDtjpjsnbTsp4A8L0xpbms+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgeyFpc0xvZ2luID8gKFxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+66Gc6re47J24PC9MaW5rPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25Mb2dvdXR9PuuhnOq3uOyVhOybgzwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPC9TdWJCYXI+XG4gICAgICAgIDxNYWluQmFyPlxuICAgICAgICAgIDxOYW1lPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5XQVlDPC9hPlxuICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgey8q66qo65GQIOyZhOyEseuQmOuptCDtlZjrgpgg7KeA7Jqw66m065CoIOq1rOunpO2OmOydtOyngCovfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1Byb2R1Y3RQYWdlXCI+U2hvcDwvTGluaz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVdvcmR9IC8+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hpdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgd29yZDogd29yZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiaWNvblwifVxuICAgICAgICAgICAgICAgICAgICBpY29uPXtmYU1hZ25pZnlpbmdHbGFzc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFCYXJzXCIgb25DbGljaz17b25DbGlja0Jhcn0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01haW5CYXI+XG4gICAgICA8L0Jhcj5cbiAgICAgIHttZW51ICYmIChcbiAgICAgICAgPE1lbnUgc2hvdz17bWVudX0gb25DbG9zZU1vZGFsPXtvbkNsaWNrQmFyfT5cbiAgICAgICAgICB7PE1lbnVMaXN0IG9uQ2xvc2VNb2RhbD17b25DbGlja0Jhcn0gLz59XG4gICAgICAgIDwvTWVudT5cbiAgICAgICl9XG4gICAgPC9CYXJXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzQmFyO1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIFVJRXZlbnQsIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIFJldHVyblR5cGVzPFQgPSBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pj4gPSBbXG4gICAgVCxcbiAgICAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQsXG4gICAgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248VD4+LFxuXTtcblxuY29uc3QgdXNlSW5wdXQgPSA8VCA9IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+Pihpbml0aWFsVmFsdWU6IFQpOiBSZXR1cm5UeXBlczxUPiA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSBhcyB1bmtub3duIGFzIFQpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dDtcbiIsImltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRm9ybSxcbiAgSGVhZGVyLFxuICBJbnB1dCxcbiAgTGFiZWwsXG4gIFNlYXJjaEJveCxcbiAgU2lnblVwQnRuLFxuICBTdWJIZWFkZXIsXG4gIFdyYXBwZXIsXG4gIEVycm9yLFxufSBmcm9tIFwiQHBhZ2VzL1NpZ25VcC9zdHlsZXNcIjtcbmltcG9ydCBTdGF0dXNCYXIgZnJvbSBcIkBjb21wb25lbnRzL1N0YXR1c0JhclwiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCJAaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmNvbnN0IExvZ0luID0gKCkgPT4ge1xuICBjb25zdCBbaWQsIG9uQ2hhbmdlSWQsIHNldElkXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbbG9nSW5FcnJvciwgc2V0TG9nSW5FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxuICB9O1xuXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpICE9PSBudWxsKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0TG9nSW5FcnJvcihmYWxzZSk7XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFxuICAgICAgICAgIFwiaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9sb2dpblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvZ2luSWQ6IGlkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUsIGhlYWRlcnMgfVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwi7ISx6rO1XCIpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiand0XCIsIHJlc3BvbnNlLmRhdGEuand0KTtcbiAgICAgICAgICBzZXRJc0xvZ2luKHRydWUpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCLsl5Drn6xcIik7XG4gICAgICAgICAgc2V0TG9nSW5FcnJvcihlcnJvci5yZXNwb25zZT8uZGF0YT8uc3RhdHVzZUNvZGUgPT09IDQwMSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgW2lkLCBwYXNzd29yZF1cbiAgKTtcblxuICBpZiAoaXNMb2dpbikge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89e1wiL21haW5cIn0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFN0YXR1c0JhciAvPlxuICAgICAgPEhlYWRlcj5XQVlDPC9IZWFkZXI+XG4gICAgICA8U3ViSGVhZGVyPldoeSBBcmUgWW91IENvZGluZz88L1N1YkhlYWRlcj5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgIDxMYWJlbD5cbiAgICAgICAgICA8c3Bhbj7slYTsnbTrlJQ8L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwiaWRcIlxuICAgICAgICAgICAgICBuYW1lPVwiaWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyYiCkgV2F5Y1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgPHNwYW4+67mE67CAIOuyiO2YuCo8L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsmIgpIOyYgeusuCwg7Iir7J6QLCDtirnsiJjrrLjsnpAg7KGw7ZWpIDgtMTbsnpBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bG9nSW5FcnJvciAmJiAoXG4gICAgICAgICAgICA8RXJyb3I+7J2066mU7J286rO8IOu5hOuwgOuyiO2YuCDsobDtlansnbQg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L0Vycm9yPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxTaWduVXBCdG4gdHlwZT1cInN1Ym1pdFwiPkxvZyBJbjwvU2lnblVwQnRuPntcIiBcIn1cbiAgICAgICAgPFNlYXJjaEJveD5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ251cFwiPu2ajOybkCDqsIDsnoU8L0xpbms+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L1NlYXJjaEJveD5cbiAgICAgIDwvRm9ybT5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dJbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1hcmdpbi10b3A6IDZyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzZW07XG4gIGxldHRlci1zcGFjaW5nOiAtMC43NXB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZTFlMTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDQuNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdWJIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC43NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDB2dztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAmIHNwYW4ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgd2lkdGg6IDdyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgd2lkdGg6IDI1cmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMTBweCAwIDE0cHg7XG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcbiAgOmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gIH1cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTaWduVXBCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMjVyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvckNpcmNsZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVycm9yID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiA4cHggMCAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb3JyZWN0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IGdyZWVuO1xuICBtYXJnaW46IDEwcHggMCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb3JyZWN0Q2lyY2xlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hCb3ggPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYgc3BhbiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuXG4gICAgJiBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzYxNjA2MTtcbiAgbWFyZ2luOiAwIGF1dG8gOHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gICYgYSB7XG4gICAgY29sb3I6ICMxMjY0YTM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDaGVja1NlbGxlciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xuICBmb250LXNpemU6IDFyZW07XG5cbiAgJiBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJDcmVhdGVNb2RhbCIsInN0eWxlZCIsIk1lbnUiLCJjaGlsZHJlbiIsInNob3ciLCJvbkNsb3NlTW9kYWwiLCJjbG9zZUJ1dHRvbiIsIm9uQ2xpY2siLCJkZWZhdWx0UHJvcHMiLCJCYXJXcmFwcGVyIiwiQmFyIiwiU3ViQmFyIiwiU3ViTWVudSIsIk1haW5CYXIiLCJOYW1lIiwiQ2xvc2VCdG4iLCJMaXN0IiwiQmxhbmsiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInVzZVN0YXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uTG9nb3V0IiwidXNlQ2FsbGJhY2siLCJlIiwicmVtb3ZlSXRlbSIsInN0b3BQcm9wYWdhdGlvbiIsInRvIiwic2lkZUJhciIsIm1lbnUiLCJzZXRNZW51Iiwid29yZCIsIm9uQ2hhbmdlV29yZCIsInNldFdvcmQiLCJ1c2VJbnB1dCIsIm9uQ2xpY2tCYXIiLCJwcmV2IiwidXNlRWZmZWN0Iiwid2luZG93UmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaHJlZiIsImNsYXNzTmFtZSIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGF0aG5hbWUiLCJzdGF0ZSIsImljb24iLCJmYU1hZ25pZnlpbmdHbGFzcyIsImZhQmFycyIsImluaXRpYWxWYWx1ZSIsInNldFZhbHVlIiwidGFyZ2V0IiwiaWQiLCJvbkNoYW5nZUlkIiwic2V0SWQiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvZ0luRXJyb3IiLCJzZXRMb2dJbkVycm9yIiwiaGVhZGVycyIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsImxvZ2luSWQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJhbGVydCIsInNldEl0ZW0iLCJkYXRhIiwiand0IiwiY2F0Y2giLCJlcnJvciIsInN0YXR1c2VDb2RlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiV3JhcHBlciIsIkhlYWRlciIsIkRpdiIsIkJ1dHRvbiIsIlN1YkhlYWRlciIsIkZvcm0iLCJMYWJlbCIsIklucHV0IiwiU2lnblVwQnRuIiwiRXJyb3JDaXJjbGUiLCJFcnJvciIsIkNvcnJlY3QiLCJDb3JyZWN0Q2lyY2xlIiwiU2VhcmNoQm94IiwiTGlua0NvbnRhaW5lciIsIkNoZWNrU2VsbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==