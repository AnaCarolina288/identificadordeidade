alert('Seja bem-vindo(a)')

function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     res.innerHTML = `Idade calculada: ${idade}` 
     var gênero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebemenino.jpg')
       } else if (idade >= 10  && idade <= 21) {
            img.setAttribute('src', 'jovemmenino.jpg')
       } else if (idade < 50) {
            img.setAttribute('src', 'fotohomem.jpg')
       } else {
            img.setAttribute('src', 'idosohomem.jpg')
       }
     } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebemenina.jpg')
        } else if (idade >= 10  && idade <= 21) {
            img.setAttribute('src', 'jovemmenina.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'fotomulher.jpg')
        } else {
            img.setAttribute('src', 'idosamulher.jpg')
        }
     } 
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
     res.appendChild(img)
  }
}