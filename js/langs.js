let langs_theme = document.getElementById("switch_langs")


/*let c_img = document.getElementById('c_')
let java_img  = document.getElementById('java')
let js_img = document.getElementById('js')
let kotlin_img = document.getElementById('kotlin')
let python_img = document.getElementById('python')
let swift_img = document.getElementById('swift')*/


if (localStorage.getItem('theme') == "true"){
  langs_theme.href = '../static/dark-theme/dark-langs.css'
}

else{
  langs_theme.href = '../static/langs.css'
}

/*сделай изменение фото по агрементам передаваемым в функию (цикл по колву элементов, давно же такого не было, ностальгия по питошке))*/