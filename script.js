// create in 4 digit code number But it will give also 3, 2, 1 digit
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

// create function only show 4 digit code
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}

document.getElementById('generate-btn').addEventListener('click', function(){
    const input = document.getElementById('display-input');
    input.value = getPin();
})

// the right  side start
document.getElementById('calculetor').addEventListener('click', function(event){
    const number = event.target.innerText;
    const inputField = document.getElementById('show-text');
    const previousTypeNumber = inputField.value;
    if(isNaN(number)){
        if(number === 'C'){
            inputField.value = '';
        }else if(number === '<'){
           const digits = previousTypeNumber.split('');
           digits.pop();
           const remainingDigits = digits.join('');
           inputField.value =remainingDigits;
        }
    }else{
        const newTypeNumber = previousTypeNumber + number;
        inputField.value = newTypeNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function(){
    const pinCode = document.getElementById('display-input');
    const pinCodeValue = pinCode.value;

    const typeNumber = document.getElementById('show-text');
    const typeNumberValue = typeNumber.value;

    const correctText = document.getElementById('correct');
    const incorrectText = document.getElementById('incorrect');

    if(pinCodeValue === typeNumberValue){
        correctText.style.display = 'block';
        incorrectText.style.display = 'none';
    }else{
        
        incorrectText.style.display = 'block';
        correctText.style.display = 'none';
    }

    pinCode.value = '';
    typeNumber.value = '';
    
})