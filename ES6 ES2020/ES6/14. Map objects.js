// map before es6 -

const studentMap=new Map();
studentMap.set('sname','Someone');
studentMap.set('roll','101');
console.log(studentMap);

// After es6
const student1={sname:"S1", roll:"001"};
const student2={sname:"S2", roll:"002"};
let studentMap1=new Map();
studentMap1.set(student1,"Average student");
studentMap1.set(student2,"Brilliant student");
console.log(studentMap1);
