// ex1.2 Create a HTTP demande to get users list on JSON
function getUsersData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUsers(json))
};

// ex1.3 Create a function to show an HTML element who contain user names
let container = document.createElement("div");
document.body.appendChild(container);
container.setAttribute("class", "container");
let rowGeneral = document.createElement("div");
container.appendChild(rowGeneral);
rowGeneral.setAttribute("class", "row");

let colAllUserNames = document.createElement("div");
rowGeneral.appendChild(colAllUserNames);
colAllUserNames.setAttribute("class", "col-3");
let allUserNames = document.createElement("ul");
colAllUserNames.appendChild(allUserNames);
allUserNames.setAttribute("class", "list-group");

let lastButton;
let postShown;

function displayUsers(data) {
  for (let i = 0; i < data.length; i++) {
    let currentElement = data[i];
    let userName = document.createElement("button");
    userName.setAttribute("class", "list-group-item list-group-item-action");
    userName.addEventListener("click", function() {
      getUserData(currentElement.id)
      if (lastButton !== undefined) {
        lastButton.style.fontWeight = "normal";
      }
      userName.style.fontWeight = "bold";
      lastButton = userName;

      getUserPostsData(userId)
      if (postShown !== undefined) {
        userPosts.style.display = "none";
      }
      userPosts.style.display = "block";
      postShown = userPosts;
      userTitlePublication.innerHTML = currentElement.title;
      userPublication.innerHTML = currentElement.body;
    });
    allUserNames.appendChild(userName);
    userName.textContent = currentElement.name
    console.log(currentElement.name);
  }
}

getUsersData();

// ex2.1
function getUserData(userId) {
  fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(response => response.json())
    .then(json => displayUser(json))
};


// ex2.2 function to show name,username,city,website
let colUserProfil = document.createElement("div");
rowGeneral.appendChild(colUserProfil);
colUserProfil.setAttribute("class", "col-3 order-3");
let userProfil = document.createElement("ul");
colUserProfil.appendChild(userProfil);
userProfil.setAttribute("class", "list-group");
let userName = document.createElement("li");
userProfil.appendChild(userName);
userName.setAttribute("class", "list-group-item");
let userUserName = document.createElement("li");
userProfil.appendChild(userUserName);
userUserName.setAttribute("class", "list-group-item");
let userCity = document.createElement("li");
userProfil.appendChild(userCity);
userCity.setAttribute("class", "list-group-item");
let userWebsite = document.createElement("button");
userProfil.appendChild(userWebsite);
userWebsite.setAttribute("class", "list-group-item");


function displayUser(data) {
  userName.textContent = data.name;
  userName.style.fontWeight = "bold";
  userUserName.textContent = "@" + data.username;
  userCity.textContent = "City :" + data.address.city;
  userWebsite.textContent = "Website :" + data.website;
}

// ex3.1
function getUserPostsData(userId) {
  fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    .then(response => response.json())
    .then(json => displayUserPosts(json))
};
getUserPostsData(7);

let colAllUserPosts = document.createElement("div");
rowGeneral.appendChild(colAllUserPosts);
colAllUserPosts.setAttribute("class", "col-6 order-2");
let allUserPosts = document.createElement("div");
colAllUserPosts.appendChild(allUserPosts);

let userPosts;

// ex3.2
function displayUserPosts(data) {
  for (let i = data.length - 1; i >= 0; i--) {
    let currentElement = data[i];

    userPosts = document.createElement("div");
    allUserPosts.appendChild(userPosts);
    userPosts.style.display = "none";
    let userPostsName = document.createElement("p");
    userPosts.appendChild(userPostsName);
    userPostsName.setAttribute("class", "list-group-item")
    let userPostsUserName = document.createElement("p");
    userPosts.appendChild(userPostsUserName);
    userPostsUserName.setAttribute("class", "list-group-item")
    let userTitlePublication = document.createElement("p");
    userPosts.appendChild(userTitlePublication);
    userTitlePublication.setAttribute("class", "list-group-item")
    let userPublication = document.createElement("p");
    userPosts.appendChild(userPublication);
    userPublication.setAttribute("class", "list-group-item")
  }
}
