//console.log("ola");

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
//console.log(buttons);

buttons.map(button => {
    button.addEventListener('click',(e) => {    //para ler os números com o click
        /*console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);*/
        switch(e.target.innerText){     //switch case para o display
            case 'C':
                display.innerText= '';  //C apaga tudo
                break;
            case '←':
                if (display.innerText="ERRO")  
                {//← função slice (0,-1) apaga o último
                   // display.innerText= display.innerText.slice(0,-1);
                   display.innerText='';
                }
                else if (display.innerText)
                {
                    display.innerText= display.innerText.slice(0,-1);
                    
                }
                break;
            case '=':
                try{//try e catch para quando user escreve formula com erro (ex:*9*8)
                display.innerText=eval(display.innerText);
                } catch{
                    display.innerText="ERRO";
                }
                break;
            default:
                display.innerText+=e.target.innerText;
        }
    })
})