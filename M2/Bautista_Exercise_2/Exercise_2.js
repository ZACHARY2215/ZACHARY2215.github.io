


const jsonString = '{"name": "John", "age": 30, "hobbies": ["Basketball","Dancing"]}';

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); 

console.log(jsonObject.age); 
    
const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); 

