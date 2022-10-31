"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[801],{89997:(e,t,o)=>{o.d(t,{II:()=>i,Zt:()=>l,im:()=>n,m2:()=>a,u5:()=>d});var r=o(97083);const n=r.Z.section``,l=(r.Z.div`
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
`,r.Z.div`
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
`),i=r.Z.input`
  border: none;
  border-bottom: 1px solid;
  font-size: 1.1rem;

  ::placeholder {
    font-size: 1rem;
  }
`,a=r.Z.div`
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
`,d=r.Z.div`
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
`},39975:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(67294),n=o(97083);const l=n.Z.div`
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
`,i=n.Z.div`
  font-size: 1.5rem;

  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  box-sizing: border-box;
  padding-left: 1rem;
`,a=n.Z.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`;var d=o(17625),s=o(51436),m=o(5977);const c=({title:e})=>{const t=(0,m.k6)();return r.createElement("div",null,r.createElement(l,null,r.createElement(i,null,r.createElement(d.G,{icon:s.acZ,onClick:()=>{t.goBack()}})),r.createElement(a,null,e),r.createElement("div",null)))}},16801:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var r=o(67294),n=o(63703),l=o(39975),i=o(9669),a=o.n(i),d=o(97083);const s=d.Z.div``,m=d.Z.div`
  padding-top: 2rem;
  & h1 {
    padding-bottom: 2rem;
  }
  & input {
    width: 20rem;
    height: 3rem;
    font-size: 0.9rem;
    border: 0;
    border-radius: 0.9rem;
    outline: none;
    padding-left: 1rem;
    background-color: rgb(233, 233, 233);
    margin-bottom: 1rem;
    margin-left: 2rem;

    :focus {
      background-color: rgb(220, 220, 220);
    }
  }
`,c=d.Z.div`
  & div {
    padding: 0.5rem 0.5rem;
  }
`,p=d.Z.div`
  padding: 1rem 1rem;
  font-weight: bolder;
  color: #706868;
  font-size: 1.2rem;
`,u=d.Z.div``,g=d.Z.div`
  display: flex;
  flex-direction: column;
`,h=d.Z.div`
  padding: 0.5rem 0.5rem;
  font-weight: bolder;
  color: #3f3838;
`,f=d.Z.div``,b=d.Z.button`
  width: 25rem;
  height: 4rem;

  background-color: cornflowerblue;
  color: white;

  border: transparent;
  border-radius: 20px;
  text-align: center;
  outline: none;
  margin-top: 1rem;
  margin-bottom: 2rem;

  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #d63535;
    border: none;
  }
`;var v=o(8100),w=o(83564),x=o(89997);const Z=()=>{const[e,t]=(0,r.useState)({}),{data:o,error:i}=(0,v.ZP)("https://waycabvav.shop/items/1",w.Z),d=o?.optionGroups?.length;let Z=[];for(let e=0;e<d;e++){let t=o?.optionGroups[e].optionGroupName;t&&Z.push(t)}let E=[];for(let e=0;e<d;e++){E.push([]);let t=o?.optionGroups[e].options.length;if(t)for(let r=0;r<t;r++)E[e].push(o?.optionGroups[e]?.options[r]?.optionName)}let k=[];for(let e=0;e<d;e++){k.push([]);let t=o?.optionGroups[e].options.length;if(t)for(let r=0;r<t;r++)k[e].push(o?.optionGroups[e]?.options[r]?.optionId)}console.log(o);let y=[];for(let e=0;e<E.length;e++)y.push(E[e][0]);let z=[];for(let e=0;e<d;e++)z.push(E[e]?.length);let I=E.flat(),G=k.flat();console.log(G);let C=G.length;const j=Object.values(e).map((e=>Number(e)));console.log(j);const S=((e,t,o)=>{let r=[];for(let n=0;n<o;n++){const o={optionIdList:[e[n]],quantity:t[n]};r.push(o)}return{stockInfos:r}})(G,j,C);console.log(S);const _=(0,r.useCallback)((e=>{e.preventDefault(),a().post("https://waycabvav.shop/stocks",S,{headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>{alert("등록 성공!")})).catch((e=>{alert("등록 실패")}))}),[S]);return r.createElement(s,null,r.createElement(l.Z,{title:"재고 등록"}),r.createElement(n.Df,null,"재고 등록"),r.createElement(m,null,r.createElement(c,null,r.createElement("h1",null,"등록 할 재고 확인"),Z.map(((e,t)=>r.createElement("div",{key:t},r.createElement(p,null,"상품 옵션 이름: ",e),r.createElement(u,null,[...Array(z[t])].map(((e,o)=>r.createElement("option",{value:E[t][o],key:o},E[t][o])))))))),r.createElement(g,null,r.createElement("h1",null,"수량 등록"),I.map(((o,n)=>{const l=n.toString();if(""!==o)return r.createElement("div",{key:n},r.createElement(h,null,o),r.createElement(f,null,r.createElement(x.II,{type:"text",placeholder:"등록할 수량을 입력해주세요",onChange:o=>{t({...e,[`${l}`]:o.target.value})}})))})))),r.createElement(b,{onClick:_},"재고 등록"))}},83564:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(9669),n=o.n(r);const l=e=>n().get(e,{withCredentials:!0,headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>e.data))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAxLmpzIiwibWFwcGluZ3MiOiJ1TEFFTyxNQUFNQSxFQUFVQyxFQUFBQSxFQUFBQSxPQUFlLEdBa0J6QkMsR0FoQldELEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7Ozs7Ozs7O0VBZ0JQQSxFQUFBQSxFQUFBQSxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0dBa0IxQkUsRUFBUUYsRUFBQUEsRUFBQUEsS0FBYTs7Ozs7Ozs7RUFVckJHLEVBQWVILEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE4QjFCSSxFQUFXSixFQUFBQSxFQUFBQSxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OERDNUU1QixNQUFNRCxFQUFVQyxFQUFBQSxFQUFBQSxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXlCckJLLEVBQU9MLEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7O0VBVWxCTSxFQUFRTixFQUFBQSxFQUFBQSxHQUFXOzs7O3NDQzNCaEMsTUFvQkEsRUFwQmdDLEVBQUdPLE1BQUFBLE1BQ2pDLE1BQU1DLEdBQVVDLEVBQUFBLEVBQUFBLE1BTWhCLE9BQ0UsMkJBQ0UsZ0JBQUNWLEVBQUQsS0FDRSxnQkFBQ00sRUFBRCxLQUNFLGdCQUFDLElBQUQsQ0FBaUJLLEtBQU1DLEVBQUFBLElBQWFDLFFBUnRCLEtBQ3BCSixFQUFRSyxhQVNKLGdCQUFDUCxFQUFELEtBQVFDLEdBQ1IsZ0MsaUhDdEJELE1BQU1SLEVBQVVDLEVBQUFBLEVBQUFBLEdBQVcsR0FFckJjLEVBQVlkLEVBQUFBLEVBQUFBLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNCdkJlLEVBQWFmLEVBQUFBLEVBQUFBLEdBQVc7Ozs7RUFNeEJnQixFQUFZaEIsRUFBQUEsRUFBQUEsR0FBVzs7Ozs7RUFPdkJpQixFQUFhakIsRUFBQUEsRUFBQUEsR0FBVyxHQUV4QmtCLEVBQWdCbEIsRUFBQUEsRUFBQUEsR0FBVzs7O0VBSTNCbUIsRUFBZW5CLEVBQUFBLEVBQUFBLEdBQVc7Ozs7RUFLMUJvQixFQUFnQnBCLEVBQUFBLEVBQUFBLEdBQVcsR0FFM0JxQixFQUFTckIsRUFBQUEsRUFBQUEsTUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0M3QnBDLE1Bb01BLEVBcE1rQixLQUNoQixNQUFPc0IsRUFBUUMsSUFBYUMsRUFBQUEsRUFBQUEsVUFBYyxLQThCbENDLEtBQU1DLEVBQVIsTUFBa0JDLElBQVVDLEVBQUFBLEVBQUFBLElBQ2hDLGlDQUNBQyxFQUFBQSxHQUlJQyxFQUFpQkosR0FBVUssY0FBY0MsT0FHL0MsSUFBSUMsRUFBK0IsR0FFbkMsSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUlKLEVBQVdJLElBQUssQ0FDbEMsSUFBSUMsRUFBT1QsR0FBVUssYUFBYUcsR0FBR0UsZ0JBRWpDRCxHQUFNRixFQUFjSSxLQUFLRixHQUkvQixJQUFJRyxFQUE0QixHQUVoQyxJQUFLLElBQUlKLEVBQUksRUFBR0EsRUFBSUosRUFBV0ksSUFBSyxDQUNsQ0ksRUFBY0QsS0FBSyxJQUduQixJQUFJRixFQUFPVCxHQUFVSyxhQUFhRyxHQUFHSyxRQUFRUCxPQUU3QyxHQUFJRyxFQUNGLElBQUssSUFBSUssRUFBSSxFQUFHQSxFQUFJTCxFQUFNSyxJQUN4QkYsRUFBY0osR0FBR0csS0FDZlgsR0FBVUssYUFBYUcsSUFBSUssUUFBUUMsSUFBSUMsWUFPL0MsSUFBSUMsRUFBeUIsR0FFN0IsSUFBSyxJQUFJUixFQUFJLEVBQUdBLEVBQUlKLEVBQVdJLElBQUssQ0FDbENRLEVBQVdMLEtBQUssSUFHaEIsSUFBSU0sRUFBUWpCLEdBQVVLLGFBQWFHLEdBQUdLLFFBQVFQLE9BRTlDLEdBQUlXLEVBQ0YsSUFBSyxJQUFJSCxFQUFJLEVBQUdBLEVBQUlHLEVBQU9ILElBQ3pCRSxFQUFXUixHQUFHRyxLQUFLWCxHQUFVSyxhQUFhRyxJQUFJSyxRQUFRQyxJQUFJSSxVQUtoRUMsUUFBUUMsSUFBSXBCLEdBRVosSUFBSXFCLEVBQXdCLEdBRTVCLElBQUssSUFBSWIsRUFBSSxFQUFHQSxFQUFJSSxFQUFjTixPQUFRRSxJQUN4Q2EsRUFBWVYsS0FBS0MsRUFBY0osR0FBRyxJQUdwQyxJQUFJYyxFQUF1QixHQUUzQixJQUFLLElBQUlkLEVBQUksRUFBR0EsRUFBSUosRUFBV0ksSUFDN0JjLEVBQVdYLEtBQUtDLEVBQWNKLElBQUlGLFFBSXBDLElBQUlpQixFQUFVWCxFQUFjWSxPQUd4QkMsRUFBUVQsRUFBV1EsT0FHdkJMLFFBQVFDLElBQUlLLEdBR1osSUFBSUMsRUFBT0QsRUFBTW5CLE9BRWpCLE1BR01xQixFQUh3QkMsT0FBT0MsT0FBT2pDLEdBR1prQyxLQUFLdEIsR0FBTXVCLE9BQU92QixLQUdsRFcsUUFBUUMsSUFBSU8sR0FHWixNQUFNNUIsRUM1SWlCLEVBQUNpQyxFQUFhQyxFQUFhQyxLQUNsRCxJQUFJQyxFQUE0QixHQUVoQyxJQUFLLElBQUkzQixFQUFJLEVBQUdBLEVBQUkwQixFQUFHMUIsSUFBSyxDQUMxQixNQUFNNEIsRUFBdUIsQ0FDM0JDLGFBQWMsQ0FBQ0wsRUFBRXhCLElBQ2pCOEIsU0FBVUwsRUFBRXpCLElBR2QyQixFQUFXeEIsS0FBS3lCLEdBTWxCLE1BSnVCLENBQ3JCRCxXQUFZQSxJRGdJREksQ0FBVWQsRUFBT0UsRUFBYUQsR0FFM0NQLFFBQVFDLElBQUlyQixHQUVaLE1BQU15QyxHQUFnQkMsRUFBQUEsRUFBQUEsY0FDbkJDLElBQ0NBLEVBQUVDLGlCQUVGQyxJQUFBQSxLQUNRLGdDQUFpQzdDLEVBQU0sQ0FDM0M4QyxRQUFTLENBQ1BDLGNBQWdCLFVBQVNDLGFBQWFDLFFBQVEsWUFHakRDLE1BQU1DLElBQ0xDLE1BQU0sYUFFUEMsT0FBT0MsSUFDTkYsTUFBTSxjQUdaLENBQUNwRCxJQUdILE9BQ0UsZ0JBQUMxQixFQUFELEtBQ0UsZ0JBQUNpRixFQUFBLEVBQUQsQ0FBY3pFLE1BQU8sVUFFckIsZ0JBQUMsS0FBRCxjQUNBLGdCQUFDTyxFQUFELEtBQ0UsZ0JBQUNDLEVBQUQsS0FDRSx3Q0FDQ2tCLEVBQWN1QixLQUFJLENBQUN5QixFQUFHQyxJQUVuQix1QkFBS0MsSUFBS0QsR0FDUixnQkFBQ2xFLEVBQUQsa0JBQXNCaUUsR0FDdEIsZ0JBQUNoRSxFQUFELEtBQ0csSUFBSW1FLE1BQU1wQyxFQUFXa0MsS0FBUzFCLEtBQUksQ0FBQzZCLEVBQUdDLElBQ3JDLDBCQUFRQyxNQUFPakQsRUFBYzRDLEdBQU9JLEdBQU1ILElBQUtHLEdBQzVDaEQsRUFBYzRDLEdBQU9JLFdBUXBDLGdCQUFDcEUsRUFBRCxLQUNFLG1DQUNDK0IsRUFBUU8sS0FBSSxDQUFDeUIsRUFBUUMsS0FDcEIsTUFBTU0sRUFBTU4sRUFBTU8sV0FFbEIsR0FBVSxLQUFOUixFQUNGLE9BQ0UsdUJBQUtFLElBQUtELEdBQ1IsZ0JBQUMvRCxFQUFELEtBQWU4RCxHQUNmLGdCQUFDN0QsRUFBRCxLQUNFLGdCQUFDLEtBQUQsQ0FDRXNFLEtBQUssT0FDTEMsWUFBWSxpQkFDWkMsU0FBV3hCLElBQ1Q3QyxFQUFVLElBQ0xELEVBQ0gsQ0FBRSxHQUFFa0UsS0FBUXBCLEVBQUV5QixPQUFPTixrQkFXekMsZ0JBQUNsRSxFQUFELENBQVFULFFBQVNzRCxHQUFqQixZLHdERXBOTixNQVVBLEVBVmlCNEIsR0FDZnhCLElBQUFBLElBQ093QixFQUFLLENBQ1JDLGlCQUFpQixFQUNqQnhCLFFBQVMsQ0FDUEMsY0FBZ0IsVUFBU0MsYUFBYUMsUUFBUSxZQUdqREMsTUFBTUMsR0FBYUEsRUFBU25EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9PcHRpb24vc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL1JlcG9uc2l2ZUJhci9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvUmVwb25zaXZlQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL1NlbGxTdG9jay9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvU2VsbFN0b2NrL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi91dGlscy9tYWtlU3RvY2sudHMiLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vdXRpbHMvZmV0Y2hlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBgO1xuXG5leHBvcnQgY29uc3QgT3B0Q291bnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDFyZW0gMDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cbiAgJiBkaXYge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuXG4gICAgJiBzZWxlY3Qge1xuICAgICAgd2lkdGg6IDV2dztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBPcHROYW1lSW5wdXQgPSBzdHlsZWQuZGl2YFxuICAmID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcblxuICAgICYgPiBzcGFuOmZpcnN0LW9mLXR5cGUsXG4gICAgJiA+IGlucHV0OmZpcnN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG5cbiAgICAmID4gc3BhbjpsYXN0LW9mLXR5cGUsXG4gICAgJiA+IGlucHV0Omxhc3Qtb2YtdHlwZSB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG5cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWFrZVRhYmxlQnRuID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgbWFyZ2luLXRvcDogMnJlbTtcblxuICAmIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjM1MzU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE9wdFRhYmxlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAmID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcblxuICAgICYgPiBzcGFuIHtcbiAgICAgIHdpZHRoOiAyNSU7XG5cbiAgICAgIC8vd2lkdGg6NzBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgJiA+IGlucHV0IHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICB9XG5cbiAgLmxpbmUge1xuICAgIHdpZHRoOiA5NS4zJTtcbiAgICBoZWlnaHQ6IDElO1xuXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcblxuICBwYWRkaW5nOiAxcmVtIDA7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmIGRpdiB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJhY2sgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuNXJlbTtcblxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgRkMsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFjaywgVGl0bGUsIFdyYXBwZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvUmVwb25zaXZlQmFyL3N0eWxlc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFBcnJvd0xlZnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBSZXBvbnNpdmVCYXI6IEZDPFByb3BzPiA9ICh7IHRpdGxlIH0pID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBoYW5kbGVIaXN0b3J5ID0gKCkgPT4ge1xuICAgIGhpc3RvcnkuZ29CYWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxCYWNrPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IG9uQ2xpY2s9e2hhbmRsZUhpc3Rvcnl9IC8+XG4gICAgICAgIDwvQmFjaz5cbiAgICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb25zaXZlQmFyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBgO1xuXG5leHBvcnQgY29uc3QgSW5wdXRMaW5lID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gICYgaDEge1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICB9XG4gICYgaW5wdXQge1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOXJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcblxuICAgIDpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IENoZWNrU3RvY2sgPSBzdHlsZWQuZGl2YFxuICAmIGRpdiB7XG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENoZWNrTmFtZSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICM3MDY4Njg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IENoZWNrVmFsdWUgPSBzdHlsZWQuZGl2YGA7XG5cbmV4cG9ydCBjb25zdCBSZWdpc3RlclN0b2NrID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5leHBvcnQgY29uc3QgUmVnaXN0ZXJMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICMzZjM4Mzg7XG5gO1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyUmlnaHQgPSBzdHlsZWQuZGl2YGA7XG5cbmV4cG9ydCBjb25zdCBCdXlCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMjVyZW07XG4gIGhlaWdodDogNHJlbTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDYzNTM1O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb3BIZWFkZXIgfSBmcm9tIFwiQHBhZ2VzL015UGFnZS9zdHlsZXNcIjtcbmltcG9ydCBSZXBvbnNpdmVCYXIgZnJvbSBcIkBjb21wb25lbnRzL1JlcG9uc2l2ZUJhclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCJAaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IG1ha2VTdG9jayB9IGZyb20gXCJAdXRpbHMvbWFrZVN0b2NrXCI7XG5pbXBvcnQge1xuICBXcmFwcGVyLFxuICBJbnB1dExpbmUsXG4gIEJ1eUJ0bixcbiAgQ2hlY2tTdG9jayxcbiAgUmVnaXN0ZXJTdG9jayxcbiAgUmVnaXN0ZXJMZWZ0LFxuICBSZWdpc3RlclJpZ2h0LFxuICBDaGVja05hbWUsXG4gIENoZWNrVmFsdWUsXG59IGZyb20gXCJAY29tcG9uZW50cy9TZWxsU3RvY2svc3R5bGVzXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBmZXRjaGVyIGZyb20gXCJAdXRpbHMvZmV0Y2hlclwiO1xuaW1wb3J0IG9wdGlvbiBmcm9tIFwiQGNvbXBvbmVudHMvT3B0aW9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAY29tcG9uZW50cy9PcHRpb24vc3R5bGVzXCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiQHV0aWxzL2Nvb2tpZVwiO1xuXG5jb25zdCBTZWxsU3RvY2sgPSAoKSA9PiB7XG4gIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcblxuICAvLyBjb25zdCBbb3B0TGlzdCwgc2V0b3B0bGlzdF0gPSB1c2VTdGF0ZSh7XG4gIC8vICAgb3B0bGlzdDE6IFwiXCIsXG4gIC8vIH0pO1xuICAvL1xuICAvLyBjb25zdCB7IG9wdGxpc3QxIH0gPSBvcHRMaXN0O1xuICAvL1xuICAvLyBjb25zdCBoYW5kbGVJZExpc3QgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgLy8gICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgLy9cbiAgLy8gICBzZXRvcHRsaXN0KHtcbiAgLy8gICAgIC4uLm9wdExpc3QsXG4gIC8vICAgICBbbmFtZV06IHZhbHVlLFxuICAvLyAgIH0pO1xuICAvLyB9O1xuICAvL1xuICAvLyAvL2xpc3Tsl5Agb3B0bGlzdOqwneyytCDqsJIg64Sj6riwXG4gIC8vIGxldCBsaXN0OiBhbnlbXSA9IE9iamVjdC52YWx1ZXMob3B0TGlzdCk7XG4gIC8vXG4gIC8vIC8v7ZG47Iuc7ZWgIOuwsOyXtCDsg53shLFcbiAgLy8gbGV0IG9wdGlvbklkTGlzdDogYW55W10gPSBbXTtcbiAgLy9cbiAgLy8gLy8s7J2EIOq4sOykgOycvOuhnCDrgpjriITslrTshJwg7IK97J6FIHNwbGl07ZWY66m0IOusuOyekOyXtOuhnCDrk6TslrTqsIDquLAg65WM66y47JeQIG51bWJlcuuhnCDrs4DtmZhcbiAgLy8gbGV0IGNoYW5nZSA9IGxpc3RbMF0ucmVwbGFjZSgvXFxzL2csIFwiXCIpLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKTtcbiAgLy8gb3B0aW9uSWRMaXN0LnB1c2goY2hhbmdlKTtcbiAgLy9cbiAgLy8gLy8g7KCE64usIO2VoCBvcHRpb25JZExpc3Qg7ZmV7J24XG4gIC8vIC8vIGNvbnNvbGUubG9nKG9wdGlvbklkTGlzdCk7XG5cbiAgY29uc3QgeyBkYXRhOiBlYWNoRGF0YSwgZXJyb3IgfSA9IHVzZVNXUjxhbnk+KFxuICAgIFwiaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9pdGVtcy8xXCIsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIC8v7IOB7JyEIOyYteyFmCDsnbTrpoQg6ri47J20XG4gIGNvbnN0IG9wdGlvbkxlbjogYW55ID0gZWFjaERhdGE/Lm9wdGlvbkdyb3Vwcz8ubGVuZ3RoO1xuXG4gIC8vIOyghOyytCDrjbDsnbTthLDsnZgg7IOB7JyEIOyYteyFmCDsnbTrpoRcbiAgbGV0IG9wdEdyb3VwTmFtZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbkxlbjsgaSsrKSB7XG4gICAgbGV0IHRlbXAgPSBlYWNoRGF0YT8ub3B0aW9uR3JvdXBzW2ldLm9wdGlvbkdyb3VwTmFtZTtcblxuICAgIGlmICh0ZW1wKSBvcHRHcm91cE5hbWVzLnB1c2godGVtcCk7XG4gIH1cblxuICAvLyDqsIEg7Ji17IWY7J2YIOqwkuuTpCDsnbTssKgg67Cw7Je0XG4gIGxldCBvcHRHcm91cFZhbHVlOiBzdHJpbmdbXVtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25MZW47IGkrKykge1xuICAgIG9wdEdyb3VwVmFsdWUucHVzaChbXSk7XG5cbiAgICAvL+yghO2FjCDrjbDsnbTthLDsnZgg7ZWY7JyEIOyYteyFmCDquLjsnbRcbiAgICBsZXQgdGVtcCA9IGVhY2hEYXRhPy5vcHRpb25Hcm91cHNbaV0ub3B0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAodGVtcCkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0ZW1wOyBqKyspIHtcbiAgICAgICAgb3B0R3JvdXBWYWx1ZVtpXS5wdXNoKFxuICAgICAgICAgIGVhY2hEYXRhPy5vcHRpb25Hcm91cHNbaV0/Lm9wdGlvbnNbal0/Lm9wdGlvbk5hbWVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDqsIEg7Ji17IWY7J2YIOqwkuuTpCDsnbTssKgg67Cw7Je0XG4gIGxldCBvcHRHcm91cElkOiBudW1iZXJbXVtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25MZW47IGkrKykge1xuICAgIG9wdEdyb3VwSWQucHVzaChbXSk7XG5cbiAgICAvL+yghO2FjCDrjbDsnbTthLDsnZgg7ZWY7JyEIOyYteyFmCDquLjsnbRcbiAgICBsZXQgdGVtcDEgPSBlYWNoRGF0YT8ub3B0aW9uR3JvdXBzW2ldLm9wdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHRlbXAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRlbXAxOyBqKyspIHtcbiAgICAgICAgb3B0R3JvdXBJZFtpXS5wdXNoKGVhY2hEYXRhPy5vcHRpb25Hcm91cHNbaV0/Lm9wdGlvbnNbal0/Lm9wdGlvbklkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy/soITssrQg642w7J207YSwIO2ZleyduFxuICBjb25zb2xlLmxvZyhlYWNoRGF0YSk7XG5cbiAgbGV0IGVhY2hPcHRCYXNlOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0R3JvdXBWYWx1ZS5sZW5ndGg7IGkrKylcbiAgICBlYWNoT3B0QmFzZS5wdXNoKG9wdEdyb3VwVmFsdWVbaV1bMF0pO1xuXG4gIC8vIOqwgSDsmLXshZjrp4jri6Qg66qH6rCc6rCAIOuTpOyWtOyeiOuKlOyngFxuICBsZXQgZWFjaE9wdExlbjogbnVtYmVyW10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbkxlbjsgaSsrKSB7XG4gICAgZWFjaE9wdExlbi5wdXNoKG9wdEdyb3VwVmFsdWVbaV0/Lmxlbmd0aCk7XG4gIH1cblxuICAvLyDsmLXshZjqsJLrk6Qg66qo7J2MIOydvOywqCDrsLDsl7RcbiAgbGV0IG9wdEZsYXQgPSBvcHRHcm91cFZhbHVlLmZsYXQoKTtcblxuICAvLyDsmLXshZhJROuTpCDrqqjsnYwg7J287LCoIOuwsOyXtFxuICBsZXQgb3B0SWQgPSBvcHRHcm91cElkLmZsYXQoKTtcblxuICAvL+qwgSDsmLXshZgg7JWE7J2065SUIOy2nOugpVxuICBjb25zb2xlLmxvZyhvcHRJZCk7XG5cbiAgLy/smLXshZgg7JWE7J2065SUIOq4uOydtFxuICBsZXQgbG9uZyA9IG9wdElkLmxlbmd0aDtcblxuICBjb25zdCBzdHJpbmdBcnJheTogbnVtYmVyW10gPSBPYmplY3QudmFsdWVzKG51bWJlcik7XG5cbiAgLy/rhJjrsoQg7Ja066CI7J20IOyIq+yekCDrsLDsl7TroZwg67OA7ZmYXG4gIGNvbnN0IE51bWJlckFycmF5ID0gc3RyaW5nQXJyYXkubWFwKChpKSA9PiBOdW1iZXIoaSkpO1xuXG4gIC8v6rCA6rKpIOuwsOyXtCDstpzroKVcbiAgY29uc29sZS5sb2coTnVtYmVyQXJyYXkpO1xuXG4gIC8v67O064K06riw7KCEIOuNsOydtO2EsCDtmZXsnbhcbiAgY29uc3QgZGF0YSA9IG1ha2VTdG9jayhvcHRJZCwgTnVtYmVyQXJyYXksIGxvbmcpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIGNvbnN0IG9uU3VibWl0U3RvY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogYW55KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9zdG9ja3NcIiwgZGF0YSwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKX1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwi65Ox66GdIOyEseqztSFcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCLrk7HroZ0g7Iuk7YyoXCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFtkYXRhXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8UmVwb25zaXZlQmFyIHRpdGxlPXtcIuyerOqzoCDrk7HroZ1cIn0gLz5cblxuICAgICAgPFRvcEhlYWRlcj7snqzqs6Ag65Ox66GdPC9Ub3BIZWFkZXI+XG4gICAgICA8SW5wdXRMaW5lPlxuICAgICAgICA8Q2hlY2tTdG9jaz5cbiAgICAgICAgICA8aDE+65Ox66GdIO2VoCDsnqzqs6Ag7ZmV7J24PC9oMT5cbiAgICAgICAgICB7b3B0R3JvdXBOYW1lcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxDaGVja05hbWU+7IOB7ZKIIOyYteyFmCDsnbTrpoQ6IHt2fTwvQ2hlY2tOYW1lPlxuICAgICAgICAgICAgICAgIDxDaGVja1ZhbHVlPlxuICAgICAgICAgICAgICAgICAge1suLi5BcnJheShlYWNoT3B0TGVuW2luZGV4XSldLm1hcCgodywgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdEdyb3VwVmFsdWVbaW5kZXhdW2lkeF19IGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgICB7b3B0R3JvdXBWYWx1ZVtpbmRleF1baWR4XX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0NoZWNrVmFsdWU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9DaGVja1N0b2NrPlxuICAgICAgICA8UmVnaXN0ZXJTdG9jaz5cbiAgICAgICAgICA8aDE+7IiY65+JIOuTseuhnTwvaDE+XG4gICAgICAgICAge29wdEZsYXQubWFwKCh2OiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IGluZGV4LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmICh2ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxSZWdpc3RlckxlZnQ+e3Z9PC9SZWdpc3RlckxlZnQ+XG4gICAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi65Ox66Gd7ZWgIOyImOufieydhCDsnoXroKXtlbTso7zshLjsmpRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROdW1iZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtudW19YF06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvUmVnaXN0ZXJSaWdodD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9SZWdpc3RlclN0b2NrPlxuICAgICAgPC9JbnB1dExpbmU+XG4gICAgICA8QnV5QnRuIG9uQ2xpY2s9e29uU3VibWl0U3RvY2t9PuyerOqzoCDrk7HroZ08L0J1eUJ0bj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxsU3RvY2s7XG4iLCJleHBvcnQgY29uc3QgbWFrZVN0b2NrID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyKSA9PiB7XG4gIGxldCBzdG9ja0luZm9zOiBBcnJheTxPYmplY3Q+ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjOyBpKyspIHtcbiAgICBjb25zdCBzdG9ja09wdGlvbnM6IG9iamVjdCA9IHtcbiAgICAgIG9wdGlvbklkTGlzdDogW2FbaV1dLFxuICAgICAgcXVhbnRpdHk6IGJbaV0sXG4gICAgfTtcblxuICAgIHN0b2NrSW5mb3MucHVzaChzdG9ja09wdGlvbnMpO1xuICB9XG4gIGNvbnN0IHJlc3VsdDogT2JqZWN0ID0ge1xuICAgIHN0b2NrSW5mb3M6IHN0b2NrSW5mb3MsXG4gIH07XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+XG4gIGF4aW9zXG4gICAgLmdldCh1cmwsIHtcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpfWAsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlcjtcbiJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiT3B0TmFtZUlucHV0IiwiSW5wdXQiLCJNYWtlVGFibGVCdG4iLCJPcHRUYWJsZSIsIkJhY2siLCJUaXRsZSIsInRpdGxlIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJpY29uIiwiZmFBcnJvd0xlZnQiLCJvbkNsaWNrIiwiZ29CYWNrIiwiSW5wdXRMaW5lIiwiQ2hlY2tTdG9jayIsIkNoZWNrTmFtZSIsIkNoZWNrVmFsdWUiLCJSZWdpc3RlclN0b2NrIiwiUmVnaXN0ZXJMZWZ0IiwiUmVnaXN0ZXJSaWdodCIsIkJ1eUJ0biIsIm51bWJlciIsInNldE51bWJlciIsInVzZVN0YXRlIiwiZGF0YSIsImVhY2hEYXRhIiwiZXJyb3IiLCJ1c2VTV1IiLCJmZXRjaGVyIiwib3B0aW9uTGVuIiwib3B0aW9uR3JvdXBzIiwibGVuZ3RoIiwib3B0R3JvdXBOYW1lcyIsImkiLCJ0ZW1wIiwib3B0aW9uR3JvdXBOYW1lIiwicHVzaCIsIm9wdEdyb3VwVmFsdWUiLCJvcHRpb25zIiwiaiIsIm9wdGlvbk5hbWUiLCJvcHRHcm91cElkIiwidGVtcDEiLCJvcHRpb25JZCIsImNvbnNvbGUiLCJsb2ciLCJlYWNoT3B0QmFzZSIsImVhY2hPcHRMZW4iLCJvcHRGbGF0IiwiZmxhdCIsIm9wdElkIiwibG9uZyIsIk51bWJlckFycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiTnVtYmVyIiwiYSIsImIiLCJjIiwic3RvY2tJbmZvcyIsInN0b2NrT3B0aW9ucyIsIm9wdGlvbklkTGlzdCIsInF1YW50aXR5IiwibWFrZVN0b2NrIiwib25TdWJtaXRTdG9jayIsInVzZUNhbGxiYWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwicmVzcG9uc2UiLCJhbGVydCIsImNhdGNoIiwiZXJyIiwiUmVwb25zaXZlQmFyIiwidiIsImluZGV4Iiwia2V5IiwiQXJyYXkiLCJ3IiwiaWR4IiwidmFsdWUiLCJudW0iLCJ0b1N0cmluZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidXJsIiwid2l0aENyZWRlbnRpYWxzIl0sInNvdXJjZVJvb3QiOiIifQ==