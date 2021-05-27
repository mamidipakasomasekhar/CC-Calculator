const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const clearAll = document.querySelector('.all-clear');
const clearlast = document.querySelector('.last-entity-clear');
const tempResult = document.querySelector('.temp-result');
const numbers = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');

var num1 = '';
var num2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbers.forEach( number => {
    number.addEventListener('click',(e)=>{
   if(e.target.innerText == '.' && !haveDot ){
    haveDot = true;

   } else if (e.target.innerText == '.' && haveDot){
   return;

   }
   num2 += e.target.innerText;
   display2.innerText = num2;

    })

    
});

operation.forEach(operation => {
 operation.addEventListener('click',(e)=> {
 if(!num2) return;
 haveDot =false;
 const operationName = e.target.innerText; 
 if(num1 && num2 && lastOperation){
 mathOperation();


 }
 else{
     result = parseFloat(num2);
    }
    clearVar(operationName);
    lastOperation = operationName;

 })
})

function clearVar( name = " "){
 num1 += num2+" "+name + " ";
 display1.innerText = num1;
 display2.innerText = ' ';
 num2 ='';
 tempResult.innerText = result;
}

function mathOperation(){
 if(lastOperation ==='x'){

    result = parseFloat(result) *  parseFloat(num2);
 }
 else if ( lastOperation ==='+'){
     result = parseFloat(result) + parseFloat(num2); 
 }
 else if ( lastOperation ==='-'){
    result = parseFloat(result) - parseFloat(num2); 
}
else if ( lastOperation ==='/'){
    result = parseFloat(result) / parseFloat(num2); 
}
else if ( lastOperation ==='%'){
    result = parseFloat(result) % parseFloat(num2); 
}
else if( lastOperation ==='**'){
    result = parseFloat(result) ** parseFloat(num2);
}
}

equal.addEventListener('click',(e) => {

if(!num1 ||  !num2) return;
haveDot = false;
mathOperation();
clearVar();
display2.innerText =  result;
tempResult.innerText = '';
num2 = '';

})

clearAll.addEventListener('click',(e) => {
 display1.innerText = '0';
 display2.innerText = '0';
 num1 = '';
 num2 = '';
 result = '';

})

clearlast.addEventListener('click', (e) => {

    display2.innerText = '';
    num2 = '';
})
