
let canvas=   document.querySelector('canvas')
let score = document.querySelector('.score');
let shift = document.querySelector('.shift');
console.log(shift.innerText);
let sum = 0;

let ctx=  canvas.getContext('2d')
let cell=50
let snekcell=[[0,0]]
let direction='right'
let gameOver=false

let n = 0;
 let id=  setInterval(()=>{
    // if(n%10 == 0){
    //   f = true;  
    // }
    // n++
    draw()
    update()
},200)

let f = false;
let xx = parseInt((Math.random() * 1750)/50)  * 50
let yy = parseInt((Math.random() * 750)/50)  * 50
function food(){

    xx = parseInt((Math.random() * 1700)/50)  * 50
    yy = parseInt((Math.random() * 700)/50)  * 50
    console.log(xx);
    console.log(yy);

    
    // ctx.fillStyle='black'
    // ctx.fillRect(xx,yy,50,50)
}



let manual_btn = document.querySelectorAll('#btn');

manual_btn.forEach(function(val,idx){
    val.addEventListener('click',()=>{
        if((val.value == 'Up' && direction != 'Down') || (val.value == 'Down' && direction != 'Up')
        || (val.value == 'Right' && direction != 'Left') || (val.value == 'Left' && direction != 'Right')){

            console.log(val.value);
            direction = val.value;
            shift.innerText = "/Shift " + val.value;
        }
    })
})



document.addEventListener('keydown',function(e){
    // console.log(e);
    if(e.key==='ArrowUp' && direction !== 'Down'){
        direction='Up'
        shift.innerText = "/Shift Up";
    }
    else if(e.key==='ArrowDown' && direction !== 'Up'){
        shift.innerText = "/Shift Down";
        direction='Down'
    }
    else if(e.key==='ArrowLeft' && direction !== 'Right'){
        shift.innerText = "/Shift Left";
        direction='Left'
    }
    else if(e.key === 'ArrowRight' && direction !== 'Left'){
        shift.innerText = "/Shift Right";
        direction='Right'
    }
    
})
function stopGame(){
    
let gameId = document.querySelector('.gameOver');
gameId.style.visibility = 'visible';

document.querySelector('canvas').style.backgroundColor = 'black';
clearInterval(id)

}
function draw(){

    // if(f ===false){
    //     food();
    //     f= true;
    // }
    if(gameOver){
        stopGame();
        return;
    }
    ctx.clearRect(0,0,1800,800)
    for(let i of snekcell){
        
    ctx.fillStyle='yellow'
    ctx.fillRect(xx,yy,50,50)
        ctx.fillStyle='red'
        if(f){
            sum ++;
            score.innerText = sum;
            food();
            f = false;
        }
        
        ctx.fillRect(i[0],i[1],cell,cell)
    }
    
    
}

draw()

function update(){
 let headX=   snekcell[snekcell.length-1][0]
     let headY=  snekcell[snekcell.length-1][1]
     let newX
     let newY

     if(direction==='Up'){
        newX=headX
        newY=headY-cell
        if(newY<0){
            gameOver=true
        }
     }
     else if( direction==='Left'){
        newX=headX-cell
        newY=headY
        if(newX<0){
            gameOver=true
        }
     }
     else if(direction==='Down'){
        newX=headX
        newY=headY+cell
        if(newY===800){
            gameOver=true
        }
     }
     else{
        newX=headX+cell
        newY=headY
        if(newX===1800){
            gameOver=true
        }
     }

     if(newX == xx && newY == yy){
        f = true;
     }
     else  {

         snekcell.shift()
     }

     snekcell.push([newX,newY])


}

let r = parseInt(Math.random()*10);
console.log(r);


// let xx = parseInt(Math.random() * 1700)
// let yy = parseInt(Math.random() * 700)
// console.log(xx);
// console.log(yy);

// ctx.fillRect(xx,yy,30,30)
// setInterval(()=>{
//     console.log('chalt rh');
// },10)




// let arr=[1,2,34,45]
// arr.push(50)
// console.log(arr);
// arr.shift()
// console.log(arr);