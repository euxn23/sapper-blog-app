import{s as m,e as p,t as u,c as y,g as f,p as h,d as o,a as r,i as _,m as x,n as d}from"./lifecycle-098PJsN4.js";import{S as g,i as k}from"./index-2YXsB2F8.js";function v(n){let t,i=n[1]()+"",s;return{c(){t=p("time"),s=u(i),this.h()},l(a){t=y(a,"TIME",{datetime:!0,class:!0});var e=f(t);s=h(e,i),e.forEach(o),this.h()},h(){r(t,"datetime",n[0]),r(t,"class","text-grey-darker text-sm text-neutral-900 text-opacity-70 dark:text-gray-50 dark:text-opacity-60")},m(a,e){_(a,t,e),x(t,s)},p(a,[e]){e&1&&r(t,"datetime",a[0])},i:d,o:d,d(a){a&&o(t)}}}function $(n,t,i){let{date:s}=t;const a=()=>{const e=new Date(s),l=`0${e.getMonth()+1}`.slice(-2),c=`0${e.getDate()}`.slice(-2);return`${e.getFullYear()}.${l}.${c}`};return n.$$set=e=>{"date"in e&&i(0,s=e.date)},[s,a]}class T extends g{constructor(t){super(),k(this,t,$,v,m,{date:0})}}T.__docgen={version:3,name:"Time.svelte",data:[{visibility:"public",description:null,keywords:[],name:"date",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{T};
