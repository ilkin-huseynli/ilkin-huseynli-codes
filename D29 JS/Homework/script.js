const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const nameInfo = document.getElementById("nameInfo");
const ageInfo = document.getElementById("ageInfo");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");

let users = [];

function checkName() {
    if (nameInput.value.trim().length >= 3) {
        nameInfo.className = "info green";
        return true;
    } else {
        nameInfo.className = "info red";
        return false;
    }
}

function checkAge() {
    if (Number(ageInput.value) >= 18) {
        ageInfo.className = "info green";
        return true;
    } else {
        ageInfo.className = "info red";
        return false;
    }
}

function showTable() {
    tableBody.innerHTML = "";

    for (let i = 0; i < users.length; i++) {
        const row = document.createElement("tr");

        row.innerHTML =
            "<td>" + users[i].name + "</td>" +
            "<td>" + users[i].age + "</td>" +
            "<td>" + (i + 1) + "</td>" +
            "<td><button class='delete-btn' onclick='deleteUser(" + i + ")'>Delete</button></td>";

        tableBody.appendChild(row);
    }
}

function deleteUser(index) {
    users.splice(index, 1);
    showTable();
}

nameInput.addEventListener("input", checkName);
ageInput.addEventListener("input", checkAge);

addBtn.addEventListener("click", function () {
    const nameOk = checkName();
    const ageOk = checkAge();

    if (nameOk && ageOk) {
        users.push({
            name: nameInput.value.trim(),
            age: ageInput.value
        });

        showTable();

        nameInput.value = "";
        ageInput.value = "";
        checkName();
        checkAge();
    }
});