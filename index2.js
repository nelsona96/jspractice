// API 1: "https://jsonplaceholder.typicode.com/users"

const userListHTML = document.querySelector(".user-list");

async function fetchUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();
  userListHTML.innerHTML = usersData.map((user) => userHTML(user)).join("");
  localStorage.setItem("numberOfUsers", usersData.length);
}

function userHTML(user) {
  return `
    <div class="user">
        <div class="user-card" onclick="showUserPosts(${user.id})">
            <div class="user-card__container">
                <h3> ${user.name}</h3>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Website:</b><a href="https://${user.website}" target="_blank"> ${user.website}</a></p>
            </div>
        </div>
    </div>
    `;
}

function showUserPosts(id) {
  localStorage.setItem("id", id);
  window.location.href = `${window.location.origin}/user.html`;
}

setTimeout(() => {
  fetchUsers();
}, 1000);