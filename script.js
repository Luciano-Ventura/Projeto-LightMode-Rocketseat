function toogleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector('#profile img')

  //substituir a imagem
  if(html.classList.contains('light')) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute('src', './assets/assets/avatar-light.png')
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óclos de sole jaqueta preta")
  }
  else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute('src', './assets/assets/avatar.png')
  }
}