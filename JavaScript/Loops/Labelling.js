// skipping iterations of outer loop using label with continue statement
console.log("-------------Example 1----------------")
outer:
for(let i=1;i<=5;i++){
    inner:
    for(let j=1;j<=5;j++){
        if (i==3){
            continue outer;
        }
        console.log(i,j);
    }
}
// breaking execution of outer loop using label with break statement
console.log("-------------Example 2----------------")
outer:
for(let i=1;i<=5;i++){
    inner:
    for(let j=1;j<=5;j++){
        if (i==3){
            break outer;
        }
        console.log(i,j);
    }
}
//Using both break and continue together with label 
console.log("-------------Example 3----------------")
outer:
for(let i=1;i<=5;i++){
    inner:
    for(let j=1;j<=5;j++){
        if (j==4){
            continue outer;
        }
        if (i==3){
            break outer;
        }
        console.log(i,j);
    }
}