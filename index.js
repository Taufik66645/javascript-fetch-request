// const url = "https://api.github.com/users/Taufik66645";
// fetch(url)
//   .then(data => {
//     return data.json();
//   })
//   .then(response => {
//     console.log(response);
//   });

function makeList() {
  const otherUrl = "https://api.github.com/users/Taufik66645/followers";
  const tr = document.querySelector("tr");
  console.log(tr);
  fetch(otherUrl)
    .then(data => {
      return data.json();
    })
    .then(followers => {
      followers.forEach(data => {
        const td = document.createElement("td");
        const img = document.createElement("img");


        img.setAttribute("src", data.avatar_url);


        img.setAttribute("width", 300);
        td.appendChild(img);
        tr.appendChild(td);
      });
    });
}

makeList();
