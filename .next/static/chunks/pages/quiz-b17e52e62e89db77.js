(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{2610:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz",function(){return n(3687)}])},3687:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var u=n(5893),i=n(7294),r=n(1163),c=n(7656);function s(){let e=(0,r.useRouter)(),t=c.bv.reduce((e,t)=>({...e,[t]:!1}),{}),[n,s]=(0,i.useState)(t),[l,o]=(0,i.useState)(0),h=e=>{s({...n,[e.target.name]:e.target.checked})},b=()=>{l<c.bv.length-1?o(l+1):d()},d=t=>{null==t||t.preventDefault();let u=Object.keys(n).filter(e=>n[e]);e.push("/results?traits=".concat(u.join(",")))};return(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Quiz"}),(0,u.jsxs)("form",{onSubmit:d,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("input",{type:"checkbox",id:c.bv[l],name:c.bv[l],checked:n[c.bv[l]],onChange:h}),(0,u.jsxs)("label",{htmlFor:c.bv[l],children:["Are you ",c.bv[l],"?"]})]}),(0,u.jsx)("button",{type:"button",onClick:b,children:"Next"}),l===c.bv.length-1&&(0,u.jsx)("button",{type:"submit",children:"Submit"})]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2610)}),_N_E=e.O()}]);