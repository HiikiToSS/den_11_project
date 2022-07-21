let nav_theme = document.getElementById("switch_nav")
let lang_theme = document.getElementById("switch_lang")
let about_theme = document.getElementById("switch_about")
let contacts_theme = document.getElementById("switch_contacts")
let langs_theme = document.getElementById("switch_langs")

let c_img = document.getElementById('c_')
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
  if(about_theme){about_theme.href = '../static/dark-theme/dark-about.css'}
  if(contacts_theme){contacts_theme.href = '../static/dark-theme/dark-contacts.css'}
  if(langs_theme){langs_theme.href = '../static/dark-theme/dark-langs.css'}
  
  if(c_img){c_img.src = "../static/img/hi/_c++.png"}
  if(swift_img){swift_img.src = "../static/img/hi/_swift.png"}
  if(kotlin_img){kotlin_img.src = "../static/img/hi/_kotlin.png"}
  if(java_img){java_img.src = "../static/img/hi/_java.png"}
  if(js_img){js_img.src = "../static/img/hi/_js.png"}
  if(python_img){python_img.src = "../static/img/hi/_python.png"}
  
  nav_theme.href = '../static/dark-theme/navigation-dark.css'
  lang_theme.href = '../static/dark-theme/dark-language.css'
}

function setTheme2(){
  nav_theme.href = '../static/navigation.css'
  lang_theme.href = '../static/language.css'
  if(about_theme){about_theme.href = '../static/about.css'}
  if(langs_theme){langs_theme.href = '../static/langs.css'}
  if(contacts_theme){contacts_theme.href = '../static/contacts.css'}

  if(c_img){c_img.src = "../static/img/hi/l_c++.png"}
  if(swift_img){swift_img.src = "../static/img/hi/l_swift.png"}
  if(kotlin_img){kotlin_img.src = "../static/img/hi/l_kotlin.png"}
  if(java_img){java_img.src = "../static/img/hi/l_js.png"}
  if(js_img){js_img.src = "../static/img/hi/l_c++.png"}
  if(python_img){python_img.src = "../static/img/hi/l_python.png"}
}