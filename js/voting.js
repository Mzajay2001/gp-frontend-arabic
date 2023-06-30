const submitBtn = document.getElementById('submit-votes');

submitBtn.addEventListener('click', function() {
  const checkedBoxes = document.querySelectorAll('input[type="radio"]:checked');
  const selectedvote = [];

  checkedBoxes.forEach(function(box) {
    selectedvote.push(box.value);
  });

  alert(`You voted for: ${selectedvote.join(', ')}`);

  const accpectVotes = document.querySelectorAll('input[value="yes"]:checked').length;
  const refuseVotes = document.querySelectorAll('input[value="no"]:checked').length;

  const totalVotes = accpectVotes + refuseVotes;

  const accpectBar = document.getElementById('accpect-bar');
  accpectBar.style.width = `${(accpectVotes / totalVotes) * 100}%`;

  const refuseBar = document.getElementById('refuse-bar');
  refuseBar.style.width = `${(refuseVotes / totalVotes) * 100}%`;

});