"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[728],{11728:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var i=r(67294),a=r(8490),n=r(63703),l=r(39975),o=r(8100),m=r(83564),d=r(9669),c=r.n(d),s=r(35569);const p=()=>{const{data:e,mutate:t,error:r}=(0,o.ZP)("https://waycabvav.shop/carts",m.Z);let d=[];e&&(d=Object.values(e)[0]);const p=(e=>{let t=[];const r=e?.length;for(let i=0;i<r;i++)t[i]=e[i]?.count;return t})(d),h=(0,i.useCallback)(((e,r,i)=>{e.preventDefault();const a=i+1;c().patch("https://waycabvav.shop/carts/cart-line-items",{count:a,cartLineItemId:r},{headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>{t()})).catch((e=>{}))}),[]),u=(0,i.useCallback)(((e,r,i)=>{if(e.preventDefault(),i<2)return;const a=i-1;c().patch("https://waycabvav.shop/carts/cart-line-items",{count:a,cartLineItemId:r},{headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>{t()})).catch((e=>{alert("수량을 변경하지 못했습니다.")}))}),[]),g=(0,i.useCallback)(((e,r)=>{e.preventDefault(),c().delete("https://waycabvav.shop/carts/cart-line-items",{data:{cartLineItemId:r},headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>{t()})).catch((e=>{alert("상품을 삭제하지 못했습니다.")}))}),[]);return i.createElement("div",null,i.createElement(l.Z,{title:"장바구니"}),i.createElement(a.im,null,i.createElement(n.Df,null,"장바구니"),0===d.length&&i.createElement(s.Z,null),[...Array(d?.length)].map(((e,t)=>i.createElement(a.bE,{key:t},i.createElement("img",{src:d[t]?.imageUrl,alt:d[t]?.name}),i.createElement(a.S8,null,i.createElement(a.mS,null,i.createElement("div",null,i.createElement("span",null,d[t]?.name),i.createElement("span",null,((e,t)=>{let r=0;for(let i=0;i<e[t]?.cartOptionGroups.length;i++)r+=e[t]?.cartOptionGroups[i].cartOptions[0].price;return r})(d,t),"원")),i.createElement("div",{style:{color:"rgba(0,0,0,0.4)"}},d[t]?.cartOptionGroups[0]?.cartOptions[0]?.name,"  ",d[t]?.cartOptionGroups[1]?.cartOptions[0]?.name,"  ",d[t]?.cartOptionGroups[2]?.cartOptions[0]?.name,"  ",d[t]?.cartOptionGroups[3]?.cartOptions[0]?.name,"  ",d[t]?.cartOptionGroups[4]?.cartOptions[0]?.name)),i.createElement(a.uo,null,i.createElement("div",null,i.createElement("span",null,"2~3일 내 도착")),i.createElement("div",null,i.createElement("div",null,i.createElement("button",{onClick:e=>u(e,d[t]?.id,p[t])},"-"),i.createElement("span",null,p[t],"개"),i.createElement("button",{onClick:e=>h(e,d[t]?.id,p[t])},"+")),i.createElement("div",null,i.createElement("span",null,i.createElement("button",{onClick:e=>{g(e,d[t]?.id)}},"X")))))))))))}},8490:(e,t,r)=>{r.d(t,{S8:()=>l,bE:()=>n,im:()=>a,mS:()=>o,uo:()=>m});var i=r(97083);const a=i.Z.section`
  @media (max-width: 769px) {
    margin-top: 5rem;
    padding: 2rem 2rem;
  }
`,n=i.Z.div`
  display: flex;

  position: relative;

  padding: 2rem 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  }

  & img {
    min-width: 8rem;
    max-width: 8rem;
    min-height: 8rem;
    max-height: 8rem;

    margin-right: 0.5rem;

    @media (max-width: 769px) {
      min-width: 6rem;
      max-width: 6rem;
      min-height: 6rem;
      max-height: 6rem;
    }
  }
