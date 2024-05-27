import{j as p}from"./jsx-runtime-BZf_YgVj.js";import{r as s}from"./index-CEThVCg_.js";import{p as N}from"./styled-components.browser.esm-h07761DX.js";/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}var C;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(C||(C={}));function c(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function U(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}var y;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(y||(y={}));function L(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?U(e):e;return{pathname:n?n.startsWith("/")?n:M(n,t):t,search:q(a),hash:J(r)}}function M(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function g(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function W(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _(e,t){let n=W(e);return t?n.map((a,r)=>r===e.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function T(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=U(e):(r=v({},e),c(!r.pathname||!r.pathname.includes("?"),g("?","pathname","search",r)),c(!r.pathname||!r.pathname.includes("#"),g("#","pathname","hash",r)),c(!r.search||!r.search.includes("#"),g("#","search","hash",r)));let i=e===""||r.pathname==="",u=i?"/":r.pathname,f;if(u==null)f=n;else{let l=t.length-1;if(!a&&u.startsWith("..")){let m=u.split("/");for(;m[0]==="..";)m.shift(),l-=1;r.pathname=m.join("/")}f=l>=0?t[l]:"/"}let h=L(r,f),d=u&&u!=="/"&&u.endsWith("/"),o=(i||u===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(d||o)&&(h.pathname+="/"),h}const $=e=>e.join("/").replace(/\/\/+/g,"/"),q=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,J=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,P=["post","put","patch","delete"];new Set(P);const k=["get",...P];new Set(k);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}const j=s.createContext(null),w=s.createContext(null),R=s.createContext(null),b=s.createContext({outlet:null,matches:[],isDataRoute:!1});function S(){return s.useContext(R)!=null}function z(){return S()||c(!1),s.useContext(R).location}function O(e){s.useContext(w).static||s.useLayoutEffect(e)}function A(){let{isDataRoute:e}=s.useContext(b);return e?K():F()}function F(){S()||c(!1);let e=s.useContext(j),{basename:t,future:n,navigator:a}=s.useContext(w),{matches:r}=s.useContext(b),{pathname:i}=z(),u=JSON.stringify(_(r,n.v7_relativeSplatPath)),f=s.useRef(!1);return O(()=>{f.current=!0}),s.useCallback(function(d,o){if(o===void 0&&(o={}),!f.current)return;if(typeof d=="number"){a.go(d);return}let l=T(d,JSON.parse(u),i,o.relative==="path");e==null&&t!=="/"&&(l.pathname=l.pathname==="/"?t:$([t,l.pathname])),(o.replace?a.replace:a.push)(l,o.state,o)},[t,a,u,i,e])}var E=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(E||{}),I=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(I||{});function V(e){let t=s.useContext(j);return t||c(!1),t}function D(e){let t=s.useContext(b);return t||c(!1),t}function G(e){let t=D(),n=t.matches[t.matches.length-1];return n.route.id||c(!1),n.route.id}function K(){let{router:e}=V(E.UseNavigateStable),t=G(I.UseNavigateStable),n=s.useRef(!1);return O(()=>{n.current=!0}),s.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,x({fromRouteId:t},i)))},[e,t])}new Promise(()=>{});const Q=s.createContext({}),X=()=>s.useContext(Q),Y=N.button`
    background-color: ${({$dark:e})=>e==!0?"black":"rgb(26, 35, 47)"};
    cursor: pointer;
    color: white;
    border-radius: 5px;
    border: none;
    width: clamp(50px,8vw,100px);
    padding: 5px;
    
    &:hover {
        transition: .5s;
        background-color: rgb(51, 69, 94);
    }
`,B=({value:e,func:t,dark:n=!1})=>p.jsx(Y,{onClick:()=>{t()},$dark:n,children:e});B.__docgenInfo={description:"",methods:[],displayName:"Button",props:{value:{required:!0,tsType:{name:"string"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},func:{required:!0,tsType:{name:"signature",type:"function",raw:"(url?:string)=>void",signature:{arguments:[{type:{name:"string"},name:"url"}],return:{name:"void"}}},description:""}}};const Z=N.div`
    display: flex;
    align-items: center;
    gap: 5px;

    & input {
        border-radius: 5px;
        border: none;
        width: clamp(170px,10vw,400px);
        padding: 5px;
    }
`,H=()=>{const[e,t]=s.useState(""),{setFeatch:n}=X(),a=A();return p.jsxs(Z,{children:[p.jsx("input",{type:"search",value:e,placeholder:"Digite um nome de usuario",onChange:r=>{t(r.target.value)}}),p.jsx(B,{func:()=>{n(e),a(`/fetch/${e}`)},dark:!1,value:"Buscar"})]})};H.__docgenInfo={description:"",methods:[],displayName:"SearchBar"};export{H as S,A as u};
