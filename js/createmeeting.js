var container1 = document.getElementById("meetingtable");
for(var i = 1; i<=8 ; i++)
{
var row = document.createElement("div");
row.className = "row";
row.id= `r${i}`;
var col1 = document.createElement("div");
col1.className = "col-md-3";
var card1 = document.createElement("div");
card1.className = "card border-0 h-100";
var cardBody1 = document.createElement("div");
cardBody1.className = "card-body";
var link1 = document.createElement("a");
link1.className = "btn btn-transparent";
link1.href = "btn1.html";
link1.style.backgroundColor = "transparent";
link1.style.border = "0px";
var img1 = document.createElement("img");
img1.src = "img/file.png";
img1.height = "50";
img1.width = "50";
link1.appendChild(img1);
cardBody1.appendChild(link1);
card1.appendChild(cardBody1);
col1.appendChild(card1);
row.appendChild(col1);

var col2 = document.createElement("div");
col2.className = "col-md-6";
var card2 = document.createElement("div");
card2.className = "card border-0 h-100";
var cardBody2 = document.createElement("div");
cardBody2.className = "card-body";
var texts = [`عن: ${i}`, "من :"];
texts.forEach(function(text) {
  var cardText = document.createElement("p");
  cardText.textContent = text;
  cardText.className = "card-text";
  cardText.style.textAlign = "right";
  cardBody2.appendChild(cardText);
});
card2.appendChild(cardBody2);
col2.appendChild(card2);
row.appendChild(col2);

var col3 = document.createElement("div");
col3.className = "col-md-3";
var card3 = document.createElement("div");
card3.className = "card border-0 h-100";
var cardBody3 = document.createElement("div");
cardBody3.className = "card-body";
var button = document.createElement("button");
button.style.backgroundColor = "transparent";
button.style.border = "0px";
button.addEventListener("click", function() {
    confirmRemoveRow(this);
  });
var img2 = document.createElement("img");
img2.src = "img/bin.png";
img2.height = "25";
img2.width = "25";
button.appendChild(img2);
cardBody3.appendChild(button);
card3.appendChild(cardBody3);
col3.appendChild(card3);
row.appendChild(col3);

container1.appendChild(row);

var hr = document.createElement("hr");
container1.appendChild(hr);
}
function confirmRemoveRow(button) {
    var confirmed = confirm("هل انت متأكد من الغاء اجتماع؟");
    if (confirmed) {
      var row = button.closest(".row");
      var hr = row.nextElementSibling; 
      row.parentNode.removeChild(row);
      if (hr.tagName === "HR") {
        hr.parentNode.removeChild(hr);
      }
    }
  }

const attendContainer = document.getElementById('attendcontianer');

for(var i =1; i<=8 ; i++)
{
const rowElement = document.createElement('div');
rowElement.classList.add('row');
rowElement.innerHTML = `
  <div class="col-md-4">
    <div class="card border-0 h-100">
      <div class="card-body">
        <img src="logos/avatar.png" height="70" width="70" alt="">
      </div>
    </div>
  </div>
  <div class="col-md-8">
    <div class="card border-0 h-100">
      <div class="card-body">
        <p class="card-text" style="text-align:right;">القسم: <br> الاسم : ${i}</p>
      </div>
    </div>
  </div>
`;

attendContainer.appendChild(rowElement);
var hr = document.createElement("hr");
attendContainer.appendChild(hr);
}
const selceteattendcontainer = document.getElementById("selcetattendee");
for(var i =1; i<=8 ; i++)
{
const form = document.createElement('form');
form.classList.add('formbody');
form.action="/action_page.php";
form.innerHTML = `
<label class="header" for="Doc${i}">${i} </label>
<br>
<label class="header" for="Doc${i}">القسم </label>
<div class="clearr"></div>
<input class="chbox" type="checkbox" id="Doc${i}" name="Doc${i}" value="Doc${i}">
`;

selceteattendcontainer.appendChild(form);
var hr = document.createElement("hr");
selceteattendcontainer.appendChild(hr);
}

function validateForm() {
    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
    const dateInput = document.getElementById('datepicker');
    const location = document.getElementById('Location');
    const subjectname = document.getElementById('textinput');

    if (!startInput.value || !endInput.value || !dateInput.value || !location.value || !subjectname.value) {
        alert('يرجى ملء جميع الحقول المطلوبة.');
        return;
      }

    // Validate date
    const today = new Date().toISOString().split('T')[0];
    if (dateInput.value < today) {
      alert('تاريخ غير صالح. يجب أن يكون بعد اليوم الحالي.');
      return;
    }

    // Validate time
    const startTime = startInput.value;
    const endTime = endInput.value;
    if (startTime >= endTime) {
      alert('وقت الانتهاء يجب أن يكون أكبر من وقت البدء.');
      return;
    }
    else if (startTime <= endTime) {
        alert('وقت البداية يجب أن يكون اقل من وقت النهاية.');
        return;
      }

    // Form is valid
    alert('تم الإنشاء بنجاح.');
  }
  var donebutton=document.getElementById("selectDoneBtn");
  donebutton.addEventListener("click",validateForm);