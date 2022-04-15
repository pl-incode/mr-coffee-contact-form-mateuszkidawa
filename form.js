const form = document.querySelector("form");
const btn =
  document.getElementById("submit");
const btn2 = document.getElementById("btn2");
const showModal =
  document.getElementById("modal");
const closingModal =
  document.getElementById("close");

function nameVer(data) {
  const pattern = /^[A-Za-z]*$/;
  //length && pattern
  if (
    data.length < 2 ||
    !pattern.test(data)
  ) {
    alert(`Wrong Prénom/Nom ${data} input`);
    return 0;
  } else {
    return 1;
  }
}
function phoneVer(data) {
  const pattern = /[0-9]{3}[0-9]{3}[0-9]{3}/;
  if (!pattern.test(data)) {
    alert(`Wrong Téléphone ${data} input`);
    return 0;
  } else {
    return 1;
  }
}
function mailVer(data) {
  const pattern =
    /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
  if (!pattern.test(data)) {
    alert(
      `Wrong Adresse mail ${data} input`
    );
    return 0;
  } else {
    return 1;
  }
}
function msgVar(data) {
  const pattern = /^[A-Za-z]*$/;
  if (!pattern.test(data)) {
    alert(`Wrong Message ${data} input`);
    return 0;
  }  else {
    return 1;
  }
}

function verification() {
  if (
    nameVer(form["user_name"].value) &&
    nameVer(form["user_surname"].value) &&
    phoneVer(form["user_phone"].value) &&
    mailVer(form["user_mail"].value) &&
    msgVar(form["user_msg"].value)
  ) {
    return 1;
  } else {
    return 0;
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = verification();
  console.log(value);
  if (value) {
    showModal.style.display = "block";
  }
  clearForm();
});
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  showModal.style.display = "none";
});

function clearForm() {
  form["user_name"].value = "";
  form["user_surname"].value = "";
  form["user_phone"].value = "";
  form["user_mail"].value = "";
  form["user_msg"].value = "";
}
