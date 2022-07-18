let switchMode = document.getElementById("design_minimalism");

switchMode.onclick = function () {
  let theme = document.getElementById("theme");

  if(theme.getAttribute("href") == "static/main.css") {
    theme.href = "static/dark-theme/dark-mode.css";
  } else {
      theme.href = "static/main.css";
  }
}

function openMenu(){
  document.getElementById("sidebar").classList.toggle('active');}