import{h as f}from"./styled-components.browser.esm-h07761DX.js";import{R as r}from"./index-CEThVCg_.js";import"./tslib.es6-CRos2fHm.js";const{useParameter:R,addons:S,useEffect:N,useMemo:M}=__STORYBOOK_MODULE_PREVIEW_API__;var O=Object.defineProperty,P=(t,e)=>{for(var a in e)O(t,a,{get:e[a],enumerable:!0})},b={};P(b,{initializeThemeState:()=>_,pluckThemeFromContext:()=>T,useThemeParameters:()=>u});var c="themes",v=`storybook/${c}`,g="theme",A={},x={REGISTER_THEMES:`${v}/REGISTER_THEMES`};function T({globals:t}){return t[g]||""}function u(){return R(c,A)}function _(t,e){S.getChannel().emit(x.REGISTER_THEMES,{defaultTheme:e,themes:t})}var I=([t,e])=>e,k=({Provider:t,GlobalStyles:e,defaultTheme:a,themes:n={}})=>{let i=Object.keys(n),m=a||i[0];return _(i,m),(o,h)=>{let{themeOverride:E}=u(),s=T(h),p=M(()=>{let d=E||s||m,l=Object.entries(n);return l.length===1?I(l[0]):n[d]},[n,s,E]);return t?r.createElement(t,{theme:p},e&&r.createElement(e,null),o()):r.createElement(r.Fragment,null,e&&r.createElement(e,null),o())}};const D=f`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
  `,C={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[k({GlobalStyles:D})]};export{C as default};