`,l=i.Z.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  & .time {
    display: none;
  }

  & > div {
    width: 100%;
    height: 50%;

    display: flex;
    align-items: center;

    padding-left: 1rem;
  }
`,o=i.Z.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -1rem;

  & > div:first-of-type {
    display: flex;

    width: 100%;

    & span {
      width: 50%;
    }

    & span:first-of-type {
      font-size: 1rem;
      font-weight: 500;

      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    & span:last-of-type {
      display: flex;
      justify-content: flex-end;
      margin-right: 2rem;

      color: rgba(0, 0, 0, 0.4);
    }
  }

  & > div:last-of-type {
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;

    width: 100%;
    height: 2rem;

    margin-top: 0.5rem;

    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`,m=i.Z.div`
  display: flex;
  align-items: center;

  margin-top: 1.5rem;

  & > div:first-of-type {
    color: #199530;
    margin-right: 1rem;
    width: 30%;

    @media (max-width: 975px) {
      display: none;
    }
  }

  & > div:last-of-type {
    display: flex;
    align-items: center;

    position: relative;

    width: 60%;

    @media (max-width: 769px) {
      width: 100%;
    }

    @media (max-width: 975px) {
      width: 90%;
    }

    & > div:first-of-type {
      width: 60%;

      @media (max-width: 975px) {
        width: 60%;
        font-size: 0.9rem;
      }

      & > span {
        margin: 0 0.5rem;
      }

      & button {
        padding: 0.2rem 0.5rem;
        font-size: 1.2rem;
        background-color: #ececec;
        border: 1px solid transparent;
        border-radius: 5px;

        @media (max-width: 975px) {
          padding: 0 0.2rem;
        }
      }

      & button:first-of-type {
        padding: 0.2rem 0.6rem;

        @media (max-width: 975px) {
          padding: 0 0.3rem;
        }
      }
    }

    & > div:last-of-type {
      text-align: right;
      width: 85%;

      margin-right: -2rem;

      @media (max-width: 769px) {
        font-size: 0.9rem;
        margin-right: -1rem;
      }

      & span:first-of-type {
        margin-right: 2rem;
      }

      & button {
        font-size: 1.3rem;
        border: none;
        background-color: inherit;

        cursor: pointer;

        @media (max-width: 975px) {
          position: absolute;
          top: 0;
        }
      }
    }
  }
`},35569:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(67294);const a=r(97083).Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.4);

  height: 50vh;
`,n=()=>i.createElement(a,null,"텅~")},39975:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(67294),a=r(97083);const n=a.Z.div`
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
`,l=a.Z.div`
  font-size: 1.5rem;

  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  box-sizing: border-box;
  padding-left: 1rem;
`,o=a.Z.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`;var m=r(17625),d=r(51436),c=r(5977);const s=({title:e})=>{const t=(0,c.k6)();return i.createElement("div",null,i.createElement(n,null,i.createElement(l,null,i.createElement(m.G,{icon:d.acZ,onClick:()=>{t.goBack()}})),i.createElement(o,null,e),i.createElement("div",null)))}},83564:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(9669),a=r.n(i);const n=e=>a().get(e,{withCredentials:!0,headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>e.data))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxNQU1oQixPQUNFLDJCQUNFLGdCQUFDVixFQUFELEtBQ0UsZ0JBQUNPLEVBQUQsS0FDRSxnQkFBQyxJQUFELENBQWlCSSxLQUFNQyxFQUFBQSxJQUFhZCxRQVJ0QixLQUNwQlcsRUFBUUksYUFTSixnQkFBQ0wsRUFBRCxLQUFRNUIsR0FDUixnQyx3REN0QlIsTUFVQSxFQVZpQmtDLEdBQ2YvQyxJQUFBQSxJQUNPK0MsRUFBSyxDQUNSQyxpQkFBaUIsRUFDakI5QyxRQUFTLENBQ1BDLGNBQWdCLFVBQVNDLGFBQWFDLFFBQVEsWUFHakRDLE1BQU0yQyxHQUFhQSxFQUFTekUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL0xpa2UvaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvTGlrZS9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvTnVsbERhdGEvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL051bGxEYXRhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL1JlcG9uc2l2ZUJhci9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvUmVwb25zaXZlQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi91dGlscy9mZXRjaGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBDYXJ0SXRlbSxcbiAgSW5mb0JvdHRvbSxcbiAgSW5mb1RvcCxcbiAgSXRlbUluZm8sXG4gIFdyYXBwZXIsXG59IGZyb20gXCJAY29tcG9uZW50cy9MaWtlL3N0eWxlc1wiO1xuaW1wb3J0IHsgVG9wSGVhZGVyIH0gZnJvbSBcIkBwYWdlcy9NeVBhZ2Uvc3R5bGVzXCI7XG5pbXBvcnQgUmVwb25zaXZlQmFyIGZyb20gXCJAY29tcG9uZW50cy9SZXBvbnNpdmVCYXJcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IGZldGNoZXIgZnJvbSBcIkB1dGlscy9mZXRjaGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTnVsbERhdGEgZnJvbSBcIkBjb21wb25lbnRzL051bGxEYXRhXCI7XG5pbXBvcnQgeyBjYXJ0TGluZUl0ZW1zLCBJQ2FydERhdGEgfSBmcm9tIFwiQHR5cGluZ3MvZGJcIjtcblxuY29uc3QgTGlrZSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGRhdGE6IGNhcnREYXRhLFxuICAgIG11dGF0ZTogbXV0YXRlQ2FydCxcbiAgICBlcnJvcixcbiAgfSA9IHVzZVNXUjxJQ2FydERhdGE+KFwiaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9jYXJ0c1wiLCBmZXRjaGVyKTtcblxuICBsZXQgaXRlbTogY2FydExpbmVJdGVtc1tdID0gW107XG5cbiAgaWYgKGNhcnREYXRhKSBpdGVtID0gT2JqZWN0LnZhbHVlcyhjYXJ0RGF0YSlbMF07XG5cbiAgY29uc3QgZ2V0SXRlbUxlbiA9IChpdGVtOiBjYXJ0TGluZUl0ZW1zW10pID0+IHtcbiAgICBsZXQgYXJ5OiBudW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IGl0ZW1MZW4gPSBpdGVtPy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1MZW47IGkrKykge1xuICAgICAgYXJ5W2ldID0gaXRlbVtpXT8uY291bnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyeTtcbiAgfTtcblxuICBjb25zdCBlYWNoTGVuID0gZ2V0SXRlbUxlbihpdGVtKTtcblxuICBjb25zdCBnZXRUb3RhbFByaWNlID0gKGl0ZW06IGNhcnRMaW5lSXRlbXNbXSwgbGVuOiBudW1iZXIpID0+IHtcbiAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtW2xlbl0/LmNhcnRPcHRpb25Hcm91cHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHRvdGFsICs9IGl0ZW1bbGVuXT8uY2FydE9wdGlvbkdyb3Vwc1tqXS5jYXJ0T3B0aW9uc1swXS5wcmljZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG90YWw7XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja0xlblVwID0gdXNlQ2FsbGJhY2soXG4gICAgKFxuICAgICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4sXG4gICAgICBpZDogbnVtYmVyLFxuICAgICAgaWR4OiBudW1iZXJcbiAgICApID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgbGVuID0gaWR4ICsgMTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBhdGNoKFxuICAgICAgICAgIFwiaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9jYXJ0cy9jYXJ0LWxpbmUtaXRlbXNcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb3VudDogbGVuLFxuICAgICAgICAgICAgY2FydExpbmVJdGVtSWQ6IGlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIil9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBtdXRhdGVDYXJ0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IG9uQ2xpY2tMZW5Eb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKFxuICAgICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4sXG4gICAgICBpZDogbnVtYmVyLFxuICAgICAgaWR4OiBudW1iZXJcbiAgICApID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGlkeCA8IDIpIHJldHVybjtcblxuICAgICAgY29uc3QgbGVuID0gaWR4IC0gMTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBhdGNoKFxuICAgICAgICAgIFwiaHR0cHM6Ly93YXljYWJ2YXYuc2hvcC9jYXJ0cy9jYXJ0LWxpbmUtaXRlbXNcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb3VudDogbGVuLFxuICAgICAgICAgICAgY2FydExpbmVJdGVtSWQ6IGlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIil9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBtdXRhdGVDYXJ0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCLsiJjrn4nsnYQg67OA6rK97ZWY7KeAIOuqu+2WiOyKteuLiOuLpC5cIik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBvbkRlbGV0ZUl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4sIGlkOiBudW1iZXIpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLmRlbGV0ZShcImh0dHBzOi8vd2F5Y2FidmF2LnNob3AvY2FydHMvY2FydC1saW5lLWl0ZW1zXCIsIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjYXJ0TGluZUl0ZW1JZDogaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIil9YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgbXV0YXRlQ2FydCgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwi7IOB7ZKI7J2EIOyCreygnO2VmOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJlcG9uc2l2ZUJhciB0aXRsZT17XCLsnqXrsJTqtazri4hcIn0gLz5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8VG9wSGVhZGVyPuyepeuwlOq1rOuLiDwvVG9wSGVhZGVyPlxuXG4gICAgICAgIHtpdGVtLmxlbmd0aCA9PT0gMCAmJiA8TnVsbERhdGEgLz59XG5cbiAgICAgICAge1suLi5BcnJheShpdGVtPy5sZW5ndGgpXS5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJ0SXRlbSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1baW5kZXhdPy5pbWFnZVVybH0gYWx0PXtpdGVtW2luZGV4XT8ubmFtZX0gLz5cbiAgICAgICAgICAgICAgPEl0ZW1JbmZvPlxuICAgICAgICAgICAgICAgIDxJbmZvVG9wPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1baW5kZXhdPy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2dldFRvdGFsUHJpY2UoaXRlbSwgaW5kZXgpfeybkDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsMCwwLDAuNClcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1baW5kZXhdPy5jYXJ0T3B0aW9uR3JvdXBzWzBdPy5jYXJ0T3B0aW9uc1swXT8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtW2luZGV4XT8uY2FydE9wdGlvbkdyb3Vwc1sxXT8uY2FydE9wdGlvbnNbMF0/Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICB7aXRlbVtpbmRleF0/LmNhcnRPcHRpb25Hcm91cHNbMl0/LmNhcnRPcHRpb25zWzBdPy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1baW5kZXhdPy5jYXJ0T3B0aW9uR3JvdXBzWzNdPy5jYXJ0T3B0aW9uc1swXT8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtW2luZGV4XT8uY2FydE9wdGlvbkdyb3Vwc1s0XT8uY2FydE9wdGlvbnNbMF0/Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0luZm9Ub3A+XG4gICAgICAgICAgICAgICAgPEluZm9Cb3R0b20+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4yfjPsnbwg64K0IOuPhOywqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tMZW5Eb3duKGV2ZW50LCBpdGVtW2luZGV4XT8uaWQsIGVhY2hMZW5baW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWFjaExlbltpbmRleF196rCcPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0xlblVwKGV2ZW50LCBpdGVtW2luZGV4XT8uaWQsIGVhY2hMZW5baW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3Bhbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICB7LyogIHtnZXRUb3RhbFByaWNlKGl0ZW0sIGluZGV4KSAqIGVhY2hMZW5baW5kZXhdfeybkCovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVJdGVtKGV2ZW50LCBpdGVtW2luZGV4XT8uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9JbmZvQm90dG9tPlxuICAgICAgICAgICAgICA8L0l0ZW1JbmZvPlxuICAgICAgICAgICAgPC9DYXJ0SXRlbT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpa2U7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICBwYWRkaW5nOiAycmVtIDJyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJ0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG5cbiAgJiBpbWcge1xuICAgIG1pbi13aWR0aDogOHJlbTtcbiAgICBtYXgtd2lkdGg6IDhyZW07XG4gICAgbWluLWhlaWdodDogOHJlbTtcbiAgICBtYXgtaGVpZ2h0OiA4cmVtO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgIG1pbi13aWR0aDogNnJlbTtcbiAgICAgIG1heC13aWR0aDogNnJlbTtcbiAgICAgIG1pbi1oZWlnaHQ6IDZyZW07XG4gICAgICBtYXgtaGVpZ2h0OiA2cmVtO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1JbmZvID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmIC50aW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJiA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbmZvVG9wID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XG5cbiAgJiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmIHNwYW4ge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAmIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIH1cblxuICAgICYgc3BhbjpsYXN0LW9mLXR5cGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG5cbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgJiA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycmVtO1xuXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEluZm9Cb3R0b20gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcblxuICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgIGNvbG9yOiAjMTk5NTMwO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB3aWR0aDogMzAlO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk3NXB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICYgPiBkaXY6bGFzdC1vZi10eXBlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICB3aWR0aDogNjAlO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTc1cHgpIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgJiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIHdpZHRoOiA2MCU7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NzVweCkge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIH1cblxuICAgICAgJiA+IHNwYW4ge1xuICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xuICAgICAgfVxuXG4gICAgICAmIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NzVweCkge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC4ycmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC42cmVtO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NzVweCkge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC4zcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB3aWR0aDogODUlO1xuXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0ycmVtO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTFyZW07XG4gICAgICB9XG5cbiAgICAgICYgc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgfVxuXG4gICAgICAmIGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NzVweCkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IE51bGwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gIGhlaWdodDogNTB2aDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOdWxsIH0gZnJvbSBcIkBjb21wb25lbnRzL051bGxEYXRhL3N0eWxlc1wiO1xuXG5jb25zdCBOdWxsRGF0YSA9ICgpID0+IHtcbiAgcmV0dXJuIDxOdWxsPu2FhX48L051bGw+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVsbERhdGE7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgcGFkZGluZzogMXJlbSAwO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJiBkaXYge1xuICAgIHdpZHRoOiAzMyU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCYWNrID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxLjVyZW07XG5cbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIEZDLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhY2ssIFRpdGxlLCBXcmFwcGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL1JlcG9uc2l2ZUJhci9zdHlsZXNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQXJyb3dMZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgUmVwb25zaXZlQmFyOiBGQzxQcm9wcz4gPSAoeyB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3QgaGFuZGxlSGlzdG9yeSA9ICgpID0+IHtcbiAgICBoaXN0b3J5LmdvQmFjaygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8QmFjaz5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dMZWZ0fSBvbkNsaWNrPXtoYW5kbGVIaXN0b3J5fSAvPlxuICAgICAgICA8L0JhY2s+XG4gICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9uc2l2ZUJhcjtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT5cbiAgYXhpb3NcbiAgICAuZ2V0KHVybCwge1xuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIil9YCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpO1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyO1xuIl0sIm5hbWVzIjpbImRhdGEiLCJjYXJ0RGF0YSIsIm11dGF0ZSIsIm11dGF0ZUNhcnQiLCJlcnJvciIsInVzZVNXUiIsImZldGNoZXIiLCJpdGVtIiwiT2JqZWN0IiwidmFsdWVzIiwiZWFjaExlbiIsImFyeSIsIml0ZW1MZW4iLCJsZW5ndGgiLCJpIiwiY291bnQiLCJnZXRJdGVtTGVuIiwib25DbGlja0xlblVwIiwidXNlQ2FsbGJhY2siLCJlIiwiaWQiLCJpZHgiLCJwcmV2ZW50RGVmYXVsdCIsImxlbiIsImF4aW9zIiwiY2FydExpbmVJdGVtSWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJvbkNsaWNrTGVuRG93biIsImFsZXJ0Iiwib25EZWxldGVJdGVtIiwidGl0bGUiLCJBcnJheSIsIm1hcCIsInYiLCJpbmRleCIsImtleSIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwibmFtZSIsInRvdGFsIiwiaiIsImNhcnRPcHRpb25Hcm91cHMiLCJjYXJ0T3B0aW9ucyIsInByaWNlIiwiZ2V0VG90YWxQcmljZSIsInN0eWxlIiwiY29sb3IiLCJvbkNsaWNrIiwiZXZlbnQiLCJXcmFwcGVyIiwic3R5bGVkIiwiQ2FydEl0ZW0iLCJJdGVtSW5mbyIsIkluZm9Ub3AiLCJJbmZvQm90dG9tIiwiTnVsbCIsIkJhY2siLCJUaXRsZSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiaWNvbiIsImZhQXJyb3dMZWZ0IiwiZ29CYWNrIiwidXJsIiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9