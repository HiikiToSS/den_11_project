let hidden = document.getElementById('turn_d_n_theme')
is = true

function show_theme(){
  if (is){
    hidden.style['display'] = 'static'
    is = false
  }
  else{
    hidden.style['display'] = 'none'
    is = true 
  }
}