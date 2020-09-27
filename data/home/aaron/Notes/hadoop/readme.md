PLEASE NOTE      -
------------------

The question was not clear to me So I have attempted 2 different approaches. The first approach is detailed below (Existing Cluster Setup)

Below that, I've also attempted a Federated cluster. But I had to keep it simple with 2 Namenode clusters (associated secondary nodes, data nodes and RM's with NM's ) which are held together as a single unit using a viewFS (from a data perspective)


With 4 nodes It was difficult to attempt a federated HA cluster because of the need for additional machines to get it to work together.

I tried my best, but my machine stalls if I go beyond 3 VM's. Perhaps I should have deployed docker containers instead.

Existing Cluster Setup
--------------
This is a high availability Hadoop cluster using Quorum Manager and Automatic fail over. The resource manager also supports high availability with automatic failover

The config files related to this install are included in the appropriate directories (Zipped as HACluster)

It consists of one physical machine and 3 virtual machines hosted on oracle virtual box

Prerequisites
1. /etc/hosts file has been updated on all machines
2. SSH has been installed on all machines and they are able to connect to each other without passwords
3. Firewalls have been disabled (or open ports in /etc/services and restart firewall service)
4. Selinux has been disabled
5. One common user has been used for Hadoop services and roles (hduser:hadoop)
6. Each directory represents the host machine and its config
7. The cluster consists of 4 machines wormwood (physical), m1,m2,m3 (virtual machines)

Current config

Wormwood
--------------
2695432 NameNode
2695869 DataNode
2697740 DFSZKFailoverController
2721679 ResourceManager
2721955 NodeManager
2696914 JournalNode
1753111 JobHistoryServer
2735318 Jps
2037216 QuorumPeerMain

M1
--------------
21428 JournalNode
7319 QuorumPeerMain
21992 NodeManager
21658 DFSZKFailoverController
22173 Jps
21294 DataNode
21183 NameNode

M2
--------------
20931 JournalNode
7272 QuorumPeerMain
20696 NameNode
20808 DataNode
21176 DFSZKFailoverController
21578 NodeManager
21788 Jps

M3
---------------
12097 DataNode
12503 NodeManager
12876 Jps
12367 ResourceManager

DataNodes : Wormwood, C1,C2, C3
NameNode (HA): Wormwood, C1, C2
Yarn (HA): Wormwood, C3
Zookeeper: Wormwood, C1, C2
JournalNodes (HA): Wormwood, C1, C2


Start The cluster
-----------------
## run zookeeper on all  nodes
 /usr/local/zookeeper/bin/./zkServer.sh start

## Start HDFS
start-hdfs.sh

## Start Yarn
start-yarn.sh

##Start history server
mapred --daemon start historyserver

HDFS dfsadmin -report

2020-06-08 00:00:18,445 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
Configured Capacity: 2062676815872 (1.88 TB)
Present Capacity: 1668469334016 (1.52 TB)
DFS Remaining: 1654026305536 (1.50 TB)
DFS Used: 14443028480 (13.45 GB)
DFS Used%: 0.87%
Replicated Blocks:
	Under replicated blocks: 4
	Blocks with corrupt replicas: 0
	Missing blocks: 0
	Missing blocks (with replication factor 1): 0
	Low redundancy blocks with highest priority to recover: 0
	Pending deletion blocks: 0
Erasure Coded Block Groups:
	Low redundancy block groups: 0
	Block groups with corrupt internal blocks: 0
	Missing block groups: 0
	Low redundancy blocks with highest priority to recover: 0
	Pending deletion blocks: 0

-------------------------------------------------
Live datanodes (4):

Name: 192.168.1.11:9866 (m2)
Hostname: m2
Decommission Status : Normal
Configured Capacity: 32116875264 (29.91 GB)
DFS Used: 3189719040 (2.97 GB)
Non DFS Used: 8138252288 (7.58 GB)
DFS Remaining: 20788903936 (19.36 GB)
DFS Used%: 9.93%
DFS Remaining%: 64.73%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 1
Last contact: Mon Jun 08 00:00:17 IST 2020
Last Block Report: Sun Jun 07 23:50:04 IST 2020
Num of Blocks: 33


Name: 192.168.1.12:9866 (m3)
Hostname: m3
Decommission Status : Normal
Configured Capacity: 32116875264 (29.91 GB)
DFS Used: 4330954752 (4.03 GB)
Non DFS Used: 8010051584 (7.46 GB)
DFS Remaining: 19775868928 (18.42 GB)
DFS Used%: 13.48%
DFS Remaining%: 61.57%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 1
Last contact: Mon Jun 08 00:00:17 IST 2020
Last Block Report: Sun Jun 07 23:50:04 IST 2020
Num of Blocks: 33


