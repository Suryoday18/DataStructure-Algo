function One(){
    funcTwo()
    console.log('One');   
}

function funcTwo(){
    funcThree()
    console.log('Two');
}

function funcThree(){
    console.log('Three');
}