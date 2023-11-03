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


// Load and display posts from the JSON file
fetch('posts.json')
.then((response) => response.json())
.then((data) => {
 const postsContainer = document.querySelector('.posts');

 data.forEach((post) => {
   const postElement = document.createElement('div');
   postElement.classList.add('post');

   const postHeader = document.createElement('div');
   postHeader.classList.add('post-header');
   const profilePhoto = document.createElement('img');
   profilePhoto.classList.add('profile-photo');
   profilePhoto.src = 'res/images/profile.png';
   profilePhoto.alt = 'Profile Photo';
   const postDate = document.createElement('div');
   postDate.classList.add('post-date');
   postDate.textContent = post.timestamp;

   const postAuthor = document.createElement('div');
   postAuthor.classList.add('post-author');
   postAuthor.textContent = post.author;

   postHeader.appendChild(profilePhoto);
   postHeader.appendChild(postAuthor);
   postHeader.appendChild(postDate);
   
   const postContent = document.createElement('div');
   postContent.classList.add('post-content');
   if (post.photo) {
     const largePhoto = document.createElement('img');
     largePhoto.classList.add('large-photo');
     largePhoto.src = post.photo;
     largePhoto.alt = 'Large Photo';
     postContent.appendChild(largePhoto);
   }
   const postText = document.createElement('div');
   postText.classList.add('post-text');
   postText.innerHTML = `<p>${post.text}</p>`;

   postContent.appendChild(postText);

   const postLike = document.createElement('div');
   postLike.classList.add('post-like');
   const likeButton = document.createElement('img');
   likeButton.classList.add('like-button');
   likeButton.src = 'res/images/like.png';
   likeButton.alt = 'Like Button';
   postLike.appendChild(likeButton);

   postElement.appendChild(postHeader);
   postElement.appendChild(postContent);
   postElement.appendChild(postLike);

   postsContainer.appendChild(postElement);
 });
})
.catch((error) => {
 console.error('Error loading posts:', error);
});


/*
//Fetching from JSONBin.io

fetch('https://api.jsonbin.io/v3/b/65451cf012a5d3765994721c')
  .then((response) => response.json())
  .then((responseData) => {
    const data = responseData.record; 
    const postsContainer = document.querySelector('.posts');

    data.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      const postHeader = document.createElement('div');
      postHeader.classList.add('post-header');
      const profilePhoto = document.createElement('img');
      profilePhoto.classList.add('profile-photo');
      profilePhoto.src = 'res/images/profile.png';
      profilePhoto.alt = 'Profile Photo';
      const postDate = document.createElement('div');
      postDate.classList.add('post-date');
      postDate.textContent = post.timestamp;

      postHeader.appendChild(profilePhoto);
      postHeader.appendChild(postDate);

      const postContent = document.createElement('div');
      postContent.classList.add('post-content');
      if (post.photo) {
        const largePhoto = document.createElement('img');
        largePhoto.classList.add('large-photo');
        largePhoto.src = post.photo;
        largePhoto.alt = 'Large Photo';
        postContent.appendChild(largePhoto);
      }
      const postText = document.createElement('div');
      postText.classList.add('post-text');
      postText.innerHTML = `<p>${post.text}</p>`;

      postContent.appendChild(postText);

      const postLike = document.createElement('div');
      postLike.classList.add('post-like');
      const likeButton = document.createElement('img');
      likeButton.classList.add('like-button');
      likeButton.src = 'res/images/like.png';
      likeButton.alt = 'Like Button';
      postLike.appendChild(likeButton);

      postElement.appendChild(postHeader);
      postElement.appendChild(postContent);
      postElement.appendChild(postLike);

      postsContainer.appendChild(postElement);
    });
  })
  .catch((error) => {
    console.error('Error loading posts:', error);
  });
  */