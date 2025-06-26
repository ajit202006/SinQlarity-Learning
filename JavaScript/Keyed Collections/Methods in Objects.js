let obj={
    name:"someone",
    country:"India",
    greet(){
        console.log("Hello,",this.name);
    },
    getDetails: function(){
        console.log(`I am ${this.name}, I live in ${this.country}.`);
    }
}
obj.greet();
obj.getDetails();