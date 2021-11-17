const canvas = document.querySelector('canvas')
canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext('2d')
class Main {
    constructor(x, y, width, height, image, velocity){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = image
        this.velocity = velocity
    }
    draw(){
         c.drawImage(this.image, this.x, this.y, this.width, this.height)
         
       }
       loadImage(){
           const newImage = new Image()
           newImage.src = this.image
           newImage.addEventListener('load', ( ) => {
               this.image = newImage
               this.draw()

           }) }
}

class Player extends Main {
  constructor(){
    super(canvas.width/2 -20, canvas.height/2, 50, 50, "/SpaceShips/slice3.png", null)
    this.projectiles = []
  }}
const player = new Player()
async function playerLoadImage(){
  await player.loadImage()
}

class Projectile extends Main {
  constructor(){
    super(player.x + 20, player.y, 10, 10, './SpaceShips/fireball.png', null)
  }
  draw(){
    c.drawImage(projectile.image, this.x, this.y--, this.width, this.height)}
}
const projectile = new Projectile()
async function projectileLoadImage(){
  await projectile.loadImage()
}

class Enemy extends Main {
  constructor(x, y, width, height, image, velocity){
    super(x, y, width, height, image, velocity)
  this.enemyArray = []
  };
    
    draw(){
      c.drawImage(this.image, this.x, this.y, this.width, this.height)}
      
  }
  


const enemyImageArray = [{link: "./SpaceShips/slice2.png", width: 40, height: 40},
                    {link: "./SpaceShips/slice4.png", width: 50, height: 50},
                    {link: "./SpaceShips/slice5.png", width: 50, height: 50},
                    {link: "./SpaceShips/slice7.png", width: 30, height: 30},
                    {link: "./SpaceShips/slice8.png", width: 45, height: 45}];




addEventListener('keydown', (e)=>{
    
  switch(e.code){
case 'ArrowUp':
  player.y -=10;
  break;
case 'ArrowDown':
  player.y +=10;
  break;
case 'ArrowLeft':
  player.x -=10;
  break;
case 'ArrowRight':
  player.x +=10;
  break;  
case 'Enter':
  // projectile.y -= 5;
  // bullet
  player.projectiles.push(new Projectile())
  break;
}
})

let enemyArray = [];
function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  
  
  // REDRAWS SHIP AND INDIVIDUAL PROJECTILES
  player.draw(player.y)
  // (player.y)
  for (let i = 0; i < enemyArray.length; i++) {
    this.enemyArray += enemyImageArray[i]
  
  }
  
   
  
  // LOOPS EACH PROJECTILE AND 
  for(let projectile of player.projectiles){
  projectile.draw(player.y)
  }
 
}

async function startGame (){
 await playerLoadImage()
 // addEventListener here
 await projectileLoadImage()
}

startGame()
animate()
generateEnemies(enemies)
flyingEnemies(enemies)