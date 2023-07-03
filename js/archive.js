const oldsubjectsContainer = document.getElementById('oldsubjects');

for(var i=1;i<=8;i++)
{
// Create the card element
const cardElement = document.createElement('div');
cardElement.classList.add('col');
cardElement.innerHTML = `
  <div class="card cardArc h-100">
    <div class="card-body">
      <h5 class="card-title classSub">محتوى الموضوع : ${i} </h5>
      <p class="card-text classMeet">اسم الاجتماع :</p>
      <p class="card-text classDate">التاريخ :</p>
    </div>
    <br>
    <!-- Button trigger modal -->
    <a href="viewsubject.html" class="btn viewbtn">
      عرض
    </a>
  </div><br>
`;

// Append the card element to the "oldsubjects" container
oldsubjectsContainer.appendChild(cardElement);}