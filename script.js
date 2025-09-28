let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight


// c.translate(100,100) // برای جابجایی نقطه شروع 


//c.font = "30px nameFont" // برای سایز نوشته و فونت حتما یاسد قبل از تکست باشه . 
//c.fillText= "for example"  //میتوان درونش متن هم اضافه کرد

let c = canvas.getContext("2d")


// c.fillStyle="#27ae60"
// c.fillRect(100,0,100,100)






// c.beginPath()
// c.lineTo(50,300)
// c.lineTo(300,100)
// c.lineTo(400,300)
// c.stroke()
//c.fill() تو پر شکل را رسم میکنه





//  for (let i = 0; i<500 ; i++){
//     x = Math.random() * window.innerWidth
//     y = Math.random() * window.innerHeight
//     c.beginPath()
//     c.arc(x ,y ,50 , 0 , 2*Math.PI)
//     c.stroke()
// }





/*let x = 100
let y = 100
let r = 50
let vx = 10
let vy = 10
function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight)
    c.beginPath()
    c.arc(x,y,r,0,2 * Math.PI)
    c.fill()
    if (x + r > window.innerWidth || x - r < 0 ) {
        vx = -vx
    }
    if (y + r > window.innerHeight || y - r < 0 ) {
        vy = -vy
    }
    x+=vx
    y+=vy

    requestAnimationFrame(animate)
}

animate()*/







class Ball{
    constructor(x,y) {
        this.r = 20   
        this.x = x || randomIntFromInterval (0+this.r,window.innerWidth-this.r)
        this.y = y || randomIntFromInterval (0+this.r,window.innerHeight-this.r)
        this.vx = (Math.random() - 0.5)* 4
        this.vy = (Math.random() - 0.5)* 4
        this.draw()
    }


    draw(){
        c.beginPath()
        c.arc(this.x,this.y, this.r, 0, 2 * Math.PI)
        c.fillStyle = "red"
        c.fill()
    }


    update(){
        if(this.x+this.r > window.innerWidth || this.x-this.r < 0){
            this.vx = -this.vx
        }
        if(this.y+this.r> window.innerHeight || this.y-this.r < 0){
            this.vy = -this.vy
        }

        this.x += this.vx
        this.y += this.vy
        this.draw()
    }
}

let balls = []
for(let i = 0 ; i < 0 ; i++){
    balls.push(new Ball())
}

function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight)
    balls.forEach(ball=>{
        ball.update()
    })
    requestAnimationFrame(animate);
}

window.addEventListener("click" , function(e){
    balls.push(new Ball(e.clientX, e.clientY))
})

window.addEventListener("resize" , function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
animate()


function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}




