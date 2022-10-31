"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[337],{89997:(e,t,r)=>{r.d(t,{II:()=>l,Zt:()=>a,im:()=>o,m2:()=>i,u5:()=>m});var n=r(97083);const o=n.Z.section``,a=(n.Z.div`
  display: flex;
  margin: 1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  & div {
    margin-left: 1rem;

    & select {
      width: 5vw;
      text-align: center;
    }
  }
`,n.Z.div`
  & > div {
    display: flex;
    margin-top: 0.4rem;

    & > span:first-of-type,
    & > input:first-of-type {
      margin-right: 1rem;
      width: 30%;
    }

    & > span:last-of-type,
    & > input:last-of-type {
      width: 60%;
    }
  }
`),l=n.Z.input`
  border: none;
  border-bottom: 1px solid;
  font-size: 1.1rem;

  ::placeholder {
    font-size: 1rem;
  }
`,i=n.Z.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;

  & button {
    width: 50%;
    padding: 0.5rem 0.8rem;

    background-color: cornflowerblue;
    color: white;

    border: transparent;
    border-radius: 20px;
    text-align: center;
    outline: none;
    margin-top: 1rem;
    margin-bottom: 2rem;

    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #d63535;
      border: none;
    }
`,m=n.Z.div`
  margin-top: 1rem;

  & > div {
    display: flex;
    margin-top: 0.5rem;

    & > span {
      width: 25%;

      //width:70px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
    }

    & > input {
      width: 70%;
    }
  }

  .line {
    width: 95.3%;
    height: 1%;

    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`},39975:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(97083);const a=o.Z.div`
  @media (min-width: 769px) {
    display: none;
  }

  z-index: 999;
  background-color: white;

  position: fixed;
  top: 0;
  width: 100%;

  padding: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  & div {
    width: 33%;
  }
`,l=o.Z.div`
  font-size: 1.5rem;

  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  box-sizing: border-box;
  padding-left: 1rem;
`,i=o.Z.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`;var m=r(17625),c=r(51436),p=r(5977);const s=({title:e})=>{const t=(0,p.k6)();return n.createElement("div",null,n.createElement(a,null,n.createElement(l,null,n.createElement(m.G,{icon:c.acZ,onClick:()=>{t.goBack()}})),n.createElement(i,null,e),n.createElement("div",null)))}},21337:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),o=r(97083);const a=o.Z.section`
  margin-top: -8rem;
  padding-left: 2rem;
  padding-right: 2rem;
`,l=o.Z.section`
  & > div {
    margin-top: 8rem;

    @media (max-width: 769px) {
      margin-top: 16rem;
    }

    & > span {
      display: flex;
      justify-content: center;

      margin-top: 1rem;
      color: rgba(0, 0, 0, 0.4);
    }

    & > div:last-of-type {
      margin-top: 1rem;

      display: flex;
      justify-content: center;

      padding: 0.5rem 0;

      & > label {
        padding: 0.4rem 1rem;
        background-color: cornflowerblue;
        color: white;
        border: 1px solid rgb(77, 77, 77);
        border-radius: 10px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: #d63535;
          border: none;
        }
      }

      #file {
        display: none;
      }
    }
  }
`,i=o.Z.div`
  width: 18rem;
  height: 18rem;

  margin: 0 auto;
  //margin-top: 2rem;

  & img {
    width: 100%;
    height: 100%;
  }
`,m=o.Z.div`
  width: 100%;
  height: 100%;

  color: rgba(0, 0, 0, 0.4);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border: 2px dashed rgba(0, 0, 0, 0.4);
`,c=o.Z.div`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`,p=o.Z.button`
  width: 25rem;
  height: 4rem;

  background-color: cornflowerblue;
  color: white;

  border: transparent;
  border-radius: 20px;
  text-align: center;
  outline: none;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #d63535;
    border: none;
  }
`,s=o.Z.section`
  display: flex;
  justify-content: center;
`,d=o.Z.div`
  margin: 0 auto;
  margin-top: 3rem;

  & > h2 {
    margin-bottom: 0.5rem;
  }

  & label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

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

      margin-left: -15rem;
      margin-top: 0.5rem;
    }

    & select:focus {
      border: 1px solid #b7acac;
      box-sizing: border-box;
      border-radius: 10px;
      outline: 3px solid #f8e4ff;
    }
  }

  & input {
    width: 100%;
  }
`,u=o.Z.header`
  align-self: flex-start;
