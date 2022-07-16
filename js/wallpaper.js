var isLight = true

function turn_night_on(){
var wallpaper = document.getElementById('body_change')
if (isLight){
  wallpaper.classList.add("body_2")
  wallpaper.classList.remove("body_1")
  isLight = false
}

else{
  wallpaper.classList.add("body_1")
  wallpaper.classList.remove("body_2")
  isLight = true
}
}