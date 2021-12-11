- mkdir replica_database
- cd replica_database
- mkdir r1
- mkdir r2
- mkdir r3

- mongod --replSet db_replica  --dbpath ./r1 --port 27018 
- mongod --replSet db_replica  --dbpath ./r2 --port 27019 
- mongod --replSet db_replica  --dbpath ./r3 --port 27020 


- mongo --port 27018

- config = {_id: "db_replica", members:[

    {_id: 0, host: "localhost:27018"},
 
    {_id: 1, host: "localhost:27019"},
 
    {_id: 2, host: "localhost:27020"}]
};

- rs.initiate(config);
- rs.status();

- mongo --host db_replica/localhost:27018,localhost:27019,localhost:27020

-----------------------------------------------------------------------------

- create database "course" and collection "subject"
- use course
- db.getCollection('subjects').find({})
