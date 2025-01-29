function appendValue(value){
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = ''; 
}

function calculate(){
    const display = document.getElementById('display');
    let expression = display.value;


    //Introduce faulty behaviour - randomly give wrong answers 
    const isFaulty = Math.random() < 0.1; //10% chance of wrong answer

    try{
        let result = eval(expression);
        if(isFaulty){
            //change result slightly to produce wrong answer
            result+=Map.floor(Math.random()*10)-5;
        }

        display.value = result;
    }
    catch(error){
        display.value = 'Error';
    }
}