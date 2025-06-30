const redis=require('redis');

const URL= 'redis:127.0.0.1:6379';

const client=redis.createClient(URL);
client.connect();
console.log("Working");
client.set("name","redis");
console.log("Working");

const val = client.get("name",(error,value)=>{
    if (error){
        console.log(error);
    }
    console.log(value);
});
console.log(val);
client.close();
