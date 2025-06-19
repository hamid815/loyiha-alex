document.querySelector(".show_header").addEventListener("click", () => {
  document.querySelector(".left").style.display = "none";
  document.querySelector(".show_header").style.display = "none";
  document.querySelector(".hide_header").style.display = "block";
});

document.querySelector(".hide_header").addEventListener("click", () => {
  document.querySelector(".left").style.display = "block";
  document.querySelector(".show_header").style.display = "block";
  document.querySelector(".hide_header").style.display = "none";
});

document.querySelector(".alll").addEventListener("click", () => {
  document.querySelector(".app1").style.display = "block";
  document.querySelector(".app2").style.display = "block";
  document.querySelector(".app3").style.display = "block";

  document.querySelector(".product1").style.display = "block";
  document.querySelector(".product2").style.display = "block";
  document.querySelector(".product3").style.display = "block";

  document.querySelector(".brand1").style.display = "block";
  document.querySelector(".brand2").style.display = "block";
  document.querySelector(".brand3").style.display = "block";

  document.querySelector(".book1").style.display = "block";
  document.querySelector(".book2").style.display = "block";
  document.querySelector(".book3").style.display = "block";
});

document.querySelector(".apps").addEventListener("click", () => {
  document.querySelector(".app1").style.display = "block";
  document.querySelector(".app2").style.display = "block";
  document.querySelector(".app3").style.display = "block";

  document.querySelector(".product1").style.display = "none";
  document.querySelector(".product2").style.display = "none";
  document.querySelector(".product3").style.display = "none";

  document.querySelector(".brand1").style.display = "none";
  document.querySelector(".brand2").style.display = "none";
  document.querySelector(".brand3").style.display = "none";

  document.querySelector(".book1").style.display = "none";
  document.querySelector(".book2").style.display = "none";
  document.querySelector(".book3").style.display = "none";
});
document.querySelector(".products").addEventListener("click", () => {
  document.querySelector(".product1").style.display = "block";
  document.querySelector(".product2").style.display = "block";
  document.querySelector(".product3").style.display = "block";

  document.querySelector(".app1").style.display = "none";
  document.querySelector(".app2").style.display = "none";
  document.querySelector(".app3").style.display = "none";

  document.querySelector(".brand1").style.display = "none";
  document.querySelector(".brand2").style.display = "none";
  document.querySelector(".brand3").style.display = "none";

  document.querySelector(".book1").style.display = "none";
  document.querySelector(".book2").style.display = "none";
  document.querySelector(".book3").style.display = "none";
});

document.querySelector(".brands").addEventListener("click", () => {
  document.querySelector(".product1").style.display = "none";
  document.querySelector(".product2").style.display = "none";
  document.querySelector(".product3").style.display = "none";

  document.querySelector(".app1").style.display = "none";
  document.querySelector(".app2").style.display = "none";
  document.querySelector(".app3").style.display = "none";

  document.querySelector(".brand1").style.display = "block";
  document.querySelector(".brand2").style.display = "block";
  document.querySelector(".brand3").style.display = "block";

  document.querySelector(".book1").style.display = "none";
  document.querySelector(".book2").style.display = "none";
  document.querySelector(".book3").style.display = "none";
});
document.querySelector(".books").addEventListener("click", () => {
  document.querySelector(".product1").style.display = "none";
  document.querySelector(".product2").style.display = "none";
  document.querySelector(".product3").style.display = "none";

  document.querySelector(".app1").style.display = "none";
  document.querySelector(".app2").style.display = "none";
  document.querySelector(".app3").style.display = "none";

  document.querySelector(".brand1").style.display = "none";
  document.querySelector(".brand2").style.display = "none";
  document.querySelector(".brand3").style.display = "none";

  document.querySelector(".book1").style.display = "block";
  document.querySelector(".book2").style.display = "block";
  document.querySelector(".book3").style.display = "block";
});