`;var g=r(89997);var h=r(9669),f=r.n(h),b=r(5977);const x=({itemName:e,imageUrl:t,information:r,category:o})=>{const[a,l]=(0,n.useState)(!1),[i,m]=(0,n.useState)({optName1:"",optName2:"",optName3:"",optName4:"",optName5:""}),{optName1:s,optName2:d,optName3:u,optName4:h,optName5:x}=i,v=e=>{const{name:t,value:r}=e.target;m({...i,[t]:r})},[E,w]=(0,n.useState)({optValue1:"",optValue2:"",optValue3:"",optValue4:"",optValue5:""}),{optValue1:y,optValue2:Z,optValue3:k,optValue4:I,optValue5:C}=E,z=e=>{const{name:t,value:r}=e.target;w({...E,[t]:r})};let N=Object.values(i),j=Object.values(E),S=[];for(let e=0;e<5;e++){let t=j[e].split(","),r=[];for(let e=0;e<t.length;e++)r.push(t[e].trim());""!==t[0]&&S.push(r)}let V=[],B=[];for(let e=0;e<S.length;e++){let t=S[e]?.filter((e=>""!==e));B.push(t),S[e]=t,e!==S.length-1&&B.push([""])}V=B.flat();const[T,G]=(0,n.useState)({});const D=((e,t,r,n,o,a,l,i)=>{let m=[];for(let e=0;e<n.length;e++)m.push(n[e].length);const c=((e,t,r)=>{let n=[];const o=e.length;let a=0;for(let l=0;l<o+r.length;l++)if(""!==e[l]){const r={optionName:e[l],price:parseInt(t[a])};n.push(r),a++}return n})(e,t,n);let p=[],s=0;for(let e=0;e<m.length;e++)p.push({options:c.slice(s,s+m[e]),optionGroupName:r[e],basic:0===e?"true":"false"}),s+=m[e];return p={itemName:o,imageUrl:a,information:l,category:i,optionGroups:p},p})(V,Object.values(T),N,S,e,t,r,o),_=(0,n.useCallback)((()=>{""!==r&&""!==r?""!==e?""!==s?0!==D?.optionGroups.length?l((e=>!e)):alert("옵션값을 입력해주세요."):alert("옵션명을 입력해주세요."):alert("상품 이름을 입력해주세요."):alert("상세 설명을 입력해주세요.")}),[e,s,D]),U=(0,n.useCallback)((e=>{e.preventDefault(),""!==r?""!==s?0!==D?.optionGroups.length?void 0!==D?.optionGroups[0]?.options[0]?.price?f().post("https://waycabvav.shop/items",D,{headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>(alert("등록 성공!"),n.createElement(b.l_,{to:"sellpage/sellstock"})))).catch((e=>{alert("상품 등록에 실패하였습니다.")})):alert("가격을 입력해주세요"):alert("옵션값을 입력해주세요."):alert("옵션명을 입력해주세요."):alert("상세 설명을 입력해주세요.")}),[D]);return console.log(JSON.stringify(D)),console.log({itemName:"최고급 휴지통",imageUrl:"https://wayc-deploy-bucket.s3.ap-northeast-2.amazonaws.com/images/465d4362-292e-4b76-a4fd-7861ab202c45-%E1%84%92%E1%85%B2%E1%84%8C%E1%85%B5%E1%84%90%E1%85%A9%E1%86%BC.jpeg",information:"이 상품은 최고급 휴지통입니다.",category:"Home",optionGroups:[{options:[{optionName:"black",price:2e6}],optionGroupName:"color",basic:"true"}]}),n.createElement(g.im,null,n.createElement("h2",null,"옵션"),n.createElement(c,null,"첫번째 옵션엔 기본값을 넣어주세요. 옵션값은 1,000원 이상",n.createElement("br",null),"옵션명 5자 이상, 옵션값 4자 이상"),n.createElement("div",null,n.createElement(g.Zt,null,n.createElement("div",null,n.createElement("span",null,"옵션명"),n.createElement("span",null,"옵션값")),n.createElement("div",null,n.createElement(g.II,{type:"text",name:"optName1",value:s,onChange:v,placeholder:"예시) 색상"}),n.createElement(g.II,{type:"text",name:"optValue1",value:y,onChange:z,placeholder:"기본값 입력, 예시) 20000"})),n.createElement("div",null,n.createElement(g.II,{type:"text",name:"optName2",value:d,onChange:v,placeholder:"예시) 사이즈"}),n.createElement(g.II,{type:"text",name:"optValue2",value:Z,onChange:z,placeholder:"옵션값 입력, 예시) 1000"})),n.createElement("div",null,n.createElement(g.II,{type:"text",name:"optName3",value:u,onChange:v}),n.createElement(g.II,{type:"text",name:"optValue3",value:k,onChange:z})),n.createElement("div",null,n.createElement(g.II,{type:"text",name:"optName4",value:h,onChange:v}),n.createElement(g.II,{type:"text",name:"optValue4",value:I,onChange:z})),n.createElement("div",null,n.createElement(g.II,{type:"text",name:"optName5",value:x,onChange:v}),n.createElement(g.II,{type:"text",name:"optValue5",value:C,onChange:z}))),n.createElement(g.m2,null,n.createElement("button",{onClick:_},"목록 만들기")),a&&n.createElement(g.u5,null,n.createElement("h2",null,"옵션 목록(추가 가격)"),V.map(((e,t)=>{const r=t.toString();return""!==e?n.createElement("div",{key:t},n.createElement("span",null,e),n.createElement(g.II,{type:"text",onChange:e=>{G({...T,[`${r}`]:e.target.value})}})):n.createElement("div",{key:t,className:"line"})})),n.createElement(p,{onClick:U},"상품 등록"))))};var v=r(73046),E=r(38678),w=r(39975);const y=()=>{const e=["Food","Health","Electronics","Sports & Outdoors","Baby","Home","Household Essentials","Clothing","Personal Care","Toys","Beauty","Shop by Brand","Home Improvement","Industrial & Scientific","Patio & Garden","Pets","Arts Crafts & Sewing","Premium Beauty"],[t,r,o]=(0,E.Z)(""),[c,p,g]=(0,E.Z)(""),[h,b]=(0,n.useState)(e[0]),y=(0,n.useCallback)((e=>{b(e.target.value)}),[]),[Z,k]=(0,n.useState)(""),[I,C]=(0,n.useState)(""),[z,N]=(0,n.useState)(!0),j=e=>{const t=new FileReader;return t.readAsDataURL(e),new Promise((e=>{t.onload=()=>{t.result&&C(t.result),N(!1),e()}}))},[S,V]=(0,n.useState)("");(0,n.useEffect)((()=>{if(Z&&I){const e=new FormData;e.append("images",Z[0]),f().post("https://waycabvav.shop/images",e,{headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`,"Content-Type":"multipart/form-data"}}).then((e=>{V(e.data.imageUrl),console.log(e)})).catch((e=>{}))}}),[Z,I]);const B=new FormData,T=(0,n.useCallback)((e=>{if(e.preventDefault(),e.dataTransfer.item){for(let t=0;t<e.dataTransfer.items.length;t++)if("file"===e.dataTransfer.items[t].kind){const r=e.dataTransfer.items[t].getAsFile();B.append("images",r)}}else for(let t=0;t<e.dataTransfer.files.length;t++)B.append("images",e.dataTransfer.files[t]);k(e.dataTransfer.files),j(e.dataTransfer.files[0])}),[]),G=(0,n.useCallback)((e=>{e.preventDefault(),N(!0)}),[]);return n.createElement("div",null,n.createElement(w.Z,{title:"판매 리스트"}),n.createElement(a,null,n.createElement(l,null,n.createElement("h2",null,"등록 상품 이미지"),n.createElement("div",null,n.createElement(i,{onDrop:T,onDragOver:G},z&&n.createElement(m,null,n.createElement("div",null,"상품 사진")),I&&n.createElement("img",{src:I,alt:"preview-img"})),z&&n.createElement("span",null,"사진(jpeg만 가능)은 1:1 비율을 권장합니다."),n.createElement("div",null,n.createElement("label",{htmlFor:"file"},n.createElement("div",null,"파일 업로드")),n.createElement("input",{type:"file",id:"file",accept:"image/jpeg",onChange:e=>{const t=e.target.files;k(t),j(e.target.files[0])}})))),n.createElement(s,null,n.createElement("div",null,n.createElement(d,null,n.createElement("h2",null,"상품 정보"),n.createElement("label",null,n.createElement(u,null,"상품 이름"),n.createElement(v.II,{type:"text",name:"item-name",value:t,onChange:r,placeholder:" 예시) 잠만보"})),n.createElement("label",null,n.createElement(u,null,"카테고리"),n.createElement("select",{onChange:y,value:h},e.map((e=>n.createElement("option",{value:e,key:e},e))))),n.createElement("label",null,n.createElement(u,null,"상세 설명"),n.createElement(v.II,{type:"text",name:"item-fullname",value:c,onChange:p,placeholder:" 예시) 잠만보 진짜 잠만 잠"})),n.createElement(x,{itemName:t,imageUrl:S,information:c,category:h}))))))}},73046:(e,t,r)=>{r.d(t,{BM:()=>d,Eh:()=>h,II:()=>s,Je:()=>u,Ji:()=>x,MZ:()=>f,Rj:()=>b,ZC:()=>l,__:()=>p,bU:()=>m,h4:()=>a,im:()=>o,jj:()=>g,l0:()=>c,r_:()=>v,zx:()=>i});var n=r(97083);const o=n.Z.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 6rem;
`,a=n.Z.header`
  font-weight: bolder;
  font-size: 3em;
  letter-spacing: -0.75px;
  margin-bottom: 2rem;
`,l=n.Z.div`
  position: relative;
`,i=n.Z.button`
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
`,m=n.Z.div`
  font-weight: bolder;
  font-size: 20px;
  letter-spacing: -0.75px;
  margin-bottom: 30px;
`,c=n.Z.form`
  margin: 0 auto;
  width: 100vw;
  max-width: 400px;
`,p=n.Z.label`
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
`,s=n.Z.input`
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
`,d=n.Z.button`
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
`,u=n.Z.div`
  background-color: red;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
`,g=n.Z.div`
  color: red;
  margin: 8px 0 16px;
  font-weight: bold;
`,h=n.Z.div`
  color: green;
  margin: 10px 0 10px;
  font-weight: bold;
`,f=n.Z.div`
  background-color: green;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
`,b=n.Z.div`
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
`,x=n.Z.p`
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
`,v=n.Z.div`
  color: dodgerblue;
  font-size: 1rem;

  & span {
    margin-right: 0.3rem;
  }
`}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM3LmpzIiwibWFwcGluZ3MiOiJ1TEFFTyxNQUFNQSxFQUFVQyxFQUFBQSxFQUFBQSxPQUFlLEdBa0J6QkMsR0FoQldELEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7Ozs7Ozs7O0VBZ0JQQSxFQUFBQSxFQUFBQSxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0dBa0IxQkUsRUFBUUYsRUFBQUEsRUFBQUEsS0FBYTs7Ozs7Ozs7RUFVckJHLEVBQWVILEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE4QjFCSSxFQUFXSixFQUFBQSxFQUFBQSxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OERDNUU1QixNQUFNRCxFQUFVQyxFQUFBQSxFQUFBQSxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXlCckJLLEVBQU9MLEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7O0VBVWxCTSxFQUFRTixFQUFBQSxFQUFBQSxHQUFXOzs7O3NDQzNCaEMsTUFvQkEsRUFwQmdDLEVBQUdPLE1BQUFBLE1BQ2pDLE1BQU1DLEdBQVVDLEVBQUFBLEVBQUFBLE1BTWhCLE9BQ0UsMkJBQ0UsZ0JBQUNWLEVBQUQsS0FDRSxnQkFBQ00sRUFBRCxLQUNFLGdCQUFDLElBQUQsQ0FBaUJLLEtBQU1DLEVBQUFBLElBQWFDLFFBUnRCLEtBQ3BCSixFQUFRSyxhQVNKLGdCQUFDUCxFQUFELEtBQVFDLEdBQ1IsZ0MsMkRDdEJELE1BQU1SLEVBQVVDLEVBQUFBLEVBQUFBLE9BQWU7Ozs7RUFNekJjLEVBQVFkLEVBQUFBLEVBQUFBLE9BQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUR2QmUsRUFBVWYsRUFBQUEsRUFBQUEsR0FBVzs7Ozs7Ozs7Ozs7RUFhckJnQixFQUFXaEIsRUFBQUEsRUFBQUEsR0FBVzs7Ozs7Ozs7Ozs7RUFhdEJpQixFQUFVakIsRUFBQUEsRUFBQUEsR0FBVzs7Ozs7RUFPckJrQixFQUFTbEIsRUFBQUEsRUFBQUEsTUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXdCdkJtQixFQUFhbkIsRUFBQUEsRUFBQUEsT0FBZTs7O0VBSzVCb0IsRUFBV3BCLEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQ3RCcUIsRUFBWXJCLEVBQUFBLEVBQUFBLE1BQWM7O2tEQzdJdkMsTUFpVUEsRUFqVTBCLEVBQUdzQixTQUFBQSxFQUFVQyxTQUFBQSxFQUFVQyxZQUFBQSxFQUFhQyxTQUFBQSxNQUM1RCxNQUFPQyxFQUFhQyxJQUFrQkMsRUFBQUEsRUFBQUEsV0FBUyxJQUd4Q0MsRUFBU0MsSUFBY0YsRUFBQUEsRUFBQUEsVUFBUyxDQUNyQ0csU0FBVSxHQUNWQyxTQUFVLEdBQ1ZDLFNBQVUsR0FDVkMsU0FBVSxHQUNWQyxTQUFVLE1BR04sU0FBRUosRUFBRixTQUFZQyxFQUFaLFNBQXNCQyxFQUF0QixTQUFnQ0MsRUFBaEMsU0FBMENDLEdBQWFOLEVBRXZETyxFQUFtQkMsSUFDdkIsTUFBTSxLQUFFQyxFQUFGLE1BQVFDLEdBQVVGLEVBQUVHLE9BRTFCVixFQUFXLElBQ05ELEVBQ0gsQ0FBQ1MsR0FBT0MsTUFLTEUsRUFBVUMsSUFBZWQsRUFBQUEsRUFBQUEsVUFBUyxDQUN2Q2UsVUFBVyxHQUNYQyxVQUFXLEdBQ1hDLFVBQVcsR0FDWEMsVUFBVyxHQUNYQyxVQUFXLE1BR1AsVUFBRUosRUFBRixVQUFhQyxFQUFiLFVBQXdCQyxFQUF4QixVQUFtQ0MsRUFBbkMsVUFBOENDLEdBQWNOLEVBRTVETyxFQUFvQlgsSUFDeEIsTUFBTSxLQUFFQyxFQUFGLE1BQVFDLEdBQVVGLEVBQUVHLE9BRTFCRSxFQUFZLElBQ1BELEVBQ0gsQ0FBQ0gsR0FBT0MsS0FLWixJQUFJVSxFQUF1QkMsT0FBT0MsT0FBT3RCLEdBRXJDdUIsRUFBd0JGLE9BQU9DLE9BQU9WLEdBRXRDWSxFQUFrQixHQUV0QixJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFBSSxFQUFHQSxJQUFLLENBQzFCLElBQUlDLEVBQU9ILEVBQVlFLEdBQUdFLE1BQU0sS0FFNUJDLEVBQWdCLEdBRXBCLElBQUssSUFBSUgsRUFBSSxFQUFHQSxFQUFJQyxFQUFLRyxPQUFRSixJQUMvQkcsRUFBSUUsS0FBS0osRUFBS0QsR0FBR00sUUFHSCxLQUFaTCxFQUFLLElBQVdGLEVBQUlNLEtBQUtGLEdBSS9CLElBQUlJLEVBQW9CLEdBRXBCQyxFQUF1QixHQUUzQixJQUFLLElBQUlSLEVBQUksRUFBR0EsRUFBSUQsRUFBSUssT0FBUUosSUFBSyxDQUNuQyxJQUFJQyxFQUFPRixFQUFJQyxJQUFJUyxRQUFRQyxHQUFrQixLQUFUQSxJQUVwQ0YsRUFBU0gsS0FBS0osR0FDZEYsRUFBSUMsR0FBS0MsRUFFTEQsSUFBTUQsRUFBSUssT0FBUyxHQUFHSSxFQUFTSCxLQUFLLENBQUMsS0FHM0NFLEVBQVVDLEVBQVNHLE9BSW5CLE1BQU9DLEVBQVVDLElBQWV2QyxFQUFBQSxFQUFBQSxVQUFpQixJQUlqRCxNQUFNd0MsRUMvRStCLEVBQ3JDUCxFQUNBUSxFQUNBcEIsRUFDQUksRUFDQXhCLEVBQ0FOLEVBQ0ErQyxFQUNBQyxLQUVBLElBQUlDLEVBQVMsR0FFYixJQUFLLElBQUlsQixFQUFJLEVBQUdBLEVBQUlELEVBQUlLLE9BQVFKLElBQzlCa0IsRUFBT2IsS0FBS04sRUFBSUMsR0FBR0ksUUFHckIsTUFBTWUsRUF6Q21CLEVBQ3pCWixFQUNBUSxFQUNBaEIsS0FFQSxJQUFJcUIsRUFBeUIsR0FFN0IsTUFBTUMsRUFBTWQsRUFBUUgsT0FFcEIsSUFBSWtCLEVBQVEsRUFDWixJQUFLLElBQUl0QixFQUFJLEVBQUdBLEVBQUlxQixFQUFNdEIsRUFBSUssT0FBUUosSUFDcEMsR0FBbUIsS0FBZk8sRUFBUVAsR0FBVyxDQUNyQixNQUFNdUIsRUFBaUIsQ0FDckJDLFdBQVlqQixFQUFRUCxHQUNwQmUsTUFBT1UsU0FBU1YsRUFBTU8sS0FHeEJGLEVBQVFmLEtBQUtrQixHQUNiRCxJQUlKLE9BQU9GLEdBbUJhTSxDQUFtQm5CLEVBQVNRLEVBQU9oQixHQUV2RCxJQUFJNEIsRUFBaUIsR0FFakJDLEVBQVEsRUFFWixJQUFLLElBQUk1QixFQUFJLEVBQUdBLEVBQUlrQixFQUFPZCxPQUFRSixJQUNqQzJCLEVBQVV0QixLQUFLLENBQ2IsUUFBYWMsRUFBWVUsTUFBTUQsRUFBT0EsRUFBUVYsRUFBT2xCLElBQ3JELGdCQUFxQkwsRUFBV0ssR0FDaEMsTUFBaUIsSUFBTkEsRUFBVSxPQUFTLFVBR2hDNEIsR0FBU1YsRUFBT2xCLEdBV2xCLE9BUkEyQixFQUFZLENBQ1YsU0FBY3BELEVBQ2QsU0FBY04sRUFDZCxZQUFpQitDLEVBQ2pCLFNBQWNDLEVBQ2QsYUFBa0JVLEdBR2JBLEdEdUNNRyxDQUNYdkIsRUFIb0JYLE9BQU9DLE9BQU9lLEdBS2xDakIsRUFDQUksRUFDQS9CLEVBQ0FDLEVBQ0FDLEVBQ0FDLEdBR0k0RCxHQUFxQkMsRUFBQUEsRUFBQUEsY0FBWSxLQU1qQixLQUFoQjlELEdBS2dCLEtBQWhCQSxFQUthLEtBQWJGLEVBS2EsS0FBYlMsRUFLOEIsSUFBOUJxQyxHQUFNbUIsYUFBYTdCLE9BS3ZCL0IsR0FBZ0I2RCxJQUFVQSxJQUp4QkMsTUFBTSxnQkFMTkEsTUFBTSxnQkFMTkEsTUFBTSxrQkFWTkEsTUFBTSxvQkF5QlAsQ0FBQ25FLEVBQVVTLEVBQVVxQyxJQUVsQnNCLEdBQWdCSixFQUFBQSxFQUFBQSxjQUNuQmpELElBQ0NBLEVBQUVzRCxpQkFPa0IsS0FBaEJuRSxFQUthLEtBQWJPLEVBSzhCLElBQTlCcUMsR0FBTW1CLGFBQWE3QixZQUswQmtDLElBQTdDeEIsR0FBTW1CLGFBQWEsSUFBSWIsUUFBUSxJQUFJTCxNQUt2Q3dCLElBQUFBLEtBQ1EsK0JBQWdDekIsRUFBTSxDQUMxQzBCLFFBQVMsQ0FDUEMsY0FBZ0IsVUFBU0MsYUFBYUMsUUFBUSxZQUdqREMsTUFBTUMsSUFDTFYsTUFBTSxVQUNDLGdCQUFDLEtBQUQsQ0FBVVcsR0FBRywwQkFFckJDLE9BQU9DLElBQ05iLE1BQU0sc0JBZlJBLE1BQU0sY0FMTkEsTUFBTSxnQkFMTkEsTUFBTSxnQkFMTkEsTUFBTSxvQkFpQ1YsQ0FBQ3JCLElBb0JILE9BakJBbUMsUUFBUUMsSUFBSUMsS0FBS0MsVUFBVXRDLElBRTNCbUMsUUFBUUMsSUFBSSxDQUNWbEYsU0FBVSxVQUNWQyxTQUNFLDhLQUNGQyxZQUFhLG9CQUNiQyxTQUFVLE9BQ1Y4RCxhQUFjLENBQ1osQ0FDRWIsUUFBUyxDQUFDLENBQUVJLFdBQVksUUFBU1QsTUFBTyxNQUN4Q3NDLGdCQUFpQixRQUNqQkMsTUFBTyxXQU1YLGdCQUFDLEtBQUQsS0FDRSxnQ0FDQSxnQkFBQzNGLEVBQUQsMENBRUUsMkJBRkYsd0JBS0EsMkJBQ0UsZ0JBQUMsS0FBRCxLQUNFLDJCQUNFLG1DQUNBLG9DQUVGLDJCQUNFLGdCQUFDLEtBQUQsQ0FDRTRGLEtBQUssT0FDTHZFLEtBQUssV0FDTEMsTUFBT1IsRUFDUCtFLFNBQVUxRSxFQUNWMkUsWUFBYSxXQUVmLGdCQUFDLEtBQUQsQ0FDRUYsS0FBSyxPQUNMdkUsS0FBSyxZQUNMQyxNQUFPSSxFQUNQbUUsU0FBVTlELEVBQ1YrRCxZQUFhLHVCQUlqQiwyQkFDRSxnQkFBQyxLQUFELENBQ0VGLEtBQUssT0FDTHZFLEtBQUssV0FDTEMsTUFBT1AsRUFDUDhFLFNBQVUxRSxFQUNWMkUsWUFBYSxZQUVmLGdCQUFDLEtBQUQsQ0FDRUYsS0FBSyxPQUNMdkUsS0FBSyxZQUNMQyxNQUFPSyxFQUNQa0UsU0FBVTlELEVBQ1YrRCxZQUFhLHNCQUdqQiwyQkFDRSxnQkFBQyxLQUFELENBQ0VGLEtBQUssT0FDTHZFLEtBQUssV0FDTEMsTUFBT04sRUFDUDZFLFNBQVUxRSxJQUVaLGdCQUFDLEtBQUQsQ0FDRXlFLEtBQUssT0FDTHZFLEtBQUssWUFDTEMsTUFBT00sRUFDUGlFLFNBQVU5RCxLQUlkLDJCQUNFLGdCQUFDLEtBQUQsQ0FDRTZELEtBQUssT0FDTHZFLEtBQUssV0FDTEMsTUFBT0wsRUFDUDRFLFNBQVUxRSxJQUVaLGdCQUFDLEtBQUQsQ0FDRXlFLEtBQUssT0FDTHZFLEtBQUssWUFDTEMsTUFBT08sRUFDUGdFLFNBQVU5RCxLQUdkLDJCQUNFLGdCQUFDLEtBQUQsQ0FDRTZELEtBQUssT0FDTHZFLEtBQUssV0FDTEMsTUFBT0osRUFDUDJFLFNBQVUxRSxJQUVaLGdCQUFDLEtBQUQsQ0FDRXlFLEtBQUssT0FDTHZFLEtBQUssWUFDTEMsTUFBT1EsRUFDUCtELFNBQVU5RCxNQUtoQixnQkFBQyxLQUFELEtBQ0UsMEJBQVFwQyxRQUFTeUUsR0FBakIsV0FHRDNELEdBQ0MsZ0JBQUMsS0FBRCxLQUNFLDBDQUNDbUMsRUFBUW1ELEtBQUksQ0FBQ0MsRUFBR0MsS0FDZixNQUFNQyxFQUFNRCxFQUFNRSxXQUVsQixNQUFVLEtBQU5ILEVBRUEsdUJBQUtJLElBQUtILEdBQ1IsNEJBQU9ELEdBQ1AsZ0JBQUMsS0FBRCxDQUNFSixLQUFLLE9BQ0xDLFNBQVd6RSxJQUNUOEIsRUFBWSxJQUNQRCxFQUNILENBQUUsR0FBRWlELEtBQVE5RSxFQUFFRyxPQUFPRCxZQU94Qix1QkFBSzhFLElBQUtILEVBQU9JLFVBQVcsWUFHdkMsZ0JBQUNwRyxFQUFELENBQVFOLFFBQVM4RSxHQUFqQixhLHFDRTVUWixNQTZMQSxFQTdMYSxLQUNYLE1BQU02QixFQUFlLENBQ25CLE9BQ0EsU0FDQSxjQUNBLG9CQUNBLE9BQ0EsT0FDQSx1QkFDQSxXQUNBLGdCQUNBLE9BQ0EsU0FDQSxnQkFDQSxtQkFDQSwwQkFDQSxpQkFDQSxPQUNBLHVCQUNBLG1CQUdLakcsRUFBVWtHLEVBQWtCQyxJQUFlQyxFQUFBQSxFQUFBQSxHQUFTLEtBQ3BEbEcsRUFBYW1HLEVBQXFCQyxJQUFrQkYsRUFBQUEsRUFBQUEsR0FBUyxLQUM3RGpHLEVBQVVvRyxJQUFlakcsRUFBQUEsRUFBQUEsVUFBUzJGLEVBQWEsSUFFaERPLEdBQW1CeEMsRUFBQUEsRUFBQUEsY0FBYWpELElBQ3BDd0YsRUFBWXhGLEVBQUVHLE9BQU9ELFNBQ3BCLEtBRUl3RixFQUFPQyxJQUFZcEcsRUFBQUEsRUFBQUEsVUFBUyxLQUM1QnFHLEVBQVVDLElBQWV0RyxFQUFBQSxFQUFBQSxVQUFTLEtBQ2xDdUcsRUFBVUMsSUFBZXhHLEVBQUFBLEVBQUFBLFdBQVMsR0FFbkN5RyxFQUFzQkMsSUFDMUIsTUFBTUMsRUFBYyxJQUFJQyxXQUl4QixPQUZBRCxFQUFPRSxjQUFjSCxHQUVkLElBQUlJLFNBQWVDLElBQ3hCSixFQUFPSyxPQUFTLEtBQ1ZMLEVBQU9NLFFBQVFYLEVBQVlLLEVBQU9NLFFBQ3RDVCxHQUFZLEdBRVpPLFVBWUNwSCxFQUFVdUgsSUFBZWxILEVBQUFBLEVBQUFBLFVBQVMsS0FFekNtSCxFQUFBQSxFQUFBQSxZQUFVLEtBQ1IsR0FBSWhCLEdBQVNFLEVBQVUsQ0FDckIsTUFBTWUsRUFBVyxJQUFJQyxTQUNyQkQsRUFBU0UsT0FBTyxTQUFVbkIsRUFBTSxJQUVoQ2xDLElBQUFBLEtBQ1EsZ0NBQWlDbUQsRUFBVSxDQUMvQ2xELFFBQVMsQ0FDUEMsY0FBZ0IsVUFBU0MsYUFBYUMsUUFBUSxTQUM5QyxlQUFnQix5QkFHbkJDLE1BQU1DLElBQ0wyQyxFQUFZM0MsRUFBU2dELEtBQUs1SCxVQUMxQmdGLFFBQVFDLElBQUlMLE1BRWJFLE9BQU8rQyxXQUVYLENBQUNyQixFQUFPRSxJQUVYLE1BQU1vQixFQUFXLElBQUlKLFNBRWZLLEdBQVNoRSxFQUFBQSxFQUFBQSxjQUFhakQsSUFFMUIsR0FEQUEsRUFBRXNELGlCQUNFdEQsRUFBRWtILGFBQWF2RixNQUNqQixJQUFLLElBQUlWLEVBQUksRUFBR0EsRUFBSWpCLEVBQUVrSCxhQUFhQyxNQUFNOUYsT0FBUUosSUFFL0MsR0FBcUMsU0FBakNqQixFQUFFa0gsYUFBYUMsTUFBTWxHLEdBQUdtRyxLQUFpQixDQUMzQyxNQUFNQyxFQUFPckgsRUFBRWtILGFBQWFDLE1BQU1sRyxHQUFHcUcsWUFDckNOLEVBQVNILE9BQU8sU0FBVVEsU0FJOUIsSUFBSyxJQUFJcEcsRUFBSSxFQUFHQSxFQUFJakIsRUFBRWtILGFBQWF4QixNQUFNckUsT0FBUUosSUFDL0MrRixFQUFTSCxPQUFPLFNBQVU3RyxFQUFFa0gsYUFBYXhCLE1BQU16RSxJQUluRDBFLEVBQVMzRixFQUFFa0gsYUFBYXhCLE9BRXhCTSxFQUFtQmhHLEVBQUVrSCxhQUFheEIsTUFBTSxNQUN2QyxJQUVHNkIsR0FBYXRFLEVBQUFBLEVBQUFBLGNBQWFqRCxJQUM5QkEsRUFBRXNELGlCQUNGeUMsR0FBWSxLQUNYLElBRUgsT0FDRSwyQkFDRSxnQkFBQ3lCLEVBQUEsRUFBRCxDQUFjdEosTUFBTyxXQUVyQixnQkFBQ1IsRUFBRCxLQUNFLGdCQUFDZSxFQUFELEtBQ0UsdUNBRUEsMkJBQ0UsZ0JBQUNDLEVBQUQsQ0FBU3VJLE9BQVFBLEVBQVFNLFdBQVlBLEdBQ2xDekIsR0FDQyxnQkFBQ25ILEVBQUQsS0FDRSxxQ0FHSGlILEdBQVksdUJBQUs2QixJQUFLN0IsRUFBVThCLElBQUksaUJBR3RDNUIsR0FDQyw0REFHRiwyQkFDRSx5QkFBTzZCLFFBQVEsUUFDYixzQ0FFRix5QkFDRW5ELEtBQUssT0FDTG9ELEdBQUcsT0FDSEMsT0FBTyxhQUNQcEQsU0F2Rk16RSxJQUNsQixNQUFNcUgsRUFBT3JILEVBQUVHLE9BQU91RixNQUN0QkMsRUFBUzBCLEdBRVRyQixFQUFtQmhHLEVBQUVHLE9BQU91RixNQUFNLFVBd0Y5QixnQkFBQzVHLEVBQUQsS0FDRSwyQkFDRSxnQkFBQ0MsRUFBRCxLQUNFLG1DQUNBLDZCQUNFLGdCQUFDQyxFQUFELGNBQ0EsZ0JBQUMsS0FBRCxDQUNFd0YsS0FBSyxPQUNMdkUsS0FBSyxZQUNMQyxNQUFPakIsRUFDUHdGLFNBQVVVLEVBQ1ZULFlBQVksY0FHaEIsNkJBQ0UsZ0JBQUMxRixFQUFELGFBQ0EsMEJBQVF5RixTQUFVZ0IsRUFBa0J2RixNQUFPZCxHQUN4QzhGLEVBQWFQLEtBQUtoRCxHQUNqQiwwQkFBUXpCLE1BQU95QixFQUFNcUQsSUFBS3JELEdBQ3ZCQSxPQUtULDZCQUNFLGdCQUFDM0MsRUFBRCxjQUNBLGdCQUFDLEtBQUQsQ0FDRXdGLEtBQUssT0FDTHZFLEtBQUssZ0JBQ0xDLE1BQU9mLEVBQ1BzRixTQUFVYSxFQUNWWixZQUFZLHNCQUdoQixnQkFBQyxFQUFELENBQ0V6RixTQUFVQSxFQUNWQyxTQUFVQSxFQUNWQyxZQUFhQSxFQUNiQyxTQUFVQSxXLHdMQ2xNbkIsTUFBTTFCLEVBQVVDLEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7RUFTckJtSyxFQUFTbkssRUFBQUEsRUFBQUEsTUFBYzs7Ozs7RUFPdkJvSyxFQUFNcEssRUFBQUEsRUFBQUEsR0FBVzs7RUFJakJxSyxFQUFTckssRUFBQUEsRUFBQUEsTUFBYzs7Ozs7Ozs7Ozs7Ozs7O0VBaUJ2QnNLLEVBQVl0SyxFQUFBQSxFQUFBQSxHQUFXOzs7OztFQU92QnVLLEVBQU92SyxFQUFBQSxFQUFBQSxJQUFZOzs7O0VBTW5Cd0ssRUFBUXhLLEVBQUFBLEVBQUFBLEtBQWE7Ozs7Ozs7Ozs7Ozs7OztFQWlCckJFLEVBQVFGLEVBQUFBLEVBQUFBLEtBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxQnJCeUssRUFBWXpLLEVBQUFBLEVBQUFBLE1BQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CMUIwSyxFQUFjMUssRUFBQUEsRUFBQUEsR0FBVzs7Ozs7Ozs7O0VBV3pCMkssRUFBUTNLLEVBQUFBLEVBQUFBLEdBQVc7Ozs7RUFNbkI0SyxFQUFVNUssRUFBQUEsRUFBQUEsR0FBVzs7OztFQU1yQjZLLEVBQWdCN0ssRUFBQUEsRUFBQUEsR0FBVzs7Ozs7Ozs7O0VBVzNCOEssRUFBWTlLLEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7Ozs7OztFQWN2QitLLEVBQWdCL0ssRUFBQUEsRUFBQUEsQ0FBUzs7Ozs7Ozs7Ozs7Ozs7RUFnQnpCZ0wsRUFBY2hMLEVBQUFBLEVBQUFBLEdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL09wdGlvbi9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvUmVwb25zaXZlQmFyL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9SZXBvbnNpdmVCYXIvaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvU2VsbC9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvT3B0aW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi91dGlscy9tYWtlT3B0aW9uUmVxdWVzdHMudHMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9TZWxsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9wYWdlcy9TaWduVXAvc3R5bGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBgO1xuXG5leHBvcnQgY29uc3QgT3B0Q291bnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDFyZW0gMDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cbiAgJiBkaXYge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuXG4gICAgJiBzZWxlY3Qge1xuICAgICAgd2lkdGg6IDV2dztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBPcHROYW1lSW5wdXQgPSBzdHlsZWQuZGl2YFxuICAmID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcblxuICAgICYgPiBzcGFuOmZpcnN0LW9mLXR5cGUsXG4gICAgJiA+IGlucHV0OmZpcnN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG5cbiAgICAmID4gc3BhbjpsYXN0LW9mLXR5cGUsXG4gICAgJiA+IGlucHV0Omxhc3Qtb2YtdHlwZSB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG5cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWFrZVRhYmxlQnRuID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgbWFyZ2luLXRvcDogMnJlbTtcblxuICAmIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjM1MzU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE9wdFRhYmxlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAmID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcblxuICAgICYgPiBzcGFuIHtcbiAgICAgIHdpZHRoOiAyNSU7XG5cbiAgICAgIC8vd2lkdGg6NzBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgJiA+IGlucHV0IHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICB9XG5cbiAgLmxpbmUge1xuICAgIHdpZHRoOiA5NS4zJTtcbiAgICBoZWlnaHQ6IDElO1xuXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcblxuICBwYWRkaW5nOiAxcmVtIDA7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmIGRpdiB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJhY2sgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuNXJlbTtcblxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgRkMsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFjaywgVGl0bGUsIFdyYXBwZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvUmVwb25zaXZlQmFyL3N0eWxlc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFBcnJvd0xlZnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBSZXBvbnNpdmVCYXI6IEZDPFByb3BzPiA9ICh7IHRpdGxlIH0pID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBoYW5kbGVIaXN0b3J5ID0gKCkgPT4ge1xuICAgIGhpc3RvcnkuZ29CYWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxCYWNrPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IG9uQ2xpY2s9e2hhbmRsZUhpc3Rvcnl9IC8+XG4gICAgICAgIDwvQmFjaz5cbiAgICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb25zaXZlQmFyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbi10b3A6IC04cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgSW1hZ2UgPSBzdHlsZWQuc2VjdGlvbmBcbiAgJiA+IGRpdiB7XG4gICAgbWFyZ2luLXRvcDogOHJlbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgbWFyZ2luLXRvcDogMTZyZW07XG4gICAgfVxuXG4gICAgJiA+IHNwYW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB9XG5cbiAgICAmID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuXG4gICAgICAmID4gbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDc3LCA3NywgNzcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjM1MzU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICNmaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcmV2aWV3ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDE4cmVtO1xuICBoZWlnaHQ6IDE4cmVtO1xuXG4gIG1hcmdpbjogMCBhdXRvO1xuICAvL21hcmdpbi10b3A6IDJyZW07XG5cbiAgJiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdPdmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC40KTtcbmA7XG5cbmV4cG9ydCBjb25zdCBFeHBsYWluID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXlCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMjVyZW07XG4gIGhlaWdodDogNHJlbTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjM1MzU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgT3B0aW9uSW5mbyA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtSW5mbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuXG4gICYgPiBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG5cbiAgJiBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgICYgc2VsZWN0IHtcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICB3aWR0aDogMTByZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG5cbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgfVxuXG4gICAgJiBzZWxlY3Q6Zm9jdXMge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I3YWNhYztcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgb3V0bGluZTogM3B4IHNvbGlkICNmOGU0ZmY7XG4gICAgfVxuICB9XG5cbiAgJiBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtVGl0bGUgPSBzdHlsZWQuaGVhZGVyYFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgRkMsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV5QnRuLCBFeHBsYWluIH0gZnJvbSBcIkBjb21wb25lbnRzL1NlbGwvc3R5bGVzXCI7XG5pbXBvcnQge1xuICBJbnB1dCxcbiAgTWFrZVRhYmxlQnRuLFxuICBPcHROYW1lSW5wdXQsXG4gIE9wdFRhYmxlLFxuICBXcmFwcGVyLFxufSBmcm9tIFwiQGNvbXBvbmVudHMvT3B0aW9uL3N0eWxlc1wiO1xuaW1wb3J0IHsgbWFrZU9wdGlvbkdyb3VwUmVxdWVzdHMgfSBmcm9tIFwiQHV0aWxzL21ha2VPcHRpb25SZXF1ZXN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGl0ZW1OYW1lOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGluZm9ybWF0aW9uOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG59XG5cbmNvbnN0IE9wdGlvbjogRkM8UHJvcHM+ID0gKHsgaXRlbU5hbWUsIGltYWdlVXJsLCBpbmZvcm1hdGlvbiwgY2F0ZWdvcnkgfSkgPT4ge1xuICBjb25zdCBbdG9nZ2xlVGFibGUsIHNldFRvZ2dsZVRhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvL29wdE5hbWVcbiAgY29uc3QgW29wdE5hbWUsIHNldE9wdE5hbWVdID0gdXNlU3RhdGUoe1xuICAgIG9wdE5hbWUxOiBcIlwiLFxuICAgIG9wdE5hbWUyOiBcIlwiLFxuICAgIG9wdE5hbWUzOiBcIlwiLFxuICAgIG9wdE5hbWU0OiBcIlwiLFxuICAgIG9wdE5hbWU1OiBcIlwiLFxuICB9KTtcblxuICBjb25zdCB7IG9wdE5hbWUxLCBvcHROYW1lMiwgb3B0TmFtZTMsIG9wdE5hbWU0LCBvcHROYW1lNSB9ID0gb3B0TmFtZTtcblxuICBjb25zdCBvbkNoYW5nZU9wdE5hbWUgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcblxuICAgIHNldE9wdE5hbWUoe1xuICAgICAgLi4ub3B0TmFtZSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgLy9vcHRWYWx1ZVxuICBjb25zdCBbb3B0VmFsdWUsIHNldE9wdFZhbHVlXSA9IHVzZVN0YXRlKHtcbiAgICBvcHRWYWx1ZTE6IFwiXCIsXG4gICAgb3B0VmFsdWUyOiBcIlwiLFxuICAgIG9wdFZhbHVlMzogXCJcIixcbiAgICBvcHRWYWx1ZTQ6IFwiXCIsXG4gICAgb3B0VmFsdWU1OiBcIlwiLFxuICB9KTtcblxuICBjb25zdCB7IG9wdFZhbHVlMSwgb3B0VmFsdWUyLCBvcHRWYWx1ZTMsIG9wdFZhbHVlNCwgb3B0VmFsdWU1IH0gPSBvcHRWYWx1ZTtcblxuICBjb25zdCBvbkNoYW5nZU9wdFZhbHVlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cbiAgICBzZXRPcHRWYWx1ZSh7XG4gICAgICAuLi5vcHRWYWx1ZSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8g7Ji17IWY66qFIOuqqOydjCDsnbzssKgg67Cw7Je0XG4gIGxldCBvcHROYW1lQWxsOiBzdHJpbmdbXSA9IE9iamVjdC52YWx1ZXMob3B0TmFtZSk7XG5cbiAgbGV0IG9wdFZhbHVlQWxsOiBzdHJpbmdbXSA9IE9iamVjdC52YWx1ZXMob3B0VmFsdWUpO1xuICAvLyDtlZwg7Ji17IWY66qF7J2YIOyYteyFmOqwkuuTpCDrqqjsnYwg7J207LCoIOuwsOyXtFxuICBsZXQgb3B0OiBzdHJpbmdbXVtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBsZXQgdGVtcCA9IG9wdFZhbHVlQWxsW2ldLnNwbGl0KFwiLFwiKTtcblxuICAgIGxldCBhcnk6IHN0cmluZ1tdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyeS5wdXNoKHRlbXBbaV0udHJpbSgpKTtcbiAgICB9XG5cbiAgICBpZiAodGVtcFswXSAhPT0gXCJcIikgb3B0LnB1c2goYXJ5KTtcbiAgfVxuXG4gIC8vIOyYteyFmOqwkuuTpCDrqqjsnYwg7J287LCoIOuwsOyXtFxuICBsZXQgb3B0RmxhdDogc3RyaW5nW10gPSBbXTtcblxuICBsZXQgZHVtbXlPcHQ6IHN0cmluZ1tdW10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdC5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0ZW1wID0gb3B0W2ldPy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IFwiXCIpO1xuXG4gICAgZHVtbXlPcHQucHVzaCh0ZW1wKTtcbiAgICBvcHRbaV0gPSB0ZW1wO1xuXG4gICAgaWYgKGkgIT09IG9wdC5sZW5ndGggLSAxKSBkdW1teU9wdC5wdXNoKFtcIlwiXSk7XG4gIH1cblxuICBvcHRGbGF0ID0gZHVtbXlPcHQuZmxhdCgpO1xuXG4gIC8vIOyYteyFmOqwkuuTpCDqsIHqsIEg7LaU6rCAIOqwgOqyqVxuXG4gIGNvbnN0IFtvcHRQcmljZSwgc2V0T3B0UHJpY2VdID0gdXNlU3RhdGU8T2JqZWN0Pih7fSk7XG5cbiAgbGV0IHByaWNlOiBzdHJpbmdbXSA9IE9iamVjdC52YWx1ZXMob3B0UHJpY2UpO1xuXG4gIGNvbnN0IERhdGEgPSBtYWtlT3B0aW9uR3JvdXBSZXF1ZXN0cyhcbiAgICBvcHRGbGF0LFxuICAgIHByaWNlLFxuICAgIG9wdE5hbWVBbGwsXG4gICAgb3B0LFxuICAgIGl0ZW1OYW1lLFxuICAgIGltYWdlVXJsLFxuICAgIGluZm9ybWF0aW9uLFxuICAgIGNhdGVnb3J5XG4gICk7XG5cbiAgY29uc3Qgb25DbGlja1RvZ2dsZVRhYmxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIGlmICghY2hlY2tJbWcpIHtcbiAgICAvLyAgIGFsZXJ0KFwi7IKs7KeEIOuTseuhneydhCDtlbTso7zshLjsmpQuXCIpO1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cblxuICAgIGlmIChpbmZvcm1hdGlvbiA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCLsg4HshLgg7ISk66qF7J2EIOyeheugpe2VtOyjvOyEuOyalC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluZm9ybWF0aW9uID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIuyDgeyEuCDshKTrqoXsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXRlbU5hbWUgPT09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwi7IOB7ZKIIOydtOumhOydhCDsnoXroKXtlbTso7zshLjsmpQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcHROYW1lMSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCLsmLXshZjrqoXsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoRGF0YT8ub3B0aW9uR3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYWxlcnQoXCLsmLXshZjqsJLsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRUb2dnbGVUYWJsZSgocHJldikgPT4gIXByZXYpO1xuICB9LCBbaXRlbU5hbWUsIG9wdE5hbWUxLCBEYXRhXSk7XG5cbiAgY29uc3Qgb25TdWJtaXRJdGVtcyA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIGlmICghY2hlY2tJbWcpIHtcbiAgICAgIC8vICAgYWxlcnQoXCLsgqzsp4Qg65Ox66Gd7J2EIO2VtOyjvOyEuOyalFwiKTtcbiAgICAgIC8vICAgcmV0dXJuO1xuICAgICAgLy8gfVxuXG4gICAgICBpZiAoaW5mb3JtYXRpb24gPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCLsg4HshLgg7ISk66qF7J2EIOyeheugpe2VtOyjvOyEuOyalC5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdE5hbWUxID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwi7Ji17IWY66qF7J2EIOyeheugpe2VtOyjvOyEuOyalC5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKERhdGE/Lm9wdGlvbkdyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWxlcnQoXCLsmLXshZjqsJLsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoRGF0YT8ub3B0aW9uR3JvdXBzWzBdPy5vcHRpb25zWzBdPy5wcmljZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFsZXJ0KFwi6rCA6rKp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcImh0dHBzOi8vd2F5Y2FidmF2LnNob3AvaXRlbXNcIiwgRGF0YSwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKX1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwi65Ox66GdIOyEseqztSFcIik7XG4gICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cInNlbGxwYWdlL3NlbGxzdG9ja1wiIC8+O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwi7IOB7ZKIIOuTseuhneyXkCDsi6TtjKjtlZjsmIDsirXri4jri6QuXCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFtEYXRhXVxuICApO1xuXG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KERhdGEpKTtcblxuICBjb25zb2xlLmxvZyh7XG4gICAgaXRlbU5hbWU6IFwi7LWc6rOg6riJIO2ctOyngO2GtVwiLFxuICAgIGltYWdlVXJsOlxuICAgICAgXCJodHRwczovL3dheWMtZGVwbG95LWJ1Y2tldC5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tL2ltYWdlcy80NjVkNDM2Mi0yOTJlLTRiNzYtYTRmZC03ODYxYWIyMDJjNDUtJUUxJTg0JTkyJUUxJTg1JUIyJUUxJTg0JThDJUUxJTg1JUI1JUUxJTg0JTkwJUUxJTg1JUE5JUUxJTg2JUJDLmpwZWdcIixcbiAgICBpbmZvcm1hdGlvbjogXCLsnbQg7IOB7ZKI7J2AIOy1nOqzoOq4iSDtnLTsp4DthrXsnoXri4jri6QuXCIsXG4gICAgY2F0ZWdvcnk6IFwiSG9tZVwiLFxuICAgIG9wdGlvbkdyb3VwczogW1xuICAgICAge1xuICAgICAgICBvcHRpb25zOiBbeyBvcHRpb25OYW1lOiBcImJsYWNrXCIsIHByaWNlOiAyMDAwMDAwIH1dLFxuICAgICAgICBvcHRpb25Hcm91cE5hbWU6IFwiY29sb3JcIixcbiAgICAgICAgYmFzaWM6IFwidHJ1ZVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPGgyPuyYteyFmDwvaDI+XG4gICAgICA8RXhwbGFpbj5cbiAgICAgICAg7LKr67KI7Ke4IOyYteyFmOyXlCDquLDrs7jqsJLsnYQg64Sj7Ja07KO87IS47JqULiDsmLXshZjqsJLsnYAgMSwwMDDsm5Ag7J207IOBXG4gICAgICAgIDxiciAvPlxuICAgICAgICDsmLXshZjrqoUgNeyekCDsnbTsg4EsIOyYteyFmOqwkiA07J6QIOydtOyDgVxuICAgICAgPC9FeHBsYWluPlxuICAgICAgPGRpdj5cbiAgICAgICAgPE9wdE5hbWVJbnB1dD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4+7Ji17IWY66qFPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+7Ji17IWY6rCSPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwib3B0TmFtZTFcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0TmFtZTF9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU9wdE5hbWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIuyYiOyLnCkg7IOJ7IOBXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm9wdFZhbHVlMVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtvcHRWYWx1ZTF9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU9wdFZhbHVlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLquLDrs7jqsJIg7J6F66ClLCDsmIjsi5wpIDIwMDAwXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJvcHROYW1lMlwiXG4gICAgICAgICAgICAgIHZhbHVlPXtvcHROYW1lMn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlT3B0TmFtZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi7JiI7IucKSDsgqzsnbTspohcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwib3B0VmFsdWUyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdFZhbHVlMn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlT3B0VmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIuyYteyFmOqwkiDsnoXroKUsIOyYiOyLnCkgMTAwMFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm9wdE5hbWUzXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdE5hbWUzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VPcHROYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJvcHRWYWx1ZTNcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0VmFsdWUzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VPcHRWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm9wdE5hbWU0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdE5hbWU0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VPcHROYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJvcHRWYWx1ZTRcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0VmFsdWU0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VPcHRWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJvcHROYW1lNVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtvcHROYW1lNX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlT3B0TmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwib3B0VmFsdWU1XCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdFZhbHVlNX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlT3B0VmFsdWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L09wdE5hbWVJbnB1dD5cblxuICAgICAgICA8TWFrZVRhYmxlQnRuPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja1RvZ2dsZVRhYmxlfT7rqqnroZ0g66eM65Ok6riwPC9idXR0b24+XG4gICAgICAgIDwvTWFrZVRhYmxlQnRuPlxuXG4gICAgICAgIHt0b2dnbGVUYWJsZSAmJiAoXG4gICAgICAgICAgPE9wdFRhYmxlPlxuICAgICAgICAgICAgPGgyPuyYteyFmCDrqqnroZ0o7LaU6rCAIOqwgOqyqSk8L2gyPlxuICAgICAgICAgICAge29wdEZsYXQubWFwKCh2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBudW0gPSBpbmRleC50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIGlmICh2ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wdFByaWNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3B0UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtudW19YF06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcImxpbmVcIn0+PC9kaXY+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxCdXlCdG4gb25DbGljaz17b25TdWJtaXRJdGVtc30+7IOB7ZKIIOuTseuhnTwvQnV5QnRuPlxuICAgICAgICAgIDwvT3B0VGFibGU+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcHRpb247XG4iLCJjb25zdCBtYWtlT3B0aW9uUmVxdWVzdHMgPSAoXG4gIG9wdEZsYXQ6IHN0cmluZ1tdLFxuICBwcmljZTogc3RyaW5nW10sXG4gIG9wdDogc3RyaW5nW11bXVxuKSA9PiB7XG4gIGxldCBvcHRpb25zOiBBcnJheTxPYmplY3Q+ID0gW107XG5cbiAgY29uc3QgbGVuID0gb3B0RmxhdC5sZW5ndGg7XG5cbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gKyBvcHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob3B0RmxhdFtpXSAhPT0gXCJcIikge1xuICAgICAgY29uc3Qgb3B0aW9uOiBvYmplY3QgPSB7XG4gICAgICAgIG9wdGlvbk5hbWU6IG9wdEZsYXRbaV0sXG4gICAgICAgIHByaWNlOiBwYXJzZUludChwcmljZVtjb3VudF0pLFxuICAgICAgfTtcblxuICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ha2VPcHRpb25Hcm91cFJlcXVlc3RzID0gKFxuICBvcHRGbGF0OiBzdHJpbmdbXSxcbiAgcHJpY2U6IHN0cmluZ1tdLFxuICBvcHROYW1lQWxsOiBzdHJpbmdbXSxcbiAgb3B0OiBzdHJpbmdbXVtdLFxuICBvcHROYW1lOiBzdHJpbmcsXG4gIGltYWdlVXJsOiBzdHJpbmcsXG4gIGl0ZW1FeHBsYWluOiBzdHJpbmcsXG4gIGl0ZW1DYXRlZ29yeTogc3RyaW5nXG4pID0+IHtcbiAgbGV0IG9wdExlbiA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0Lmxlbmd0aDsgaSsrKSB7XG4gICAgb3B0TGVuLnB1c2gob3B0W2ldLmxlbmd0aCk7XG4gIH1cblxuICBjb25zdCBvcHRSZXF1ZXN0cyA9IG1ha2VPcHRpb25SZXF1ZXN0cyhvcHRGbGF0LCBwcmljZSwgb3B0KTtcblxuICBsZXQgZWFjaEdyb3VwOiBhbnkgPSBbXTtcblxuICBsZXQgc3RhcnQgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0TGVuLmxlbmd0aDsgaSsrKSB7XG4gICAgZWFjaEdyb3VwLnB1c2goe1xuICAgICAgW1wib3B0aW9uc1wiXTogb3B0UmVxdWVzdHMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgb3B0TGVuW2ldKSxcbiAgICAgIFtcIm9wdGlvbkdyb3VwTmFtZVwiXTogb3B0TmFtZUFsbFtpXSxcbiAgICAgIFtcImJhc2ljXCJdOiBpID09PSAwID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIsXG4gICAgfSk7XG5cbiAgICBzdGFydCArPSBvcHRMZW5baV07XG4gIH1cblxuICBlYWNoR3JvdXAgPSB7XG4gICAgW1wiaXRlbU5hbWVcIl06IG9wdE5hbWUsXG4gICAgW1wiaW1hZ2VVcmxcIl06IGltYWdlVXJsLFxuICAgIFtcImluZm9ybWF0aW9uXCJdOiBpdGVtRXhwbGFpbixcbiAgICBbXCJjYXRlZ29yeVwiXTogaXRlbUNhdGVnb3J5LFxuICAgIFtcIm9wdGlvbkdyb3Vwc1wiXTogZWFjaEdyb3VwLFxuICB9O1xuXG4gIHJldHVybiBlYWNoR3JvdXA7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdGF0dXNCYXIgZnJvbSBcIkBjb21wb25lbnRzL1N0YXR1c0JhclwiO1xuaW1wb3J0IE9wdGlvbiBmcm9tIFwiQGNvbXBvbmVudHMvT3B0aW9uXCI7XG5pbXBvcnQge1xuICBXcmFwcGVyLFxuICBJdGVtSW5mbyxcbiAgSXRlbVRpdGxlLFxuICBQcmV2aWV3LFxuICBJbWFnZSxcbiAgT3B0aW9uSW5mbyxcbiAgRHJhZ092ZXIsXG59IGZyb20gXCJAY29tcG9uZW50cy9TZWxsL3N0eWxlc1wiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQHBhZ2VzL1NpZ25VcC9zdHlsZXNcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiQGhvb2tzL3VzZUlucHV0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVwb25zaXZlQmFyIGZyb20gXCJAY29tcG9uZW50cy9SZXBvbnNpdmVCYXJcIjtcblxuY29uc3QgU2VsbCA9ICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gW1xuICAgIFwiRm9vZFwiLFxuICAgIFwiSGVhbHRoXCIsXG4gICAgXCJFbGVjdHJvbmljc1wiLFxuICAgIFwiU3BvcnRzICYgT3V0ZG9vcnNcIixcbiAgICBcIkJhYnlcIixcbiAgICBcIkhvbWVcIixcbiAgICBcIkhvdXNlaG9sZCBFc3NlbnRpYWxzXCIsXG4gICAgXCJDbG90aGluZ1wiLFxuICAgIFwiUGVyc29uYWwgQ2FyZVwiLFxuICAgIFwiVG95c1wiLFxuICAgIFwiQmVhdXR5XCIsXG4gICAgXCJTaG9wIGJ5IEJyYW5kXCIsXG4gICAgXCJIb21lIEltcHJvdmVtZW50XCIsXG4gICAgXCJJbmR1c3RyaWFsICYgU2NpZW50aWZpY1wiLFxuICAgIFwiUGF0aW8gJiBHYXJkZW5cIixcbiAgICBcIlBldHNcIixcbiAgICBcIkFydHMgQ3JhZnRzICYgU2V3aW5nXCIsXG4gICAgXCJQcmVtaXVtIEJlYXV0eVwiLFxuICBdO1xuXG4gIGNvbnN0IFtpdGVtTmFtZSwgb25DaGFuZ2VJdGVtbmFtZSwgc2V0SXRlbU5hbWVdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtpbmZvcm1hdGlvbiwgb25DaGFuZ2VJbmZvcm1hdGlvbiwgc2V0SXRlbUV4cGxhaW5dID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Y2F0ZWdvcnldID0gdXNlU3RhdGUoY2F0ZWdvcnlMaXN0WzBdKTtcblxuICBjb25zdCBvbkNoYW5nZUNhdGVnb3J5ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRjYXRlZ29yeShlLnRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZHJhZ092ZXIsIHNldERyYWdPdmVyXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGVuY29kZUZpbGVUb0Jhc2U2NCA9IChmaWxlQmxvYjogQmxvYikgPT4ge1xuICAgIGNvbnN0IHJlYWRlcjogYW55ID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVCbG9iKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHJlYWRlci5yZXN1bHQpIHNldEltYWdlU3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICBzZXREcmFnT3ZlcihmYWxzZSk7XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkxvYWRGaWxlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcztcbiAgICBzZXRGaWxlcyhmaWxlKTtcblxuICAgIGVuY29kZUZpbGVUb0Jhc2U2NChlLnRhcmdldC5maWxlc1swXSk7XG4gIH07XG5cbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmaWxlcyAmJiBpbWFnZVNyYykge1xuICAgICAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcImltYWdlc1wiLCBmaWxlc1swXSk7XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9pbWFnZXNcIiwgZm9ybWRhdGEsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIil9YCxcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldEltYWdlVXJsKHJlc3BvbnNlLmRhdGEuaW1hZ2VVcmwpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xuICAgIH1cbiAgfSwgW2ZpbGVzLCBpbWFnZVNyY10pO1xuXG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuaXRlbSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLmRhdGFUcmFuc2Zlci5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBJZiBkcm9wcGVkIGl0ZW1zIGFyZW4ndCBmaWxlcywgcmVqZWN0IHRoZW1cbiAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zW2ldLmtpbmQgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLml0ZW1zW2ldLmdldEFzRmlsZSgpO1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlc1wiLCBmaWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlc1wiLCBlLmRhdGFUcmFuc2Zlci5maWxlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0RmlsZXMoZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuXG4gICAgZW5jb2RlRmlsZVRvQmFzZTY0KGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uRHJhZ092ZXIgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXREcmFnT3Zlcih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxSZXBvbnNpdmVCYXIgdGl0bGU9e1wi7YyQ66ekIOumrOyKpO2KuFwifSAvPlxuXG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPEltYWdlPlxuICAgICAgICAgIDxoMj7rk7HroZ0g7IOB7ZKIIOydtOuvuOyngDwvaDI+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFByZXZpZXcgb25Ecm9wPXtvbkRyb3B9IG9uRHJhZ092ZXI9e29uRHJhZ092ZXJ9PlxuICAgICAgICAgICAgICB7ZHJhZ092ZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxEcmFnT3Zlcj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+7IOB7ZKIIOyCrOynhDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRHJhZ092ZXI+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtpbWFnZVNyYyAmJiA8aW1nIHNyYz17aW1hZ2VTcmN9IGFsdD1cInByZXZpZXctaW1nXCIgLz59XG4gICAgICAgICAgICA8L1ByZXZpZXc+XG5cbiAgICAgICAgICAgIHtkcmFnT3ZlciAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuPuyCrOynhChqcGVn66eMIOqwgOuKpSnsnYAgMToxIOu5hOycqOydhCDqtozsnqXtlanri4jri6QuPC9zcGFuPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdj7tjIzsnbwg7JeF66Gc65OcPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICBpZD1cImZpbGVcIlxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL2pwZWdcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkxvYWRGaWxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSW1hZ2U+XG4gICAgICAgIDxPcHRpb25JbmZvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SXRlbUluZm8+XG4gICAgICAgICAgICAgIDxoMj7sg4Htkogg7KCV67O0PC9oMj5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxJdGVtVGl0bGU+7IOB7ZKIIOydtOumhDwvSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbU5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJdGVtbmFtZX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIOyYiOyLnCkg7J6g66eM67O0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPEl0ZW1UaXRsZT7subTthYzqs6Drpqw8L0l0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtvbkNoYW5nZUNhdGVnb3J5fSB2YWx1ZT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5TGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aXRlbX0ga2V5PXtpdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxJdGVtVGl0bGU+7IOB7IS4IOyEpOuqhTwvSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIml0ZW0tZnVsbG5hbWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2luZm9ybWF0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5mb3JtYXRpb259XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiDsmIjsi5wpIOyeoOunjOuztCDsp4Tsp5wg7J6g66eMIOyeoFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgIGl0ZW1OYW1lPXtpdGVtTmFtZX1cbiAgICAgICAgICAgICAgICBpbWFnZVVybD17aW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgaW5mb3JtYXRpb249e2luZm9ybWF0aW9ufVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSXRlbUluZm8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvT3B0aW9uSW5mbz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGw7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBtYXJnaW4tdG9wOiA2cmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGUxZTE7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA0LjVyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgU3ViSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogNDAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgJiBzcGFuIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgIHdpZHRoOiA3cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG4gIHdpZHRoOiAyNXJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDEwcHggMCAxNHB4O1xuICBtYXJnaW4tdG9wOiAwLjZyZW07XG4gIDpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2lnblVwQnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDI1cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRXJyb3JDaXJjbGUgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogOHB4IDAgMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29ycmVjdCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29ycmVjdENpcmNsZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoQm94ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmIHNwYW4ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcblxuICAgICYgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2MTYwNjE7XG4gIG1hcmdpbjogMCBhdXRvIDhweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICAmIGEge1xuICAgIGNvbG9yOiAjMTI2NGEzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tTZWxsZXIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuXG4gICYgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsIk9wdE5hbWVJbnB1dCIsIklucHV0IiwiTWFrZVRhYmxlQnRuIiwiT3B0VGFibGUiLCJCYWNrIiwiVGl0bGUiLCJ0aXRsZSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiaWNvbiIsImZhQXJyb3dMZWZ0Iiwib25DbGljayIsImdvQmFjayIsIkltYWdlIiwiUHJldmlldyIsIkRyYWdPdmVyIiwiRXhwbGFpbiIsIkJ1eUJ0biIsIk9wdGlvbkluZm8iLCJJdGVtSW5mbyIsIkl0ZW1UaXRsZSIsIml0ZW1OYW1lIiwiaW1hZ2VVcmwiLCJpbmZvcm1hdGlvbiIsImNhdGVnb3J5IiwidG9nZ2xlVGFibGUiLCJzZXRUb2dnbGVUYWJsZSIsInVzZVN0YXRlIiwib3B0TmFtZSIsInNldE9wdE5hbWUiLCJvcHROYW1lMSIsIm9wdE5hbWUyIiwib3B0TmFtZTMiLCJvcHROYW1lNCIsIm9wdE5hbWU1Iiwib25DaGFuZ2VPcHROYW1lIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsIm9wdFZhbHVlIiwic2V0T3B0VmFsdWUiLCJvcHRWYWx1ZTEiLCJvcHRWYWx1ZTIiLCJvcHRWYWx1ZTMiLCJvcHRWYWx1ZTQiLCJvcHRWYWx1ZTUiLCJvbkNoYW5nZU9wdFZhbHVlIiwib3B0TmFtZUFsbCIsIk9iamVjdCIsInZhbHVlcyIsIm9wdFZhbHVlQWxsIiwib3B0IiwiaSIsInRlbXAiLCJzcGxpdCIsImFyeSIsImxlbmd0aCIsInB1c2giLCJ0cmltIiwib3B0RmxhdCIsImR1bW15T3B0IiwiZmlsdGVyIiwiaXRlbSIsImZsYXQiLCJvcHRQcmljZSIsInNldE9wdFByaWNlIiwiRGF0YSIsInByaWNlIiwiaXRlbUV4cGxhaW4iLCJpdGVtQ2F0ZWdvcnkiLCJvcHRMZW4iLCJvcHRSZXF1ZXN0cyIsIm9wdGlvbnMiLCJsZW4iLCJjb3VudCIsIm9wdGlvbiIsIm9wdGlvbk5hbWUiLCJwYXJzZUludCIsIm1ha2VPcHRpb25SZXF1ZXN0cyIsImVhY2hHcm91cCIsInN0YXJ0Iiwic2xpY2UiLCJtYWtlT3B0aW9uR3JvdXBSZXF1ZXN0cyIsIm9uQ2xpY2tUb2dnbGVUYWJsZSIsInVzZUNhbGxiYWNrIiwib3B0aW9uR3JvdXBzIiwicHJldiIsImFsZXJ0Iiwib25TdWJtaXRJdGVtcyIsInByZXZlbnREZWZhdWx0IiwidW5kZWZpbmVkIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwicmVzcG9uc2UiLCJ0byIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcHRpb25Hcm91cE5hbWUiLCJiYXNpYyIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibWFwIiwidiIsImluZGV4IiwibnVtIiwidG9TdHJpbmciLCJrZXkiLCJjbGFzc05hbWUiLCJjYXRlZ29yeUxpc3QiLCJvbkNoYW5nZUl0ZW1uYW1lIiwic2V0SXRlbU5hbWUiLCJ1c2VJbnB1dCIsIm9uQ2hhbmdlSW5mb3JtYXRpb24iLCJzZXRJdGVtRXhwbGFpbiIsInNldGNhdGVnb3J5Iiwib25DaGFuZ2VDYXRlZ29yeSIsImZpbGVzIiwic2V0RmlsZXMiLCJpbWFnZVNyYyIsInNldEltYWdlU3JjIiwiZHJhZ092ZXIiLCJzZXREcmFnT3ZlciIsImVuY29kZUZpbGVUb0Jhc2U2NCIsImZpbGVCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9ubG9hZCIsInJlc3VsdCIsInNldEltYWdlVXJsIiwidXNlRWZmZWN0IiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImRhdGEiLCJlcnJvciIsImZvcm1EYXRhIiwib25Ecm9wIiwiZGF0YVRyYW5zZmVyIiwiaXRlbXMiLCJraW5kIiwiZmlsZSIsImdldEFzRmlsZSIsIm9uRHJhZ092ZXIiLCJSZXBvbnNpdmVCYXIiLCJzcmMiLCJhbHQiLCJodG1sRm9yIiwiaWQiLCJhY2NlcHQiLCJIZWFkZXIiLCJEaXYiLCJCdXR0b24iLCJTdWJIZWFkZXIiLCJGb3JtIiwiTGFiZWwiLCJTaWduVXBCdG4iLCJFcnJvckNpcmNsZSIsIkVycm9yIiwiQ29ycmVjdCIsIkNvcnJlY3RDaXJjbGUiLCJTZWFyY2hCb3giLCJMaW5rQ29udGFpbmVyIiwiQ2hlY2tTZWxsZXIiXSwic291cmNlUm9vdCI6IiJ9