let switchMode = document.getElementById("design_minimalism");

switchMode.onclick = function () {
  let theme = document.getElementById("theme");

  if(theme.getAttribute("href") == "static/main.css") {
    theme.href = "static/dark-mode.css";
  } else {
      theme.href = "static/main.css";
  }
}

