"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[8564],{3702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var o=t(7462),r=(t(7294),t(3905));t(1839);const s={sidebar_position:2},l="ES6+",a={unversionedId:"javascript/es6",id:"javascript/es6",title:"ES6+",description:"ES6 is ECMAScript 6. You may refer to web resources for its background.",source:"@site/docs/javascript/es6.mdx",sourceDirName:"javascript",slug:"/javascript/es6",permalink:"/Notesaurus/docs/javascript/es6",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/javascript/es6.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"101",permalink:"/Notesaurus/docs/javascript/101"},next:{title:"Axios",permalink:"/Notesaurus/docs/javascript/axios"}},c={},i=[{value:"let, const",id:"let-const",level:3},{value:"Object Literal",id:"object-literal",level:3},{value:"Object Destructuring",id:"object-destructuring",level:3},{value:"Array Literal",id:"array-literal",level:3},{value:"Array Destructuring",id:"array-destructuring",level:3},{value:"Big Arrow",id:"big-arrow",level:3},{value:"Default Parameter",id:"default-parameter",level:3},{value:"Rest Parameter",id:"rest-parameter",level:3},{value:"Symbol",id:"symbol",level:3},{value:"Iterator",id:"iterator",level:3},{value:"Generator",id:"generator",level:3},{value:"Promise",id:"promise",level:3},{value:"async, await",id:"async-await",level:3}],u={toc:i};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"es6"},"ES6+"),(0,r.kt)("p",null,"ES6 is ECMAScript 6. You may refer to web resources for its background."),(0,r.kt)("h3",{id:"let-const"},"let, const"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let a = 1\n\nconst B = { d: 5} \n// This will error\nB = { c: 5}  // Uncaught TypeError: Assignment to constant variable.\nB.d = 6 // Can change the variable nested inside a object constant\n")),(0,r.kt)("h3",{id:"object-literal"},"Object Literal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let obj = { \n          b: 1, \n          c: 2,\n          hi: function(){ console.log('hi') }, // Function: Old declaration\n          hello(){ console.log('hello') }, // Function: Short hand\n          hey: () => console.log('hey'), // Function: Big Arrow\n          [Math.random()]() { console.log('random')},  // Function: Computed Value\n          [Symbol()]() { } // Function: Symbol, talk later\n        }\n\nconsole.log(obj)\nconsole.log(obj.b)\nconsole.log(obj[\"c\"]) // Object Key is string\n")),(0,r.kt)("h3",{id:"object-destructuring"},"Object Destructuring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let obj = {\n  apple: "My apple",\n  orange: "My orange",\n}\n\nlet { apple, orange } = obj\nlet { apple: a1, orange: a2 } = obj\n\nconsole.log(apple)\nconsole.log(orange)\nconsole.log(a1)\nconsole.log(a2)\n')),(0,r.kt)("h3",{id:"array-literal"},"Array Literal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let arr = [1,2,3,4,5]\n")),(0,r.kt)("h3",{id:"array-destructuring"},"Array Destructuring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let arr = [1,2,3,4,5]\nlet [a1, , , a2, ] = arr\nconsole.log(a1)\nconsole.log(a2)\n")),(0,r.kt)("h3",{id:"big-arrow"},"Big Arrow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const f1 = () => console.log(\'[f1]\')\nconst f2 = arg0 => console.log(`[f2] ${arg0}`)\nconst f3 = (arg0, arg1) => console.log(`[f3] ${arg0} ${arg1}`)\nf1()\nf2("Hello")\nf3("Hello", "World") \n')),(0,r.kt)("h3",{id:"default-parameter"},"Default Parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const f1 = (arg0='Hello') => console.log(arg0)\nf1() // Print Hello\n")),(0,r.kt)("h3",{id:"rest-parameter"},"Rest Parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const f1 = (...args) => {\n  for(const arg of args){ // for-of iterator, talk later\n    console.log(arg)\n  }\n}\nf1( 1, 2, 3, 4)\n")),(0,r.kt)("h3",{id:"symbol"},"Symbol"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Symbol()\nconst s11 = Symbol()\nconst s12 = Symbol()\nconsole.log(s11 === s12)\n\n// Symbol(arg0)\nconst s21 = Symbol("hello")\nconst s22 = Symbol("hello")\nconsole.log(s21 === s22)\n\n// Symbol.for(arg0) \nconst s31 = Symbol.for("Hello")\nconst s32 = Symbol.for("Hello")\nconsole.log(s31 === s32)\n\n// Symbol.keyFor(arg0)\nconst s4 = Symbol.for("Cheers")\nconsole.log(Symbol.keyFor(s4))\n\n// Using Symbol as function name\nconst sum = Symbol.for("sum")\nconst calculator = {\n    [sum]: (x, y) => x + y, \n}\nconsole.log(calculator[sum](1,2))\n\n// Object.getOwnPropertySymbols\nconst symbols = Object.getOwnPropertySymbols(calculator)\nfor(const s of symbols){\n  console.log(Symbol.keyFor(s))\n}\n')),(0,r.kt)("h3",{id:"iterator"},"Iterator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// for of - Object\nconst object1 = { one: 1, two: 2, three: 3}\nfor(const [k,v] of Object.entries(object1)) {\n  console.log(`Key: ${k}, Value: ${v}`)\n}\n\n// for of - Map\nconst map2 = new Map()\nmap2.set("one", 1)\nmap2.set("two", 2)\nmap2.set("three", 3)\nfor(const [k,v] of map2) {\n  console.log(`Key: ${k}, Value: ${v}`)\n}\n\n// for of - Array\nconst array3= [1,2,3]\nfor(const a of array3){\n  console.log(`Value: ${a}`)\n}\n\n// for of - Set\nconst set4 = new Set()\nset4.add(1)\nset4.add(2)\nset4.add(3)\nfor(const s of set4){\n  console.log(`Value: ${s}`)\n}\n\n// Loop object without Symbol.iterator \nconst fiveCounter = {}\ntry{ \n  for(const count of fiveCounter ){\n    console.log(count)\n  }\n}\ncatch(error){\n  console.log(error)\n}\n\n// Loop object with Symbol.iterator \nconst tenCounter = {\n  [Symbol.iterator](){\n     let count = 0\n     return {\n       next: () => {\n                  count++\n                  if(count > 10) return { done: true, }\n                  else return { done: false, value: count }  \n       }                   \n     }         \n  }\n}\nfor(const count of tenCounter){\n    console.log(count)\n}\n')),(0,r.kt)("h3",{id:"generator"},"Generator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function* flowStateMachine(){\n  let event = null\n  event = yield {state: "init"}\n  while(true){ \n    if(event && event.action ==="validate" && event.result == "success"){\n      event = yield {state: "validated"}\n      break\n    }\n    else{\n      event = yield {state: "init", error: "Invalid flow"}\n    } \n  } \n  while(true){ \n    if(event && event.action ==="confirm" && event.result == "success"){\n      event = yield {state: "confirmed"}\n      break\n    }\n    else{\n      event = yield {state: "validated", error: "Invalid flow"}\n    } \n  } \n  while(true){ \n    if(event && event.action ==="enquiry" && event.result == "success"){\n      event = yield {state: "success"}\n      break\n    }\n    else if(event && event.action ==="enquiry" && event.result == "pending"){\n      event = yield {state: "pending"}\n      break\n    }\n    else if(event && event.action ==="enquiry" && event.result == "failure"){\n      event = yield {state: "failure"}\n      break\n    }\n    else{\n      event = yield {state: "confirmed", error: "Invalid flow"}\n    } \n  } \n\n}\nconst flow1 = flowStateMachine();\nconsole.log(flow1.next().value)\nconsole.log(flow1.next().value)\nconsole.log(flow1.next({ action: "validate", result: "success" }).value)\nconsole.log(flow1.next().value)\nconsole.log(flow1.next().value)\nconsole.log(flow1.next({ action: "confirm", result: "success" }).value)\nconsole.log(flow1.next({ action: "enquiry", result: "failure" }).value)\nconsole.log(flow1.next().value)\n')),(0,r.kt)("h3",{id:"promise"},"Promise"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Promise.all\nconst timeout1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "timeout1"))\nconst timeout2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "timeout2"))\nconst timeout3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, "timeout3"))\nconst [res1, res2, res3] = await Promise.all([timeout1, timeout2, timeout3])\n\nconsole.log(res1)\nconsole.log(res2)\nconsole.log(res3)\n\n// Promise.race\nconst timeout4 = new Promise((resolve, reject) => setTimeout(reject, 1000, {data: "timeout4"}))\nconst timeout5 = new Promise((resolve, reject) => setTimeout(resolve, 2000,{data: "timeout5"}))\nconst timeout6 = new Promise((resolve, reject) => setTimeout(resolve, 3000,{data: "timeout6"}))\ntry{\n  const response = await Promise.race([timeout4, timeout5, timeout6])\n  console.log(response)\n}\ncatch(error){\n  console.log(error)\n}\n\n// Promise.allSettled\nconst timeout7 = new Promise((resolve, reject) => setTimeout(reject, 1000, {data: "timeout7"}))\nconst timeout8 = new Promise((resolve, reject) => setTimeout(resolve, 2000,{data: "timeout8"}))\nconst timeout9 = new Promise((resolve, reject) => setTimeout(resolve, 3000,{data: "timeout9"}))\n\nconst [res7, res8, res9] =  await Promise.allSettled([timeout7, timeout8, timeout9])\nconsole.log(res7)\nconsole.log(res8)\nconsole.log(res9)\n\n// Promise.any\nconst timeout10 = new Promise((resolve, reject) => setTimeout(reject, 1000, {data: "timeout10"}))\nconst timeout11 = new Promise((resolve, reject) => setTimeout(resolve, 2000,{data: "timeout11"}))\nconst timeout12 = new Promise((resolve, reject) => setTimeout(resolve, 3000,{data: "timeout12"}))\ntry{\n  const response = await Promise.any([timeout10, timeout11, timeout12])\n  console.log(response)\n}\ncatch(error){\n  console.log(error)\n}\n\nconst timeout13 = new Promise((resolve, reject) => setTimeout(reject, 1000, {data: "timeout13"}))\nconst timeout14 = new Promise((resolve, reject) => setTimeout(reject, 2000,{data: "timeout14"}))\nconst timeout15 = new Promise((resolve, reject) => setTimeout(reject, 3000,{data: "timeout15"}))\ntry{\n  const response = await Promise.any([timeout13, timeout14, timeout15])\n  console.log(response)\n}\ncatch(error){\n  console.log(error) // AggregateError: All promises were rejected\n}\n\n')),(0,r.kt)("h3",{id:"async-await"},"async, await"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Without async await\nlet syncTimeout = () => setTimeout( () => console.log(1), 1000 )\nlet testSync = () => {\n    syncTimeout()\n    console.log(2)\n}\ntestSync()\n// First print 2\n// Then print 1\n\n\n// With async await\nlet asyncTimeout = async () =>  new Promise((resolve, reject) => setTimeout( () => { console.log(3); resolve() }, 1000))\nlet testAsync = async() => {\n    await asyncTimeout()\n    console.log(4)\n}\ntestAsync()\n// First print 3\n// Then print 4\n")))}m.isMDXComponent=!0}}]);