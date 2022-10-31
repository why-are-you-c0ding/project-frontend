"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[808],{89339:(e,t,l)=>{l.d(t,{CQ:()=>s,Ns:()=>o,S8:()=>m,c7:()=>a,f7:()=>c,im:()=>r,om:()=>i,tv:()=>d});var n=l(97083);const r=n.Z.section`
  margin: 2rem 4rem;

  @media (max-width: 769px) {
    margin-top: 6rem;
  }
`,a=n.Z.section`
  margin-bottom: 2rem;
`,i=n.Z.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(18rem, 1fr));
  grid-gap: 1rem;

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`,o=n.Z.div`
  width: 90%;
  min-height: 25rem;
  max-height: 25rem;

  margin: 0 auto;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 769px) {
    max-width: 80%;
    min-width: 80%;
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  }
`,c=n.Z.div`
  & img {
    width: 15rem;
    height: 15rem;
  }
`,m=n.Z.div`
  margin: 1rem 0;
  padding: 1rem 1rem;

  min-height: 8rem;

  & > span {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.6);
  }
`,s=n.Z.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,d=n.Z.div`
  font-size: 1.1rem;
  font-weight: 600;
`},11921:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(67294);const r=l(97083).Z.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1000;
`,a=({children:e,show:t,onCloseModal:l,closeButton:a})=>t?n.createElement("div",null,n.createElement(r,{onClick:l},n.createElement("div",null,e))):null;a.defaultProps={closeButton:!0};const i=a},66985:(e,t,l)=>{l.d(t,{Z:()=>w});var n=l(67294),r=l(97083);const a=r.Z.div`
  margin-bottom: 9rem;

  @media screen and (max-width: 769px) {
    margin-bottom: 0;
`,i=r.Z.div`
  background-color: white;
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,o=r.Z.div`
  padding: 0.5rem 3rem;
  //border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & span a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`,c=r.Z.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    margin-left: 1rem;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`,m=r.Z.div`
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
`,s=r.Z.div`
  font-size: 2rem;
  & a {
    text-decoration: none;
    color: inherit;
  }
`;var d=l(17625),p=l(51436),u=l(11921);const g=r.Z.button`
  border: none;
  background-color: inherit;

  font-size: 35px;

  position: absolute;
  right: 10px;
  top: 10px;

  cursor: pointer;
`,h=r.Z.div`
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
`,E=r.Z.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 40vw;
  height: 100%;
`;var x=l(73727);const v=({onCloseModal:e})=>{const[t,l]=(0,n.useState)(null!==localStorage.getItem("jwt")),r=(0,n.useCallback)((e=>{localStorage.removeItem("jwt"),l(!1)}),[]),a=(0,n.useCallback)((e=>{e.stopPropagation()}),[]);return n.createElement("div",{onClick:a},n.createElement(E,{onClick:e}),n.createElement(h,null,n.createElement(g,{onClick:e},"X"),n.createElement("div",null,n.createElement("div",null,n.createElement(x.rU,{to:"/ProductPage"},"shop")),n.createElement("div",null,n.createElement(x.rU,{to:"/mypage/like"},"장바구니")),n.createElement("div",null,n.createElement(x.rU,{to:"/mypage/buying"},"주문내역")),n.createElement("div",null,n.createElement(x.rU,{to:"/sellpage/selllist"},"등록 상품 조회")),n.createElement("div",null,n.createElement(x.rU,{to:"/sellpage/sellorderlist"},"주문 내역 조회")),n.createElement("div",null,t?n.createElement("div",{onClick:r},"로그아웃"):n.createElement(x.rU,{to:"/login"},"로그인")))))};var b=l(38678);const w=({sideBar:e})=>{const[t,l]=(0,n.useState)(!1),[r,g,h]=(0,b.Z)(""),E=(0,n.useCallback)((()=>{l((e=>!e))}),[]);(0,n.useEffect)((()=>{const e=()=>{window.innerWidth>769&&l(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const[w,f]=(0,n.useState)(null!==localStorage.getItem("jwt")),y=(0,n.useCallback)((e=>{localStorage.removeItem("jwt"),f(!1)}),[]);return n.createElement(a,{sideBar:e},n.createElement(i,null,n.createElement(o,null,n.createElement(c,null,n.createElement("span",null,n.createElement(x.rU,{to:"/sellpage/sellregister"},"판매 페이지")),n.createElement("span",null,n.createElement(x.rU,{to:"/mypage/like"},"장바구니")),n.createElement("span",null,n.createElement(x.rU,{to:"/mypage/buying"},"마이 페이지")),n.createElement("span",null,w?n.createElement("div",{onClick:y},"로그아웃"):n.createElement(x.rU,{to:"/login"},"로그인")))),n.createElement(m,null,n.createElement(s,null,n.createElement("a",{href:"/"},"WAYC")),n.createElement("div",null,n.createElement("span",{className:"hidden"},n.createElement(x.rU,{to:"/ProductPage"},"Shop")),n.createElement("span",null,n.createElement("label",null,n.createElement("input",{type:"text",value:r,onChange:g}),n.createElement(x.rU,{to:{pathname:"/searchitem",state:{word:r}}},n.createElement(d.G,{className:"icon",icon:p.Y$T})))),n.createElement("span",{className:"faBars",onClick:E},n.createElement(d.G,{icon:p.xiG}))))),t&&n.createElement(u.Z,{show:t,onCloseModal:E},n.createElement(v,{onCloseModal:E})))}},38678:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(67294);const r=e=>{const[t,l]=(0,n.useState)(e);return[t,(0,n.useCallback)((e=>{l(e.target.value)}),[]),l]}},36808:(e,t,l)=>{l.r(t),l.d(t,{default:()=>j});var n=l(67294),r=l(66985),a=l(9669),i=l.n(a),o=l(46066),c=(l(11332),l(47088),l(97083));const m=c.Z.section`
  margin-top: -2rem;

  .slide {
    margin: 0 auto;

    height: 24rem;
    width: 85vw;
  }
`,s=c.Z.div`
  img {
    width: 100%;
    height: 100%;
  }
`,d=[{id:1,src:"slideImage/hello.jpg",alt:"첫번째 슬라이드"},{id:2,src:"slideImage/hello2.jpg",alt:"두번째 슬라이드"},{id:3,src:"slideImage/hello3.jpg",alt:"세번째 슬라이드"},{id:4,src:"slideImage/hello4.jpg",alt:"세번째 슬라이드"}];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},p.apply(this,arguments)}const u=()=>n.createElement(m,null,n.createElement(o.Z,p({},{dots:!0,infinite:!0,speed:1e3,autoplay:!0,autoplaySpeed:4e3,slidesToShow:1,slidesToScroll:1},{className:"slide"}),d.map(((e,t)=>n.createElement(s,{key:t},n.createElement("img",{src:e.src,alt:e.alt}))))));var g=l(8100),h=l(83564),E=l(89339),x=l(73727),v=l(17625),b=l(51436),w=l(11921);const f=c.Z.div`
  position: absolute;
  top: 30px;
  right: 40px;

  width: 7%;
  text-align: center;
  cursor: pointer;

  font-size: 1.8rem;

  @media (max-width: 600px) {
    right: 50px;
  }
  @media screen and (min-width: 600px) and (max-width: 769px) {
    right: 70px;
  }
`,y=c.Z.div`
  display: flex;
  justify-content: center;
  align-content: center;

  margin-top: -1rem;
  margin-bottom: 4rem;

  a {
    text-decoration: none;
  }
`,Z=c.Z.div`
  padding: 1rem 1.3rem;
  border-radius: 20px;
  border: 1px solid #d6c9c9;
  width: 6.5rem;
  height: 1.7rem;
  display: flex;
  align-content: center;
  justify-content: center;
  color: #6b5151;

  &:hover {
    background-color: black;
    color: white;
  }
`,k=c.Z.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: rgba(0, 0, 0, 0.5);

  height: 10%;
  width: 30%;

  position: absolute;
  top: 60px;
  right: -50px;
`,C=({itemId:e})=>{const t=(0,n.useCallback)((()=>{i().post("http://localhost:8000/blocks",{item_id:e},{headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>{})).catch((e=>{alert("상품을 차단하지 못했습니다.")}))}),[]);return n.createElement(k,null,n.createElement("span",{onClick:t},"아이템 차단"))},S=()=>{const{data:e}=(0,g.ZP)("http://localhost:8000/recommend",h.Z),t=e?e.itemName:["electronic"];let l="https://waycabvav.shop/items/recommend?";for(let e=0;e<t.length;e++){const n=/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;l+=`r${e+1}=${t[e].replaceAll(n,"")}`,e!==t.length-1&&(l+="&")}const{data:r}=(0,g.ZP)(l,h.Z),[a,i]=(0,n.useState)(!1),o=(0,n.useCallback)((()=>{i((e=>!e))}),[]),[c,m]=(0,n.useState)(-1);return n.createElement("div",null,n.createElement(E.im,null,n.createElement(E.c7,null,n.createElement("h2",null,"추천 상품")),n.createElement(E.om,null,r&&r?.map(((e,t)=>{const l=r[t].itemId;return n.createElement("div",{key:t,style:{position:"relative"}},n.createElement(x.rU,{to:`/shop/${l}`},n.createElement(E.Ns,null,n.createElement(E.f7,null,n.createElement("img",{src:r[t].imageUrl,alt:r[t].itemName})),n.createElement(E.S8,null,n.createElement(E.CQ,null,r[t].itemName),n.createElement("span",null,r[t].category),n.createElement(E.tv,null,r[t].basicPrice,"원")))),n.createElement(f,{onClick:()=>{o(),m(l)}},n.createElement(v.G,{icon:b.Uwo})),l===c&&n.createElement(w.Z,{show:a,onCloseModal:o},n.createElement(C,{itemId:l})))})))),n.createElement(y,null,n.createElement(x.rU,{to:"/ProductPage"},n.createElement(Z,null,"전체 상품 보기"))))},j=()=>((0,n.useCallback)((()=>{i().post("https://waycabvav.shop/logout",null,{withCredentials:!0}).then((()=>{})).catch((()=>{})).finally((()=>{}))}),[]),(0,n.useRef)(null),(0,n.useCallback)((e=>{0===e.scrollTop&&console.log("가장 위인듯")}),[]),n.createElement("div",null,n.createElement(r.Z,null),n.createElement(u,null),n.createElement(S,null)))},83564:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(9669),r=l.n(n);const a=e=>r().get(e,{withCredentials:!0,headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>e.data))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vY29tcG9uZW50cy9NYWluSXRlbS9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvTWVudS9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9TdGF0dXNCYXIvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL01lbnVMaXN0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9NZW51TGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9TdGF0dXNCYXIvaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2hvb2tzL3VzZUlucHV0LnRzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvU2xpZGVySW1hZ2Uvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi91dGlscy9zbGlkZUxpc3QudHMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9TbGlkZXJJbWFnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9SZWNvbW1lbmQvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL0N1dEl0ZW0vc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL0N1dEl0ZW0vaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvUmVjb21tZW5kL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9sYXlvdXRzL01haW4vaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL3V0aWxzL2ZldGNoZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbjogMnJlbSA0cmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgIG1hcmdpbi10b3A6IDZyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMThyZW0sIDFmcikpO1xuICBncmlkLWdhcDogMXJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAmIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1Cb3ggPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogOTAlO1xuICBtaW4taGVpZ2h0OiAyNXJlbTtcbiAgbWF4LWhlaWdodDogMjVyZW07XG5cbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDFyZW0gMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG1pbi13aWR0aDogODAlO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtSW1nID0gc3R5bGVkLmRpdmBcbiAgJiBpbWcge1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBoZWlnaHQ6IDE1cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDFyZW0gMDtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuXG4gIG1pbi1oZWlnaHQ6IDhyZW07XG5cbiAgJiA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtTmFtZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtUHJpY2UgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IENyZWF0ZU1vZGFsID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgei1pbmRleDogMTAwMDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDcmVhdGVNb2RhbCB9IGZyb20gXCJAY29tcG9uZW50cy9NZW51L3N0eWxlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaG93OiBib29sZWFuO1xuICBvbkNsb3NlTW9kYWw6IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pID0+IHZvaWQ7XG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHt9Pjtcbn1cblxuY29uc3QgTWVudTogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHNob3csIG9uQ2xvc2VNb2RhbCwgY2xvc2VCdXR0b24gfSkgPT4ge1xuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDcmVhdGVNb2RhbCBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9PlxuICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvQ3JlYXRlTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xvc2VCdXR0b246IHRydWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBCYXJXcmFwcGVyID0gc3R5bGVkLmRpdjx7IHNpZGVCYXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgfT5gXG4gIG1hcmdpbi1ib3R0b206IDlyZW07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJhciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA5OTk7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN1YkJhciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xuICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgJiBzcGFuIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN1Yk1lbnUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNYWluQmFyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMC44cmVtIDJyZW07XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbiAgJiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICYgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYgc3BhbiA+IGxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmID4gaW5wdXQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgIGhlaWdodDogMi4zcmVtO1xuXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG5cbiAgICAmIC5pY29uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuICB9XG5cbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgIC5mYUJhcnMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XG5cbiAgICAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJiBzcGFuIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IENsb3NlQnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuXG4gIGZvbnQtc2l6ZTogMzVweDtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuXG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgJiA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcblxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJiBsYWJlbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmID4gZGl2IHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCbGFuayA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB3aWR0aDogNDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJsYW5rLCBDbG9zZUJ0biwgTGlzdCB9IGZyb20gXCJAY29tcG9uZW50cy9NZW51TGlzdC9zdHlsZXNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNsb3NlTW9kYWw6IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IE1lbnVMaXN0OiBGQzxQcm9wcz4gPSAoeyBvbkNsb3NlTW9kYWwgfSkgPT4ge1xuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKSAhPT0gbnVsbCk7XG5cbiAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dFwiKTtcbiAgICBzZXRJc0xvZ2luKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtzdG9wUHJvcGFnYXRpb259PlxuICAgICAgPEJsYW5rIG9uQ2xpY2s9e29uQ2xvc2VNb2RhbH0+PC9CbGFuaz5cbiAgICAgIDxMaXN0PlxuICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZU1vZGFsfT5YPC9DbG9zZUJ0bj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvUHJvZHVjdFBhZ2VcIj5zaG9wPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9teXBhZ2UvbGlrZVwiPuyepeuwlOq1rOuLiDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvbXlwYWdlL2J1eWluZ1wiPuyjvOusuOuCtOyXrTwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2VsbHBhZ2Uvc2VsbGxpc3RcIj7rk7HroZ0g7IOB7ZKIIOyhsO2ajDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2VsbHBhZ2Uvc2VsbG9yZGVybGlzdFwiPuyjvOusuCDrgrTsl60g7KGw7ZqMPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IWlzTG9naW4gPyAoXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+66Gc6re47J24PC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkxvZ291dH0+66Gc6re47JWE7JuDPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGlzdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQmFyLFxuICBCYXJXcmFwcGVyLFxuICBNYWluQmFyLFxuICBOYW1lLFxuICBTdWJCYXIsXG4gIFN1Yk1lbnUsXG59IGZyb20gXCJAY29tcG9uZW50cy9TdGF0dXNCYXIvc3R5bGVzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYU1hZ25pZnlpbmdHbGFzcywgZmFCYXJzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBjb21wb25lbnRzL01lbnVcIjtcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiQGNvbXBvbmVudHMvTWVudUxpc3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiQGNvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIkBob29rcy91c2VJbnB1dFwiO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpZGVCYXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdGF0dXNCYXI6IEZDPFByb3BzPiA9ICh7IHNpZGVCYXIgfSkgPT4ge1xuICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3dvcmQsIG9uQ2hhbmdlV29yZCwgc2V0V29yZF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICBjb25zdCBvbkNsaWNrQmFyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE1lbnUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY5KSB7XG4gICAgICAgIHNldE1lbnUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihgcmVzaXplYCwgd2luZG93UmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihgcmVzaXplYCwgd2luZG93UmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIikgIT09IG51bGwpO1xuXG4gIGNvbnN0IG9uTG9nb3V0ID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJqd3RcIik7XG4gICAgc2V0SXNMb2dpbihmYWxzZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCYXJXcmFwcGVyIHNpZGVCYXI9e3NpZGVCYXJ9PlxuICAgICAgPEJhcj5cbiAgICAgICAgPFN1YkJhcj5cbiAgICAgICAgICA8U3ViTWVudT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9zZWxscGFnZS9zZWxscmVnaXN0ZXJcIj7tjJDrp6Qg7Y6Y7J207KeAPC9MaW5rPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL215cGFnZS9saWtlXCI+7J6l67CU6rWs64uIPC9MaW5rPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL215cGFnZS9idXlpbmdcIj7rp4jsnbQg7Y6Y7J207KeAPC9MaW5rPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHshaXNMb2dpbiA/IChcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPuuhnOq3uOyduDwvTGluaz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uTG9nb3V0fT7roZzqt7jslYTsm4M8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDwvU3ViQmFyPlxuICAgICAgICA8TWFpbkJhcj5cbiAgICAgICAgICA8TmFtZT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+V0FZQzwvYT5cbiAgICAgICAgICA8L05hbWU+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKuuqqOuRkCDsmYTshLHrkJjrqbQg7ZWY64KYIOyngOyasOuptOuQqCDqtazrp6TtjpjsnbTsp4AqL31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlblwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9Qcm9kdWN0UGFnZVwiPlNob3A8L0xpbms+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VXb3JkfSAvPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvc2VhcmNoaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgIHdvcmQ6IHdvcmQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImljb25cIn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFNYWduaWZ5aW5nR2xhc3N9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhQmFyc1wiIG9uQ2xpY2s9e29uQ2xpY2tCYXJ9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9NYWluQmFyPlxuICAgICAgPC9CYXI+XG4gICAgICB7bWVudSAmJiAoXG4gICAgICAgIDxNZW51IHNob3c9e21lbnV9IG9uQ2xvc2VNb2RhbD17b25DbGlja0Jhcn0+XG4gICAgICAgICAgezxNZW51TGlzdCBvbkNsb3NlTW9kYWw9e29uQ2xpY2tCYXJ9IC8+fVxuICAgICAgICA8L01lbnU+XG4gICAgICApfVxuICAgIDwvQmFyV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1c0JhcjtcbiIsImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCBVSUV2ZW50LCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBSZXR1cm5UeXBlczxUID0gQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4+ID0gW1xuICAgIFQsXG4gICAgKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkLFxuICAgIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFQ+Pixcbl07XG5cbmNvbnN0IHVzZUlucHV0ID0gPFQgPSBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pj4oaW5pdGlhbFZhbHVlOiBUKTogUmV0dXJuVHlwZXM8VD4gPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUgYXMgdW5rbm93biBhcyBUKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luLXRvcDogLTJyZW07XG5cbiAgLnNsaWRlIHtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIGhlaWdodDogMjRyZW07XG4gICAgd2lkdGg6IDg1dnc7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTbGlkZXJJdGVtID0gc3R5bGVkLmRpdmBcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbmA7XG4iLCJleHBvcnQgY29uc3Qgc2xpZGVMaXN0ID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgc3JjOiBcInNsaWRlSW1hZ2UvaGVsbG8uanBnXCIsXG4gICAgYWx0OiBcIuyyq+uyiOynuCDsiqzrnbzsnbTrk5xcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuXG4gICAgc3JjOiBcInNsaWRlSW1hZ2UvaGVsbG8yLmpwZ1wiLFxuXG4gICAgYWx0OiBcIuuRkOuyiOynuCDsiqzrnbzsnbTrk5xcIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHNyYzogXCJzbGlkZUltYWdlL2hlbGxvMy5qcGdcIixcbiAgICBhbHQ6IFwi7IS467KI7Ke4IOyKrOudvOydtOuTnFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgc3JjOiBcInNsaWRlSW1hZ2UvaGVsbG80LmpwZ1wiLFxuICAgIGFsdDogXCLshLjrsojsp7gg7Iqs65287J2065OcXCIsXG4gIH0sXG5dO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCB7IFNsaWRlckl0ZW0sIFdyYXBwZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvU2xpZGVySW1hZ2Uvc3R5bGVzXCI7XG5pbXBvcnQgeyBzbGlkZUxpc3QgfSBmcm9tIFwiQHV0aWxzL3NsaWRlTGlzdFwiO1xuXG5jb25zdCBTbGlkZXJJbWFnZSA9ICgpID0+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogMTAwMCxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiA0MDAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9IGNsYXNzTmFtZT17XCJzbGlkZVwifT5cbiAgICAgICAge3NsaWRlTGlzdC5tYXAoKHYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNsaWRlckl0ZW0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17di5zcmN9IGFsdD17di5hbHR9IC8+XG4gICAgICAgICAgPC9TbGlkZXJJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvU2xpZGVyPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlckltYWdlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBCdG4gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDQwcHg7XG5cbiAgd2lkdGg6IDclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBmb250LXNpemU6IDEuOHJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICByaWdodDogNTBweDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgcmlnaHQ6IDcwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNb3JlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblxuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNb3JlQnRuID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMXJlbSAxLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmM5Yzk7XG4gIHdpZHRoOiA2LjVyZW07XG4gIGhlaWdodDogMS43cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzZiNTE1MTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuXG4gIGhlaWdodDogMTAlO1xuICB3aWR0aDogMzAlO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICByaWdodDogLTUwcHg7XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCJAY29tcG9uZW50cy9DdXRJdGVtL3N0eWxlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpdGVtSWQ6IG51bWJlcjtcbn1cblxuY29uc3QgQ3V0SXRlbTogRkM8UHJvcHM+ID0gKHsgaXRlbUlkIH0pID0+IHtcbiAgY29uc3Qgb25DbGlja0N1dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2Jsb2Nrc1wiLFxuICAgICAgICB7IGl0ZW1faWQ6IGl0ZW1JZCB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpfWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge30pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhbGVydChcIuyDge2SiOydhCDssKjri6jtlZjsp4Ag66q77ZaI7Iq164uI64ukLlwiKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9e29uQ2xpY2tDdXR9PuyVhOydtO2FnCDssKjri6g8L3NwYW4+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3V0SXRlbTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBmZXRjaGVyIGZyb20gXCJAdXRpbHMvZmV0Y2hlclwiO1xuaW1wb3J0IHsgQWxsRGF0YSwgYmVzdERhdGEgfSBmcm9tIFwiQHR5cGluZ3MvZGJcIjtcbmltcG9ydCB7XG4gIEl0ZW1Cb3gsXG4gIEl0ZW1Db250YWluZXIsXG4gIEl0ZW1JbWcsXG4gIEl0ZW1JbmZvLFxuICBJdGVtTmFtZSxcbiAgSXRlbVByaWNlLFxuICBUaXRsZUNvbnRhaW5lcixcbiAgV3JhcHBlcixcbn0gZnJvbSBcIkBjb21wb25lbnRzL01haW5JdGVtL3N0eWxlc1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUVsbGlwc2lzVmVydGljYWwgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiQGNvbXBvbmVudHMvTWVudVwiO1xuaW1wb3J0IHsgQnRuLCBNb3JlLCBNb3JlQnRuIH0gZnJvbSBcIkBjb21wb25lbnRzL1JlY29tbWVuZC9zdHlsZXNcIjtcbmltcG9ydCBDdXRJdGVtIGZyb20gXCJAY29tcG9uZW50cy9DdXRJdGVtXCI7XG5cbmNvbnN0IFJlY29tbWVuZCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBiZXN0RGF0YSB9ID0gdXNlU1dSPGJlc3REYXRhPihcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9yZWNvbW1lbmRcIixcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgY29uc3QgYmVzdExpc3QgPSBiZXN0RGF0YSA/IGJlc3REYXRhLml0ZW1OYW1lIDogW1wiZWxlY3Ryb25pY1wiXTtcblxuICBsZXQgZ2V0SXRlbVVybCA9IFwiaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9pdGVtcy9yZWNvbW1lbmQ/XCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZXN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJlZyA9IC9bXFx7XFx9XFxbXFxdXFwvPy4sOzp8XFwpKn5gIV5cXC1fKzw+QFxcIyQlJlxcXFxcXD1cXChcXCdcXFwiXS9naTtcblxuICAgIGdldEl0ZW1VcmwgKz0gYHIke2kgKyAxfT0ke2Jlc3RMaXN0W2ldLnJlcGxhY2VBbGwocmVnLCBcIlwiKX1gO1xuXG4gICAgaWYgKGkgIT09IGJlc3RMaXN0Lmxlbmd0aCAtIDEpIGdldEl0ZW1VcmwgKz0gXCImXCI7XG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHJlY29tRGF0YSB9ID0gdXNlU1dSPEFsbERhdGFbXT4oZ2V0SXRlbVVybCwgZmV0Y2hlcik7XG5cbiAgY29uc3QgW2lzQ3V0LCBzZXRJc0N1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25DbGlja0N1dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0N1dCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2lzTnVtLCBzZXRJc051bV0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxUaXRsZUNvbnRhaW5lcj5cbiAgICAgICAgICA8aDI+7LaU7LKcIOyDge2SiDwvaDI+XG4gICAgICAgIDwvVGl0bGVDb250YWluZXI+XG4gICAgICAgIDxJdGVtQ29udGFpbmVyPlxuICAgICAgICAgIHtyZWNvbURhdGEgJiZcbiAgICAgICAgICAgIHJlY29tRGF0YT8ubWFwKCh2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSByZWNvbURhdGFbaW5kZXhdLml0ZW1JZDtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3Nob3AvJHtpdGVtSWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtQm94PlxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtSW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlY29tRGF0YVtpbmRleF0uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cmVjb21EYXRhW2luZGV4XS5pdGVtTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtSW1nPlxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtSW5mbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtTmFtZT57cmVjb21EYXRhW2luZGV4XS5pdGVtTmFtZX08L0l0ZW1OYW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlY29tRGF0YVtpbmRleF0uY2F0ZWdvcnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1QcmljZT57cmVjb21EYXRhW2luZGV4XS5iYXNpY1ByaWNlfeybkDwvSXRlbVByaWNlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbUluZm8+XG4gICAgICAgICAgICAgICAgICAgIDwvSXRlbUJveD5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxCdG5cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tDdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJc051bShpdGVtSWQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWxsaXBzaXNWZXJ0aWNhbH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQnRuPlxuICAgICAgICAgICAgICAgICAge2l0ZW1JZCA9PT0gaXNOdW0gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8TWVudSBzaG93PXtpc0N1dH0gb25DbG9zZU1vZGFsPXtvbkNsaWNrQ3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICB7PEN1dEl0ZW0gaXRlbUlkPXtpdGVtSWR9IC8+fVxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDxNb3JlPlxuICAgICAgICA8TGluayB0bz17XCIvUHJvZHVjdFBhZ2VcIn0+XG4gICAgICAgICAgPE1vcmVCdG4+7KCE7LK0IOyDge2SiCDrs7TquLA8L01vcmVCdG4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTW9yZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gXCJAY29tcG9uZW50cy9TdGF0dXNCYXJcIjtcbmltcG9ydCBNYWluSXRlbSBmcm9tIFwiQGNvbXBvbmVudHMvTWFpbkl0ZW1cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTbGlkZXJJbWFnZSBmcm9tIFwiQGNvbXBvbmVudHMvU2xpZGVySW1hZ2VcIjtcblxuaW1wb3J0IFJlY29tbWVuZCBmcm9tIFwiQGNvbXBvbmVudHMvUmVjb21tZW5kXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG9uTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcImh0dHBzOi8vd2F5Y2FidmF2LnNob3AvbG9nb3V0XCIsIG51bGwsIHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHt9KVxuICAgICAgLmNhdGNoKCgpID0+IHt9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge30pO1xuICB9LCBbXSk7XG4gIGNvbnN0IHNjcm9sbGJhclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgb25TY3JvbGwgPSB1c2VDYWxsYmFjaygodmFsdWVzKSA9PiB7XG4gICAgaWYgKHZhbHVlcy5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi6rCA7J6lIOychOyduOuTr1wiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U3RhdHVzQmFyIC8+XG4gICAgICA8U2xpZGVySW1hZ2UgLz5cbiAgICAgIDxSZWNvbW1lbmQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+XG4gIGF4aW9zXG4gICAgLmdldCh1cmwsIHtcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpfWAsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlcjtcbiJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiVGl0bGVDb250YWluZXIiLCJJdGVtQ29udGFpbmVyIiwiSXRlbUJveCIsIkl0ZW1JbWciLCJJdGVtSW5mbyIsIkl0ZW1OYW1lIiwiSXRlbVByaWNlIiwiQ3JlYXRlTW9kYWwiLCJNZW51IiwiY2hpbGRyZW4iLCJzaG93Iiwib25DbG9zZU1vZGFsIiwiY2xvc2VCdXR0b24iLCJvbkNsaWNrIiwiZGVmYXVsdFByb3BzIiwiQmFyV3JhcHBlciIsIkJhciIsIlN1YkJhciIsIlN1Yk1lbnUiLCJNYWluQmFyIiwiTmFtZSIsIkNsb3NlQnRuIiwiTGlzdCIsIkJsYW5rIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJ1c2VTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvbkxvZ291dCIsInVzZUNhbGxiYWNrIiwiZSIsInJlbW92ZUl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJ0byIsInNpZGVCYXIiLCJtZW51Iiwic2V0TWVudSIsIndvcmQiLCJvbkNoYW5nZVdvcmQiLCJzZXRXb3JkIiwidXNlSW5wdXQiLCJvbkNsaWNrQmFyIiwicHJldiIsInVzZUVmZmVjdCIsIndpbmRvd1Jlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhyZWYiLCJjbGFzc05hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInBhdGhuYW1lIiwic3RhdGUiLCJpY29uIiwiZmFNYWduaWZ5aW5nR2xhc3MiLCJmYUJhcnMiLCJpbml0aWFsVmFsdWUiLCJzZXRWYWx1ZSIsInRhcmdldCIsIlNsaWRlckl0ZW0iLCJzbGlkZUxpc3QiLCJpZCIsInNyYyIsImFsdCIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJtYXAiLCJ2IiwiaW5kZXgiLCJrZXkiLCJCdG4iLCJNb3JlIiwiTW9yZUJ0biIsIml0ZW1JZCIsIm9uQ2xpY2tDdXQiLCJheGlvcyIsIml0ZW1faWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsImFsZXJ0IiwiZGF0YSIsImJlc3REYXRhIiwidXNlU1dSIiwiZmV0Y2hlciIsImJlc3RMaXN0IiwiaXRlbU5hbWUiLCJnZXRJdGVtVXJsIiwiaSIsImxlbmd0aCIsInJlZyIsInJlcGxhY2VBbGwiLCJyZWNvbURhdGEiLCJpc0N1dCIsInNldElzQ3V0IiwiaXNOdW0iLCJzZXRJc051bSIsInN0eWxlIiwicG9zaXRpb24iLCJpbWFnZVVybCIsImNhdGVnb3J5IiwiYmFzaWNQcmljZSIsImZhRWxsaXBzaXNWZXJ0aWNhbCIsIndpdGhDcmVkZW50aWFscyIsImZpbmFsbHkiLCJ1c2VSZWYiLCJ2YWx1ZXMiLCJzY3JvbGxUb3AiLCJjb25zb2xlIiwibG9nIiwiU3RhdHVzQmFyIiwidXJsIiwicmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9