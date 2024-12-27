const generateTable = () => {

let table = document.querySelector('#table').value;
let number = document.querySelector('#number').value
let table1 =""
console.log()

for (let index = 1; index <= number; index++) {
  table1 =(`${table1}<p> ${table}x${index}=${table * index}<p/>`)
}
document.querySelector("#table1").innerHTML = table1

}