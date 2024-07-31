// let tbody = document.querySelector("#tbody");

// function getStudent() {
//   fetch("https://660fdbb60640280f219ba3f6.mockapi.io/student", {
//     method: "GET",    // *GET, POST, PUT, DELETE, etc.//
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => innerStudent(data))
//     .catch((error) => console.log(error));
// }

// function innerStudent(data) {
//   data.forEach((element) => {
//     tbody.innerHTML += `
//     <tr>
//       <td>${element.id}</td>
//       <td>${element.name}</td>
//       <td>${element.surname}</td>
//       <td>${element.phone}</td>
//     </tr>`;
//   });
// }

// getStudent()

window.addEventListener("load", () => {
  getStudents();
});

let tbody = document.querySelector(".tbody");
let namee = document.querySelector(".namee");
let surname = document.querySelector(".surname");
let phone = document.querySelector(".phone");
let date = document.querySelector(".date");
let add = document.querySelector(".add");

add.addEventListener("click", () => {
  let newStudent = {
    name: namee.value,
    surname: surname.value,
    phone: phone.value,
    date: date.value,
  };

  if (
    newStudent.name &&
    newStudent.phone &&
    newStudent.surname &&
    newStudent.date
  ) {
    fetch("https://660fdbb60640280f219ba3f6.mockapi.io/student", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        getStudents();
        namee.value = "";
        surname.value = "";
        phone.value = "";
        date.value = "";
      });
  } else {
    alert("formani toldir");
  }
});

console.log(tbody);

function getStudents() {
  tbody.innerHTML = "";
  fetch("https://660fdbb60640280f219ba3f6.mockapi.io/student", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => innerStudent(data))
    .catch((error) => console.log(error));
}

function innerStudent(data) {
  data.forEach((element) => {
    tbody.innerHTML += `
          <tr>
          <td>${element.name}</td>
          <td>${element.surname}</td>
          <td>${element.date}</td>
          <td>${element.phone}</td>
           <td>
          <button class="btn btn-danger" onclick="removeStudent(${element.id})">Delate</button>
        </td>
        </tr>
          `;
  });
}
function removeStudent(id) {
  fetch(`https://660fdbb60640280f219ba3f6.mockapi.io/student/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => getStudents())
    .catch((error) => console.log(error));
}