const card = document.querySelector(".elewen");
const cardone = document.querySelector(".one");
const cardtwo = document.querySelector(".two");
const cardthree = document.querySelector(".three");
const cardfour = document.querySelector(".four");
const cardfifte = document.querySelector(".fifte");
const cardsex = document.querySelector(".sex");
const submitForm = document.querySelector(".submitbtn");
const loginInput = submitForm.querySelector(".email");
const loginPassword = submitForm.querySelector(".password");

let Text = document.getElementById("text");
let modal = document.getElementById("modal");
let modalCloseBtn = document.getElementById("modalCloseBtn");

async function UrlData(evt) {
  evt.preventDefault();
  const url = await fetch(
    "https://unlimited-telecom-backend.herokuapp.com/login",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginInput.value,
        password: loginPassword.value,
      }),
    }
  );
  const content = await url.json();

  localStorage.setItem("token", JSON.stringify(content.token));
  modalCloseBtn.addEventListener("click", () => {
    console.log("OK");
    modal.style.display = "none";
  });

  content.token ? (location = "/pages/admin.html") : "/";
}

//modal message
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const localText = localStorage.getItem("data");

window.addEventListener("load", async () => {
  try {
    const res = await fetch(
      "https://unlimited-telecom-backend.herokuapp.com/data"
    );

    const { data } = await res.json();

    if (data) {
      modal.style.display = "flex";

      Text.textContent = data.data;
    }
  } catch (error) {
    modal.style.display = "none";
  }
});

modalCloseBtn.addEventListener("click", clearStorages);
function clearStorages() {
  localStorage.clear(localText);
}

//modal message end

submitForm.addEventListener("submit", UrlData);

function toggle(el) {
  el.addEventListener("click", function (e) {
    el.classList.toggle("is-flipped");
  });
}

[card, cardone, cardtwo, cardthree, cardfour, cardfifte, cardsex].map((e) =>
  toggle(e)
);
