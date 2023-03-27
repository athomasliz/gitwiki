"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[1516],{6266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));n(1839);const a={sidebar_position:3},s="Day 2: Rest Controller",i={unversionedId:"spring-boot/rest-controller",id:"spring-boot/rest-controller",title:"Day 2: Rest Controller",description:"Step by Step Guide",source:"@site/docs/spring-boot/rest-controller.md",sourceDirName:"spring-boot",slug:"/spring-boot/rest-controller",permalink:"/Notesaurus/docs/spring-boot/rest-controller",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/spring-boot/rest-controller.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Day 1: Spring Initializr",permalink:"/Notesaurus/docs/spring-boot/spring-initializr"},next:{title:"Day 3:  Swagger",permalink:"/Notesaurus/docs/spring-boot/swagger"}},l={},p=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Add starter",id:"1-add-starter",level:3},{value:"2. Add configuration",id:"2-add-configuration",level:3},{value:"3. Define Request Model",id:"3-define-request-model",level:3},{value:"4. Define Response Model",id:"4-define-response-model",level:3},{value:"5. Define Rest Controller",id:"5-define-rest-controller",level:3},{value:"6. Start server",id:"6-start-server",level:3},{value:"7. Test with Postman",id:"7-test-with-postman",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"day-2-rest-controller"},"Day 2: Rest Controller"),(0,r.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,r.kt)("h3",{id:"1-add-starter"},"1. Add starter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Remove")," below dependency spring-web if any. You may refer to ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/71121188/correct-classpath-of-your-application-so-it-contains-compatible-versions-of-clas"},"this"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.springframework</groupId>\n    <artifactId>spring-web</artifactId>\n    <version>5.2.12.RELEASE</version>\n</dependency>\n"))),(0,r.kt)("h3",{id:"2-add-configuration"},"2. Add configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="application.yml"',title:'"application.yml"'},"{/* highlight-start */}\nserver:\n  port: 18080\n  servlet:\n    context-path: /\n{/* highlight-end */}\n\nlogging:\n  level:\n    root:  error\n    org.springframework:  info\n    org.irushu.demo:  info    \n")),(0,r.kt)("h3",{id:"3-define-request-model"},"3. Define Request Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.web.model.DemoRequest" showLineNumbers',title:'"org.irushu.demo.web.model.DemoRequest"',showLineNumbers:!0},"public class DemoRequest {\n    \n    private String input;\n    ...\n}\n")),(0,r.kt)("h3",{id:"4-define-response-model"},"4. Define Response Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.web.model.DemoResponse" showLineNumbers',title:'"org.irushu.demo.web.model.DemoResponse"',showLineNumbers:!0},"public class DemoResponse {\n\n    private String output;\n    ...\n}\n")),(0,r.kt)("h3",{id:"5-define-rest-controller"},"5. Define Rest Controller"),(0,r.kt)("p",null,"We define a rest controller class ",(0,r.kt)("strong",{parentName:"p"},"DemoController"),"  with a method ",(0,r.kt)("strong",{parentName:"p"},"echo"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="org.irushu.demo.web.controller.DemoController" showLineNumbers',title:'"org.irushu.demo.web.controller.DemoController"',showLineNumbers:!0},'{/* highlight-start */}\n@RestController\n@RequestMapping("/demo/")\n{/* highlight-end */}\npublic class DemoController {\n    \n    {/* highlight-start */}\n    @RequestMapping(value = "/echo", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)\n    public DemoResponse echo(@RequestBody DemoRequest demoRequest)\n    {/* highlight-end */}\n    {\n        DemoResponse demoResponse = new DemoResponse();\n        demoResponse.setOutput(demoRequest.getInput());\n        return demoResponse;\n    }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Annotate the class ",(0,r.kt)("strong",{parentName:"li"},"DemoController")," with ",(0,r.kt)("strong",{parentName:"li"},"@RestController")," and ",(0,r.kt)("strong",{parentName:"li"},"@RequestMapping"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Services defined under this ",(0,r.kt)("strong",{parentName:"li"},"DemoController")," class will all be under the context path /demo/."))),(0,r.kt)("li",{parentName:"ul"},"Annotate the method ",(0,r.kt)("strong",{parentName:"li"},"echo")," with ",(0,r.kt)("strong",{parentName:"li"},"@RequestMapping"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It defines POST as the HTTP method."),(0,r.kt)("li",{parentName:"ul"},"It defines input model to be ",(0,r.kt)("strong",{parentName:"li"},"DemoRequest"),", and in JSON format."),(0,r.kt)("li",{parentName:"ul"},"It defines the output model to be ",(0,r.kt)("strong",{parentName:"li"},"DemoResponse")," and in JSON format."),(0,r.kt)("li",{parentName:"ul"},"The context path will be /echo.  "))),(0,r.kt)("li",{parentName:"ul"},"Together with the setting in step 2, the service url will be ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:18080/demo/echo"},"http://localhost:18080/demo/echo")))),(0,r.kt)("h3",{id:"6-start-server"},"6. Start server"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the below command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean spring-boot:run\n")),(0,r.kt)("p",{parentName:"li"},"in the maven section of IDEA."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"spring boot run",src:n(3522).Z,width:"612",height:"248"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Spring boot will start the default built-in Tomcat server. You will see the log below."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"spring boot run",src:n(5200).Z,width:"1425",height:"329"})))),(0,r.kt)("h3",{id:"7-test-with-postman"},"7. Test with Postman"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Service Url"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"http://localhost:18080/demo/echo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Input Parameter JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "input": "A"\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Postman, type in the url. For Params, choose Body / raw / JSON."))))}d.isMDXComponent=!0},5200:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/idea-maven-spring-boot-run-2-15a2804b9d1b328fd40f268dfd5ecd20.PNG"},3522:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/idea-maven-spring-boot-run-1401037abfcdbf1e2898c229504215c8.PNG"}}]);