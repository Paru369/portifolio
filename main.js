
window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){

  showNavOnScroll()
  showBackToTopButton()

  
  activateMenu(home)
  activateMenu(services)
  activateMenu(about)
  activateMenu(contact)


}


function activateMenu(section){

  const targetLine = scrollY + innerHeight /2

  // Verificando se o top passou da linha 

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // Verificando se a base esta abaixo da linha 
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da sessao
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  //pegando o ID da sessão
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


  // colocando a classe ativa
  
    menuElement.classList.remove('active')
    if (sectionBoundaries){
    console.log(menuElement)

    menuElement.classList.add('active')


}




}


  
function showNavOnScroll(){
  (scrollY > 30) ? navigation.classList.add('scroll') : navigation.classList.remove('scroll')
}

function showBackToTopButton(){
  
  (scrollY > 400) ?  backToTopButton.classList.add('show') : backToTopButton.classList.remove('show')


}

function openMenu() {

  document.body.classList.add('menu-expended')

}

function closeMenu() {

  document.body.classList.remove('menu-expended')

}

ScrollReveal({
  origin:'top',
  distance: '130px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats,
#services,
#services .card,
#about,
#about header,
#about content`);