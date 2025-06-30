-Create a database
    => use <database_name>;

-Insert record
    => db.<collection_name>.insertOne(<record_in_JSON_format>); 
       to insert single record
       ex :- db.myCollection.insertOne({name:"azhar",mobile:776756});
    => db.<collection_name>.insertMany(<comma_separated_record_in_JSON_format>);
       to insert multiple record
       For ex :- db.myCollection.insertMany([{name:"Akarsh",mobile:878565},{name:"Faizan",mobile:6346456}]);

-Retrieve record
    => db.<Collection>.find();
       retrieve all records
       Ex :- db.myCollection.find();
    => db.<collection_name>.find({<filter>});
       retrieve all records that pass a certain filter(s)
       Ex :- db.myCollection.find({name:"azhar"});

-Update record
    => db.<collection_name>.updateOne(<filter>,{$set:<updated_record_in_json_format>});
      used to update single or multiple values of a single record
      Ex :- db.myCollection.updateOne({name:"Akarsh"},{$set:{mobile:12324,location:"India"}});
    => db.<collection_name>.updateMany(<filter>,{$set:<updated_record_in_json_format>});
      used to update single or multiple values of a all filtered records
      Ex :- db.myCollection.updateMany({location:"India"},{$set:{IST_Code:"+91"}});

-Delete record
    => db.<collection_name>.deleteOne(<filter>);
      used to delete single record that passed a filter
      Ex :- db.myCollection.deleteOne({name:"Faizan"});
    => db.<collection_name>.deleteMany(<filter>);
      used to delete multiple record that passed a filter
      Ex :- db.myCollection.deleteMany({name:"Faizan"});
    Note:- using deleteMany with empty object will delete all record from the collection