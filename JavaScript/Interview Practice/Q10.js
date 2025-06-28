// Create expect().toBe() and expect().notToBe() functions
function expect(value){
    let obj={
        toBe:function(funcVal){
            if (value==funcVal)
                return true;
            throw new Error("Not Equal");
        },
        notToBe:function(funcVal){
            if (value!=funcVal)
                return true;
            throw new Error("Equal");
        }
    };
    return obj;
}
console.log(expect(5).toBe(4));
