// Add your code here
const url = "http://localhost:3000/users";

function submitData() {
  const p = document.createElement("p");

  const submitInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "Luka",
      email: "luka@hotmail.com",
    }),
  };

  return fetch(url, submitInfo)
    .then((response) => response.json())
    .then((data) => {
      let dataOne = document.querySelector(".append").appendChild(p);
      dataOne.innerHTML = `${data.id}`;

    })
    .catch((error) => {
      let dataTwo = document.querySelector(".append").appendChild(p);
      dataTwo.innerHTML = "This is an error message";
    });
}
submitData();
