// import FONTS from "./fonts";

document.body.style.backgroundColor = "#eeeddd";
document.body.style.height = "100vh";
document.body.style.color = "333222";

document.body.style.display = "block";
document.body.style.textAlign = "center";
document.body.style.padding = "20px";
document.body.style.boxSizing = "border-box";

// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";

let body = document.getElementById("myBodyColor");
let text = document.getElementById("myTextColor");
let fontSize = document.getElementById("fontSize");

// let fontKey =  "AIzaSyDgNoyrN7gitBaOPYNdhRMSYbX5y8uzVaQ";

body.addEventListener("input", log);
text.addEventListener("input", log);
fontSize.addEventListener("input", log);

function log(e) {
  console.log(e.target.value);
  e.target.id === "myBodyColor"
    ? (document.body.style.backgroundColor = body.value)
    : (document.body.style.color = text.value);

  e.target.id === "fontSize"
    ? (document.body.style.fontSize = `${e.target.value / 16}rem`)
    : null;
}
