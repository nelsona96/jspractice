// This file is not being used. This was code I wrote while following the bootcamp video.

const userId = localStorage.getItem("id");
const postListHTML = document.querySelector(".post-list");
const idInput = document.querySelector(".id-input");

async function renderPosts(userId) {
    const posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const postsData = await posts.json();
  postListHTML.innerHTML = postsData.map((post) => postHTML(post)).join("");
}

function limitInputRange() {
  const numberOfUsers = window.localStorage.numberOfUsers;
  idInput.min = 1;
  idInput.max = numberOfUsers;
}

function showId(userId) {
  idInput.value = userId;
}

function onSearchChange(event) {
  const userId = event.target.value;
  renderPosts(userId);
}

function pageTitle(userId) {
  const title = document.querySelector('title');
  title.innerHTML = `
  User ${userId}
  `
}

function postHTML(post) {
  return `
    <div class="post">
        <div class="post__title">
            ${post.title}
        </div>
        <p class="post__body">
            ${post.body}
        </p>
    </div>
    `;
}

function init() {
  setTimeout(() => {
    renderPosts(userId);
    showId(userId);
    limitInputRange();
    pageTitle(userId);
  }, 600);
}

init();
