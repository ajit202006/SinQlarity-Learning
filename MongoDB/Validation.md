-Creating a valdating database
    => 
    db.createCollection(
        'products',{
            validator:{
                $jsonSchema:{
                    bsonType:'object',
                    required:["title",'pname','owner','comment'],
                    properties:{
                        title:{
                            bsonType:'string',
                            description:"This is title of product which is of string type."
                        },
                        pname:{
                            bsonType:'string',
                            description:"This is name of product which is string type."
                        },
                        owner:{
                            bsonType:'objectId',
                            description:"This is owner's id which is of type objectId" 
                        },
                        comment:{
                            bsonType:'string',
                            description:"This is any comment you want to give , its type is string."
                        }
                    }
                }
            }
        }
    );

-Inserting values in validated field
    => db.products.insertOne({title:"My Product",pname:"My product",owner:ObjectId('68621d1af8f1b8d73acb0ce6'),comment:"This is a very good product."});

    