function toggleHiddenNav() {
    const hiddenItems = document.getElementById("hidden_items");
    hiddenItems.classList.toggle("show");
  
    document.getElementById("getBiggerClose").style.width = "100000px";
    document.getElementById("getBiggerClose").style.height = "100000px";
}

function closeHiddenNav() {
    const hiddenItems = document.getElementById("hidden_items");
    hiddenItems.classList.remove("show");

    document.getElementById("getBiggerClose").style.width = "0px";
    document.getElementById("getBiggerClose").style.height = "0px";
}


$(document).ready(function(){
    var maxWidth = 0;
    var maxTextLength = 0;
  
    var fontSize = $('.items:first').css('font-size');
    fontSize = parseFloat(fontSize) + 10;
    $('.items').each(function(){
        if (!$(this).hasClass('closeBtn')) { // Check if it doesn't have the 'closeBTN' class
            var itemWidth = $(this).outerWidth(true);
            var c = $(this).text().length + 1;
            maxTextLength = Math.max(maxTextLength, c);
            maxWidth = Math.max(maxWidth, itemWidth);
        }
    });
    $('.items').not('.closeBtn').each(function(){ // Select items without 'closeBTN' class
        $(this).width(maxWidth + fontSize + maxTextLength);
    });
});


var closeButton = document.querySelector('.closeBtn');

// // Add a mouseover event listener to check for hover
// closeButton.addEventListener('mouseover', function() {
//   document.getElementById("getBiggerClose").style.width = "100000px";
//   document.getElementById("getBiggerClose").style.height = "100000px";
// });

// // Add a mouseout event listener to check when the hover ends
// closeButton.addEventListener('mouseout', function() {
//   document.getElementById("getBiggerClose").style.width = "0px";
//   document.getElementById("getBiggerClose").style.height = "0px";
// });

