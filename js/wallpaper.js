let nav_theme = document.getElementById("switch_nav")
let lang_theme = document.getElementById("switch_lang")
let about_theme = document.getElementById("switch_about")
let contacts_theme = document.getElementById("switch_contacts")
let langs_theme = document.getElementById("switch_langs")

let c_img = document.getElementById('c++')
let java_img  = document.getElementById('java')
let js_img = document.getElementById('js')
let kotlin_img = document.getElementById('kotlin')
let python_img = document.getElementById('python')
let swift_img = document.getElementById('swift')


setThemeOnLoad()

function turn_night_on(){
  if (localStorage.getItem('theme') == "true"){
    localStorage.setItem('theme', "false")
    setTheme1()
  }
  else{
    localStorage.setItem('theme', "true")
    setTheme2()
  }
   document.location.reload()
}

function setThemeOnLoad(){
  if (localStorage.getItem('theme') == "true"){
    setTheme1()
  }
  else{
    setTheme2()
  }
}

function setTheme1(){
  nav_theme.href = '../static/dark-theme/navigation-dark.css'
  lang_theme.href = '../static/dark-theme/dark-language.css'

}

function setTheme2(){
  nav_theme.href = '../static/navigation.css'
  lang_theme.href = '../static/language.css'

}