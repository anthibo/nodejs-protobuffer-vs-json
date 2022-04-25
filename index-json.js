const fs  = require('fs')
const employees = []
employees.push({
    "name": "anthibo",
    "salary": 1000,
    "id": 230
})
employees.push({
    "name": "ahmed",
    "salary": 2000,
    "id": 231
})
employees.push({
    "name": "James",
    "salary": 1233,
    "id": 232
})
fs.writeFileSync("employees.json",JSON.stringify(employees))
