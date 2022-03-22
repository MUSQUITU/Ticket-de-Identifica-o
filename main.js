const linksSocilMidia = {
  github: "MUSQUITU",
  instagram: "camis.js",
  twitter: "CamilaComCafe",
  linkedin:"camila-almeida-teixeira",
  facebook: "camilaalmeida.teixeira.1"
}

function changeSocialMidia () {
  for(let li of socialLinks.children){
    const social = li.getAttribute('class') // * recebendo os atributos de class
   
    li.children[0].href = `https://${social}.com/${linksSocilMidia[social]}`
    
  }
}

changeSocialMidia()

function getGitHubProfileInfos () {
  const url =`https://api.github.com/users/${linksSocilMidia.github}`

  fetch(url)
  .then(response => response.json()) // * armazena url em json
  .then(data => {
    userName.textContent = data.name
    bio.textContent = data.bio
    userGitHub.href = data.html_url
    imgGitHub.src = data.avatar_url
  })
}

getGitHubProfileInfos()