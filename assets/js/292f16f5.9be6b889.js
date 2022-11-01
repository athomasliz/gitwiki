"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[4414],{7950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(1839);const i={sidebar_position:3},s="Lesson 3: Redux Thunk",o={unversionedId:"react/react-thunk",id:"react/react-thunk",title:"Lesson 3: Redux Thunk",description:"",source:"@site/docs/react/react-thunk.mdx",sourceDirName:"react",slug:"/react/react-thunk",permalink:"/Notesaurus/docs/react/react-thunk",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/react/react-thunk.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Lesson 2: Redux",permalink:"/Notesaurus/docs/react/redux-toolkit"},next:{title:"Lesson 4: React i18n",permalink:"/Notesaurus/docs/react/react-i18n"}},l={},c=[{value:"Step by Step Guide",id:"step-by-step-guide",level:3},{value:"1. Define async action",id:"1-define-async-action",level:4},{value:"2. Define reducer and state for a slice",id:"2-define-reducer-and-state-for-a-slice",level:4},{value:"3. Aggregate slices in Redux store",id:"3-aggregate-slices-in-redux-store",level:4},{value:"4. Dispatch action within another action",id:"4-dispatch-action-within-another-action",level:4},{value:"5. Detect state change and rerender UI",id:"5-detect-state-change-and-rerender-ui",level:4},{value:"Reference",id:"reference",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lesson-3-redux-thunk"},"Lesson 3: Redux Thunk"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install @reduxjs/toolkit\n")),(0,r.kt)("p",null,"Redux Thunk is ",(0,r.kt)("strong",{parentName:"p"},"middleware")," (syntactic sugar / abstraction) that support redux async action to be handled and dispatched."),(0,r.kt)("blockquote",null,(0,r.kt)("img",{src:"https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif",width:"350"}),(0,r.kt)("p",{parentName:"blockquote"},"From ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-6-async-logic"},"Async Logic and Data Fetching in Redux official site"))),(0,r.kt)("p",null,"It contains only 14 lines of code. However we won't use it directly."),(0,r.kt)("p",null,"Instead we will use Redux Toolkit, which have already integrated redux thunk."),(0,r.kt)("h3",{id:"step-by-step-guide"},"Step by Step Guide"),(0,r.kt)("h4",{id:"1-define-async-action"},"1. Define async action"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='src/store/forex/ForexAsyncAction.js'",title:"'src/store/forex/ForexAsyncAction.js'"},"{/* highlight-start */}\nimport { createAsyncThunk } from '@reduxjs/toolkit'\n{/* highlight-end */}   \nimport xml2js from 'xml2js'\nimport axios from 'axios'\n\nconst xmlParser = new xml2js.Parser({explicitArray : false});\n\n{/* highlight-start */}\nconst forexAsync = createAsyncThunk( 'forex/started',  \nasync ( { } , { getState, rejectWithValue } ) => {\n{/* highlight-end */}    \n        const timeout = new Promise((_, reject) => setTimeout(reject, 10000)); \n        let axiosConfig = { url: 'xxxxxxxxxxxxxxx', baseURL: 'xxxxxxxxxxxxxxx',  method: \"GET\", };\n        const response = await Promise.race([timeout, axios.request(axiosConfig)])\n        if( response.status === 200)        \n        {/* highlight-start */}    \n            return response.data;\n        {/* highlight-end */}      \n        else\n        {/* highlight-start */}\n            return rejectWithValue ('Invalid system response.');\n        {/* highlight-end */}  \n});\n\nexport { forexAsync }\n")),(0,r.kt)("h4",{id:"2-define-reducer-and-state-for-a-slice"},"2. Define reducer and state for a slice"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Async action are divided to 3 states. pending, fulfilled and rejected. "),(0,r.kt)("li",{parentName:"ul"},"When an async call is made, the state will be pending, and it will dispatch an action ",(0,r.kt)("strong",{parentName:"li"},"forexAsync.pending")," and correspoonding extraReducer will be called."),(0,r.kt)("li",{parentName:"ul"},"When rejectWithValue is called in step 1, it will dispatch an action  ",(0,r.kt)("strong",{parentName:"li"},"forexAsync.rejected")," and correspoonding extraReducer will be called."),(0,r.kt)("li",{parentName:"ul"},"When the result is returned in step 1, it will dispatch an action  ",(0,r.kt)("strong",{parentName:"li"},"forexAsync.fulfilled")," and correspoonding extraReducer will be called.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='src/store/forex/index.js'",title:"'src/store/forex/index.js'"},"import { createSlice } from '@reduxjs/toolkit'\nimport { forexAsync }  from './ForexAsyncAction'\n\nconst emptyForex = {};\nconst initialState = emptyForex \n\nconst forexSlice = createSlice({\n  name: 'forex',\n  initialState,\n  reducers: {\n    reset(state, action) {\n      state.isLoading = false\n      state.HKD = emptyForex\n    },\n    logout(state, action) {\n      state.isLoading = false\n      state.HKD = emptyForex\n    }\n  },\n  extraReducers: {\n    {/* highlight-start */}   \n    [forexAsync.pending]: (state, action) => {\n    {/* highlight-end */}       \n      state.isLoading = true\n    },\n    {/* highlight-start */}       \n    [forexAsync.fulfilled]: (state, action) => {\n    {/* highlight-end */}           \n      state.isLoading = false\n      state.HKD = action.payload\n    },\n    {/* highlight-start */}   \n    [forexAsync.rejected]: (state, action) => {\n    {/* highlight-end */}   \n      state.isLoading = false\n      if(action.payload){\n        state.errorMessage = action.payload;\n      }\n      else{\n        state.errorMessage = action.error.message;\n      }\n    }\n  }\n})\n\nexport { forexSlice, forexAsync }\n")),(0,r.kt)("h4",{id:"3-aggregate-slices-in-redux-store"},"3. Aggregate slices in Redux store"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='src/store/index.js'",title:"'src/store/index.js'"},"import { configureStore } from '@reduxjs/toolkit'\nimport { localeSlice } from './locale'\n{/* highlight-start */}  \nimport { forexSlice } from './forex'\n{/* highlight-end */} \n\nconst store = configureStore({\n  reducer: {\n    locale: localeSlice.reducer,\n    {/* highlight-start */}  \n    forex: forexSlice.reducer,\n    {/* highlight-end */} \n  },\n  devTools: false,\n  enhancers: null,\n})\n\nexport { store };\n")),(0,r.kt)("h4",{id:"4-dispatch-action-within-another-action"},"4. Dispatch action within another action"),(0,r.kt)("p",null,"It can be trigger by UI event.\nBut in this case, the action is dispatched within another action"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='src/store/login/Login2AsyncAction.js'",title:"'src/store/login/Login2AsyncAction.js'"},"{/* highlight-start */}\nimport { forexAsync }  from '../forex'\n{/* highlight-end */}\n\nconst login2Async = createAsyncThunk( 'login/login2',  \n    async ( { username, password, loginSecurityCode } , { getState, dispatch, rejectWithValue } ) => {\n    \n    ...\n    {/* highlight-start */}\n    dispatch(forexAsync({}))\n    {/* highlight-end */} \n    ...\n\n});\n")),(0,r.kt)("h4",{id:"5-detect-state-change-and-rerender-ui"},"5. Detect state change and rerender UI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='src/store/portofolio/PortfolioSummary.js'",title:"'src/store/portofolio/PortfolioSummary.js'"},"{/* highlight-start */}\nimport { useSelector } from 'react-redux'\n{/* highlight-end */}\n\nconst PortfolioSummary = React.forwardRef(({ marketFilter}, ref) => {\n  {/* highlight-start */}\n  const forex = useSelector(state => state.forex);\n  {/* highlight-end */} \n\n  return(\n    <>\n    ...\n    </>\n  );\n});\n")),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux-thunk"},"Official Site")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux.js.org/usage/writing-logic-thunks"},"Writing Logic with Thunks"))))}u.isMDXComponent=!0}}]);