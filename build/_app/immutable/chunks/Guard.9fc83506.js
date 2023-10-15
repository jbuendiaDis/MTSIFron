import{S as M,i as N,s as P,O as Q,k as b,a as E,q as A,l as z,m as w,h as g,c as D,r as B,n as u,b as F,C as r,u as J,R as W,T as X,U as Y,g as Z,d as $}from"./index.37c432c9.js";import{c as i,f as y,t as V,m as K}from"./Lang.styles.8a09baae.js";const ee=i`
${y({size:"desktop",content:i`
    height: 100%;
`})}
${y({size:"phone-xbig",content:i`
    height: 100%;
    padding: 10px;
`})}
`,te=i`
${y({size:"desktop",content:i`
    width: 95%;
`})}
`,ie=i`
${y({size:"tablet-portrait",content:i`
    width: 100%;
`})}
`,se=i`
${y({size:"desktop-xbig",content:i`
${V({size:7,weight:400,height:7})}
`})}
${y({size:"desktop",content:i`
${V({size:5,weight:400,height:6})}
`})}
${y({size:"tablet-portrait",content:i`
${V({size:4,weight:400,height:5})}
`})}
${y({size:"phone-big",content:i`
${V({size:3,weight:400,height:4})}
`})}

`,le=i`
  width: 100%;
  height: 90vh;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: -2;
  ${ee}
`,ne=i`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  z-index: 1;
`,ae=i`
  width: 70%;
  height: 1px;
  border: 0;
  border-top: 1px solid white;
  z-index: 1;
  ${te}

`;i`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;i`
  object-fit: cover;
`;const oe=i`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #253883 30%, rgba(37, 56, 131, 0.5) 80%);
  z-index: -1;
`,R=s=>i`
  ${K({image:s,size:"cover",position:"top"})}
  position: absolute;
  width: 68%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -2;
  ${ie}
  `,T=s=>i`
${K({image:s,size:"contain",position:"center"})}
position: absolute;
width: 179px;
height: 187px;
top: 40%;
left: 50%;
transform: translate(-50%, -60%);
opacity: 0.5;
z-index: 0;
`,L=i`
  ${V({size:7,weight:400})}
  text-transform: uppercase;
  color: white;
  ${se}
`;function U(s){let e,l;return{c(){e=b("h1"),l=A(s[1]),this.h()},l(o){e=z(o,"H1",{class:!0});var h=w(e);l=B(h,s[1]),h.forEach(g),this.h()},h(){u(e,"class",L)},m(o,h){F(o,e,h),r(e,l)},p(o,h){h&2&&J(l,o[1])},d(o){o&&g(e)}}}function ce(s){let e,l,o,h,m,x,S,v,c,d,k,j,q,C,I,G,_,a=s[1]&&U(s);const H=s[5].default,f=Q(H,s,s[4],null);return{c(){e=b("div"),l=b("div"),h=E(),m=b("div"),S=E(),v=b("div"),c=E(),d=b("div"),k=b("h1"),j=A(s[0]),q=E(),a&&a.c(),C=E(),I=b("div"),G=E(),f&&f.c(),this.h()},l(t){e=z(t,"DIV",{class:!0});var n=w(e);l=z(n,"DIV",{class:!0}),w(l).forEach(g),h=D(n),m=z(n,"DIV",{class:!0}),w(m).forEach(g),S=D(n),v=z(n,"DIV",{class:!0}),w(v).forEach(g),c=D(n),d=z(n,"DIV",{class:!0});var p=w(d);k=z(p,"H1",{class:!0});var O=w(k);j=B(O,s[0]),O.forEach(g),q=D(p),a&&a.l(p),C=D(p),I=z(p,"DIV",{class:!0}),w(I).forEach(g),G=D(p),f&&f.l(p),p.forEach(g),n.forEach(g),this.h()},h(){u(l,"class",o=R(s[2])),u(m,"class",x=T(s[3])),u(v,"class",oe),u(k,"class",L),u(I,"class",ae),u(d,"class",ne),u(e,"class",le)},m(t,n){F(t,e,n),r(e,l),r(e,h),r(e,m),r(e,S),r(e,v),r(e,c),r(e,d),r(d,k),r(k,j),r(d,q),a&&a.m(d,null),r(d,C),r(d,I),r(d,G),f&&f.m(d,null),_=!0},p(t,[n]){(!_||n&4&&o!==(o=R(t[2])))&&u(l,"class",o),(!_||n&8&&x!==(x=T(t[3])))&&u(m,"class",x),(!_||n&1)&&J(j,t[0]),t[1]?a?a.p(t,n):(a=U(t),a.c(),a.m(d,C)):a&&(a.d(1),a=null),f&&f.p&&(!_||n&16)&&W(f,H,t,t[4],_?Y(H,t[4],n,null):X(t[4]),null)},i(t){_||(Z(f,t),_=!0)},o(t){$(f,t),_=!1},d(t){t&&g(e),a&&a.d(),f&&f.d(t)}}}function re(s,e,l){let{$$slots:o={},$$scope:h}=e,{title:m}=e,{subtitle:x}=e,{cover:S}=e,{number:v}=e;return s.$$set=c=>{"title"in c&&l(0,m=c.title),"subtitle"in c&&l(1,x=c.subtitle),"cover"in c&&l(2,S=c.cover),"number"in c&&l(3,v=c.number),"$$scope"in c&&l(4,h=c.$$scope)},[m,x,S,v,h,o]}class fe extends M{constructor(e){super(),N(this,e,re,ce,P,{title:0,subtitle:1,cover:2,number:3})}}export{fe as G};
