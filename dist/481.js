"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[481],{41481:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var r=i(67294),n=i(39975),a=i(63703),l=i(8490),m=i(44593),d=i(83564);const o=i(97083).Z.div`
  @media (max-width: 769px) {
    margin-top: 5rem;
    padding: 2rem 2rem;
  }
`;var s=i(97650),c=i(35569),p=i(73727);const h=()=>{const{data:e,setSize:t}=(0,m.ZP)((e=>`https://waycabvav.shop/orders/customers?page=${e}`),d.Z);let i=[];if(e)for(let t=0;t<e?.length;t++)i.push(e[t].orders);const h=i.flat(),[g,f]=(0,s.YD)();return(0,r.useEffect)((()=>{f&&t((e=>e+1))}),[f]),r.createElement("div",null,r.createElement(n.Z,{title:"주문 내역"}),r.createElement(o,null,r.createElement(a.Df,null,"주문 내역"),0===h.length&&r.createElement(c.Z,null),e&&h&&h?.map(((e,t)=>r.createElement(p.rU,{key:t,to:`/customerorders/${e.orderId}`},r.createElement(l.bE,{ref:g},r.createElement("img",{src:e.itemImageUrl,alt:e.itemName}),r.createElement(l.S8,null,r.createElement(l.mS,null,r.createElement("div",null,r.createElement("span",null,e.itemName),r.createElement("span",null,e.shopName)),r.createElement("div",null)),r.createElement(l.uo,null,r.createElement("div",null,r.createElement("span",null,"2~3일 내 도착")),r.createElement("div",null,r.createElement("div",null,r.createElement("span",null,"수량: ",e.count,"개")),r.createElement("div",null,r.createElement("span",null,e.price,"원"),r.createElement("span",null)))))))))))}},8490:(e,t,i)=>{i.d(t,{S8:()=>l,bE:()=>a,im:()=>n,mS:()=>m,uo:()=>d});var r=i(97083);const n=r.Z.section`
  @media (max-width: 769px) {
    margin-top: 5rem;
    padding: 2rem 2rem;
  }
