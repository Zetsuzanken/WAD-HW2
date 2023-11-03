const profileIcon = document.getElementById("UserProfilePic");
 const dropdownMenu = document.getElementById("dropdown-menu");

 profileIcon.addEventListener('click', function () {
     if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
         dropdownMenu.style.display = 'block';
     } else {
         dropdownMenu.style.display = 'none';
     }
 });

 //close the dropdown menu if the user clicks anywhere outside of it
 document.addEventListener('click', function (event) {
     if (event.target !== profileIcon && event.target !== dropdownMenu) {
         dropdownMenu.style.display = 'none';
     }
 });

 //prevent the dropdown from closing when clicking inside the menu itself
 dropdownMenu.addEventListener('click', function (event) {
     event.stopPropagation();
 });