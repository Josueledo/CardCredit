let nameinput = document.getElementById("name");
cvv.oninput = changeCvv;
number.oninput = changeNumber;
nameinput.oninput = changeName;
valid.oninput = changeValid;

function changeValid() {
  const limiteCaracteres = 5;
  validcard.innerHTML = this.value;

  if (validcard.innerHTML.length >= limiteCaracteres) {
    valid.value = validcard.innerHTML.slice(0, limiteCaracteres);
    validcard.innerHTML = validcard.innerHTML.slice(0, limiteCaracteres);
  }
  if (valid.value.length == 2) {
    valid.value = valid.value + "/";
  }
}

function changeCvv() {
  const limiteCaracteres = 3;
  let cvvcard = document.querySelector(".cvv-card");
  cvvcard.innerHTML = this.value;
  if (cvvcard.innerHTML.length >= limiteCaracteres) {
    cvv.value = cvvcard.innerHTML.slice(0, limiteCaracteres);
    cvvcard.innerHTML = cvvcard.innerHTML.slice(0, limiteCaracteres);
  }
}

function changeName() {
  let nameCard = document.querySelector(".name-card");
  nameCard.innerHTML = this.value;
}
function changeNumber() {
  let numberCard = document.querySelector(".number-card");
  numberCard.innerHTML = this.value;
  const limiteCaracteres = 19;
  if (numberCard.innerHTML.length >= limiteCaracteres) {
    number.value = numberCard.innerHTML.slice(0, limiteCaracteres);
    numberCard.innerHTML = numberCard.innerHTML.slice(0, limiteCaracteres);
  }
  if (
    number.value.length == 4 ||
    number.value.length == 9 ||
    number.value.length == 14
  ) {
    number.value = number.value + " ";
  }
}

function send() {
  event.preventDefault();
  if (
    valid.value != "" &&
    nameinput.value != "" &&
    number.value != "" &&
    cvv.value != ""
  ) {
    let toast = document.querySelector("#success");
    toast.style.animation = "toast 6s ease";
  }
  else{
    let toast = document.querySelector("#warning");
    toast.style.animation = "toast 6s ease";
    console.log("Preencha todos os campos");
  }
  // window.location.reload()
}
