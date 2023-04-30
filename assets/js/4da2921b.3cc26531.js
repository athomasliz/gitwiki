"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[5832],{3600:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));o(1839);const r={sidebar_position:8},a="Day 7:  Unit Test with Mockito",s={unversionedId:"spring-boot/mockito",id:"spring-boot/mockito",title:"Day 7:  Unit Test with Mockito",description:"Step by Step Guide",source:"@site/docs/spring-boot/mockito.md",sourceDirName:"spring-boot",slug:"/spring-boot/mockito",permalink:"/Notesaurus/docs/spring-boot/mockito",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/spring-boot/mockito.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Day 6:  Secure with TLS",permalink:"/Notesaurus/docs/spring-boot/tls"},next:{title:"Day 0:  Overview",permalink:"/Notesaurus/docs/spring-cloud/overview"}},l={},c=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Add starter",id:"1-add-starter",level:3},{value:"2. Test controller with Mockito",id:"2-test-controller-with-mockito",level:3}],u={toc:c};function h(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"day-7--unit-test-with-mockito"},"Day 7:  Unit Test with Mockito"),(0,i.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,i.kt)("h3",{id:"1-add-starter"},"1. Add starter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"    <dependency>\n        <groupId>org.mockito</groupId>\n        <artifactId>mockito-core</artifactId>\n        <version>4.6.1</version>\n        <scope>test</scope>\n    </dependency>\n")),(0,i.kt)("h3",{id:"2-test-controller-with-mockito"},"2. Test controller with Mockito"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mockito will ",(0,i.kt)("strong",{parentName:"li"},"create Mock objects")," for fields annotated with @Mock, i.e. jwtService and authenticationManager."),(0,i.kt)("li",{parentName:"ul"},"LoginController is annotated with @InjectMocks, which means it is the class under test. Mockito will ",(0,i.kt)("strong",{parentName:"li"},"create an instance")," of this class."),(0,i.kt)("li",{parentName:"ul"},"Mockito will then inject Mock objects (jwtService and authenticationManager) into LoginController."),(0,i.kt)("li",{parentName:"ul"},"Mockito allows us to control the behavior of these mock objects. For example using ",(0,i.kt)("strong",{parentName:"li"},"when")," and ",(0,i.kt)("strong",{parentName:"li"},"thenReturn"),"."),(0,i.kt)("li",{parentName:"ul"},"Finally we can verify, for example, how many times the mock object has been called.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="oorg.irushu.login.ControllerTests" showLineNumbers',title:'"oorg.irushu.login.ControllerTests"',showLineNumbers:!0},'package org.irushu.login;\n...\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport org.mockito.InjectMocks;\nimport org.mockito.Mock;\nimport org.mockito.junit.jupiter.MockitoExtension;\n...\nimport static org.junit.jupiter.api.Assertions.assertNotEquals;\nimport static org.mockito.ArgumentMatchers.any;\nimport static org.mockito.ArgumentMatchers.anyString;\nimport static org.mockito.Mockito.*;\n\n@ExtendWith(MockitoExtension.class)\npublic class ControllerTests {\n    {/* highlight-start */}\n    @Mock\n    {/* highlight-end */}\n    JWTService jwtService;\n\n    {/* highlight-start */}\n    @Mock\n    {/* highlight-end */}\n    AuthenticationManager authenticationManager;\n\n    {/* highlight-start */}\n    @InjectMocks\n    {/* highlight-end */}\n    private LoginController loginController;\n\n    @Test\n    void testControllers(){\n        {/* highlight-start */}\n        when(authenticationManager.authenticate(any())).thenReturn(new Authentication(){ ... });\n\n        when(jwtService.getToken(any())).thenReturn(new JWTService().getToken(any()));\n        {/* highlight-end */}\n\n        ResponseEntity entity = loginController.getToken(new UserCredentials("thomasli", "password"));\n\n        {/* highlight-start */}\n        verify(jwtService,times(1)).getToken(anyString());\n        {/* highlight-end */}\n\n        assertNotEquals( List.of("Bearer null"), entity.getHeaders().get("Authorization"));\n        \n    }\n')))}h.isMDXComponent=!0}}]);