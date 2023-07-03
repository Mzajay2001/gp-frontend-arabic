const submitBtn = document.getElementById('submit-votes');

submitBtn.addEventListener('click', function() {
  const checkedBoxes = document.querySelectorAll('input[type="radio"]:checked');
  const selectedvote = [];

  checkedBoxes.forEach(function(box) {
    selectedvote.push(box.value);
  });

  alert(`You voted for: ${selectedvote.join(', ')}`);

  const acceptVotes = document.querySelectorAll('input[value="yes"]:checked').length;
  const refuseVotes = document.querySelectorAll('input[value="no"]:checked').length;

  const totalVotes = acceptVotes + refuseVotes;

  const acceptBar = document.getElementById('accept-bar');
  acceptBar.style.width = `${(acceptVotes / totalVotes) * 100}%`;

  const refuseBar = document.getElementById('refuse-bar');
  refuseBar.style.width = `${(refuseVotes / totalVotes) * 100}%`;

});