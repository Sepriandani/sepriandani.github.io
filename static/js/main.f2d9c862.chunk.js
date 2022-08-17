(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{51:function(n,e,t){"use strict";t.r(e);var i,r,a=t(1),o=t(20),c=t.n(o),s=t(12),l=t(8),d=t(4),m=t(5),b=t(0),j=m.b.div(i||(i=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function p(n){var e=n.heading,t=void 0===e?"Col Heading":e,i=n.links,r=void 0===i?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:i;return Object(b.jsxs)(j,{children:[Object(b.jsx)("h2",{className:"heading",children:t}),Object(b.jsx)("ul",{children:r.map((function(n,e){return Object(b.jsx)("li",{children:"Link"===n.type?Object(b.jsx)(s.b,{to:n.path,children:n.title}):Object(b.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var h,x=m.b.div(r||(r=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function g(n){var e=n.children;return Object(b.jsx)(x,{className:"para",children:Object(b.jsx)("p",{children:e})})}var u=m.b.div(h||(h=Object(d.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(b.jsxs)(u,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"footer__col1",children:[Object(b.jsx)("h1",{className:"footer__col1__title",children:"Seprian Dani"}),Object(b.jsx)(g,{children:"I work as a freelance Full Stack Web Developer and IoT Developer. I like code and making things that make other people amazed with my work."})]}),Object(b.jsx)("div",{className:"footer__col2",children:Object(b.jsx)(p,{heading:"Important Links",links:[{title:"Home",path:"/portfolio",type:"Link"},{type:"Link",title:"About",path:"/portfolio/about"},{type:"Link",title:"Projects",path:"/portfolio/projects"},{type:"Link",title:"Contact",path:"/portfolio/contact"}]})}),Object(b.jsx)("div",{className:"footer__col3",children:Object(b.jsx)(p,{heading:"Contact Info",links:[{title:"+6285348439684",path:"tel:+6285348439684"},{title:"sepriandanni@gmail.com",path:"mailto:sepriandanni@gmail.com"},{title:"Lampung, Indonesia",path:"https://www.google.com/maps/@-5.3708749,105.3012279,17z"}]})}),Object(b.jsx)("div",{className:"footer__col4",children:Object(b.jsx)(p,{heading:"Follow Me",links:[{title:"LinkIn",path:"http://facebook.com"},{title:"Dribble",path:"http://twitter.com"}]})})]}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(g,{children:"\xa9 2022 - Seprian Dani"})})})]})}var _,O,v=t(17),w=t(10),y=m.b.nav(_||(_=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function k(){var n=Object(a.useState)(!1),e=Object(v.a)(n,2),t=e[0],i=e[1];return Object(b.jsxs)(y,{children:[Object(b.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(b.jsx)(w.h,{})}),Object(b.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(b.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(b.jsx)(w.c,{})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}function N(){var n=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var I=m.b.div(O||(O=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function z(n){var e=n.btnText,t=void 0===e?"test":e,i=n.btnLink,r=void 0===i?"test":i,a=n.outline,o=void 0!==a&&a;return Object(b.jsx)(I,{outline:o,className:"button-wrapper",children:Object(b.jsx)(s.b,{className:"button",to:r,children:t})})}var S,B,T=t.p+"static/media/about-page-img2.20cc4a30.png",D=m.b.div(S||(S=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function C(n){var e=n.title,t=void 0===e?"Title":e,i=n.items,r=void 0===i?["HTML","CSS"]:i;return Object(b.jsxs)(D,{children:[Object(b.jsx)("h1",{className:"title",children:t}),Object(b.jsx)("div",{className:"items",children:r.map((function(n,e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(g,{children:n})},e)}))})]})}var L,M=m.b.div(B||(B=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function R(){return Object(b.jsx)(M,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(b.jsx)(g,{children:"Have a project in mind"}),Object(b.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(b.jsx)(z,{btnText:"Contact Now",btnLink:"/portfolio/contact"})]})})})}var F=m.b.div(L||(L=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function A(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(F,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"top-section",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(b.jsx)("span",{children:"Seprian Dani"})]}),Object(b.jsx)("h2",{className:"about__heading",children:"A freelance full stack web developer and IoT developer"}),Object(b.jsx)("div",{className:"about__info",children:Object(b.jsxs)(g,{children:["I am from lampung, Indonesia. A place of beauty and nature. Since I was in university, I love to code. I always try to design stuff from my unique point of view. I also love to create things that can be useful to others.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"I started coding when I was in university. Coding is also my hobby. I love it and now I have the opportunity to work on my hobby. Coding never bores me and so far I'm enjoying the process",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place."]})})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("img",{src:T,alt:"me"})})]}),Object(b.jsxs)("div",{className:"about__info__items",children:[Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(b.jsx)(C,{title:"School",items:["SMAN 1 Koto XI Tarusan. High School"]}),Object(b.jsx)(C,{title:"Collage",items:["Sumatera Institut of Technology"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(b.jsx)(C,{title:"FrontEnd",items:["HTML","CSS","JavaScript","React"]}),Object(b.jsx)(C,{title:"BackEnd",items:["Node","Express","PHP"]}),Object(b.jsx)(C,{title:"IoT",items:["Arduino","Raspberry pi","Nodemcu"]}),Object(b.jsx)(C,{title:"Design",items:["Adobe Photoshop","Adobe Ilustrator","Figma"]})]})]})]}),Object(b.jsx)(R,{})]})})}var P,H,E=t(33),K=m.b.form(P||(P=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function W(){var n=Object(a.useRef)(),e=Object(a.useState)(!1),t=Object(v.a)(e,2),i=t[0],r=t[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(K,{ref:n,onSubmit:function(e){e.preventDefault(),E.a.sendForm("service_nzqt12f","template_2u2ewel",n.current,"user_p5Udbt2D7bBREcqsUmohK").then((function(n){console.log(n.text),r(!0)}),(function(n){console.log(n.text)}))},children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"user_name",children:["Your Name",Object(b.jsx)("input",{type:"text",id:"name",name:"user_name"})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"user_subject",children:["Subject",Object(b.jsx)("input",{type:"text",id:"subject",name:"user_subject"})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"email",children:["Your Email",Object(b.jsx)("input",{type:"email",id:"email",name:"user_email"})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"message",children:["Your message",Object(b.jsx)("textarea",{type:"text",id:"message",name:"message"})]})}),Object(b.jsx)("button",{type:"submit",children:"Send"}),i&&"Thank you..."]})})}var q,Y=m.b.div(H||(H=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function U(n){var e=n.icon,t=void 0===e?Object(b.jsx)(w.j,{}):e,i=n.text,r=void 0===i?"I need text ":i;return Object(b.jsxs)(Y,{children:[Object(b.jsx)("div",{className:"icon",children:t}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(g,{children:r})})]})}var V,J=m.b.div(q||(q=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function G(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,i=n.heading,r=void 0===i?"need heading":i;return Object(b.jsxs)(J,{className:"section-title",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:r})]})}var X=m.b.div(V||(V=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Q(){return Object(b.jsx)(X,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(G,{heading:"contact",subheading:"get in touch"}),Object(b.jsxs)("div",{className:"contactSection__wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(U,{icon:Object(b.jsx)(w.g,{}),text:"+6285348439684"}),Object(b.jsx)(U,{icon:Object(b.jsx)(w.f,{}),text:"sepriandanni@gmail.com"}),Object(b.jsx)(U,{text:"Lampung, Indonesia"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)(W,{})})]})]})})}var Z,$=t.p+"static/media/map.da892a91.png",nn=m.b.div(Z||(Z=Object(d.a)(["\n  background: url(",") no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])),$);function en(){return Object(b.jsx)(nn,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"map__card",children:[Object(b.jsx)("h3",{className:"map__card__heading",children:"Here is me"}),Object(b.jsx)(g,{children:"Bandar Lampung, Lampung, Indonesia"}),Object(b.jsx)("a",{className:"map__card__link",href:"https://www.google.com/maps/@-5.3708749,105.3012279,17z",target:"_blank",rel:"noreferrer",children:"Open in google map"})]})})})}function tn(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Q,{}),Object(b.jsx)(en,{})]})}var rn,an,on=t.p+"static/media/about-sec-img.59925306.png",cn=m.b.div(rn||(rn=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n    .aboutImg {\n      display: none;\n    }\n  }\n"])));function sn(){return Object(b.jsx)(cn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"aboutSection__left",children:[Object(b.jsx)(G,{subheading:"Let me introduce myself",heading:"About Me"}),Object(b.jsx)(g,{children:"I work as a freelance Full Stack Web Developer and IoT Engineer. I like code and making things that make other people amazed with my work."}),Object(b.jsxs)("div",{className:"aboutSection__buttons",children:[Object(b.jsx)(z,{btnText:"Works",btnLink:"/portfolio/projects"}),Object(b.jsx)(z,{btnText:"Read More",btnLink:"/portfolio/about",outline:!0})]})]}),Object(b.jsx)("div",{className:"aboutSection__right",children:Object(b.jsx)("img",{className:"aboutImg",src:on,alt:"Img"})})]})})}var ln,dn=m.b.div(an||(an=Object(d.a)(["\n  text-align: center;\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));function mn(n){var e=n.icon,t=void 0===e?Object(b.jsx)(w.e,{}):e,i=n.title,r=void 0===i?"Web Design":i,a=n.desc,o=void 0===a?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok":a;return Object(b.jsxs)(dn,{className:"servicesItem",children:[Object(b.jsx)("div",{className:"servicesItem__icon",children:t}),Object(b.jsx)("div",{className:"servicesItem__title",children:r}),Object(b.jsx)(g,{children:o})]})}var bn=m.b.div(ln||(ln=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function jn(){return Object(b.jsx)(bn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(G,{subheading:"What i will do for you",heading:"Services"}),Object(b.jsxs)("div",{className:"services__allItems",children:[Object(b.jsx)(mn,{icon:Object(b.jsx)(w.e,{}),title:"UI/UX Design",desc:"I create a unique look and professional website appearance"}),Object(b.jsx)(mn,{icon:Object(b.jsx)(w.d,{}),title:"Web development",desc:"Create database, scripting, and website architecture so that the frontend of the website can communicate with the database"}),Object(b.jsx)(mn,{icon:Object(b.jsx)(w.i,{}),title:"IoT development",desc:"Creating tools that can be monitored and controlled remotely using websites and apps"})]})]})})}var pn,hn=t(59),xn=t(56),gn=t(58),un=t(55),fn=m.b.div(pn||(pn=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 50vh;\n    border-radius: 12px;\n    overflow: hidden;\n    border: 3px solid var(--gray-2);\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  .stack {\n    width: 100%;\n    margin: 10px 0px 10px 0px;\n  }\n  .stackTitle {\n    font-size: 2rem;\n    text-align: center;\n    margin-bottom: 10px;\n  }\n  .stackList {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    font-size: 1.6rem;\n\n    li {\n      background-color: #333;\n      padding: 6px;\n      border-radius: 5px;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function _n(n){var e=n.title,t=n.desc,i=n.img;n.tags;return Object(b.jsxs)(fn,{children:[Object(b.jsx)("div",{className:"projectItem__img",children:Object(b.jsx)(s.b,{to:"/portfolio/projects",children:Object(b.jsx)("img",{src:i,alt:"project img",className:"images"})})}),Object(b.jsxs)("div",{className:"projectItem__info",children:[Object(b.jsx)(s.b,{to:"#",children:Object(b.jsx)("h3",{className:"projectItem__title",children:e})}),Object(b.jsx)("p",{className:"projectItem__desc",children:t})]})]})}t(50);var On,vn=t(60),wn=t.p+"static/media/mockup.3d1c531d.png",yn=t.p+"static/media/batik-teknik.d5bb47d0.PNG",kn=(t.p,t.p+"static/media/e-learning.dbef7740.png"),Nn=t.p+"static/media/kbsb.573958ba.png",In=t.p+"static/media/petanicanggih.b3732118.png",zn=[{id:Object(vn.a)(),name:"Petanicanggih",desc:"I build Web App for Petanicanggih, Petanicanggih is a startup that provides products and services to optimize agriculture with Internet of Things (IoT) technology.",img:In,tags:["Mysql","Codeigniter","Tailwindcss","Arduino"]},{id:Object(vn.a)(),name:"KBSB Website",desc:"KBSB (Keluarga Besar Sumatera Barat) is the highest organization formed as a gathering place for Lampung residents from West Sumatra",img:Nn,tags:["Mysql","Codeigniter","Tailwindcss","Arduino"]},{id:Object(vn.a)(),name:"Hipostarine",desc:"This project is my final college assignment. Hipostarine is an IoT project that allows users to control and monitor the condition of hydroponic plants using a website.",img:wn,tags:["Mysql","Codeigniter","Tailwindcss","Arduino"]},{id:Object(vn.a)(),name:"Batik Teknik",desc:"This project is to build an e-commerce website for a business called Batik Teknik. Batik Teknik is a business that I founded with my friends where at that time we participated in KBMI 2020 (Indonesian Student Business Competition)",img:yn,tags:["Wordpress"]},{id:Object(vn.a)(),name:"E-Learning",desc:"This project i build for SMAN 16 Bandar Lampung, which is one of the high schools in the city of Bandar Lampung.",img:kn,tags:["Mysql","Codeigniter","Bootstrap"]}];gn.a.use([un.a]);var Sn=m.b.div(On||(On=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function Bn(){return Object(b.jsx)(Sn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(G,{subheading:"some of my recent works",heading:"Projects"}),Object(b.jsx)("div",{className:"projects__allItems",children:Object(b.jsx)(hn.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:1},1200:{slidesPerView:3}},children:zn.map((function(n,e){if(!(e>=5))return Object(b.jsx)(xn.a,{children:Object(b.jsx)(_n,{title:n.name,img:n.img,desc:n.desc})},n.id)}))})})]})})}var Tn,Dn=t(57),Cn=t(61),Ln=[{id:1,name:"Alhadi",title:"Founder & CEO",org:"Batik Teknik",desc:"Seprian is a person of commitment. He is really good at what he is doing. I really like his work. "},{id:2,name:"Anugrah",title:"Co-founder",org:"Hipostarine",desc:"Really hard-working person. Deliver the work as promised. Planning to work more with this person. "}],Mn=m.b.div(Tn||(Tn=Object(d.a)(["\n  overflow-x: hidden;\n  padding: 10rem 0;\n  text-align: center;\n  .testimonial__wrapper {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n  }\n  .testimonial__info {\n    width: 100%;\n    height: fit-content;\n    padding: 3rem;\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    margin-top: 5rem;\n  }\n  .testimonial__desc {\n    .para {\n      text-align: center;\n    }\n  }\n  .testimonial__name {\n    margin-top: 4rem;\n    font-family: 'Montserrat Bold';\n    font-size: 2.2rem;\n  }\n  .testimonial__title {\n    font-size: 1.6rem;\n    margin-top: 0.3rem;\n  }\n  .arrows {\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg {\n      width: 30px;\n      pointer-events: none;\n    }\n    .next,\n    .prev {\n      margin: 0 0.5rem;\n      width: fit-content;\n      background-color: var(--deep-dark);\n      padding: 0.5rem 2rem;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n  }\n  .fade-enter {\n    opacity: 0;\n    transform: scale(0.96);\n    z-index: 1;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: 250ms ease-in;\n    transition-property: transform, opacity;\n    z-index: 1;\n  }\n  .fade-exit {\n    transform: scale(1);\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transform: scale(0.96);\n    transition: 200ms ease-in;\n    transition-property: transform, opacity;\n  }\n"])));function Rn(){var n=Object(a.useState)(0),e=Object(v.a)(n,2),t=e[0],i=e[1],r=Ln[t];function o(){i(t>=Ln.length-1?0:function(n){return n+1})}function c(){i(0===t?Ln.length-1:function(n){return n-1})}return Object(b.jsx)(Mn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(G,{subheading:"see what my clients say about me",heading:"Testimonials"}),Object(b.jsx)("div",{className:"testimonial__wrapper",children:Object(b.jsx)(Dn.a,{component:null,children:Object(b.jsx)(Cn.a,{timeout:300,classNames:"fade",children:Object(b.jsxs)("div",{className:"testimonial__info",children:[Object(b.jsx)("div",{className:"testimonial__desc",children:Object(b.jsx)(g,{children:r.desc})}),Object(b.jsx)("h2",{className:"testimonial__name",children:r.name}),Object(b.jsxs)("p",{className:"testimonial__title",children:[r.title,", ",Object(b.jsx)("br",{})," ",r.org]})]})},r.id)})}),Object(b.jsxs)("div",{className:"arrows",children:[Object(b.jsx)("div",{className:"prev",onClick:c,role:"button",tabIndex:0,onKeyDown:c,children:Object(b.jsx)(w.a,{})}),Object(b.jsx)("div",{className:"next",onClick:o,role:"button",tabIndex:0,onKeyDown:o,children:Object(b.jsx)(w.b,{})})]})]})})}var Fn,An,Pn=t.p+"static/media/hero2.56fd9f21.png",Hn=t.p+"static/media/social-media-arrow.ecc0133c.svg",En=t.p+"static/media/scroll-down-arrow.8ad25c53.svg",Kn=m.b.div(Fn||(Fn=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function Wn(){return Object(b.jsx)(Kn,{children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"hero__heading",children:[Object(b.jsx)("span",{children:"Hello, This is "}),Object(b.jsx)("span",{className:"hero__name",children:"Seprian Dani"})]}),Object(b.jsx)("div",{className:"hero__img",children:Object(b.jsx)("img",{src:Pn,alt:""})}),Object(b.jsxs)("div",{className:"hero__info",children:[Object(b.jsx)(g,{children:"I work as a freelance Full Stack Web Developer and IoT Developer. I like code and making things that make other people amazed with my work."}),Object(b.jsx)(z,{btnText:"see my works",btnLink:"/portfolio/projects"})]}),Object(b.jsxs)("div",{className:"hero__social",children:[Object(b.jsxs)("div",{className:"hero__social__indicator",children:[Object(b.jsx)("p",{children:"Follow"}),Object(b.jsx)("img",{src:Hn,alt:"icon"})]}),Object(b.jsx)("div",{className:"hero__social__text",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://facebook.com/",target:"_blank",rel:"noreferrer",children:"FB"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://twitter.com/",target:"_blank",rel:"noreferrer",children:"TW"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://instagram.com/",target:"_blank",rel:"noreferrer",children:"IG"})})]})})]}),Object(b.jsxs)("div",{className:"hero__scrollDown",children:[Object(b.jsx)("p",{children:"Scroll"}),Object(b.jsx)("img",{src:En,alt:"ScrollDown Arrow"})]})]})})})}function qn(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Wn,{}),Object(b.jsx)(sn,{}),Object(b.jsx)(jn,{}),Object(b.jsx)(Bn,{}),Object(b.jsx)(Rn,{}),Object(b.jsx)(R,{})]})}var Yn,Un=m.b.div(An||(An=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function Vn(){var n=Object(a.useState)(""),e=Object(v.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(zn),o=Object(v.a)(r,2),c=o[0],s=o[1];Object(a.useEffect)((function(){""!==t&&s((function(){return zn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Un,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(G,{heading:"Projects",subheading:"some of my recent works"}),Object(b.jsx)("div",{className:"projects__searchBar",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),i(n.target.value),!n.target.value.length>0&&s(zn)},placeholder:"Project Name"}),Object(b.jsx)(w.k,{className:"searchIcon"})]})}),Object(b.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(b.jsx)(_n,{title:n.name,desc:n.desc,img:n.img,tags:n.tags},n.id)}))})]})})})}function Jn(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(k,{}),Object(b.jsx)(N,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(A,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)(tn,{})}),Object(b.jsx)(l.a,{path:"/projects",children:Object(b.jsx)(Vn,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(qn,{})})]}),Object(b.jsx)(f,{})]})})}var Gn,Xn=Object(m.a)(Yn||(Yn=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Qn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Zn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",$n=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",ne=Object(m.a)(Gn||(Gn=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n\n"])),Qn,Zn,$n);c.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Xn,{}),Object(b.jsx)(ne,{}),Object(b.jsx)(Jn,{})]}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f2d9c862.chunk.js.map