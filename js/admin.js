const adminSubmitForm = document.querySelector("#adminSubmitForm");
const admincssTextArea = adminSubmitForm.querySelector(".admincss__input");

const token = localStorage.getItem("token");

function getLocalData() {
  if (!token) {
    location = "/";
  }
}

getLocalData();

async function UrlData(evt) {
  evt.preventDefault();
  const data = await fetch(
    "https://unlimited-telecom-backend.herokuapp.com/data",
    {
      method: "POST",
      headers: {
        token: `${JSON.parse(localStorage.getItem("token"))}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: admincssTextArea.value,
      }),
    }
  );
  const content = await data.json();

  localStorage.setItem("data", JSON.stringify(content.data.data));
}

adminSubmitForm.addEventListener("submit", UrlData);
