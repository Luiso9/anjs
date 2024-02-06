const tebakButton = document.getElementById("tebakButton");
const message = document.getElementById("message");

let angkaBenar = Math.floor(Math.random() * 10) + 1;
let nyawa = 3;

tebakButton.addEventListener("click", function() {
  let tebakanUser = parseInt(prompt("Tebak angka antara 1 sampai 10"));

  if (nyawa > 1) {
    if (tebakanUser === angkaBenar) {
      message.textContent = `Selamat! ${angkaBenar} menjadi angka mu`;
      tebakButton.disabled = true;
    } else if (tebakanUser > angkaBenar) {
      message.textContent = `Salah \n ${nyawa - 1} nyawa tersisa`;
    } else if (tebakanUser < angkaBenar) {
      message.textContent = `Salah!!!!! \n ${nyawa - 1} nyawa tersisa~`;
    }
  } else {
    message.textContent = `Anda gagal! \n Angka yang benar adalah ${angkaBenar}`;
    tebakButton.disabled = true;
  }

  nyawa--;
});