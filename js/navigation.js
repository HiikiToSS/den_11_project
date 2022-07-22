let nav_theme = document.getElementById("switch_nav")

if (localStorage.getItem('theme') == "true"){
  nav_theme.href = '../static/dark-theme/navigation-dark.css'
}

else{
  nav_theme.href = '../static/navigation.css'
}