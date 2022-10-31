"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[977],{11921:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);const l=r(97083).Z.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1000;
`,a=({children:e,show:t,onCloseModal:r,closeButton:a})=>t?n.createElement("div",null,n.createElement(l,{onClick:r},n.createElement("div",null,e))):null;a.defaultProps={closeButton:!0};const o=a},66985:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(67294),l=r(97083);const a=l.Z.div`
  margin-bottom: 9rem;

  @media screen and (max-width: 769px) {
    margin-bottom: 0;
`,o=l.Z.div`
  background-color: white;
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,i=l.Z.div`
  padding: 0.5rem 3rem;
  //border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & span a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`,m=l.Z.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    margin-left: 1rem;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`,c=l.Z.div`
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
`,d=l.Z.div`
  font-size: 2rem;
  & a {
    text-decoration: none;
    color: inherit;
  }
`;var s=r(17625),p=r(51436),u=r(11921);const g=l.Z.button`
  border: none;
  background-color: inherit;

  font-size: 35px;

  position: absolute;
  right: 10px;
  top: 10px;

  cursor: pointer;
`,h=l.Z.div`
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
`,b=l.Z.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 40vw;
  height: 100%;
`;var f=r(73727);const x=({onCloseModal:e})=>{const[t,r]=(0,n.useState)(null!==localStorage.getItem("jwt")),l=(0,n.useCallback)((e=>{localStorage.removeItem("jwt"),r(!1)}),[]),a=(0,n.useCallback)((e=>{e.stopPropagation()}),[]);return n.createElement("div",{onClick:a},n.createElement(b,{onClick:e}),n.createElement(h,null,n.createElement(g,{onClick:e},"X"),n.createElement("div",null,n.createElement("div",null,n.createElement(f.rU,{to:"/ProductPage"},"shop")),n.createElement("div",null,n.createElement(f.rU,{to:"/mypage/like"},"장바구니")),n.createElement("div",null,n.createElement(f.rU,{to:"/mypage/buying"},"주문내역")),n.createElement("div",null,n.createElement(f.rU,{to:"/sellpage/selllist"},"등록 상품 조회")),n.createElement("div",null,n.createElement(f.rU,{to:"/sellpage/sellorderlist"},"주문 내역 조회")),n.createElement("div",null,t?n.createElement("div",{onClick:l},"로그아웃"):n.createElement(f.rU,{to:"/login"},"로그인")))))};var E=r(38678);const v=({sideBar:e})=>{const[t,r]=(0,n.useState)(!1),[l,g,h]=(0,E.Z)(""),b=(0,n.useCallback)((()=>{r((e=>!e))}),[]);(0,n.useEffect)((()=>{const e=()=>{window.innerWidth>769&&r(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const[v,w]=(0,n.useState)(null!==localStorage.getItem("jwt")),y=(0,n.useCallback)((e=>{localStorage.removeItem("jwt"),w(!1)}),[]);return n.createElement(a,{sideBar:e},n.createElement(o,null,n.createElement(i,null,n.createElement(m,null,n.createElement("span",null,n.createElement(f.rU,{to:"/sellpage/sellregister"},"판매 페이지")),n.createElement("span",null,n.createElement(f.rU,{to:"/mypage/like"},"장바구니")),n.createElement("span",null,n.createElement(f.rU,{to:"/mypage/buying"},"마이 페이지")),n.createElement("span",null,v?n.createElement("div",{onClick:y},"로그아웃"):n.createElement(f.rU,{to:"/login"},"로그인")))),n.createElement(c,null,n.createElement(d,null,n.createElement("a",{href:"/"},"WAYC")),n.createElement("div",null,n.createElement("span",{className:"hidden"},n.createElement(f.rU,{to:"/ProductPage"},"Shop")),n.createElement("span",null,n.createElement("label",null,n.createElement("input",{type:"text",value:l,onChange:g}),n.createElement(f.rU,{to:{pathname:"/searchitem",state:{word:l}}},n.createElement(s.G,{className:"icon",icon:p.Y$T})))),n.createElement("span",{className:"faBars",onClick:b},n.createElement(s.G,{icon:p.xiG}))))),t&&n.createElement(u.Z,{show:t,onCloseModal:b},n.createElement(x,{onCloseModal:b})))}},38678:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294);const l=e=>{const[t,r]=(0,n.useState)(e);return[t,(0,n.useCallback)((e=>{r(e.target.value)}),[]),r]}},69977:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var n=r(67294),l=r(97083);const a=l.Z.div`
  display: block;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;var o=r(66985);const i=l.Z.section`
  display: grid;
  grid-template-columns: 4fr 0.8fr 5fr;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,m=l.Z.section``,c=l.Z.div`
  border-left: 2px solid #c1b6b6;
  margin-left: 50%;
  height: 70vh;

  @media (max-width: 940px) {
    display: none;
  }
`,d=l.Z.section`
  padding: 1rem 1rem;
  margin-left: 1rem;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 0;
  }
`,s=l.Z.div`
  margin-top: 2rem;
  margin-right: 1rem;

  display: flex;
  justify-content: center;
  align-content: center;

  @media (max-width: 769px) {
    margin-right: 0;
  }

  & img {
    width: 24rem;
    height: 24rem;

    @media (max-width: 769px) {
      width: 20rem;
      height: 20rem;

      margin-top: -2rem;
    }
  }
`,p=l.Z.div`
  & input {
    margin-bottom: 1.5rem;
  }
`,u=l.Z.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;

  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  @media (max-width: 940px) {
    //margin-left: 3rem;
  }
`,g=l.Z.div`
  margin-top: 1rem;

  @media (max-width: 940px) {
    //margin-left: 3rem;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3%;
  }

  & select {
    margin: 0.5rem 0;
    width: 10rem;
    height: 3rem;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
  }

  & select:focus {
    border: 1px solid #b7acac;
    box-sizing: border-box;
    border-radius: 10px;
    outline: 3px solid #f8e4ff;
  }
`,h=l.Z.div`
  margin: 1rem 0;
  color: rgba(0, 0, 0, 0.4);
`,b=l.Z.div`
  margin-top: 1rem;
  font-size: 1.5rem;

  margin-bottom: -2rem;

  @media (max-width: 940px) {
  }
`,f=l.Z.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  padding: 3rem 0;
  margin-right: 7rem;

  @media (max-width: 940px) {
    //margin-left: 1rem;

    margin-right: 0;

    width: 100%;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,x=l.Z.button`
  width: 27rem;
  height: 4rem;
  background-color: red;
  color: white;
  border: transparent;
  border-radius: 20px;
  text-align: center;
  outline: none;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #d63535;
    border: none;
  }
`,E=l.Z.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  padding: 1rem 0;

  & > span {
    font-size: 1.2rem;
    margin: 0 1rem;
  }

  & button {
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    width: 30%;
    padding: 0.5rem 1rem;
    background-color: inherit;
    border-radius: 5px;

    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`,v=l.Z.button`
  width: 18rem;
  height: 4rem;
  background-color: white;
  color: black;
  border-radius: 20px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;var w=r(17625),y=r(51436),k=r(8100),Z=r(83564),C=r(73727),S=r(5977),z=r(9669),U=r.n(z);const j=()=>{const e=(0,S.TH)(),{data:t,error:r}=(0,k.ZP)(`https://waycabvav.shop/items/${e.pathname.split("/")[2]}`,Z.Z),[l,a]=(0,n.useState)(1),z=t?t?.optionGroups?.length:0;let j=[];for(let e=0;e<z;e++){let r=t?.optionGroups[e].optionGroupName;r&&j.push(r)}let G=[];for(let e=0;e<z;e++){G.push([]);let r=t?.optionGroups[e].options.length;if(r&&t)for(let n=0;n<r;n++)G[e].push(t?.optionGroups[e]?.options[n]?.optionName)}let I=[];for(let e=0;e<G.length;e++)I.push(G[e][0]);let N=[];for(let e=0;e<z;e++)N.push(G[e]?.length);const[B,$]=(0,n.useState)({optSelect0:"",optSelect1:"",optSelect2:"",optSelect3:"",optSelect4:""}),{optSelect0:P,optSelect1:O,optSelect2:A,optSelect3:_,optSelect4:M}=B,J=e=>{const{name:t,value:r}=e.target;$({...B,[t]:r})};let L=[];if(t)for(let e=0;e<z;e++){L.push([]);for(let r=0;r<N[e];r++)L[e].push(t.optionGroups[e].options[r].price)}const T=((e,t,r,n,l,a,o,i,m)=>{let c=[],d=Object.keys(e).map((t=>e[t])),s=0;for(let e of d)""===e?c.push(0):c.push(r[s].indexOf(e)),s++;let p=[],u=0;for(let e=0;e<n;e++){let n={cartOptions:[{name:r[e][c[e]],price:l[e][c[e]]}],name:t[e]};p.push(n),u+=l[e][c[e]]}return[{itemId:a,name:i,count:o,imageUrl:m,cartOptionGroups:p},u]})(B,j,G,z,L,t?.itemId,l,t?.itemName,t?.imageUrl),W=T[0],Y=T[1],D=(0,n.useCallback)((e=>{U().post("https://waycabvav.shop/carts/cart-line-items",W,{headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>{alert("장바구니에 담겼습니다")})).catch((e=>{}))}),[W]),H=Number(t?.itemId),X=JSON.stringify(H),q=JSON.stringify(3.5),F=(0,n.useCallback)((e=>{U().post("http://localhost:8000/recommend",{item_id:X,rating:q},{headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`,"Content-type":"application/json"}}).then((e=>{})).catch((e=>{alert("실패")}))}),[t]);return n.createElement("div",null,n.createElement(o.Z,null),n.createElement(i,null,n.createElement(m,null,n.createElement(s,null,n.createElement("img",{src:t?.imageUrl,alt:"상품 사진"}))),n.createElement(c,null),n.createElement(d,null,n.createElement(p,null,n.createElement(u,null,t?.itemName)),n.createElement(g,null,n.createElement("div",null,j.map(((e,t)=>n.createElement("div",{key:t},n.createElement("h4",null,e),n.createElement("select",{name:`optSelect${t}`,onChange:J},[...Array(N[t])].map(((e,r)=>n.createElement("option",{value:G[t][r],key:r},G[t][r],0!==t&&`(+${L[t][r]})`))))))))),n.createElement(h,null,"판매처: ",t?.information),n.createElement(h,null,"카테고리: ",t?.category),n.createElement(b,null,"총 가격: ",Y,"원"),n.createElement(f,null,n.createElement("div",null,n.createElement(E,null,n.createElement("button",{onClick:()=>{l-1>0&&a(l-1)}},"-"),n.createElement("span",null,l),n.createElement("button",{onClick:()=>{a(l+1)}},"+")),n.createElement(v,{onClick:()=>{D(W),F(t)}},n.createElement(w.G,{icon:y.szZ}),"장바구니")),n.createElement(C.rU,{to:{pathname:`/checkout/${e.pathname.split("/")[2]}`,state:{eachData:t,optInfo:W,count:l,total:Y}}},n.createElement(x,{type:"submit"},"구매"))))))},G=()=>n.createElement("div",null,n.createElement(a,null,n.createElement(j,null)))},83564:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(9669),l=r.n(n);const a=e=>l().get(e,{withCredentials:!0,headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>e.data))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UXhFLFFBL0xULEtBQ1h5RSxFQUFTRCxFQUFRLEtBOExMLE1BRUYsZ0JBQUNULEVBQUQsQ0FDRS9ELFFBQVMsS0FDUHdILEVBQVlGLEdBQ1ppQixFQUFTcEUsS0FHWCxnQkFBQyxJQUFELENBQWlCdkIsS0FBTXdHLEVBQUFBLE1BTnpCLFNBaUJGLGdCQUFDLEtBQUQsQ0FDRS9ILEdBQUksQ0FDRnFCLFNBQVcsYUFBWXNCLEVBQVN0QixTQUFTNEIsTUFBTSxLQUFLLEtBQ3BEM0IsTUFBTyxDQUNMd0IsU0FBVUEsRUFDVmtGLFFBQVMvQixFQUNUOUMsTUFBT0EsRUFDUCtDLE1BQU9BLEtBSVgsZ0JBQUMxRCxFQUFELENBQVF0QixLQUFLLFVBQWIsWUU1UGQsRUFUWSxJQUVKLDJCQUNJLGdCQUFDVyxFQUFELEtBQ0ksZ0JBQUMsRUFBRCxTLHdEQ05oQixNQVVBLEVBVmlCb0csR0FDZjdCLElBQUFBLElBQ082QixFQUFLLENBQ1JDLGlCQUFpQixFQUNqQjdCLFFBQVMsQ0FDUEMsY0FBZ0IsVUFBUzdHLGFBQWFDLFFBQVEsWUFHakQ2RyxNQUFNNEIsR0FBYUEsRUFBU3RGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9NZW51L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9NZW51L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL1N0YXR1c0Jhci9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvTWVudUxpc3Qvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL01lbnVMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL1N0YXR1c0Jhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vaG9va3MvdXNlSW5wdXQudHMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vcGFnZXMvU2hvcC9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvQnV5L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9CdXkvaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL3V0aWxzL21ha2VDYXJ0SXRlbXMudHMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vcGFnZXMvU2hvcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vdXRpbHMvZmV0Y2hlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IENyZWF0ZU1vZGFsID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgei1pbmRleDogMTAwMDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDcmVhdGVNb2RhbCB9IGZyb20gXCJAY29tcG9uZW50cy9NZW51L3N0eWxlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaG93OiBib29sZWFuO1xuICBvbkNsb3NlTW9kYWw6IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pID0+IHZvaWQ7XG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHt9Pjtcbn1cblxuY29uc3QgTWVudTogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHNob3csIG9uQ2xvc2VNb2RhbCwgY2xvc2VCdXR0b24gfSkgPT4ge1xuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDcmVhdGVNb2RhbCBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9PlxuICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvQ3JlYXRlTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xvc2VCdXR0b246IHRydWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBCYXJXcmFwcGVyID0gc3R5bGVkLmRpdjx7IHNpZGVCYXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgfT5gXG4gIG1hcmdpbi1ib3R0b206IDlyZW07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJhciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA5OTk7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN1YkJhciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xuICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgJiBzcGFuIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN1Yk1lbnUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNYWluQmFyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMC44cmVtIDJyZW07XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbiAgJiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICYgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYgc3BhbiA+IGxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmID4gaW5wdXQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgIGhlaWdodDogMi4zcmVtO1xuXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG5cbiAgICAmIC5pY29uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuICB9XG5cbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgIC5mYUJhcnMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XG5cbiAgICAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJiBzcGFuIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IENsb3NlQnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuXG4gIGZvbnQtc2l6ZTogMzVweDtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuXG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgJiA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcblxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJiBsYWJlbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmID4gZGl2IHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCbGFuayA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB3aWR0aDogNDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJsYW5rLCBDbG9zZUJ0biwgTGlzdCB9IGZyb20gXCJAY29tcG9uZW50cy9NZW51TGlzdC9zdHlsZXNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNsb3NlTW9kYWw6IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IE1lbnVMaXN0OiBGQzxQcm9wcz4gPSAoeyBvbkNsb3NlTW9kYWwgfSkgPT4ge1xuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKSAhPT0gbnVsbCk7XG5cbiAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dFwiKTtcbiAgICBzZXRJc0xvZ2luKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtzdG9wUHJvcGFnYXRpb259PlxuICAgICAgPEJsYW5rIG9uQ2xpY2s9e29uQ2xvc2VNb2RhbH0+PC9CbGFuaz5cbiAgICAgIDxMaXN0PlxuICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZU1vZGFsfT5YPC9DbG9zZUJ0bj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvUHJvZHVjdFBhZ2VcIj5zaG9wPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9teXBhZ2UvbGlrZVwiPuyepeuwlOq1rOuLiDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvbXlwYWdlL2J1eWluZ1wiPuyjvOusuOuCtOyXrTwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2VsbHBhZ2Uvc2VsbGxpc3RcIj7rk7HroZ0g7IOB7ZKIIOyhsO2ajDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2VsbHBhZ2Uvc2VsbG9yZGVybGlzdFwiPuyjvOusuCDrgrTsl60g7KGw7ZqMPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IWlzTG9naW4gPyAoXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+66Gc6re47J24PC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkxvZ291dH0+66Gc6re47JWE7JuDPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGlzdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQmFyLFxuICBCYXJXcmFwcGVyLFxuICBNYWluQmFyLFxuICBOYW1lLFxuICBTdWJCYXIsXG4gIFN1Yk1lbnUsXG59IGZyb20gXCJAY29tcG9uZW50cy9TdGF0dXNCYXIvc3R5bGVzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYU1hZ25pZnlpbmdHbGFzcywgZmFCYXJzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBjb21wb25lbnRzL01lbnVcIjtcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiQGNvbXBvbmVudHMvTWVudUxpc3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiQGNvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIkBob29rcy91c2VJbnB1dFwiO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpZGVCYXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdGF0dXNCYXI6IEZDPFByb3BzPiA9ICh7IHNpZGVCYXIgfSkgPT4ge1xuICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3dvcmQsIG9uQ2hhbmdlV29yZCwgc2V0V29yZF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICBjb25zdCBvbkNsaWNrQmFyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE1lbnUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY5KSB7XG4gICAgICAgIHNldE1lbnUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihgcmVzaXplYCwgd2luZG93UmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihgcmVzaXplYCwgd2luZG93UmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIikgIT09IG51bGwpO1xuXG4gIGNvbnN0IG9uTG9nb3V0ID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJqd3RcIik7XG4gICAgc2V0SXNMb2dpbihmYWxzZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCYXJXcmFwcGVyIHNpZGVCYXI9e3NpZGVCYXJ9PlxuICAgICAgPEJhcj5cbiAgICAgICAgPFN1YkJhcj5cbiAgICAgICAgICA8U3ViTWVudT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9zZWxscGFnZS9zZWxscmVnaXN0ZXJcIj7tjJDrp6Qg7Y6Y7J207KeAPC9MaW5rPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL215cGFnZS9saWtlXCI+7J6l67CU6rWs64uIPC9MaW5rPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL215cGFnZS9idXlpbmdcIj7rp4jsnbQg7Y6Y7J207KeAPC9MaW5rPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHshaXNMb2dpbiA/IChcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPuuhnOq3uOyduDwvTGluaz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uTG9nb3V0fT7roZzqt7jslYTsm4M8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDwvU3ViQmFyPlxuICAgICAgICA8TWFpbkJhcj5cbiAgICAgICAgICA8TmFtZT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+V0FZQzwvYT5cbiAgICAgICAgICA8L05hbWU+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKuuqqOuRkCDsmYTshLHrkJjrqbQg7ZWY64KYIOyngOyasOuptOuQqCDqtazrp6TtjpjsnbTsp4AqL31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlblwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9Qcm9kdWN0UGFnZVwiPlNob3A8L0xpbms+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VXb3JkfSAvPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvc2VhcmNoaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgIHdvcmQ6IHdvcmQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImljb25cIn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFNYWduaWZ5aW5nR2xhc3N9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhQmFyc1wiIG9uQ2xpY2s9e29uQ2xpY2tCYXJ9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9NYWluQmFyPlxuICAgICAgPC9CYXI+XG4gICAgICB7bWVudSAmJiAoXG4gICAgICAgIDxNZW51IHNob3c9e21lbnV9IG9uQ2xvc2VNb2RhbD17b25DbGlja0Jhcn0+XG4gICAgICAgICAgezxNZW51TGlzdCBvbkNsb3NlTW9kYWw9e29uQ2xpY2tCYXJ9IC8+fVxuICAgICAgICA8L01lbnU+XG4gICAgICApfVxuICAgIDwvQmFyV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1c0JhcjtcbiIsImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCBVSUV2ZW50LCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBSZXR1cm5UeXBlczxUID0gQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4+ID0gW1xuICAgIFQsXG4gICAgKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFQ+Pixcbl07XG5cbmNvbnN0IHVzZUlucHV0ID0gPFQgPSBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pj4oaW5pdGlhbFZhbHVlOiBUKTogUmV0dXJuVHlwZXM8VD4gPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUgYXMgdW5rbm93biBhcyBUKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAwLjhmciA1ZnI7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMZWZ0U2lkZSA9IHN0eWxlZC5zZWN0aW9uYGA7XG5cbmV4cG9ydCBjb25zdCBNaWRkbGVTaWRlID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYzFiNmI2O1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICBoZWlnaHQ6IDcwdmg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFJpZ2h0U2lkZSA9IHN0eWxlZC5zZWN0aW9uYFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gICYgaW1nIHtcbiAgICB3aWR0aDogMjRyZW07XG4gICAgaGVpZ2h0OiAyNHJlbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgaGVpZ2h0OiAyMHJlbTtcblxuICAgICAgbWFyZ2luLXRvcDogLTJyZW07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbWRldGFpbCA9IHN0eWxlZC5kaXZgXG4gICYgaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1OYW1lID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcblxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgIC8vbWFyZ2luLWxlZnQ6IDNyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBPcHRpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgIC8vbWFyZ2luLWxlZnQ6IDNyZW07XG4gIH1cblxuICAmID4gZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiAzJTtcbiAgfVxuXG4gICYgc2VsZWN0IHtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIH1cblxuICAmIHNlbGVjdDpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I3YWNhYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3V0bGluZTogM3B4IHNvbGlkICNmOGU0ZmY7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtSW5mbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMXJlbSAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRvdGFsUHJpY2UgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcblxuICBtYXJnaW4tYm90dG9tOiAtMnJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ0biA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbiAgbWFyZ2luLXJpZ2h0OiA3cmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgIC8vbWFyZ2luLWxlZnQ6IDFyZW07XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICYgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1eUJ0biA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiAyN3JlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDYzNTM1O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvdW50QnRuID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuXG4gIHBhZGRpbmc6IDFyZW0gMDtcblxuICAmID4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gIH1cblxuICAmIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB3aWR0aDogMzAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0QnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDE4cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7XG4gIENoYW5nZUV2ZW50LFxuICBGb3JtRXZlbnQsXG4gIEZvcm1FdmVudEhhbmRsZXIsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gXCJAY29tcG9uZW50cy9TdGF0dXNCYXJcIjtcbmltcG9ydCB7XG4gIFdyYXBwZXIsXG4gIExlZnRTaWRlLFxuICBNaWRkbGVTaWRlLFxuICBSaWdodFNpZGUsXG4gIEl0ZW0sXG4gIEl0ZW1OYW1lLFxuICBPcHRpb24sXG4gIEl0ZW1kZXRhaWwsXG4gIEJ0bixcbiAgQnV5QnRuLFxuICBTZWxlY3RCdG4sXG4gIENvdW50QnRuLFxuICBUb3RhbFByaWNlLFxuICBJdGVtSW5mbyxcbn0gZnJvbSBcIkBjb21wb25lbnRzL0J1eS9zdHlsZXNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQmFza2V0U2hvcHBpbmcgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBmZXRjaGVyIGZyb20gXCJAdXRpbHMvZmV0Y2hlclwiO1xuaW1wb3J0IG9wdGlvbiBmcm9tIFwiQGNvbXBvbmVudHMvT3B0aW9uXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBtYWtlQ2FydEl0ZW1zIH0gZnJvbSBcIkB1dGlscy9tYWtlQ2FydEl0ZW1zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBJRWFjaERhdGEgfSBmcm9tIFwiQHR5cGluZ3MvZGJcIjtcblxuY29uc3QgQnV5ID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgY29uc3QgeyBkYXRhOiBlYWNoRGF0YSwgZXJyb3IgfSA9IHVzZVNXUjxJRWFjaERhdGEgfCB1bmRlZmluZWQ+KFxuICAgIGBodHRwczovL3dheWNhYnZhdi5zaG9wL2l0ZW1zLyR7bG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzJdfWAsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgUGx1cyA9ICgpID0+IHtcbiAgICBzZXRDb3VudChjb3VudCArIDEpO1xuICB9O1xuXG4gIGNvbnN0IE1pbnVzID0gKCkgPT4ge1xuICAgIGlmIChjb3VudCAtIDEgPiAwKSB7XG4gICAgICBzZXRDb3VudChjb3VudCAtIDEpO1xuICAgIH1cbiAgfTtcblxuICAvLyDsmLXshZjsnZgg6rCc7IiYXG4gIGNvbnN0IG9wdGlvbkxlbjogbnVtYmVyID0gZWFjaERhdGEgPyBlYWNoRGF0YT8ub3B0aW9uR3JvdXBzPy5sZW5ndGggOiAwO1xuXG4gIC8vIOyYteyFmOydmCDsnbTrpoRcbiAgbGV0IG9wdEdyb3VwTmFtZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbkxlbjsgaSsrKSB7XG4gICAgbGV0IHRlbXAgPSBlYWNoRGF0YT8ub3B0aW9uR3JvdXBzW2ldLm9wdGlvbkdyb3VwTmFtZTtcblxuICAgIGlmICh0ZW1wKSBvcHRHcm91cE5hbWVzLnB1c2godGVtcCk7XG4gIH1cblxuICAvLyDqsIEg7Ji17IWY7J2YIOqwkuuTpCDsnbTssKgg67Cw7Je0XG4gIGxldCBvcHRHcm91cFZhbHVlOiBzdHJpbmdbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTGVuOyBpKyspIHtcbiAgICBvcHRHcm91cFZhbHVlLnB1c2goW10pO1xuXG4gICAgbGV0IHRlbXAgPSBlYWNoRGF0YT8ub3B0aW9uR3JvdXBzW2ldLm9wdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRlbXAgJiYgZWFjaERhdGEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGVtcDsgaisrKSB7XG4gICAgICAgIG9wdEdyb3VwVmFsdWVbaV0ucHVzaChcbiAgICAgICAgICBlYWNoRGF0YT8ub3B0aW9uR3JvdXBzW2ldPy5vcHRpb25zW2pdPy5vcHRpb25OYW1lXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g6rCBIOyYteyFmOuTpCDquLDrs7jqsJIg7J287LCoIOuwsOyXtFxuICBsZXQgZWFjaE9wdEJhc2U6IHN0cmluZ1tdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRHcm91cFZhbHVlLmxlbmd0aDsgaSsrKVxuICAgIGVhY2hPcHRCYXNlLnB1c2gob3B0R3JvdXBWYWx1ZVtpXVswXSk7XG5cbiAgLy8g6rCBIOyYteyFmOuniOuLpCDrqofqsJzqsIAg65Ok7Ja07J6I64qU7KeAXG4gIGxldCBlYWNoT3B0TGVuOiBudW1iZXJbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTGVuOyBpKyspIHtcbiAgICBlYWNoT3B0TGVuLnB1c2gob3B0R3JvdXBWYWx1ZVtpXT8ubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbnN0IFtvcHRTZWxlY3QsIHNldE9wdFNlbGVjdF0gPSB1c2VTdGF0ZSh7XG4gICAgb3B0U2VsZWN0MDogXCJcIixcbiAgICBvcHRTZWxlY3QxOiBcIlwiLFxuICAgIG9wdFNlbGVjdDI6IFwiXCIsXG4gICAgb3B0U2VsZWN0MzogXCJcIixcbiAgICBvcHRTZWxlY3Q0OiBcIlwiLFxuICB9KTtcblxuICBjb25zdCB7IG9wdFNlbGVjdDAsIG9wdFNlbGVjdDEsIG9wdFNlbGVjdDIsIG9wdFNlbGVjdDMsIG9wdFNlbGVjdDQgfSA9XG4gICAgb3B0U2VsZWN0O1xuXG4gIGNvbnN0IG9uQ2hhbmdlU2VsZWN0ID0gKGU6IENoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuXG4gICAgc2V0T3B0U2VsZWN0KHtcbiAgICAgIC4uLm9wdFNlbGVjdCxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8g7J206rKMIOqwkiDrqqjsnYxcbiAgbGV0IG9wdFByaWNlOiBudW1iZXJbXVtdID0gW107XG5cbiAgaWYgKGVhY2hEYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25MZW47IGkrKykge1xuICAgICAgb3B0UHJpY2UucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVhY2hPcHRMZW5baV07IGorKykge1xuICAgICAgICBvcHRQcmljZVtpXS5wdXNoKGVhY2hEYXRhLm9wdGlvbkdyb3Vwc1tpXS5vcHRpb25zW2pdLnByaWNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBEYXRhUHJpY2UgPSBtYWtlQ2FydEl0ZW1zKFxuICAgIG9wdFNlbGVjdCxcbiAgICBvcHRHcm91cE5hbWVzLFxuICAgIG9wdEdyb3VwVmFsdWUsXG4gICAgb3B0aW9uTGVuLFxuICAgIG9wdFByaWNlLFxuICAgIGVhY2hEYXRhPy5pdGVtSWQsXG4gICAgY291bnQsXG4gICAgZWFjaERhdGE/Lml0ZW1OYW1lLFxuICAgIGVhY2hEYXRhPy5pbWFnZVVybFxuICApO1xuXG4gIGNvbnN0IERhdGEgPSBEYXRhUHJpY2VbMF07XG4gIGNvbnN0IHRvdGFsID0gRGF0YVByaWNlWzFdO1xuXG4gIGNvbnN0IG9uQ2xpY2tDYXJ0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IGFueSkgPT4ge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCJodHRwczovL3dheWNhYnZhdi5zaG9wL2NhcnRzL2NhcnQtbGluZS1pdGVtc1wiLCBEYXRhLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpfWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwi7J6l67CU6rWs64uI7JeQIOuLtOqyvOyKteuLiOuLpFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcbiAgICB9LFxuICAgIFtEYXRhXVxuICApO1xuXG4gIGNvbnN0IGl0ZW1faWQyID0gTnVtYmVyKGVhY2hEYXRhPy5pdGVtSWQpO1xuICBjb25zdCBpdGVtX2lkID0gSlNPTi5zdHJpbmdpZnkoaXRlbV9pZDIpO1xuXG4gIGNvbnN0IExpa2VSYXRpbmcyID0gMy41O1xuICBjb25zdCBMaWtlUmF0aW5nID0gSlNPTi5zdHJpbmdpZnkoTGlrZVJhdGluZzIpO1xuXG4gIGNvbnN0IFBsdXNMaWtlID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IGFueSkgPT4ge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXG4gICAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvcmVjb21tZW5kXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXRlbV9pZDogaXRlbV9pZCxcbiAgICAgICAgICAgIHJhdGluZzogTGlrZVJhdGluZyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpfWAsXG4gICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge30pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCLsi6TtjKhcIik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgW2VhY2hEYXRhXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTdGF0dXNCYXIgLz5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8TGVmdFNpZGU+XG4gICAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgICA8aW1nIHNyYz17ZWFjaERhdGE/LmltYWdlVXJsfSBhbHQ9XCLsg4Htkogg7IKs7KeEXCIgLz5cbiAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDwvTGVmdFNpZGU+XG4gICAgICAgIDxNaWRkbGVTaWRlPjwvTWlkZGxlU2lkZT5cbiAgICAgICAgPFJpZ2h0U2lkZT5cbiAgICAgICAgICA8SXRlbWRldGFpbD5cbiAgICAgICAgICAgIDxJdGVtTmFtZT57ZWFjaERhdGE/Lml0ZW1OYW1lfTwvSXRlbU5hbWU+XG4gICAgICAgICAgPC9JdGVtZGV0YWlsPlxuICAgICAgICAgIDxPcHRpb24+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7b3B0R3JvdXBOYW1lcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxoND57dn08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17YG9wdFNlbGVjdCR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KGVhY2hPcHRMZW5baW5kZXhdKV0ubWFwKCh3LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdEdyb3VwVmFsdWVbaW5kZXhdW2lkeF19IGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge29wdEdyb3VwVmFsdWVbaW5kZXhdW2lkeF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCAhPT0gMCAmJiBgKCske29wdFByaWNlW2luZGV4XVtpZHhdfSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L09wdGlvbj5cblxuICAgICAgICAgIDxJdGVtSW5mbz7tjJDrp6Tsspg6IHtlYWNoRGF0YT8uaW5mb3JtYXRpb259PC9JdGVtSW5mbz5cbiAgICAgICAgICA8SXRlbUluZm8+7Lm07YWM6rOg66asOiB7ZWFjaERhdGE/LmNhdGVnb3J5fTwvSXRlbUluZm8+XG5cbiAgICAgICAgICA8VG90YWxQcmljZT7stJ0g6rCA6rKpOiB7dG90YWx97JuQPC9Ub3RhbFByaWNlPlxuXG4gICAgICAgICAgPEJ0bj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxDb3VudEJ0bj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e01pbnVzfT4tPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e1BsdXN9Pis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db3VudEJ0bj5cbiAgICAgICAgICAgICAgPFNlbGVjdEJ0blxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2tDYXJ0KERhdGEpO1xuICAgICAgICAgICAgICAgICAgUGx1c0xpa2UoZWFjaERhdGEpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFza2V0U2hvcHBpbmd9IC8+XG4gICAgICAgICAgICAgICAg7J6l67CU6rWs64uIXG4gICAgICAgICAgICAgICAgey8qPGZvcm0gb25TdWJtaXQ9e29uQ2xpY2tDYXJ0fT4qL31cbiAgICAgICAgICAgICAgICB7LyogIDxTZWxlY3RCdG4gdHlwZT17XCJzdWJtaXRcIn0+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXNrZXRTaG9wcGluZ30gLz4qL31cbiAgICAgICAgICAgICAgICB7LyogICAg7J6l67CU6rWs64uIKi99XG4gICAgICAgICAgICAgICAgey8qICA8L1NlbGVjdEJ0bj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L2Zvcm0+Ki99XG4gICAgICAgICAgICAgIDwvU2VsZWN0QnRuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvY2hlY2tvdXQvJHtsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMl19YCxcbiAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICAgZWFjaERhdGE6IGVhY2hEYXRhLFxuICAgICAgICAgICAgICAgICAgb3B0SW5mbzogRGF0YSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OiBjb3VudCxcbiAgICAgICAgICAgICAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV5QnRuIHR5cGU9XCJzdWJtaXRcIj7qtazrp6Q8L0J1eUJ0bj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0J0bj5cbiAgICAgICAgPC9SaWdodFNpZGU+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXk7XG4iLCJleHBvcnQgY29uc3QgbWFrZUNhcnRJdGVtcyA9IChcbiAgb3B0U2VsZWN0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LFxuICBvcHRHcm91cE5hbWVzOiBzdHJpbmdbXSxcbiAgb3B0R3JvdXBWYWx1ZTogc3RyaW5nW11bXSxcbiAgb3B0aW9uTGVuOiBudW1iZXIsXG4gIG9wdFByaWNlOiBudW1iZXJbXVtdLFxuICBpdGVtSWQ6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgY291bnQ6IG51bWJlcixcbiAgbmFtZXM6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgaW1hZ2U6IHN0cmluZyB8IHVuZGVmaW5lZFxuKSA9PiB7XG4gIGxldCBDaG9zZTogbnVtYmVyW10gPSBbXTtcbiAgbGV0IHN0ckE6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMob3B0U2VsZWN0KS5tYXAoKGl0ZW0pID0+IG9wdFNlbGVjdFtpdGVtXSk7XG5cbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCB4IG9mIHN0ckEpIHtcbiAgICBpZiAoeCA9PT0gXCJcIikgQ2hvc2UucHVzaCgwKTtcbiAgICBlbHNlIHtcbiAgICAgIENob3NlLnB1c2gob3B0R3JvdXBWYWx1ZVtpXS5pbmRleE9mKHgpKTtcbiAgICB9XG5cbiAgICBpKys7XG4gIH1cblxuICBsZXQgY2FydE9wdGlvbjogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICBsZXQgdG90YWxQcmljZSA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25MZW47IGkrKykge1xuICAgIGxldCB0ZW1wID0ge1xuICAgICAgY2FydE9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IG9wdEdyb3VwVmFsdWVbaV1bQ2hvc2VbaV1dLFxuICAgICAgICAgIHByaWNlOiBvcHRQcmljZVtpXVtDaG9zZVtpXV0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbmFtZTogb3B0R3JvdXBOYW1lc1tpXSxcbiAgICB9O1xuXG4gICAgY2FydE9wdGlvbi5wdXNoKHRlbXApO1xuICAgIHRvdGFsUHJpY2UgKz0gb3B0UHJpY2VbaV1bQ2hvc2VbaV1dO1xuICB9XG5cbiAgY29uc3QgdmFsdWU6IE9iamVjdCA9IHtcbiAgICBpdGVtSWQ6IGl0ZW1JZCxcbiAgICBuYW1lOiBuYW1lcyxcbiAgICBjb3VudDogY291bnQsXG4gICAgaW1hZ2VVcmw6IGltYWdlLFxuICAgIGNhcnRPcHRpb25Hcm91cHM6IGNhcnRPcHRpb24sXG4gIH07XG5cbiAgcmV0dXJuIFt2YWx1ZSwgdG90YWxQcmljZV07XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBCdXkgZnJvbSBcIkBjb21wb25lbnRzL0J1eVwiO1xuXG5jb25zdCBTaG9wID0oKT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8QnV5Lz5cbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcbmV4cG9ydCBkZWZhdWx0IFNob3A7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PlxuICBheGlvc1xuICAgIC5nZXQodXJsLCB7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKX1gLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoZXI7XG4iXSwibmFtZXMiOlsiQ3JlYXRlTW9kYWwiLCJzdHlsZWQiLCJNZW51IiwiY2hpbGRyZW4iLCJzaG93Iiwib25DbG9zZU1vZGFsIiwiY2xvc2VCdXR0b24iLCJvbkNsaWNrIiwiZGVmYXVsdFByb3BzIiwiQmFyV3JhcHBlciIsIkJhciIsIlN1YkJhciIsIlN1Yk1lbnUiLCJNYWluQmFyIiwiTmFtZSIsIkNsb3NlQnRuIiwiTGlzdCIsIkJsYW5rIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJ1c2VTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvbkxvZ291dCIsInVzZUNhbGxiYWNrIiwiZSIsInJlbW92ZUl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJ0byIsInNpZGVCYXIiLCJtZW51Iiwic2V0TWVudSIsIndvcmQiLCJvbkNoYW5nZVdvcmQiLCJzZXRXb3JkIiwidXNlSW5wdXQiLCJvbkNsaWNrQmFyIiwicHJldiIsInVzZUVmZmVjdCIsIndpbmRvd1Jlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhyZWYiLCJjbGFzc05hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInBhdGhuYW1lIiwic3RhdGUiLCJpY29uIiwiZmFNYWduaWZ5aW5nR2xhc3MiLCJmYUJhcnMiLCJpbml0aWFsVmFsdWUiLCJzZXRWYWx1ZSIsInRhcmdldCIsIldyYXBwZXIiLCJMZWZ0U2lkZSIsIk1pZGRsZVNpZGUiLCJSaWdodFNpZGUiLCJJdGVtIiwiSXRlbWRldGFpbCIsIkl0ZW1OYW1lIiwiT3B0aW9uIiwiSXRlbUluZm8iLCJUb3RhbFByaWNlIiwiQnRuIiwiQnV5QnRuIiwiQ291bnRCdG4iLCJTZWxlY3RCdG4iLCJsb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwiZGF0YSIsImVhY2hEYXRhIiwiZXJyb3IiLCJ1c2VTV1IiLCJzcGxpdCIsImZldGNoZXIiLCJjb3VudCIsInNldENvdW50Iiwib3B0aW9uTGVuIiwib3B0aW9uR3JvdXBzIiwibGVuZ3RoIiwib3B0R3JvdXBOYW1lcyIsImkiLCJ0ZW1wIiwib3B0aW9uR3JvdXBOYW1lIiwicHVzaCIsIm9wdEdyb3VwVmFsdWUiLCJvcHRpb25zIiwiaiIsIm9wdGlvbk5hbWUiLCJlYWNoT3B0QmFzZSIsImVhY2hPcHRMZW4iLCJvcHRTZWxlY3QiLCJzZXRPcHRTZWxlY3QiLCJvcHRTZWxlY3QwIiwib3B0U2VsZWN0MSIsIm9wdFNlbGVjdDIiLCJvcHRTZWxlY3QzIiwib3B0U2VsZWN0NCIsIm9uQ2hhbmdlU2VsZWN0IiwibmFtZSIsIm9wdFByaWNlIiwicHJpY2UiLCJEYXRhUHJpY2UiLCJpdGVtSWQiLCJuYW1lcyIsImltYWdlIiwiQ2hvc2UiLCJzdHJBIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iLCJ4IiwiaW5kZXhPZiIsImNhcnRPcHRpb24iLCJ0b3RhbFByaWNlIiwiY2FydE9wdGlvbnMiLCJpbWFnZVVybCIsImNhcnRPcHRpb25Hcm91cHMiLCJtYWtlQ2FydEl0ZW1zIiwiaXRlbU5hbWUiLCJEYXRhIiwidG90YWwiLCJvbkNsaWNrQ2FydCIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiYWxlcnQiLCJjYXRjaCIsImVyciIsIml0ZW1faWQyIiwiTnVtYmVyIiwiaXRlbV9pZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJMaWtlUmF0aW5nIiwiUGx1c0xpa2UiLCJyYXRpbmciLCJTdGF0dXNCYXIiLCJzcmMiLCJhbHQiLCJ2IiwiaW5kZXgiLCJrZXkiLCJBcnJheSIsInciLCJpZHgiLCJpbmZvcm1hdGlvbiIsImNhdGVnb3J5IiwiZmFCYXNrZXRTaG9wcGluZyIsIm9wdEluZm8iLCJ1cmwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=