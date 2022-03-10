// utilizei a API -> https://api.github.com/users/yurifmorais
const LinksSoialMedia = {
  github: 'yurifmorais',
  youtube: '',
  twitter: 'yurifmorais0193',
  instagram: 'yuri_moraisf',
  facebook: ''
}

function changeSocialMediaLinks() {
  //para acessar uma id pelo DOM e alterar com o js
  userName.textContent = 'test'

  //nesse laco eu acesso os dados do id socialLinks que é uma lista, utilizando DOM
  for (let li of socialLinks.children) {
    //aqui eu pego o nome de cada rede social que defini com classes:
    const social = li.getAttribute('class')
    // [0] pois é para pegar o primeiro filho, ou seja, o link e nao a imagem
    li.children[0].href = `https://www.${social}.com/${LinksSoialMedia[social]}`
    //LinksSoialMedia[social] => vou no objeto e busco a rede social pela classe,
    //e entao pego o username dela
  }
}

function getGitHubProfileInfos() {
  // fetch vai em um url e pega a resposta
  // se o fetch funcionar corretamente, ele executa a promise then
  const url = `https://api.github.com/users/${LinksSoialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      description.textContent = data.bio
      userGitHub.href = data.html_url
      photo.src = data.avatar_url
      userGH.textContent = data.login
    })
  // fetch(url).then((response)=>{response.json}) é igual
  // transformei a response enviada pelo
  // fetch em um json
}
changeSocialMediaLinks()
getGitHubProfileInfos()
