window.onload = () => {
  
  let body = document.body
  body.style.backgroundColor = 'green'
  body.style.height='100vh'
  body.style.display='flex'
  body.style.justifyContent='center'
  body.style.alignItems='center' 

  let card= document.querySelector('#main')
  card.style.border='1px solid black'
  card.style.height='500px'
  card.style.width='350px'
  card.style.borderRadius='40px'
  card.style.backgroundColor='white'
  card.style.padding= '10px'

  let generateRandomNum =()=> {
    let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",];
    let numb = Math.floor(Math.random()* num.length)
    return num[numb]
  }

  let generateRandomFigure =()=> {
    let figure = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
    let isfigure = Math.floor(Math.random()* figure.length)
    return figure[isfigure]
  }
  
  let randomIcon= generateRandomFigure()
  let iconColor= randomIcon=== '&hearts;'? 'red': 'black';

  let containerIcon = document.createElement('div')
  containerIcon.innerHTML= randomIcon  
  containerIcon.style.bottom= '20px'
  containerIcon.style.right= '20px'
  containerIcon.style.float= 'left'
  containerIcon.style.fontSize= '100px'
  containerIcon.style.color=iconColor
  

  let containerNumber= document.createElement('p')
  containerNumber.innerHTML= generateRandomNum()
  containerNumber.style.fontSize= '120px'
  containerNumber.style.alignItems='center'
  containerNumber.style.justifyContent='center'
  containerNumber.style.display='flex'
  containerNumber.style.paddingTop= '50px'
 

  let containerIcon2 = document.createElement('div')
  containerIcon2.innerHTML= randomIcon  
  containerIcon2.style.position= 'absolute'
  containerIcon2.style.bottom= '100px'
  containerIcon2.style.right= '600px'
  containerIcon2.style.float= 'left'
  containerIcon2.style.fontSize= '100px'
  containerIcon2.style.color=iconColor

  card.appendChild(containerIcon)
  card.appendChild(containerNumber)
  card.appendChild(containerIcon2) 
    
}