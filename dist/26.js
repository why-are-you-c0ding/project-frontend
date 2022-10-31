"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[26],{89339:(e,t,n)=>{n.d(t,{CQ:()=>s,Ns:()=>i,S8:()=>m,c7:()=>a,f7:()=>c,im:()=>r,om:()=>o,tv:()=>d});var l=n(97083);const r=l.Z.section`
  margin: 2rem 4rem;

  @media (max-width: 769px) {
    margin-top: 6rem;
  }
`,a=l.Z.section`
  margin-bottom: 2rem;
`,o=l.Z.div`
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
`,i=l.Z.div`
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
`,c=l.Z.div`
  & img {
    width: 15rem;
    height: 15rem;
  }
`,m=l.Z.div`
  margin: 1rem 0;
  padding: 1rem 1rem;

  min-height: 8rem;

  & > span {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.6);
  }
`,s=l.Z.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,d=l.Z.div`
  font-size: 1.1rem;
  font-weight: 600;
`},11921:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(67294);const r=n(97083).Z.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1000;
`,a=({children:e,show:t,onCloseModal:n,closeButton:a})=>t?l.createElement("div",null,l.createElement(r,{onClick:n},l.createElement("div",null,e))):null;a.defaultProps={closeButton:!0};const o=a},35569:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(67294);const r=n(97083).Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.4);

  height: 50vh;
