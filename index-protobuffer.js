const fs = require('fs');
const Schema = require('./employees_pb')

const anthibo = new Schema.Employee();
anthibo.setId(1001);
anthibo.setName('anthibo');
anthibo.setSalary(3000);

const ahmed = new Schema.Employee();
ahmed.setId(2332);
ahmed.setName('ahmed');
ahmed.setSalary(3244);

const james = new Schema.Employee();
james.setId(2334);
james.setName('james');
ahmed.setSalary(3244);

//adding employee objects employees array
const employees = new Schema.Employees();
employees.addEmployees(anthibo);
employees.addEmployees(ahmed);
employees.addEmployees(james);

const bytes = employees.serializeBinary();
console.log(`employees binaries ${bytes}`)
fs.writeFileSync("employees_binary", bytes)

// deserialize protobuffer binaries
const deserializedEmployees = Schema.Employees.deserializeBinary(bytes)

console.log(`employees array deserialized ${deserializedEmployees}`)
