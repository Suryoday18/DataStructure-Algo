It is require a return statement in case of recursion

function openGiftBox(){
    if(isBall) return ball
    openGiftBox()
}

function openGiftBox(){
    if(isBall){
        console.log('got the ball') -> in this case infinte loop and we got stack overflow
    }
    openGiftBox()
}