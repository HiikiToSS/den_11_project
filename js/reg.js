var reg_button = document.getElementsByClassName('hide_reg')
var isShow = true

function show_log_(){
  var log_button = document.getElementsByClassName('cont_for_log')
  if (isShow){
    log_button.style['display'] = 'flex'
    isShow = false
  }
  else{
    log_button.style['display'] = 'none'
    isShow = true
  }
}