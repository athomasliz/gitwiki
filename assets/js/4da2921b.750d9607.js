"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[5832],{3600:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(1839);const i={sidebar_position:28},o="Unit Test with Mockito",s={unversionedId:"spring-boot/mockito",id:"spring-boot/mockito",title:"Unit Test with Mockito",description:"Step by Step Guide",source:"@site/docs/spring-boot/mockito.md",sourceDirName:"spring-boot",slug:"/spring-boot/mockito",permalink:"/Notesaurus/docs/spring-boot/mockito",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/spring-boot/mockito.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{sidebar_position:28},sidebar:"tutorialSidebar",previous:{title:"JPA Authentication",permalink:"/Notesaurus/docs/spring-boot/security"},next:{title:"Unit Test with MockMvc",permalink:"/Notesaurus/docs/spring-boot/mockMvc"}},l={},u=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Add starter",id:"1-add-starter",level:3},{value:"2. Test with Mockito",id:"2-test-with-mockito",level:3},{value:"Area to study",id:"area-to-study",level:2},{value:"1. <strong>Multiple return values</strong>.",id:"1-multiple-return-values",level:3},{value:"2. <strong>Argument Matchers</strong> such as <em>any()</em>, <em>anyInt()</em>, <em>anyString()</em>.... etc",id:"2-argument-matchers-such-as-any-anyint-anystring-etc",level:3},{value:"3. <strong>Verify method calls</strong> such as <em>times</em>, <em>atLeast</em>, <em>atMost</em>, <em>never</em>... etc",id:"3-verify-method-calls-such-as-times-atleast-atmost-never-etc",level:3},{value:"4. <strong>Argument Capture</strong>",id:"4-argument-capture",level:3},{value:"5. <strong>Argument Capture with multiple returns</strong>",id:"5-argument-capture-with-multiple-returns",level:3},{value:"6. <strong>Spying</strong>",id:"6-spying",level:3},{value:"7. Mocking static, private method and constructor",id:"7-mocking-static-private-method-and-constructor",level:3},{value:"Reference",id:"reference",level:2}],c={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unit-test-with-mockito"},"Unit Test with Mockito"),(0,r.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,r.kt)("h3",{id:"1-add-starter"},"1. Add starter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.mockito</groupId>\n    <artifactId>mockito-core</artifactId>\n    <version>4.6.1</version>\n    <scope>test</scope>\n</dependency>\n")),(0,r.kt)("h3",{id:"2-test-with-mockito"},"2. Test with Mockito"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mockito will ",(0,r.kt)("strong",{parentName:"li"},"create Mock objects")," for fields annotated with @Mock, i.e. authenticationManager."),(0,r.kt)("li",{parentName:"ul"},"Mockito will ",(0,r.kt)("strong",{parentName:"li"},"create Spy objects")," for fields annotated with @Spy, i.e. jwtService."),(0,r.kt)("li",{parentName:"ul"},"LoginController is annotated with @InjectMocks, which means it is the class under test. Mockito will ",(0,r.kt)("strong",{parentName:"li"},"create an instance")," of this class."),(0,r.kt)("li",{parentName:"ul"},"Mockito will then inject Spy and Mock objects (jwtService and authenticationManager) into LoginController."),(0,r.kt)("li",{parentName:"ul"},"Mockito allows us to control the behavior of these mock objects. For example using ",(0,r.kt)("strong",{parentName:"li"},"when")," and ",(0,r.kt)("strong",{parentName:"li"},"thenReturn"),"."),(0,r.kt)("li",{parentName:"ul"},"Finally we can verify, for example, how many times the mock object has been called, capture the argument of the method call.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="oorg.irushu.login.ControllerTests" showLineNumbers',title:'"oorg.irushu.login.ControllerTests"',showLineNumbers:!0},'package org.irushu.login;\n...\nimport org.mockito.ArgumentCaptor;\nimport org.mockito.InjectMocks;\nimport org.mockito.Mock;\nimport org.mockito.Spy;\nimport org.mockito.junit.jupiter.MockitoExtension;\n...\nimport static org.mockito.ArgumentMatchers.any;\nimport static org.mockito.ArgumentMatchers.anyString;\nimport static org.mockito.Mockito.*;\n\n@ExtendWith(MockitoExtension.class)\npublic class ControllerTests {\n    {/* highlight-start */}\n    @Spy\n    {/* highlight-end */}\n    JWTService jwtService;\n\n    {/* highlight-start */}\n    @Mock\n    {/* highlight-end */}\n    AuthenticationManager authenticationManager;\n\n    {/* highlight-start */}\n    @InjectMocks\n    {/* highlight-end */}\n    private LoginController loginController;\n\n    @Test\n    void testControllers(){\n        {/* highlight-start */}\n        when(authenticationManager.authenticate(any())).thenReturn(new Authentication(){ ... });\n\n        when(jwtService.getToken(any())).thenReturn(new JWTService().getToken(any()));\n        {/* highlight-end */}\n\n        ResponseEntity entity = loginController.getToken(new UserCredentials("thomasli", "password"));\n\n        // Verify if jwtService is called once and only once.\n        {/* highlight-start */}\n        verify(jwtService,times(1)).getToken(anyString());\n        {/* highlight-end */}\n\n        // Verify if the beareer token is not null;\n        {/* highlight-start */}\n        assertNotEquals( List.of("Bearer null"), entity.getHeaders().get("Authorization"));\n        {/* highlight-end */}\n\n        // Capture and verify if the argument of getToken is equals to username\n        {/* highlight-start */}\n        ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);\n        verify(jwtService).getToken(argumentCaptor.capture());\n        assertEquals("thomasli", argumentCaptor.getValue());\n        {/* highlight-end */}\n    }\n')),(0,r.kt)("h2",{id:"area-to-study"},"Area to study"),(0,r.kt)("h3",{id:"1-multiple-return-values"},"1. ",(0,r.kt)("strong",{parentName:"h3"},"Multiple return values"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"when(someMethod).thenReturn(10).thenReturn(20);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First time when someMethod is called, it will return 10."),(0,r.kt)("li",{parentName:"ul"},"Second time when someMethod is called, it will return 20."),(0,r.kt)("li",{parentName:"ul"},"After that when someMethod is called, it will return default null.")),(0,r.kt)("h3",{id:"2-argument-matchers-such-as-any-anyint-anystring-etc"},"2. ",(0,r.kt)("strong",{parentName:"h3"},"Argument Matchers")," such as ",(0,r.kt)("em",{parentName:"h3"},"any()"),", ",(0,r.kt)("em",{parentName:"h3"},"anyInt()"),", ",(0,r.kt)("em",{parentName:"h3"},"anyString()"),".... etc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"verify(jwtService,times(1)).getToken(anyString());\n")),(0,r.kt)("h3",{id:"3-verify-method-calls-such-as-times-atleast-atmost-never-etc"},"3. ",(0,r.kt)("strong",{parentName:"h3"},"Verify method calls")," such as ",(0,r.kt)("em",{parentName:"h3"},"times"),", ",(0,r.kt)("em",{parentName:"h3"},"atLeast"),", ",(0,r.kt)("em",{parentName:"h3"},"atMost"),", ",(0,r.kt)("em",{parentName:"h3"},"never"),"... etc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"verify(jwtService,times(1)).getToken(anyString());\nverify(jwtService,atLeast(1)).getToken(anyString());\nverify(jwtService,atMost(1)).getToken(anyString());\nverify(jwtService,never()).getToken(anyString());\n")),(0,r.kt)("h3",{id:"4-argument-capture"},"4. ",(0,r.kt)("strong",{parentName:"h3"},"Argument Capture")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);\nverify(jwtService).getToken(argumentCaptor.capture());\nassertEquals("thomasli", argumentCaptor.getValue());\n')),(0,r.kt)("h3",{id:"5-argument-capture-with-multiple-returns"},"5. ",(0,r.kt)("strong",{parentName:"h3"},"Argument Capture with multiple returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'mock.getToken("thomasli");\nmock.getToken("thomasli2");\n\nArgumentCaptor<String> argumentCaptor = ArgumentCaptor.forClass(String.class);\nverify(mock, times(2)).getToken(argumentCaptor.capture());\nList<String> capturedValues = argumentCaptor.getAllValues();\nassertEquals("thomasli", capturedValues.get(0));\nassertEquals("thomasli2", capturedValues.get(1));\n')),(0,r.kt)("h3",{id:"6-spying"},"6. ",(0,r.kt)("strong",{parentName:"h3"},"Spying")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"{/* highlight-start */}\n@Spy\n{/* highlight-end */}\nJWTService jwtService;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You use Spy when you want to use real classes with the capability to spy on and observe it.")),(0,r.kt)("h3",{id:"7-mocking-static-private-method-and-constructor"},"7. Mocking static, private method and constructor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is considered bad practice to mock static, private method and constructor. But sometimes we come across legacy codes that cant be changed, and is therefore unavoidable to mock them. Use PowerMock in these situations.")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mockito/mockito/wiki/FAQ"},"https://github.com/mockito/mockito/wiki/FAQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/in28minutes/spring-unit-testing-with-junit-and-mockito"},"https://github.com/in28minutes/spring-unit-testing-with-junit-and-mockito")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/in28minutes/MockitoTutorialForBeginners"},"https://github.com/in28minutes/MockitoTutorialForBeginners"))))}m.isMDXComponent=!0}}]);