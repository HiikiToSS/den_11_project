var isLight = true
var wallpaper = document.getElementsByTagName('body')

function turn_night_on(){
  if (isLight){
  wallpaper.style['background'] = "url('static/img/wallpaper_re.jpg')"
  isLight = false
}

else{
  wallpaper.style['background'] = "url('static/img/wallpaper.jpg')"
  isLight = true
}
}