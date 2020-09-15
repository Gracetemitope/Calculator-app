const calculator = (n1, operator,  n2) => {
let result = ""
if (operator === "add") {
     result = n1 + n2
}

return result
}
console.log(calculator(3, "add", 5))