"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[2756],{1208:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>k});var o=t(7462),r=(t(7294),t(3905));t(1839);const n={sidebar_position:1},s="Day 1:  Installation",l={unversionedId:"kafka/overview",id:"kafka/overview",title:"Day 1:  Installation",description:"Step by Step Guide",source:"@site/docs/kafka/overview.md",sourceDirName:"kafka",slug:"/kafka/overview",permalink:"/Notesaurus/docs/kafka/overview",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/kafka/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Day 0:  Overview",permalink:"/Notesaurus/docs/spring-cloud/overview"},next:{title:"Day 2:  Spring Kafka",permalink:"/Notesaurus/docs/kafka/spring-kafka"}},i={},k=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Prepare a Linux environment",id:"1-prepare-a-linux-environment",level:3},{value:"2. Download and Install Java SDK",id:"2-download-and-install-java-sdk",level:3},{value:"3. Download and Install Zookeeper",id:"3-download-and-install-zookeeper",level:3},{value:"4. Configure Zookeeper",id:"4-configure-zookeeper",level:3},{value:"5. Start Zookeeper Server",id:"5-start-zookeeper-server",level:3},{value:"6. Download and Install Kafka",id:"6-download-and-install-kafka",level:3},{value:"7. Start Kafka Broker",id:"7-start-kafka-broker",level:3},{value:"8. Create a Kafka topic",id:"8-create-a-kafka-topic",level:3},{value:"9. Produce message to Kafka topic",id:"9-produce-message-to-kafka-topic",level:3},{value:"9. Consume message from Kafka topic",id:"9-consume-message-from-kafka-topic",level:3}],p={toc:k};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"day-1--installation"},"Day 1:  Installation"),(0,r.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,r.kt)("h3",{id:"1-prepare-a-linux-environment"},"1. Prepare a Linux environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ubuntu 22.04\n")),(0,r.kt)("h3",{id:"2-download-and-install-java-sdk"},"2. Download and Install Java SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/usr/java/jdk1.8.0_333\n")),(0,r.kt)("h3",{id:"3-download-and-install-zookeeper"},"3. Download and Install Zookeeper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/usr/local/zookeeper\n")),(0,r.kt)("h3",{id:"4-configure-zookeeper"},"4. Configure Zookeeper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Create dataDir"',title:'"Create','data-dir"':!0},"mkdir -p /var/lib/zookeeper\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/usr/local/zookeeper/conf/zoo.cfg"',title:'"/usr/local/zookeeper/conf/zoo.cfg"'},"dataDir=/zar/lib/zookeeper\n")),(0,r.kt)("h3",{id:"5-start-zookeeper-server"},"5. Start Zookeeper Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/zookeeper/bin/zkServer.sh start\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In case JAVA_HOME has problem, add it below."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="usr/local/zookeeper/bin/zkEnv.sh"',title:'"usr/local/zookeeper/bin/zkEnv.sh"'},'...\nZOOBINDIR="${ZOOBINDIR:-/usr/bin}"\nZOOKEEPER_PREFIX="${ZOOBINDIR}/.."\n{/* highlight-start */}\nexport JAVA_HOME=/usr/java/jdk1.8.0_333\n{/* highlight-end */}\n...\n'))),(0,r.kt)("h3",{id:"6-download-and-install-kafka"},"6. Download and Install Kafka"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/usr/local/kafka\n")),(0,r.kt)("h3",{id:"7-start-kafka-broker"},"7. Start Kafka Broker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./kafka-server-start.sh -daemon /usr/local/kafka/config/server.properties \n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In case you would like your host machine to communicate with kafka in vm, you may configure as below"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="usr/local/kafka/config/server.properties"',title:'"usr/local/kafka/config/server.properties"'},'\n# The address the socket server listens on. If not configured, the host name will be equal to the value of\n# java.net.InetAddress.getCanonicalHostName(), with PLAINTEXT listener name, and port 9092.\n#   FORMAT:\n#     listeners = listener_name://host_name:port\n#   EXAMPLE:\n#     listeners = PLAINTEXT://your.host.name:9092\nlisteners=PLAINTEXT://0.0.0.0:9092\n\n# Listener name, hostname and port the broker will advertise to clients.\n# If not set, it uses the value for "listeners".\nadvertised.listeners=PLAINTEXT://192.168.56.101:9092\n\n'))),(0,r.kt)("h3",{id:"8-create-a-kafka-topic"},"8. Create a Kafka topic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./kafka-topics.sh --bootstrap-server localhost:9092 --create --replication-factor 1 --partitions 1 --topic test\n")),(0,r.kt)("h3",{id:"9-produce-message-to-kafka-topic"},"9. Produce message to Kafka topic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test\n")),(0,r.kt)("h3",{id:"9-consume-message-from-kafka-topic"},"9. Consume message from Kafka topic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning\n")))}d.isMDXComponent=!0}}]);