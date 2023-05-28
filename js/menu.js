window.onscroll = () => {
  if(document.documentElement.scrollTop > 0){
    $(".nav").addClass('nav-bg')
  }else{
    $(".nav").removeClass('nav-bg')
  }
}
