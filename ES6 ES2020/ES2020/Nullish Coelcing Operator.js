// Or operator ||
function printSomething(value) {
    let printThis = value || "Not found";
    console.log("Print this is", printThis);
}
console.log("-----------Using OR--> checks for all falsey values--------------");
printSomething("Name");
printSomething("");
printSomething(false);
printSomething(null);
printSomething(undefined);

// Nullish coelcing operator ?? 
function printSomething1(value) {
    let printThis = value ?? "Not found";
    console.log("Print this is", printThis);
}
console.log("-----------Using ?? --> Checks only for null and undefined--------------");
printSomething1("Name");
printSomething1("");
printSomething1(false);
printSomething1(null);
printSomething1(undefined);