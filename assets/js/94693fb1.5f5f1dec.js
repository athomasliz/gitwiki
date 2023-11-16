"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[6947],{223:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(5893),i=s(1151);const r={sidebar_position:2},a="About Docusaurus",o={id:"docusaurus",title:"About Docusaurus",description:"This site is built with Docusaurus.",source:"@site/docs/docusaurus.md",sourceDirName:".",slug:"/docusaurus",permalink:"/Notesaurus/docs/docusaurus",draft:!1,unlisted:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/docusaurus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About this site",permalink:"/Notesaurus/docs/intro"},next:{title:"101",permalink:"/Notesaurus/docs/javascript/101"}},u={},c=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Install Node.js and VS Code",id:"1-install-nodejs-and-vs-code",level:3},{value:"2. Create your docusaurus project",id:"2-create-your-docusaurus-project",level:3},{value:"3. Start the server",id:"3-start-the-server",level:3},{value:"4. Change the setting in docusaurus.config.js",id:"4-change-the-setting-in-docusaurusconfigjs",level:3},{value:"5. Create repository in GitHub (Main branch).",id:"5-create-repository-in-github-main-branch",level:3},{value:"6. Create a branch gh_pages in GitHub.",id:"6-create-a-branch-gh_pages-in-github",level:3},{value:"7. Set up the SSL communication with GitHub.",id:"7-set-up-the-ssl-communication-with-github",level:3},{value:"8. Generate your Personal Access Token in GitHub",id:"8-generate-your-personal-access-token-in-github",level:3},{value:"9. Deploy the program",id:"9-deploy-the-program",level:3},{value:"10. Configure the branch to gh_pages and publish the page in GitHub Pages.",id:"10-configure-the-branch-to-gh_pages-and-publish-the-page-in-github-pages",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"about-docusaurus",children:"About Docusaurus"}),"\n",(0,n.jsxs)(t.p,{children:["This site is built with ",(0,n.jsx)(t.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"step-by-step-guide",children:"Step by Step Guide"}),"\n",(0,n.jsxs)(t.h3,{id:"1-install-nodejs-and-vs-code",children:["1. Install ",(0,n.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Node.js"})," and ",(0,n.jsx)(t.a,{href:"https://code.visualstudio.com",children:"VS Code"})]}),"\n",(0,n.jsx)(t.h3,{id:"2-create-your-docusaurus-project",children:"2. Create your docusaurus project"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"npx create-docusaurus@latest {Your project name} classic\n"})}),"\n",(0,n.jsx)(t.h3,{id:"3-start-the-server",children:"3. Start the server"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"yarn start\n"})}),"\n",(0,n.jsx)(t.h3,{id:"4-change-the-setting-in-docusaurusconfigjs",children:"4. Change the setting in docusaurus.config.js"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="docusaurus.config.js"    ',children:"const config = {\n    title: 'Keep your notes',\n    tagline: '',\n    url: 'https://athomasliz.github.io',\n    baseUrl: '/Notesaurus/',\n    projectName: 'Notesaurus', \n\n...\n"})}),"\n",(0,n.jsx)(t.h3,{id:"5-create-repository-in-github-main-branch",children:"5. Create repository in GitHub (Main branch)."}),"\n",(0,n.jsxs)(t.p,{children:["You may download ",(0,n.jsx)(t.a,{href:"https://desktop.github.com/",children:"GitHub Desktop"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"6-create-a-branch-gh_pages-in-github",children:"6. Create a branch gh_pages in GitHub."}),"\n",(0,n.jsx)(t.h3,{id:"7-set-up-the-ssl-communication-with-github",children:"7. Set up the SSL communication with GitHub."}),"\n",(0,n.jsxs)(t.p,{children:["You may refer ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",children:"here"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'ssh-keygen -t ed25519 "{your email}"\nssh-add ~/.ssh/id_ed25519\n'})}),"\n",(0,n.jsx)(t.p,{children:"Add the public key in GitHub."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"GitHub Add public key",src:s(612).Z+"",width:"1124",height:"440"})}),"\n",(0,n.jsx)(t.h3,{id:"8-generate-your-personal-access-token-in-github",children:"8. Generate your Personal Access Token in GitHub"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"GitHub Personal Access Token",src:s(2628).Z+"",width:"1132",height:"343"})}),"\n",(0,n.jsx)(t.h3,{id:"9-deploy-the-program",children:"9. Deploy the program"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"export GIT_USER={Your GitHub Username}\nexport GIT_PASS={Your GitHub Personal Access Token}\nyarn deploy\n"})}),"\n",(0,n.jsx)(t.h3,{id:"10-configure-the-branch-to-gh_pages-and-publish-the-page-in-github-pages",children:"10. Configure the branch to gh_pages and publish the page in GitHub Pages."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"GitHub Pages Configuration",src:s(5361).Z+"",width:"1138",height:"728"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5361:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/github-pages-configuration-f00691b60406f319a1c38f3dedf09799.PNG"},2628:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/github-personal-access-token-291d97540429c2d44d1d910f3a23de3c.PNG"},612:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/github-setup-public-key-5250a900b8e73e5ab417da9ffdac54b0.PNG"},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var n=s(7294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);