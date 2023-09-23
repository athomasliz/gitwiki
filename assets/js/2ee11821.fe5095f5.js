"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[8332],{6685:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>k});var n=e(7462),i=(e(7294),e(3905));e(1839);const a={sidebar_position:1},r="Gang of Four",u={unversionedId:"design-pattern-principle/gof",id:"design-pattern-principle/gof",title:"Gang of Four",description:"Refactoring Guru",source:"@site/docs/design-pattern-principle/gof.mdx",sourceDirName:"design-pattern-principle",slug:"/design-pattern-principle/gof",permalink:"/Notesaurus/docs/design-pattern-principle/gof",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/design-pattern-principle/gof.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"101",permalink:"/Notesaurus/docs/spring-cloud/overview"},next:{title:"SOLID",permalink:"/Notesaurus/docs/design-pattern-principle/solid"}},o={},k=[{value:"Refactoring Guru",id:"refactoring-guru",level:2},{value:"Flash Card",id:"flash-card",level:2},{value:"Creational Patterns",id:"creational-patterns",level:3},{value:"Structural Patterns",id:"structural-patterns",level:3},{value:"Behavoral Patterns",id:"behavoral-patterns",level:3},{value:"Reference",id:"reference",level:2}],s={toc:k};function c(t){let{components:l,...e}=t;return(0,i.kt)("wrapper",(0,n.Z)({},s,e,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gang-of-four"},"Gang of Four"),(0,i.kt)("h2",{id:"refactoring-guru"},"Refactoring Guru"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A good site to learn GoF ",(0,i.kt)("a",{parentName:"li",href:"https://refactoring.guru/design-patterns"},"https://refactoring.guru/design-patterns")),(0,i.kt)("li",{parentName:"ul"},"Understand ",(0,i.kt)("strong",{parentName:"li"},"aggregation or composition")," vs ",(0,i.kt)("strong",{parentName:"li"},"inheritance"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Aggregation or Composition work almost the same way: one object has a reference to another and delegates it some work, whereas with inheritance, the object itself is able to do that work, inheriting the behavior from its superclass.")))),(0,i.kt)("h2",{id:"flash-card"},"Flash Card"),(0,i.kt)("h3",{id:"creational-patterns"},"Creational Patterns"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Pattern"),(0,i.kt)("th",null,"Structure"),(0,i.kt)("th",null,"Key Point")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Factory Method"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Creator"),(0,i.kt)("li",null,"Product"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Product creation via its own factory method"),(0,i.kt)("li",null,"Object creation via factory method instead of new operator"),(0,i.kt)("li",null,"Rely on ",(0,i.kt)("b",null,"inheritance"),". The only thing that could change the return value would be a subclass"),(0,i.kt)("li",null,"Specialization of Template Method")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Abstract Factory"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Factory"),(0,i.kt)("li",null,"Product"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Families (Variant) of related objects"),(0,i.kt)("li",null,"Products creation via an object, i.e. Abstract Factory"),(0,i.kt)("li",null,"Use ",(0,i.kt)("b",null,"composition"),". Delegates object instantiation to another object (Abstract factory) via composition.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Builder"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Director"),(0,i.kt)("li",null,"Builder"),(0,i.kt)("li",null,"Product"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Construct complex objects step by step"),(0,i.kt)("li",null,"Get rid of telescoping constructor")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Prototype"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Prototype"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Clone")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Singleton"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Singleton"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Only 1 object can be created."),(0,i.kt)("li",null,"Private constructor to prevent object creation via new method."),(0,i.kt)("li",null,"Create object via class method getInstance"))))),(0,i.kt)("h3",{id:"structural-patterns"},"Structural Patterns"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Pattern Name"),(0,i.kt)("th",null,"Structure"),(0,i.kt)("th",null,"Key Point")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Adaptor"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Client Interface"),(0,i.kt)("li",null,"Adaptor"),(0,i.kt)("li",null,"Service"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Convert an interface to suit another different interface"),(0,i.kt)("li",null,"Used when communicating with third party libraries")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Bridge"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Abstraction"),(0,i.kt)("li",null,"Implementation"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("a",{href:"https://stackoverflow.com/questions/1425171/difference-between-bridge-pattern-and-adapter-pattern"}," Read Stack overflow here")),(0,i.kt)("li",null,"Implementating upfront"),(0,i.kt)("li",null,"Prevent insane number of classes created due to combinations of several orthogonal hierarchies "),(0,i.kt)("li",null,"Divide current classes into 2 or more, separate, orthogonal hierarchies"),(0,i.kt)("li",null,"Decouple abstraction and implementation. Note that the abstraction and implementation here do not mean abstract classes, interface and concrete classes. It is about how we extract the relationship of objects into abstraction and implementation. The abstraction defines what to do. The implementaion focuses on how to do.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Composite"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Component"),(0,i.kt)("li",null,"Leaf"),(0,i.kt)("li",null,"Composite"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Compose objects into tree-like object structures")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Decorator"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Component"),(0,i.kt)("li",null,"Decorator"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"a.k.a Wrapper, Skin"),(0,i.kt)("li",null,"1 to 1"),(0,i.kt)("li",null,"Can chain multiple decorators"),(0,i.kt)("li",null,"Resulting objects will be structured as a stack"),(0,i.kt)("li",null,"Contain same set of methods as the target object"),(0,i.kt)("li",null,"may alter the result by doing something either before or after it passes the request to the target"),(0,i.kt)("li",null,"e.g. io streams, compress then encrypt")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Facade"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Facade"),(0,i.kt)("li",null,"Additional Facade"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Simplified Interface"),(0,i.kt)("li",null,"Hide complex and unused interface")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Flyweight"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Context"),(0,i.kt)("li",null,"FlyweightFactory"),(0,i.kt)("li",null,"Flyweight"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Share common immutable states"),(0,i.kt)("li",null,"Reduce number of repeated objects"),(0,i.kt)("li",null,"Save Memory")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Proxy"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Proxy"),(0,i.kt)("li",null,"Service Interface"),(0,i.kt)("li",null,"Service"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Exactly the same interface as service interface"),(0,i.kt)("li",null,"Useful for unit test by swapping the implementation with proxy object"))))),(0,i.kt)("h3",{id:"behavoral-patterns"},"Behavoral Patterns"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Pattern Name"),(0,i.kt)("th",null,"Structure"),(0,i.kt)("th",null,"Key Point")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Chain of Responsibility"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Handler"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"setNext method to define the next handler"),(0,i.kt)("li",null,"Example: Javascript event bubbling (See if it should handle the event, if not, propagate the request further)"),(0,i.kt)("li",null,"Example: Spring MVC handler")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Command"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Invoker (Sender)"),(0,i.kt)("li",null,"Command"),(0,i.kt)("li",null,"Receiver"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Request Object")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Iterator"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Iterator"),(0,i.kt)("li",null,"IterableCollection"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Extract the object transversal algorithm of a collection into a separate iterator object")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Mediator"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Mediator"),(0,i.kt)("li",null,"Components"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Eliminate dependencies among components"),(0,i.kt)("li",null,"Components do not know each other. They must call each other via mediator."),(0,i.kt)("li",null,"Centralize communication, easily become God Object")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Memento"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Originator"),(0,i.kt)("li",null,"Memento"),(0,i.kt)("li",null,"Caretaker"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Memento = Snapshot"),(0,i.kt)("li",null,"Originator is the original object that hold the state"),(0,i.kt)("li",null,"Originator creates Memento"),(0,i.kt)("li",null,"Memento links to originator"),(0,i.kt)("li",null,"Caretaker stores Memento"),(0,i.kt)("li",null,"Honor security of an object. Caretaker do not access the state of memento.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Observer"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Publisher"),(0,i.kt)("li",null,"Subscriber"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Example: Redux framework notifies only subscriber of a particular slice. Read ",(0,i.kt)("a",{href:"https://medium.com/@jackwong_60367/observer-pattern-in-react-using-redux-ca9998e885b0"},"here.")),(0,i.kt)("li",null,"Example: Event driven architecture")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Strategy"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Context"),(0,i.kt)("li",null,"Strategy"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Based on composition"),(0,i.kt)("li",null,"Family of algorithm"),(0,i.kt)("li",null,"Extract the target logic into strategy object"),(0,i.kt)("li",null,"Can switch behavior during runtime (Swap another strategy object in context)")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"State"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Context"),(0,i.kt)("li",null,"State"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Based on composition"),(0,i.kt)("li",null,"Extract state related logic into state object"),(0,i.kt)("li",null,"An extension of Strategy pattern. State allows dependence between state object."),(0,i.kt)("li",null,"Can switch behavior during runtime (Swap another state object in context)")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Template Method"),(0,i.kt)("td",null,"Template Method in abstract class"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Based on inheritance"),(0,i.kt)("li",null,"Inheritance version of strategy"),(0,i.kt)("li",null,"Extract the target logic into template method"),(0,i.kt)("li",null,"Class Level, cannot switch behavior at runtime")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Visitor"),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Client"),(0,i.kt)("li",null,"Element"),(0,i.kt)("li",null,"Visitor"))),(0,i.kt)("td",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Double Dispatch"),(0,i.kt)("li",null,"Both elements and visitors has its own hierarcy"),(0,i.kt)("li",null,"accept method in Element"),(0,i.kt)("li",null,"visit method in Visitor"),(0,i.kt)("li",null,"elementA.accept(visitorA)"),(0,i.kt)("li",null,"hierarchy of elements accept variant of operations"),(0,i.kt)("li",null,"Read ",(0,i.kt)("a",{href:"https://medium.com/geekculture/design-pattern-visitor-pattern-the-most-complicated-design-pattern-with-c-code-sample-f88b608ffb4a"},"article 1"),". Read ",(0,i.kt)("a",{href:"https://medium.com/@amritlalsahu5/visitor-design-pattern-364c712f46ca"},"article 2.")))))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/5739611/what-are-the-differences-between-abstract-factory-and-factory-design-patterns"},"What are the differences between Abstract Factory and Factory design patterns?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/46495698/why-does-the-builder-pattern-not-have-a-method-getresult-in-the-builder-inte"},"Why does the builder pattern not have a method ",(0,i.kt)("inlineCode",{parentName:"a"},"GetResult()")," in the builder interface?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/48686826/react-js-what-is-the-difference-betwen-hoc-and-decorator"},"React js - What is the difference between HOC and decorator pattern"))))}c.isMDXComponent=!0}}]);