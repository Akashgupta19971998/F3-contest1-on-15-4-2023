const fname = document.getElementById("fname");
const profession = document.getElementById("profession");
const age = document.getElementById("age");
const message = document.getElementById("message");
const tbody = document.getElementById("tbody");
const btn11 = document.getElementById('button1')

const arr = [];
let num = 1;

btn11.addEventListener("click", success);

function success() {
    if (!(fname.value && profession.value && age.value)) {
        message.innerText = "Error";
        message.style.display = "block";
        message.style.color = "red";
        return;
    }
    message.innerText = "Success:Employee Added";
    message.style.display = "block";
    message.style.color = "green";
    arr.push({
        num: num++,
        fname: fname.value,
        profession: profession.value,
        age: age.value,
    });
    console.log(arr);
    renderData();
}

function renderData() {
    arr.forEach((e) => {
        const row = `
      <tr>
        <td>${e.num}<td>
        <td>${e.name}</td>
        <td>${e.profession}</td>
        <td>${e.age}</td>
        <td><button onclick="Delete_user('${e.num}')">${Delete_user}</button><td>
      </tr>
    `;

        tbody.appendChild(row);
    });
}

function Delete_user(i){

}