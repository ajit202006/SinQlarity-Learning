//Create a counter using a funtion. It should have increment decrement and reset methods.
function createCounter(start){;
    return {
        value:start,
        increment:function(){
            this.value+=1
            return this.value;
        },
        decrement:function(){
            this.value-=1
            return this.value;
        },
        reset:function(){
            this.value=start;
            return this.value;
        }   
    };
}
let counter =createCounter(1);
console.log(counter.value);// gives current value of the counter
console.log(counter.increment());// increases the value
console.log(counter.increment());// increases the value
console.log(counter.increment());// increases the value
console.log(counter.increment());// increases the value
console.log(counter.reset());// resets the value to start
console.log(counter.value)
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
