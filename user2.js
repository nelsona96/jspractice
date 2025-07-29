// This file is my attempt to re-create the js functionality from memory and/or learning to think through the code on my own.

// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const userId = localStorage.getItem("id");
const idInput = document.querySelector(".id-input");

async function renderPosts(userId) {
  let postListHTML = document.querySelector(".post-list");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const userPosts = await response.json();
  postListHTML.innerHTML = userPosts.map((post) => postHTML(post)).join("");
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

function pageTitle(userId) {
  const title = document.querySelector("title");
  title.innerHTML = `User ${userId}`;
}

function showId(userId) {
  idInput.value = userId;
}

function limitInputRange() {
  const numberOfUsers = localStorage.getItem("numberOfUsers");
  idInput.min = 1;
  idInput.max = numberOfUsers;
}

function onSearchChange(event) {
  const newId = event.target.value;
  renderPosts(newId);
}

function goBack() {
    const backButton = document.querySelector('.back-button');
    window.location.href = `${window.location.origin}/jspractice/`
    // window.location.href = `${window.location.origin}/index.html`
}

function init() {
  setTimeout(() => {
    renderPosts(userId);
  }, 600);
  pageTitle(userId);
  showId(userId);
  limitInputRange();
}

init();
