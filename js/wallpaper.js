let is = true

function turn_night_on(){
  let nav_theme = document.getElementById("switch_nav")
  let lang_theme = document.getElementById("switch_lang");
  if (is){
    nav_theme.href = '../static/dark-theme/navigation-dark.css'
    lang_theme.href = "../static/dark-theme/dark-language.css"
    is = false
  }
  else{
    nav_theme.href = '../static/navigation.css'
    lang_theme.href = "../static/language.css"
    is = true
  }

  //$('#styles').attr("href", "s.css")
}