Name: 192.168.1.7:9866 (m1)
Hostname: m1
Decommission Status : Normal
Configured Capacity: 31043657728 (28.91 GB)
DFS Used: 2108153856 (1.96 GB)
Non DFS Used: 8618303488 (8.03 GB)
DFS Remaining: 20317200384 (18.92 GB)
DFS Used%: 6.79%
DFS Remaining%: 65.45%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 1
Last contact: Mon Jun 08 00:00:17 IST 2020
Last Block Report: Sun Jun 07 23:50:04 IST 2020
Num of Blocks: 32


Name: 192.168.1.8:9866 (wormwood)
Hostname: wormwood
Decommission Status : Normal
Configured Capacity: 1967399407616 (1.79 TB)
DFS Used: 4814200832 (4.48 GB)
Non DFS Used: 269430943744 (250.93 GB)
DFS Remaining: 1593144332288 (1.45 TB)
DFS Used%: 0.24%
DFS Remaining%: 80.98%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 1
Last contact: Mon Jun 08 00:00:18 IST 2020
Last Block Report: Sun Jun 07 23:50:03 IST 2020
Num of Blocks: 47

/usr/local/hadoop/bin/./yarn rmadmin -getAllServiceState
2020-06-08 00:06:19,854 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
wormwood:8033                                      active
m3:8033                                            standby

 /usr/local/hadoop/bin/./yarn rmadmin  -transitionToActive  rm2
Automatic failover is enabled for org.apache.hadoop.yarn.client.RMHAServiceTarget@2a556333
Refusing to manually manage HA state, since it may cause
a split-brain scenario or other incorrect state.
If you are very sure you know what you are doing, please
specify the --forcemanual flag.

hdfs haadmin -getAllServiceState
2020-06-08 00:10:32,216 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
wormwood:9820                                      active
m1:9820                                            standby
m2:9820                                            standby

 hdfs haadmin -failover nn1 nn2
2020-06-08 11:24:23,702 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
Failover to NameNode at m1/192.168.1.7:9820 successful

 hdfs haadmin -getAllServiceState
2020-06-08 11:49:38,944 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
wormwood:9820                                      standby
m1:9820                                            active
m2:9820                                            standby



Targeted Cluster Setup
----------------------
(Trying to mimic as close as possible to the assignment given)

Federated Cluster with 2 simple clusters and HA Resource Manager with automatic failover . Config files zipped as federatedCluster.zip

Cluster 1: 1 Name Nodes with Secondary Namenode
		   2 Data nodes
		   1 HA Resource manager
		   ViewFS defined in Secondary Node

Cluster 2: 2 Name Nodes with Secondary Namenode
		   2 Data nodes
		   1 Standby Resource Manager

Resource Manager shared by both clusters

I have used port numbers that are available on my /etc/services file


Format the NameNodes (2)
hdfs namenode -format -clusterID myCluster

Create Directories on each Name Node
hdfs dfs -mkdir dir1 hdfs://wormwood/

Put files on the namenodes
hdfs dfs -put c1://namenode/dir1/


Rebalance the Nodes (run on all data nodes)
hdfs --daemon start balancer datanode

Cluster health web page
http://m2:9820/dfshealth.html
 and
http://m2:9820/dfsclusterhealth.jsp

Access data loaded on via both nodes using the viewFS
[hduser@m1 ~]$ hdfs dfs -ls viewfs:///prod/
Found 2 items
-rw-r--r--   3 hduser supergroup       2631 2020-06-11 19:23 viewfs:///prod/dfsrep.txt
-rw-r--r--   1 hduser supergroup       3335 2020-06-11 19:34 viewfs:///prod/yarn-site.xml

[hduser@m1 ~]$ cat >> test
This is a test ---> hello <-----
^C

[hduser@m1 ~]$ hdfs dfs -put test  viewfs:///devel/
2020-06-11 22:50:31,209 INFO sasl.SaslDataTransferClient: SASL encryption trust check: localHostTrusted = false, remoteHostTrusted = false

[hduser@m1 ~]$ hdfs dfs -ls  viewfs:///devel/
Found 1 items
-rw-r--r--   1 hduser supergroup         33 2020-06-11 22:50 viewfs:///devel/test

[hduser@m1 ~]$ hdfs dfs -cat  viewfs:///devel/test
2020-06-11 22:51:29,634 INFO sasl.SaslDataTransferClient: SASL encryption trust check: localHostTrusted = false, remoteHostTrusted = false
This is a test ---> hello <-----

NOTE
----
Screens uploaded separately for both use cases



