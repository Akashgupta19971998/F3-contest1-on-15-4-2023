const fname = document.getElementById("fname");
const profession = document.getElementById("profession");
const age = document.getElementById("age");
const message = document.getElementById("message");
const tbody = document.getElementById("tbody");
const btn11 = document.getElementById('button1')

let arr = [];
let num = 1;

btn11.addEventListener("click", success);

function success() {
    if (!(fname.value && profession.value && age.value)) {
        message.innerText = "Error : Please make sure all the fields are filled before adding in an employee!";
        message.style.display = "block";
        message.style.color = "red";
        return;
    }
    document.getElementById("one").style.display = "none";
    document.getElementById("zero").style.display = "none";
    message.innerText = "Success : Employee Added!";
    message.style.display = "block";
    message.style.color = "green";
    document.getElementById("two").style.display = "block";
    // let new1=document.createElement("h3");
    // new1.innerHTML="Added Employees"
    // new1.style.display = "block";
    // console.log(new1)
    arr.push({
        num: num++, //id:1 id:2
        fname: fname.value,
        profession: profession.value,
        age: age.value,
    });
    console.log(arr);
    renderData();
}
// var table = document.createElement("table");
function renderData() {
    arr.forEach((e) => {
        const row = `
      <tr>
        <td>${"Id: " + e.num}<td>
        <td>${"Name: " + e.fname}</td>
        <td>${"Profession: " + e.profession}</td>
        <td>${"Age: " + e.age}</td>
        <td><input type="button" value="Delete Row" onclick="SomeDeleteRowFunction()"></td>
      </tr>
    `;
    // <td><button onclick="Delete_user('${e.num}')">${Delete_user}</button></td>
         tableBody.appendChild(row);
        // table.appendChild(row);
        console.log("row>> " + row)
    });
}
var tableBody = document.getElementById("table");

var tableRows = arr.map(function (person) {
    return "<tr><td> "+num+" </td><td>" + person.name + "</td><td>" + person.age + "</td><td>" + person.city + "</td></tr>";
});

 tableBody.innerHTML= tableRows.join("");


function SomeDeleteRowFunction(){
tableBody.remove()

}