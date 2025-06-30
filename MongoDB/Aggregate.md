-Creating db and inserting record
    => use jsdb;
    => db.customer.insertOne({name:"Sarfaraz"});
    => db.books.insertMany([{bname:"Abc",price:400},{bname:"You can win",price:500},{bname:"LetUsC", price :600}]);
    => db.customer.updateOne({name:"Sarfaraz"},{$set:{fav_books:[ ObjectId('68621c24f8f1b8d73acb0ce3'),ObjectId('68621c24f8f1b8d73acb0ce4'),]}});
    => db.customer.insertOne({name:"Aditya",fav_books:[ObjectId('68621c24f8f1b8d73acb0ce5')]});

-Joining two collections
    => db.<collection_name>.aggregate(
        {
            $lookup:{
                from:<second_collection_name>,
                localField:<field_in_the_original_collection>,
                foreignField:<field_in_the_second_collection>,
                as: <alias_to_name_the_aggregate_collction>
            }
        }
    );
    => db.customer.aggregate({$lookup:{from:"books",localField:"fav_books",foreignField:"_id",as : "My_favourite_books"}});