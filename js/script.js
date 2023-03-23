let title = document.getElementsByClassName("headtitle")[0],
  boxBtn = document.getElementById("btn"),
  nava = document.getElementsByTagName("a")[0],
  text = document.querySelector("#text"),
  button = document.querySelectorAll("button"),
  retseptBtn = document.querySelector(".btn5"),
  thems = document.querySelector(".thems"),
  i = thems.querySelectorAll("i");
console.log(i), (body = document.querySelector("body"));
i[1].addEventListener("click", () => {
  i[0].style.display = "block";
  i[1].style.display = "none";
  body.classList.add("transition");
  body.style.background = "black";
  body.style.color = "white";
});
i[0].addEventListener("click", () => {
  i[0].style.display = "none";
  i[1].style.display = "block";
  body.style.background = "white";
  body.style.color = "";
});
console.log(thems);
console.log(title);
console.log(boxBtn);
console.log(nava);
console.log(text);
console.log(button);

title.style.color = "green";
boxBtn.style.background = "limegreen";
boxBtn.style.borderRadius = "20px";
// boxBtn.style.fontStyle = "italic";
// boxBtn.style.fontWeight = "100";

let nav = document.querySelector("nav");
console.log(nav);
let a = nav.querySelectorAll("a");
console.log(a);

button.forEach((item) => {
  item.style.borderRadius = "20px";
  item.style.fontStyle = "italic";
  // item.style.fontWeight = "100";
});

const newA = document.createElement("a");
newA.innerHTML = "<i>Qo'shimcha</i>";
nav.appendChild(newA);

retseptBtn.addEventListener("click", function () {
  alert(
    "Retseplarni bilishingiz uchun siz dasturga email pochtangizni kiritishingiz lozim!📧"
  );
});