`,a=()=>l.createElement(r,null,"텅~")},66985:(e,t,n)=>{n.d(t,{Z:()=>f});var l=n(67294),r=n(97083);const a=r.Z.div`
  margin-bottom: 9rem;

  @media screen and (max-width: 769px) {
    margin-bottom: 0;
`,o=r.Z.div`
  background-color: white;
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,i=r.Z.div`
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
`;var d=n(17625),p=n(51436),g=n(11921);const u=r.Z.button`
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
`;var v=n(73727);const b=({onCloseModal:e})=>{const[t,n]=(0,l.useState)(null!==localStorage.getItem("jwt")),r=(0,l.useCallback)((e=>{localStorage.removeItem("jwt"),n(!1)}),[]),a=(0,l.useCallback)((e=>{e.stopPropagation()}),[]);return l.createElement("div",{onClick:a},l.createElement(E,{onClick:e}),l.createElement(h,null,l.createElement(u,{onClick:e},"X"),l.createElement("div",null,l.createElement("div",null,l.createElement(v.rU,{to:"/ProductPage"},"shop")),l.createElement("div",null,l.createElement(v.rU,{to:"/mypage/like"},"장바구니")),l.createElement("div",null,l.createElement(v.rU,{to:"/mypage/buying"},"주문내역")),l.createElement("div",null,l.createElement(v.rU,{to:"/sellpage/selllist"},"등록 상품 조회")),l.createElement("div",null,l.createElement(v.rU,{to:"/sellpage/sellorderlist"},"주문 내역 조회")),l.createElement("div",null,t?l.createElement("div",{onClick:r},"로그아웃"):l.createElement(v.rU,{to:"/login"},"로그인")))))};var x=n(38678);const f=({sideBar:e})=>{const[t,n]=(0,l.useState)(!1),[r,u,h]=(0,x.Z)(""),E=(0,l.useCallback)((()=>{n((e=>!e))}),[]);(0,l.useEffect)((()=>{const e=()=>{window.innerWidth>769&&n(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const[f,w]=(0,l.useState)(null!==localStorage.getItem("jwt")),y=(0,l.useCallback)((e=>{localStorage.removeItem("jwt"),w(!1)}),[]);return l.createElement(a,{sideBar:e},l.createElement(o,null,l.createElement(i,null,l.createElement(c,null,l.createElement("span",null,l.createElement(v.rU,{to:"/sellpage/sellregister"},"판매 페이지")),l.createElement("span",null,l.createElement(v.rU,{to:"/mypage/like"},"장바구니")),l.createElement("span",null,l.createElement(v.rU,{to:"/mypage/buying"},"마이 페이지")),l.createElement("span",null,f?l.createElement("div",{onClick:y},"로그아웃"):l.createElement(v.rU,{to:"/login"},"로그인")))),l.createElement(m,null,l.createElement(s,null,l.createElement("a",{href:"/"},"WAYC")),l.createElement("div",null,l.createElement("span",{className:"hidden"},l.createElement(v.rU,{to:"/ProductPage"},"Shop")),l.createElement("span",null,l.createElement("label",null,l.createElement("input",{type:"text",value:r,onChange:u}),l.createElement(v.rU,{to:{pathname:"/searchitem",state:{word:r}}},l.createElement(d.G,{className:"icon",icon:p.Y$T})))),l.createElement("span",{className:"faBars",onClick:E},l.createElement(d.G,{icon:p.xiG}))))),t&&l.createElement(g.Z,{show:t,onCloseModal:E},l.createElement(b,{onCloseModal:E})))}},38678:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(67294);const r=e=>{const[t,n]=(0,l.useState)(e);return[t,(0,l.useCallback)((e=>{n(e.target.value)}),[]),n]}},46026:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var l=n(67294);const r=n(97083).Z.div`
  display: block;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;var a=n(66985),o=n(89339),i=n(8100),c=n(73727),m=n(44593),s=n(83564),d=n(97650),p=n(35569);const g=()=>{const{data:e}=(0,i.ZP)("http://localhost:8000/blocks",s.Z);console.log(e?.result),console.log(e?`https://waycabvav.shop/items?page=&blockCategory=${e?.result}`:"https://waycabvav.shop/items?page=&blockCategory=");const{data:t,size:n,setSize:r}=(0,m.ZP)((t=>e?`https://waycabvav.shop/items?page=${t}&blockCategory=${e?.result}`:`https://waycabvav.shop/items?page=${t}&blockCategory=`),s.Z);let a=[];if(t)for(let e=0;e<t?.length;e++)a.push(t[e].items);a=a.flat();const[g,u]=(0,d.YD)({threshold:[0,.25,.5,.75,1]});return(0,l.useEffect)((()=>{u&&r((e=>e+1))}),[u]),l.createElement(o.im,null,t&&a&&l.createElement(o.c7,null,l.createElement("h2",null,"전체 상품")),0===a.length&&l.createElement(p.Z,null),l.createElement(o.om,null,t&&a&&[...Array(a?.length)].map(((e,t)=>{const n=a[t].itemId;return l.createElement(c.rU,{to:`/shop/${n}`,key:t},l.createElement(o.Ns,{ref:g},l.createElement(o.f7,null,l.createElement("img",{src:a[t].imageUrl,alt:a[t].itemName})),l.createElement(o.S8,null,l.createElement(o.CQ,null,a[t].itemName),l.createElement("span",null,a[t].category),l.createElement(o.tv,null,a[t].basicPrice,"원"))))}))))},u=()=>l.createElement("div",null,l.createElement(a.Z,null),l.createElement(g,null)),h=()=>l.createElement("div",null,l.createElement(r,null,l.createElement(u,null)))},83564:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(9669),r=n.n(l);const a=e=>r().get(e,{withCredentials:!0,headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>e.data))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFDUyxFQUFBLEVBQUQsTUFDMUIsZ0JBQUMsS0FBRCxLQUNHaEIsR0FDQ0ssR0FDQSxJQUFJWSxNQUFNWixHQUFVRSxTQUFTVyxLQUFJLENBQUN6RCxFQUFHMEQsS0FDbkMsTUFBTUMsRUFBU2YsRUFBU2MsR0FBS0UsT0FDN0IsT0FDRSxnQkFBQyxLQUFELENBQU16RCxHQUFLLFNBQVF3RCxJQUFVRSxJQUFLSCxHQUNoQyxnQkFBQyxLQUFELENBQVNSLElBQUtBLEdBQ1osZ0JBQUMsS0FBRCxLQUNFLHVCQUNFWSxJQUFLbEIsRUFBU2MsR0FBS0ssU0FDbkJDLElBQUtwQixFQUFTYyxHQUFLTyxZQUd2QixnQkFBQyxLQUFELEtBQ0UsZ0JBQUMsS0FBRCxLQUFXckIsRUFBU2MsR0FBS08sVUFDekIsNEJBQU9yQixFQUFTYyxHQUFLUSxVQUNyQixnQkFBQyxLQUFELEtBQVl0QixFQUFTYyxHQUFLUyxXQUExQixjQy9FcEIsRUFUZ0IsSUFFWiwyQkFDRSxnQkFBQ0MsRUFBQSxFQUFELE1BQ0EsZ0JBQUMsRUFBRCxPQ0tOLEVBVHlCLElBRXJCLDJCQUNFLGdCQUFDdEcsRUFBRCxLQUNFLGdCQUFDLEVBQUQsUyx3RENOUixNQVVBLEVBVmlCdUcsR0FDZkMsSUFBQUEsSUFDT0QsRUFBSyxDQUNSRSxpQkFBaUIsRUFDakJDLFFBQVMsQ0FDUEMsY0FBZ0IsVUFBUzdFLGFBQWFDLFFBQVEsWUFHakQ2RSxNQUFNQyxHQUFhQSxFQUFTM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL01haW5JdGVtL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9NZW51L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9NZW51L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL051bGxEYXRhL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9OdWxsRGF0YS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9TdGF0dXNCYXIvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL01lbnVMaXN0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9NZW51TGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9TdGF0dXNCYXIvaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2hvb2tzL3VzZUlucHV0LnRzIiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL3BhZ2VzL1Byb2R1Y3RQYWdlL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9NYWluSXRlbS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9Qcm9kdWN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9wYWdlcy9Qcm9kdWN0UGFnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vdXRpbHMvZmV0Y2hlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luOiAycmVtIDRyZW07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgxOHJlbSwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxcmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gICYgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbUJveCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA5MCU7XG4gIG1pbi1oZWlnaHQ6IDI1cmVtO1xuICBtYXgtaGVpZ2h0OiAyNXJlbTtcblxuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMXJlbSAwO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWluLXdpZHRoOiA4MCU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1JbWcgPSBzdHlsZWQuZGl2YFxuICAmIGltZyB7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGhlaWdodDogMTVyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtSW5mbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMXJlbSAwO1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG5cbiAgbWluLWhlaWdodDogOHJlbTtcblxuICAmID4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1OYW1lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1QcmljZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlTW9kYWwgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcblxuICB6LWluZGV4OiAxMDAwO1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENyZWF0ZU1vZGFsIH0gZnJvbSBcIkBjb21wb25lbnRzL01lbnUvc3R5bGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNob3c6IGJvb2xlYW47XG4gIG9uQ2xvc2VNb2RhbDogKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0PikgPT4gdm9pZDtcbiAgY2xvc2VCdXR0b24/OiBib29sZWFuO1xuICBjaGlsZHJlbjogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+O1xufVxuXG5jb25zdCBNZW51OiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgc2hvdywgb25DbG9zZU1vZGFsLCBjbG9zZUJ1dHRvbiB9KSA9PiB7XG4gIGlmICghc2hvdykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENyZWF0ZU1vZGFsIG9uQ2xpY2s9e29uQ2xvc2VNb2RhbH0+XG4gICAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9DcmVhdGVNb2RhbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICBjbG9zZUJ1dHRvbjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IE51bGwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gIGhlaWdodDogNTB2aDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOdWxsIH0gZnJvbSBcIkBjb21wb25lbnRzL051bGxEYXRhL3N0eWxlc1wiO1xuXG5jb25zdCBOdWxsRGF0YSA9ICgpID0+IHtcbiAgcmV0dXJuIDxOdWxsPu2FhX48L051bGw+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVsbERhdGE7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IEJhcldyYXBwZXIgPSBzdHlsZWQuZGl2PHsgc2lkZUJhcjogYm9vbGVhbiB8IHVuZGVmaW5lZCB9PmBcbiAgbWFyZ2luLWJvdHRvbTogOXJlbTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQmFyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgU3ViQmFyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XG4gIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAmIHNwYW4gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3ViTWVudSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1haW5CYXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwLjhyZW0gMnJlbTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAmIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJiBzcGFuIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJiBzcGFuID4gbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICYgPiBpbnB1dCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgaGVpZ2h0OiAyLjNyZW07XG5cbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cblxuICAgICYgLmljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICB9XG4gIH1cblxuICAmIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgLmZhQmFycyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmIHNwYW4ge1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYW1lID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAycmVtO1xuICAmIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cbiAgZm9udC1zaXplOiAzNXB4O1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG5cbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAmID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmIGxhYmVsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICYgPiBkaXYge1xuICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAmIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJsYW5rID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHdpZHRoOiA0MHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmxhbmssIENsb3NlQnRuLCBMaXN0IH0gZnJvbSBcIkBjb21wb25lbnRzL01lbnVMaXN0L3N0eWxlc1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2xvc2VNb2RhbDogKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0PikgPT4gdm9pZDtcbn1cblxuY29uc3QgTWVudUxpc3Q6IEZDPFByb3BzPiA9ICh7IG9uQ2xvc2VNb2RhbCB9KSA9PiB7XG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpICE9PSBudWxsKTtcblxuICBjb25zdCBvbkxvZ291dCA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiand0XCIpO1xuICAgIHNldElzTG9naW4oZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0PikgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9e3N0b3BQcm9wYWdhdGlvbn0+XG4gICAgICA8Qmxhbmsgb25DbGljaz17b25DbG9zZU1vZGFsfT48L0JsYW5rPlxuICAgICAgPExpc3Q+XG4gICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9Plg8L0Nsb3NlQnRuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9Qcm9kdWN0UGFnZVwiPnNob3A8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL215cGFnZS9saWtlXCI+7J6l67CU6rWs64uIPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9teXBhZ2UvYnV5aW5nXCI+7KO866y464K07JetPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9zZWxscGFnZS9zZWxsbGlzdFwiPuuTseuhnSDsg4Htkogg7KGw7ZqMPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9zZWxscGFnZS9zZWxsb3JkZXJsaXN0XCI+7KO866y4IOuCtOyXrSDsobDtmow8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHshaXNMb2dpbiA/IChcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj7roZzqt7jsnbg8L0xpbms+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uTG9nb3V0fT7roZzqt7jslYTsm4M8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaXN0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCYXIsXG4gIEJhcldyYXBwZXIsXG4gIE1haW5CYXIsXG4gIE5hbWUsXG4gIFN1YkJhcixcbiAgU3ViTWVudSxcbn0gZnJvbSBcIkBjb21wb25lbnRzL1N0YXR1c0Jhci9zdHlsZXNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhTWFnbmlmeWluZ0dsYXNzLCBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiQGNvbXBvbmVudHMvTWVudVwiO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCJAY29tcG9uZW50cy9NZW51TGlzdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCJAY29tcG9uZW50cy9TZWFyY2hcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiQGhvb2tzL3VzZUlucHV0XCI7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2lkZUJhcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0YXR1c0JhcjogRkM8UHJvcHM+ID0gKHsgc2lkZUJhciB9KSA9PiB7XG4gIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbd29yZCwgb25DaGFuZ2VXb3JkLCBzZXRXb3JkXSA9IHVzZUlucHV0KFwiXCIpO1xuXG4gIGNvbnN0IG9uQ2xpY2tCYXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TWVudSgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB3aW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjkpIHtcbiAgICAgICAgc2V0TWVudShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGByZXNpemVgLCB3aW5kb3dSZXNpemUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGByZXNpemVgLCB3aW5kb3dSZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKSAhPT0gbnVsbCk7XG5cbiAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dFwiKTtcbiAgICBzZXRJc0xvZ2luKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJhcldyYXBwZXIgc2lkZUJhcj17c2lkZUJhcn0+XG4gICAgICA8QmFyPlxuICAgICAgICA8U3ViQmFyPlxuICAgICAgICAgIDxTdWJNZW51PlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NlbGxwYWdlL3NlbGxyZWdpc3RlclwiPu2MkOunpCDtjpjsnbTsp4A8L0xpbms+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvbXlwYWdlL2xpa2VcIj7snqXrsJTqtazri4g8L0xpbms+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvbXlwYWdlL2J1eWluZ1wiPuuniOydtCDtjpjsnbTsp4A8L0xpbms+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgeyFpc0xvZ2luID8gKFxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+66Gc6re47J24PC9MaW5rPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25Mb2dvdXR9PuuhnOq3uOyVhOybgzwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgPC9TdWJCYXI+XG4gICAgICAgIDxNYWluQmFyPlxuICAgICAgICAgIDxOYW1lPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5XQVlDPC9hPlxuICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgey8q66qo65GQIOyZhOyEseuQmOuptCDtlZjrgpgg7KeA7Jqw66m065CoIOq1rOunpO2OmOydtOyngCovfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1Byb2R1Y3RQYWdlXCI+U2hvcDwvTGluaz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVdvcmR9IC8+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hpdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgd29yZDogd29yZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiaWNvblwifVxuICAgICAgICAgICAgICAgICAgICBpY29uPXtmYU1hZ25pZnlpbmdHbGFzc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFCYXJzXCIgb25DbGljaz17b25DbGlja0Jhcn0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01haW5CYXI+XG4gICAgICA8L0Jhcj5cbiAgICAgIHttZW51ICYmIChcbiAgICAgICAgPE1lbnUgc2hvdz17bWVudX0gb25DbG9zZU1vZGFsPXtvbkNsaWNrQmFyfT5cbiAgICAgICAgICB7PE1lbnVMaXN0IG9uQ2xvc2VNb2RhbD17b25DbGlja0Jhcn0gLz59XG4gICAgICAgIDwvTWVudT5cbiAgICAgICl9XG4gICAgPC9CYXJXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzQmFyO1xuIiwiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIFVJRXZlbnQsIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIFJldHVyblR5cGVzPFQgPSBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pj4gPSBbXG4gICAgVCxcbiAgICAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQsXG4gICAgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248VD4+LFxuXTtcblxuY29uc3QgdXNlSW5wdXQgPSA8VCA9IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+Pihpbml0aWFsVmFsdWU6IFQpOiBSZXR1cm5UeXBlczxUPiA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSBhcyB1bmtub3duIGFzIFQpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBXcmFwcGVyLFxuICBUaXRsZUNvbnRhaW5lcixcbiAgSXRlbUNvbnRhaW5lcixcbiAgSXRlbUJveCxcbiAgSXRlbU5hbWUsXG4gIEl0ZW1QcmljZSxcbiAgSXRlbUltZyxcbiAgSXRlbUluZm8sXG59IGZyb20gXCJAY29tcG9uZW50cy9NYWluSXRlbS9zdHlsZXNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBBbGxEYXRhLCBMaXN0RGF0YSB9IGZyb20gXCJAdHlwaW5ncy9kYlwiO1xuaW1wb3J0IHVzZVNXUkluZmluaXRlIGZyb20gXCJzd3IvaW5maW5pdGVcIjtcbmltcG9ydCBmZXRjaGVyIGZyb20gXCJAdXRpbHMvZmV0Y2hlclwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuaW1wb3J0IE51bGxEYXRhIGZyb20gXCJAY29tcG9uZW50cy9OdWxsRGF0YVwiO1xuXG5jb25zdCBNYWluSXRlbSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBibG9ja0RhdGEgfSA9IHVzZVNXUjx7IHJlc3VsdDogc3RyaW5nIH0+KFxuICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2Jsb2Nrc1wiLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICBjb25zb2xlLmxvZyhibG9ja0RhdGE/LnJlc3VsdCk7XG4gIGNvbnNvbGUubG9nKFxuICAgIGJsb2NrRGF0YVxuICAgICAgPyBgaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9pdGVtcz9wYWdlPSZibG9ja0NhdGVnb3J5PSR7YmxvY2tEYXRhPy5yZXN1bHR9YFxuICAgICAgOiBgaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9pdGVtcz9wYWdlPSZibG9ja0NhdGVnb3J5PWBcbiAgKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogYWxsRGF0YSxcbiAgICBzaXplLFxuICAgIHNldFNpemUsXG4gIH0gPSB1c2VTV1JJbmZpbml0ZTxMaXN0RGF0YT4oXG4gICAgKGluZGV4KSA9PlxuICAgICAgYmxvY2tEYXRhXG4gICAgICAgID8gYGh0dHBzOi8vd2F5Y2FidmF2LnNob3AvaXRlbXM/cGFnZT0ke2luZGV4fSZibG9ja0NhdGVnb3J5PSR7YmxvY2tEYXRhPy5yZXN1bHR9YFxuICAgICAgICA6IGBodHRwczovL3dheWNhYnZhdi5zaG9wL2l0ZW1zP3BhZ2U9JHtpbmRleH0mYmxvY2tDYXRlZ29yeT1gLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICBsZXQgTWFpbkxpc3Q6IGFueSA9IFtdO1xuXG4gIGlmIChhbGxEYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRhPy5sZW5ndGg7IGkrKykge1xuICAgICAgTWFpbkxpc3QucHVzaChhbGxEYXRhW2ldLml0ZW1zKTtcbiAgICB9XG4gIH1cblxuICBNYWluTGlzdCA9IE1haW5MaXN0LmZsYXQoKTtcblxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KHtcbiAgICB0aHJlc2hvbGQ6IFswLCAwLjI1LCAwLjUsIDAuNzUsIDFdLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOyCrOyaqeyekOqwgCDrp4jsp4Drp4kg7JqU7IaM66W8IOuztOqzoCDsnojqs6AsIOuhnOuUqSDspJHsnbQg7JWE64uI652866m0XG4gICAgaWYgKGluVmlldykge1xuICAgICAgc2V0U2l6ZSgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICB9XG4gIH0sIFtpblZpZXddKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAge2FsbERhdGEgJiYgTWFpbkxpc3QgJiYgKFxuICAgICAgICA8VGl0bGVDb250YWluZXI+XG4gICAgICAgICAgPGgyPuyghOyytCDsg4Htkog8L2gyPlxuICAgICAgICA8L1RpdGxlQ29udGFpbmVyPlxuICAgICAgKX1cblxuICAgICAge01haW5MaXN0Lmxlbmd0aCA9PT0gMCAmJiA8TnVsbERhdGEgLz59XG4gICAgICA8SXRlbUNvbnRhaW5lcj5cbiAgICAgICAge2FsbERhdGEgJiZcbiAgICAgICAgICBNYWluTGlzdCAmJlxuICAgICAgICAgIFsuLi5BcnJheShNYWluTGlzdD8ubGVuZ3RoKV0ubWFwKChlLCBpbmQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IE1haW5JZCA9IE1haW5MaXN0W2luZF0uaXRlbUlkO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmsgdG89e2Avc2hvcC8ke01haW5JZH1gfSBrZXk9e2luZH0+XG4gICAgICAgICAgICAgICAgPEl0ZW1Cb3ggcmVmPXtyZWZ9PlxuICAgICAgICAgICAgICAgICAgPEl0ZW1JbWc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e01haW5MaXN0W2luZF0uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtNYWluTGlzdFtpbmRdLml0ZW1OYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9JdGVtSW1nPlxuICAgICAgICAgICAgICAgICAgPEl0ZW1JbmZvPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbU5hbWU+e01haW5MaXN0W2luZF0uaXRlbU5hbWV9PC9JdGVtTmFtZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e01haW5MaXN0W2luZF0uY2F0ZWdvcnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbVByaWNlPntNYWluTGlzdFtpbmRdLmJhc2ljUHJpY2V97JuQPC9JdGVtUHJpY2U+XG4gICAgICAgICAgICAgICAgICA8L0l0ZW1JbmZvPlxuICAgICAgICAgICAgICAgIDwvSXRlbUJveD5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluSXRlbTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdGF0dXNCYXIgZnJvbSBcIkBjb21wb25lbnRzL1N0YXR1c0JhclwiO1xuaW1wb3J0IE1haW5JdGVtIGZyb20gXCJAY29tcG9uZW50cy9NYWluSXRlbVwiO1xuXG5jb25zdCBQcm9kdWN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U3RhdHVzQmFyIC8+XG4gICAgICA8TWFpbkl0ZW0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgVkZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiQGNvbXBvbmVudHMvUHJvZHVjdFwiO1xuXG5jb25zdCBQcm9kdWN0UGFnZTogVkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPFByb2R1Y3QgLz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT5cbiAgYXhpb3NcbiAgICAuZ2V0KHVybCwge1xuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIil9YCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpO1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyO1xuIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJUaXRsZUNvbnRhaW5lciIsIkl0ZW1Db250YWluZXIiLCJJdGVtQm94IiwiSXRlbUltZyIsIkl0ZW1JbmZvIiwiSXRlbU5hbWUiLCJJdGVtUHJpY2UiLCJDcmVhdGVNb2RhbCIsIk1lbnUiLCJjaGlsZHJlbiIsInNob3ciLCJvbkNsb3NlTW9kYWwiLCJjbG9zZUJ1dHRvbiIsIm9uQ2xpY2siLCJkZWZhdWx0UHJvcHMiLCJOdWxsIiwiQmFyV3JhcHBlciIsIkJhciIsIlN1YkJhciIsIlN1Yk1lbnUiLCJNYWluQmFyIiwiTmFtZSIsIkNsb3NlQnRuIiwiTGlzdCIsIkJsYW5rIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJ1c2VTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvbkxvZ291dCIsInVzZUNhbGxiYWNrIiwiZSIsInJlbW92ZUl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJ0byIsInNpZGVCYXIiLCJtZW51Iiwic2V0TWVudSIsIndvcmQiLCJvbkNoYW5nZVdvcmQiLCJzZXRXb3JkIiwidXNlSW5wdXQiLCJvbkNsaWNrQmFyIiwicHJldiIsInVzZUVmZmVjdCIsIndpbmRvd1Jlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhyZWYiLCJjbGFzc05hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInBhdGhuYW1lIiwic3RhdGUiLCJpY29uIiwiZmFNYWduaWZ5aW5nR2xhc3MiLCJmYUJhcnMiLCJpbml0aWFsVmFsdWUiLCJzZXRWYWx1ZSIsInRhcmdldCIsImRhdGEiLCJibG9ja0RhdGEiLCJ1c2VTV1IiLCJmZXRjaGVyIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImFsbERhdGEiLCJzaXplIiwic2V0U2l6ZSIsInVzZVNXUkluZmluaXRlIiwiaW5kZXgiLCJNYWluTGlzdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwiaXRlbXMiLCJmbGF0IiwicmVmIiwiaW5WaWV3IiwidXNlSW5WaWV3IiwidGhyZXNob2xkIiwicHJldlN0YXRlIiwiTnVsbERhdGEiLCJBcnJheSIsIm1hcCIsImluZCIsIk1haW5JZCIsIml0ZW1JZCIsImtleSIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwiaXRlbU5hbWUiLCJjYXRlZ29yeSIsImJhc2ljUHJpY2UiLCJTdGF0dXNCYXIiLCJ1cmwiLCJheGlvcyIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==