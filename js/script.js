function handleCheckboxChange(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    var label = checkbox.parentNode.querySelectorAll("label");
    var container = document.getElementById("meetingcontainer");    
    if (checkbox.checked) {
        // Create a new list item element
        var card = document.createElement("div");
        card.className = "card crdsize2";
        card.id=checkboxId;
        var cardbody = document.createElement("div");
        cardbody.className="card-body";
        var blockquote = document.createElement(blockquote);
        blockquote.className="blockquote mb-0";
        var unorderedlist=document.createElement("ul");
        unorderedlist.style="list-style-type: none;";
        var listItem1 = document.createElement("li");
        var listItem2 = document.createElement("li");
                listItem1.innerHTML = label[0].innerHTML;
                unorderedlist.appendChild(listItem1);
                listItem2.innerHTML = label[1].innerHTML;
                unorderedlist.appendChild(listItem2);
        
        blockquote.appendChild(unorderedlist);
        cardbody.appendChild(blockquote);    
        card.appendChild(cardbody);
        container.appendChild(card);
    } else {
        var cards = container.getElementsByClassName("card crdsize2");
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].id === checkboxId) {
                container.removeChild(cards[i]);
                break;
            }
        }
    }
}

// Add event listeners to the checkboxes
document.getElementById("c1").addEventListener("change", function() {
    handleCheckboxChange("c1");
});

document.getElementById("c2").addEventListener("change", function() {
    handleCheckboxChange("c2");
});
