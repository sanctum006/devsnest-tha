const apiEndpoint = "https://api.github.com/users/";
const inputBox = document.querySelector(".inp-txt");
const statsContainer = document.querySelector(".stats");
const form = document.querySelector(".form");

async function getUserData(username) {
  try {
    const data = await axios(apiEndpoint + inputBox.value);
    console.log(data);
    form.innerHTML = "";
    const user = data.data;
    document.querySelector("img").attributes.src = data.data.avatar_url;
    const statsContent = `
    <div class="card">

      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">

    <div class="user-info">
      <h2>${user.login}</h2>
      <p>${user.bio}</p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `;
    console.log(data.data.avatar_url);
    statsContainer.innerHTML = statsContent;
  } catch {
    form.innerHTML = "";
    statsContainer.innerHTML =
      "<h1 class='warn-heading'>User not found :/</h1>";
  }
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  const data = getUserData(inputBox.value);
  console.log(data);
};
