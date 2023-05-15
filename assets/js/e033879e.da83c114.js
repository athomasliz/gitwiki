"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[7042],{2278:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));a(1839);const l={sidebar_position:99},i="GIT",o={unversionedId:"git",id:"git",title:"GIT",description:"| Command | Description |",source:"@site/docs/git.md",sourceDirName:".",slug:"/git",permalink:"/Notesaurus/docs/git",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/git.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"Day 0: Gang of Four",permalink:"/Notesaurus/docs/design-pattern-principle/gof"}},m={},d=[{value:"Reference",id:"reference",level:2}],p={toc:d};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git"},"GIT"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"}," Command ")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"}," Description ")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git config --global user.name xxxx"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git config --global user.email xxxx"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git init"),(0,r.kt)("td",{parentName:"tr",align:null},"Init a Repo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git init --bare"),(0,r.kt)("td",{parentName:"tr",align:null},"Init a remote repository")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git add ."),(0,r.kt)("td",{parentName:"tr",align:null},"Add the resource (ready for commit)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'git commit -am "Add an orange"'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"git reset")),(0,r.kt)("td",{parentName:"tr",align:null},"Updating your branch.",(0,r.kt)("br",null),"Moving the tip in order to add or remove commits from the branch.",(0,r.kt)("br",null),"This operation changes the commit history.",(0,r.kt)("br",null),"Can also be used to restore the index, overlapping with git restore.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git reset"),(0,r.kt)("td",{parentName:"tr",align:null},"Undo all the changes from the index.",(0,r.kt)("br",null),"Keep all the changes in working tree.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git reset --hard {SHA-1}"),(0,r.kt)("td",{parentName:"tr",align:null},"Moves current branch to this {SHA-1}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git reset --hard master"),(0,r.kt)("td",{parentName:"tr",align:null},"Moves current branch to master ",(0,r.kt)("a",{href:"https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified"},"Read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git reset {fileName}"),(0,r.kt)("td",{parentName:"tr",align:null},"Undo the add from the index.",(0,r.kt)("br",null),"Keep the change in working tree.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"git restore")),(0,r.kt)("td",{parentName:"tr",align:null},"Restoring files in the working tree from either the index or another commit.",(0,r.kt)("br",null),"Does not update your branch.",(0,r.kt)("br",null),"Can also be used to restore files in the index from another commit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git restore {fileName}"),(0,r.kt)("td",{parentName:"tr",align:null},"Restore content of working tree from the index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git restore -s {commitId} {fileName}"),(0,r.kt)("td",{parentName:"tr",align:null},"Restore content of working tree from the specified commit Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git restore --staged {fileName}"),(0,r.kt)("td",{parentName:"tr",align:null},"Restore content of index tree from HEAD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git restore --staged --worktree {fileName}"),(0,r.kt)("td",{parentName:"tr",align:null},"Restore both content of index tree and working tree from HEAD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"git revert")),(0,r.kt)("td",{parentName:"tr",align:null},"Making a new commit that reverts the changes made by other commits.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git revert {commitId}"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove the change of the specified commit Id and create a new commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git status"),(0,r.kt)("td",{parentName:"tr",align:null},"Query the status of the index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git log --format=raw"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git log --format=fuller"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git log --oneline"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"--oneline"),' is a shorthand for "--pretty=oneline --abbrev-commit"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git log --oneline --graph --decorate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"--graph")," visualize the forks from a commit and the point in which branches merge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git log -3"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit the range to 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git log 7a4d4b1...1457b0"),(0,r.kt)("td",{parentName:"tr",align:null},"show commit history from 7a4d4b1 to 1457b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git log -1 -p --stat {sha1 of commit}"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"-p")," will print the patch",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"--stat")," will provide a tally of how many lines were modified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git show {commitId}"),(0,r.kt)("td",{parentName:"tr",align:null},"Show the content for a commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git show {commitId} --name-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Show the content for a commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git branch {branchName}"),(0,r.kt)("td",{parentName:"tr",align:null},"Create Branch {branchName}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git branch -d {branchName}"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete Branch {branchName}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git branch -D {branchName}"),(0,r.kt)("td",{parentName:"tr",align:null},"Force Delete Branch {branchName}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git show-branch --more=50"),(0,r.kt)("td",{parentName:"tr",align:null},"Show all the commit in reverse order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git checkout {branchName}"),(0,r.kt)("td",{parentName:"tr",align:null},"Move to Branch {branchName}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git checkout {fileName}"),(0,r.kt)("td",{parentName:"tr",align:null},"Check out a particular file from index to working directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git checkout HEAD^"),(0,r.kt)("td",{parentName:"tr",align:null},"Move to Detached HEAD state. ",(0,r.kt)("br",null),"Being in this state basically means that",(0,r.kt)("br",null)," HEAD does not reference a branch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git reflog show"),(0,r.kt)("td",{parentName:"tr",align:null},"Records what happens in the repository",(0,r.kt)("br",null)," while you commit, reset, check out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git reflog {branchName}"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git tag -a annotatedTag {SHA-1}"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git diff"),(0,r.kt)("td",{parentName:"tr",align:null},"Working Tree VS Staging Area")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git diff --cached"),(0,r.kt)("td",{parentName:"tr",align:null},"Staging Area VS HEAD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git diff --name-status {branch name 1} {branch name 2}"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git rebase {branch A}"),(0,r.kt)("td",{parentName:"tr",align:null},"Rebase the current branch on top of branch A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git rebase -i HEAD~{N}"),(0,r.kt)("td",{parentName:"tr",align:null},"Merge several commit into 1",(0,r.kt)("br",null),"i means interactive, while the HEAD~N argument means",(0,r.kt)("br",null)," I want to rebase the last N commits")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git merge {branchName}"),(0,r.kt)("td",{parentName:"tr",align:null},"merge the branch into the master one")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git cherry-pick\xa0{SHA-1}"),(0,r.kt)("td",{parentName:"tr",align:null},"cherry-pick a particular commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git remote -v"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git push"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git push --force-with-lease"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git pull"),(0,r.kt)("td",{parentName:"tr",align:null},"Download and merge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git fetch"),(0,r.kt)("td",{parentName:"tr",align:null},"Just download")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git cat-file -p {SHA-1}"),(0,r.kt)("td",{parentName:"tr",align:null},"Unzip and cat the file",(0,r.kt)("br",null),"-p means pretty-print")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'echo "banana"',"|"," git hash-object --stdin"),(0,r.kt)("td",{parentName:"tr",align:null},"Turns the string into hash code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cat .git/refs/heads/master"),(0,r.kt)("td",{parentName:"tr",align:null},"Location of Reference file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git rev-parse main~2^2"),(0,r.kt)("td",{parentName:"tr",align:null},"translate names to commit id")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"}," Term ")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"}," Description ")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4 object types"),(0,r.kt)("td",{parentName:"tr",align:null},"commit / tree / blob / annotated tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHA-1"),(0,r.kt)("td",{parentName:"tr",align:null},"An alphanumeric sequence of 40 characters representing a hexadecimal number.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blobs"),(0,r.kt)("td",{parentName:"tr",align:null},"Binary files",(0,r.kt)("br",null),"Everything is compressed and transformed into a blob before archiving it into a Git repository.",(0,r.kt)("br",null),"An object, whatever it is, will always have the same hash in any repository, in any computer, on the face of the Earth.",(0,r.kt)("br",null),"If you have two different files with the same content, even if they have different names and paths, in Git you will end up having only one blob.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".git folder"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commit"),(0,r.kt)("td",{parentName:"tr",align:null},"Every commit has a parent, and following these relations between commits, we can always navigate from a random one down to the first one, the already mentioned root commit.",(0,r.kt)("br",null),"First commit did not have a parent. Git, while navigating and reconstructing our repository, simply knows it is done when it finds a commit without a parent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Doesn't do deltas on commit"),(0,r.kt)("td",{parentName:"tr",align:null},"Every commit is a snapshot of the entire repository.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unreachable commits"),(0,r.kt)("td",{parentName:"tr",align:null},"It simply won't delete unreachable commits, at least not immediately. It makes some housekeeping automatically at a given time, as it has some powerful garbage collection features")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Working Tree / Directory"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Index / Staging Tree"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate layer between working tree and the repository")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Repository / HEAD"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^ caret"),(0,r.kt)("td",{parentName:"tr",align:null},"main^n means the nth parent of main branch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"~ tilde"),(0,r.kt)("td",{parentName:"tr",align:null},"Go back before an ancestral parent and select a preceding generation. Always refers to the first parent")))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/58003030/what-is-the-git-restore-command-and-what-is-the-difference-between-git-restor"},"https://stackoverflow.com/questions/58003030/what-is-the-git-restore-command-and-what-is-the-difference-between-git-restor")))}g.isMDXComponent=!0}}]);