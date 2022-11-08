"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[4204],{2807:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=i(7462),s=(i(7294),i(3905));i(1839);const n={sidebar_position:999},r="Case Study",o={unversionedId:"cryptography/case-study",id:"cryptography/case-study",title:"Case Study",description:"1. Securing internal microservice with TLS using self-signed certificate",source:"@site/docs/cryptography/case-study.md",sourceDirName:"cryptography",slug:"/cryptography/case-study",permalink:"/Notesaurus/docs/cryptography/case-study",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/cryptography/case-study.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{sidebar_position:999},sidebar:"tutorialSidebar",previous:{title:"Lesson 0: Cryptography 101",permalink:"/Notesaurus/docs/cryptography/101"}},c={},l=[{value:"1. Securing internal microservice with TLS using self-signed certificate",id:"1-securing-internal-microservice-with-tls-using-self-signed-certificate",level:3}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"case-study"},"Case Study"),(0,s.kt)("h3",{id:"1-securing-internal-microservice-with-tls-using-self-signed-certificate"},"1. Securing internal microservice with TLS using self-signed certificate"),(0,s.kt)("p",null,"Regarding the use of self-signed certificate for securing internal microservice, 2 questions are being asked by another team in my workplace."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Q1: Isn't it better to use a public certificate issued by CA, especially in production environment?"),(0,s.kt)("p",{parentName:"li"},"  According to ",(0,s.kt)("a",{parentName:"p",href:"https://security.stackexchange.com/questions/175627/securing-internal-micro-services-letsencrypt-vs-self-signed-certificates-be"},"Securing internal micro-services - Letsencrypt vs. Self-signed certificates - Best practices"),", ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"public certificate authorities generally won't work for internal services")),"."),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},"Public certificate authorities generally won't work for internal services as your services are not reachable from the outside, so they have no way to verify that the certificate is being issued to the right entity. For example, if you asked Let's Encrypt for a server certificate for backend0001.myapp.myinternaldomain, Let's Encrypt needs to be able to verify that the request case from that hostname. For internal services, this is usually not reachable from the outside world.")),(0,s.kt)("p",{parentName:"li"},"  So when should we use a self-signed certificate? When should we use a CA-signed certificate? According to ",(0,s.kt)("a",{parentName:"p",href:"https://www.networknt.com/faq/self-ca-signed-cert/"},"https://www.networknt.com/faq/self-ca-signed-cert/"),", ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"CA-signed certificate must be used for public facing service, and it is safe to use self-signed certificate for internal service")),"."),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},"If the service is exposed to the Internet, you have to use a CA-signed certificate")),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},"If the service is internal, it is safe to use a self-signed certificate.")),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},"A lot of organizations use self-signed certificates, and big organizations might have their own CA.")),(0,s.kt)("p",{parentName:"li"},"  A better approach is to ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"use an internal, self-owned, organization-wise CA, a.k.a private PKI, for internal service")),", as mentioned in ",(0,s.kt)("a",{parentName:"p",href:"https://www.citrix.com/blogs/2019/10/31/the-top-3-considerations-when-securing-your-microservices-architecture/"},"https://www.citrix.com/blogs/2019/10/31/the-top-3-considerations-when-securing-your-microservices-architecture/")),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},"Keep in mind that in the microservice operating environment, there might be a large number of dynamic microservice instances that necessitate a smooth and automatic certificate creation and distribution mechanism. An internal PKI/CA can be used to provide certificate management, including issuing, revoking, and updating."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Q2: Even if a self-signed certificate is used, a valid hostname or ip should be stated in the certificate."),(0,s.kt)("p",{parentName:"li"},"  To access the microservice, the client will put the server certificate in the trust store stated in the SSL context. "),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-java"},"SSLContext sslContext = null;\nSSLContextBuilder sslContextBuilder = SSLContexts.custom().loadTrustMaterial(keystore);\nsslContext = sslContextBuilder.build();\n")),(0,s.kt)("p",{parentName:"li"},"  However, an exception will be thrown by the apache HTTP client, complaining about the host name. So we put the following line of code."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-java"},"//Instead of using STRICT_HOSTNAME_VERIFIER\nX509HostnameVerifier x509HostnameVerifier = SSLConnectionSockFactory.ALLOW_ALL_HOSTNAME_VERIFIER;\n")),(0,s.kt)("p",{parentName:"li"},"  This is why my colleague is uncomfortable with this approach."),(0,s.kt)("p",{parentName:"li"},"  My rationale is, since we are using self-signed certifcate, the trust has nothing to do with CA which makes use of hostname (Sign) to link up parties that have never met in reality. Rather, the process is done via handshake of certificate between the issuing party and accepting party of an internal organization via email, which we do know and trust each other."),(0,s.kt)("p",{parentName:"li"},"  According to ",(0,s.kt)("a",{parentName:"p",href:"https://security.stackexchange.com/questions/242904/tls-and-self-signed-certs-is-hostname-verification-necessary-if-client-supplied"},"https://security.stackexchange.com/questions/242904/tls-and-self-signed-certs-is-hostname-verification-necessary-if-client-supplied"),",\nthe act is simiiar to certificate pinning."),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},"Trusting a specific self-signed certificate by importing it in the trust store is basically pinning to this specific certificate. No further checks of the subject would be needed in this case.")))))}u.isMDXComponent=!0}}]);