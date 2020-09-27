Configuration files for configuring a simple Federated Hadoop cluster are in the appropriate folders

Configuration
---------------------
Federated cluster sales
2 Name nodes with secondary nodes
4 data nodes
1 highly available resource manager

Things to keep in mind
1. Format the  name nodes :hdfs namenode -format -clusterID mycluster
2. Refresh all data nodes - reload config : hdfs dfsadmin -refreshNamenodes datanode:50020 (port number)
3. Create folders in namenodes: hdfs dfs -mkdir  dir  hdfs://namenode/sales
4. Upload files: hdfs dfs -put localfile hdfs://namenode/sales/dir
5. See the uploaded files in viewfs (see the m1 for viewfs config) hdfs dfs -ls viewfs///sales/
6. Check cluster health: http://masternode:50070/dfsclusterhealth.jsp
7. If you encounter journal node errors make sure all the VERSION files have the same clusterID (usually in namenode data directory/current/VERSION)


