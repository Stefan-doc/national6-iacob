console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

const breedsListHtml = document.querySelector(".container");

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    
    console.log(data.message);
    // const breed = document.createElement("breeds");
    // const breedMessage = document.createElement("h3");
    // const breedStatus = document.createElement("p");
    const breed = data.message;
    // breed.appendChild(breedMessage);
    // breed.appendChild(breedStatus);

    breedsListHtml.append(breed);

    // breedMessage.innerText = data.message;
    // breedStatus.innerText = data.status;
  })
  .catch((error) => {
    console.log(error);
  });
  