`,a=r.Z.div`
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
`,l=r.Z.div`
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
`,m=r.Z.div`
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
`,d=r.Z.div`
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
`},35569:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(67294);const n=i(97083).Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.4);

  height: 50vh;
`,a=()=>r.createElement(n,null,"텅~")},39975:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(67294),n=i(97083);const a=n.Z.div`
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
`,l=n.Z.div`
  font-size: 1.5rem;

  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  box-sizing: border-box;
  padding-left: 1rem;
`,m=n.Z.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`;var d=i(17625),o=i(51436),s=i(5977);const c=({title:e})=>{const t=(0,s.k6)();return r.createElement("div",null,r.createElement(a,null,r.createElement(l,null,r.createElement(d.G,{icon:o.acZ,onClick:()=>{t.goBack()}})),r.createElement(m,null,e),r.createElement("div",null)))}},83564:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(9669),n=i.n(r);const a=e=>n().get(e,{withCredentials:!0,headers:{Authorization:`Bearer ${localStorage.getItem("jwt")}`}}).then((e=>e.data))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cm9udC8uL2NvbXBvbmVudHMvQnV5aW5nL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vY29tcG9uZW50cy9CdXlpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvTGlrZS9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvTnVsbERhdGEvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL051bGxEYXRhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9jb21wb25lbnRzL1JlcG9uc2l2ZUJhci9zdHlsZXMudHN4Iiwid2VicGFjazovL3NsZWFjdC10cy1mcm9udC8uL2NvbXBvbmVudHMvUmVwb25zaXZlQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi91dGlscy9mZXRjaGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgcGFkZGluZzogMnJlbSAycmVtO1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlcG9uc2l2ZUJhciBmcm9tIFwiQGNvbXBvbmVudHMvUmVwb25zaXZlQmFyXCI7XG5pbXBvcnQgeyBUb3BIZWFkZXIgfSBmcm9tIFwiQHBhZ2VzL015UGFnZS9zdHlsZXNcIjtcbmltcG9ydCB7XG4gIENhcnRJdGVtLFxuICBJbmZvQm90dG9tLFxuICBJbmZvVG9wLFxuICBJdGVtSW5mbyxcbn0gZnJvbSBcIkBjb21wb25lbnRzL0xpa2Uvc3R5bGVzXCI7XG5pbXBvcnQgdXNlU1dSSW5maW5pdGUgZnJvbSBcInN3ci9pbmZpbml0ZVwiO1xuaW1wb3J0IGZldGNoZXIgZnJvbSBcIkB1dGlscy9mZXRjaGVyXCI7XG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL0J1eWluZy9zdHlsZXNcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCBOdWxsRGF0YSBmcm9tIFwiQGNvbXBvbmVudHMvTnVsbERhdGFcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgSU9yZGVyRGF0YSwgb3JkZXJzIH0gZnJvbSBcIkB0eXBpbmdzL2RiXCI7XG5cbmNvbnN0IEJ1eWluZyA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBvcmRlckRhdGEsIHNldFNpemUgfSA9IHVzZVNXUkluZmluaXRlPElPcmRlckRhdGE+KFxuICAgIChpbmRleCkgPT4gYGh0dHBzOi8vd2F5Y2FidmF2LnNob3Avb3JkZXJzL2N1c3RvbWVycz9wYWdlPSR7aW5kZXh9YCxcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgbGV0IG9yZGVyVGVtcDogQXJyYXk8b3JkZXJzW10+ID0gW107XG5cbiAgaWYgKG9yZGVyRGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJEYXRhPy5sZW5ndGg7IGkrKykge1xuICAgICAgb3JkZXJUZW1wLnB1c2gob3JkZXJEYXRhW2ldLm9yZGVycyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb3JkZXJMaXN0ID0gb3JkZXJUZW1wLmZsYXQoKTtcblxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDsgqzsmqnsnpDqsIAg66eI7KeA66eJIOyalOyGjOulvCDrs7Tqs6Ag7J6I6rOgLCDroZzrlKkg7KSR7J20IOyVhOuLiOudvOuptFxuICAgIGlmIChpblZpZXcpIHtcbiAgICAgIHNldFNpemUoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgfVxuICB9LCBbaW5WaWV3XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJlcG9uc2l2ZUJhciB0aXRsZT17XCLso7zrrLgg64K07JetXCJ9IC8+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPFRvcEhlYWRlcj7so7zrrLgg64K07JetPC9Ub3BIZWFkZXI+XG5cbiAgICAgICAge29yZGVyTGlzdC5sZW5ndGggPT09IDAgJiYgPE51bGxEYXRhIC8+fVxuXG4gICAgICAgIHtvcmRlckRhdGEgJiZcbiAgICAgICAgICBvcmRlckxpc3QgJiZcbiAgICAgICAgICBvcmRlckxpc3Q/Lm1hcCgodjogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGluayBrZXk9e2luZGV4fSB0bz17YC9jdXN0b21lcm9yZGVycy8ke3Yub3JkZXJJZH1gfT5cbiAgICAgICAgICAgICAgICA8Q2FydEl0ZW0gcmVmPXtyZWZ9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3YuaXRlbUltYWdlVXJsfSBhbHQ9e3YuaXRlbU5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICA8SXRlbUluZm8+XG4gICAgICAgICAgICAgICAgICAgIDxJbmZvVG9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57di5pdGVtTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57di5zaG9wTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9JbmZvVG9wPlxuICAgICAgICAgICAgICAgICAgICA8SW5mb0JvdHRvbT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Mn4z7J28IOuCtCDrj4TssKk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuyImOufiToge3YuY291bnR96rCcPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2LnByaWNlfeybkDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvSW5mb0JvdHRvbT5cbiAgICAgICAgICAgICAgICAgIDwvSXRlbUluZm8+XG4gICAgICAgICAgICAgICAgPC9DYXJ0SXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1eWluZztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENhcnRJdGVtID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIH1cblxuICAmIGltZyB7XG4gICAgbWluLXdpZHRoOiA4cmVtO1xuICAgIG1heC13aWR0aDogOHJlbTtcbiAgICBtaW4taGVpZ2h0OiA4cmVtO1xuICAgIG1heC1oZWlnaHQ6IDhyZW07XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgbWluLXdpZHRoOiA2cmVtO1xuICAgICAgbWF4LXdpZHRoOiA2cmVtO1xuICAgICAgbWluLWhlaWdodDogNnJlbTtcbiAgICAgIG1heC1oZWlnaHQ6IDZyZW07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbUluZm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICYgLnRpbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEluZm9Ub3AgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcblxuICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYgc3BhbiB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgICYgc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgfVxuXG4gICAgJiBzcGFuOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcblxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB9XG4gIH1cblxuICAmID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJyZW07XG5cbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG5cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5mb0JvdHRvbSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuXG4gICYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgY29sb3I6ICMxOTk1MzA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAzMCU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTc1cHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJiA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHdpZHRoOiA2MCU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NzVweCkge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgICAgd2lkdGg6IDYwJTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk3NXB4KSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuXG4gICAgICAmID4gc3BhbiB7XG4gICAgICAgIG1hcmdpbjogMCAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgICYgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk3NXB4KSB7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjJyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJiBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjZyZW07XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk3NXB4KSB7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjNyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdpZHRoOiA4NSU7XG5cbiAgICAgIG1hcmdpbi1yaWdodDogLTJyZW07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgICAgIH1cblxuICAgICAgJiBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICB9XG5cbiAgICAgICYgYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcblxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk3NXB4KSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgTnVsbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cbiAgaGVpZ2h0OiA1MHZoO1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE51bGwgfSBmcm9tIFwiQGNvbXBvbmVudHMvTnVsbERhdGEvc3R5bGVzXCI7XG5cbmNvbnN0IE51bGxEYXRhID0gKCkgPT4ge1xuICByZXR1cm4gPE51bGw+7YWFfjwvTnVsbD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOdWxsRGF0YTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcblxuICBwYWRkaW5nOiAxcmVtIDA7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmIGRpdiB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJhY2sgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuNXJlbTtcblxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgRkMsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFjaywgVGl0bGUsIFdyYXBwZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvUmVwb25zaXZlQmFyL3N0eWxlc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFBcnJvd0xlZnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBSZXBvbnNpdmVCYXI6IEZDPFByb3BzPiA9ICh7IHRpdGxlIH0pID0+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBoYW5kbGVIaXN0b3J5ID0gKCkgPT4ge1xuICAgIGhpc3RvcnkuZ29CYWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxCYWNrPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0xlZnR9IG9uQ2xpY2s9e2hhbmRsZUhpc3Rvcnl9IC8+XG4gICAgICAgIDwvQmFjaz5cbiAgICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb25zaXZlQmFyO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PlxuICBheGlvc1xuICAgIC5nZXQodXJsLCB7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKX1gLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoZXI7XG4iXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRhdGEiLCJvcmRlckRhdGEiLCJzZXRTaXplIiwidXNlU1dSSW5maW5pdGUiLCJpbmRleCIsImZldGNoZXIiLCJvcmRlclRlbXAiLCJpIiwibGVuZ3RoIiwicHVzaCIsIm9yZGVycyIsIm9yZGVyTGlzdCIsImZsYXQiLCJyZWYiLCJpblZpZXciLCJ1c2VJblZpZXciLCJ1c2VFZmZlY3QiLCJwcmV2U3RhdGUiLCJSZXBvbnNpdmVCYXIiLCJ0aXRsZSIsIk51bGxEYXRhIiwibWFwIiwidiIsImtleSIsInRvIiwib3JkZXJJZCIsInNyYyIsIml0ZW1JbWFnZVVybCIsImFsdCIsIml0ZW1OYW1lIiwic2hvcE5hbWUiLCJjb3VudCIsInByaWNlIiwiQ2FydEl0ZW0iLCJJdGVtSW5mbyIsIkluZm9Ub3AiLCJJbmZvQm90dG9tIiwiTnVsbCIsIkJhY2siLCJUaXRsZSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiaWNvbiIsImZhQXJyb3dMZWZ0Iiwib25DbGljayIsImdvQmFjayIsInVybCIsImF4aW9zIiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbiIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==