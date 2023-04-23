
let btns = document.querySelectorAll('.calculator__button');
let numbers = document.querySelectorAll('.num');
let screenResult = document.querySelector('.calculator__screen');

let resultShowed = false;
let myErrorMsg = '<span style="color:red">Error</span>';
let myNumbers = '0123456789';
let mySigns = '+-*/';

for(let btn of btns) {
    btn.addEventListener('click', (event) => {

        try {

            if (btn.innerText === 'C') {
                screenResult.innerText = '0';
            } else {

                if (  myNumbers.includes(btn.innerText)  ) {
                    if (screenResult.innerText === 'Error') {
                        screenResult.innerText = '0'
                    }
                    if (screenResult.innerText === '0') {
                        screenResult.innerText = btn.innerText;
                    } else {
                        screenResult.innerText += btn.innerText;
                    }
                }
                
                if (  mySigns.includes(btn.innerText)  ) {

                    if (screenResult.innerText === 'Error') {
                        screenResult.innerText = btn.innerText;
                    }

                    if (  screenResult.innerText !== '0'  ) {
                    
                        if (  mySigns.includes(screenResult.innerText.at(-1))  ) {
                            screenResult.innerText = screenResult.innerText.slice(0, screenResult.innerText.length-1) + btn.innerText + '';
                        } else {
                            screenResult.innerText += btn.innerText;
                        }
                    } else {
                        screenResult.innerText += btn.innerText;
                    }
                    
                }

                if (   btn.innerText === '='  ) {
                    for (letter of screenResult.innerText) {
                        if (  !((myNumbers + mySigns).includes(letter))  ) {
                            throw Error;
                        } else {
                            screenResult.innerText = eval(screenResult.innerText);
                        }
                    }
                }
                

            }
 
        } catch {
            screenResult.innerHTML = myErrorMsg;
        }


    });
}