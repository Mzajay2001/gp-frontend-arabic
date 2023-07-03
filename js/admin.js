const form = document.getElementById('admin-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // get user data
    const name = document.getElementById('name').value;
    const pass = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const alldepartments = document.querySelectorAll('input[name="search-radio1"]');
    let depttype;

    for (const dept of alldepartments) {
        if (dept.checked) {
            depttype = dept.value
        }
    }
    console.log(depttype)
    const allusers = document.querySelectorAll('input[name="search-radio"]');
    let usertype;
    for (const user of allusers) {
        if (user.checked) {
            usertype = user.value
        }
    }
    console.log(usertype)
    let url;
    if (usertype === "بادئ الاجتماع") {
        url = 'http://127.0.0.1:8000/api/addInitiator'
    } else if (usertype === "سكرتير") {
        url = 'http://127.0.0.1:8000/api/addSubjectController'

    } else if (usertype === "أستاذ") {
        url = 'http://127.0.0.1:8000/api/adddoctor'

    } else if (usertype === "مسؤل") {
        url = 'http://127.0.0.1:8000/api/addAdmin'

    }
    // add user
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "name": name,
            "password": pass,
            "email": email,
            "adminstration": depttype
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => {
            if (response.ok) {
                
                alert("تم اضافة ال" + usertype + " بنجاح")
            }
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    form.reset();
})
// Get the userscontainer element
const usersContainer = document.getElementById('userscontianer'); // Correct the typo in the ID

// Create a new row element with the 'box' class
const newRow = document.createElement('div');
newRow.classList.add('row', 'box');

// Create the first column
const col1 = document.createElement('div');
col1.classList.add('col-md-3');
col1.innerHTML = `
    <div class="card border-0 h-100">
        <div class="card-body">
            <a class="btn btn-transparent" href="edituser.html" style="background-color: transparent; border: 0px;">
                <img src="logos/avatar.png" height="60" width="60" alt="">
                <span style="text-decoration: underline;">تعديل</span>
            </a>
        </div>
    </div>
`;
const selectElement = document.getElementById('users');
var selectedValue = selectElement.value;

// function getusers(type){
// // result = جيب داتا من api لtype 
// // for(var i =0;i<result.length;i++){
// const col2 = document.createElement('div');
// col2.classList.add('col-md-6');
// col2.innerHTML = `
//     <div class="card border-0 h-100">
//         <div class="card-body">
//             <p class="card-text" style="text-align:right;">الاسم: $</p>
//             <p class="card-text" style="text-align:right;">القسم: $ </p>
//         </div>
//     </div>
// `;

// const col3 = document.createElement('div');
// col3.classList.add('col-md-3');
// col3.innerHTML = `
//     <div class="card border-0 h-100">
//         <div class="card-body trash">
//             <button style="background-color: transparent; border: 0px;">
//                 <img src="img/bin.png" height="25" width="25" alt="">حذف
//             </button>
//         </div>
//     </div>
// `;


// newRow.appendChild(col1);
// newRow.appendChild(col2);
// newRow.appendChild(col3);

// usersContainer.appendChild(newRow);
// var hr = document.createElement("hr");
// usersContainer.appendChild(hr);
// //}
// }

// function confirmRemoveRow(button) {
//     var confirmed = confirm("هل انت متأكد من حذف $؟");
//     if (confirmed) {
//       var row = button.closest(".row box");
//       var hr = row.nextElementSibling; 
//       row.parentNode.removeChild(row);
//       if (hr.tagName === "HR") {
//         hr.parentNode.removeChild(hr);
//       }
//     }
//   }
// button.addEventListener("click", function() {
//     confirmRemoveRow(this);
//   });
