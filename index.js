const button = document.querySelectorAll('button');
const display = document.querySelector('.calculator-display')

class Button{
    constructor(valor){
        this.valor = valor;
    }
    showInDisplay(){
        const p = document.createElement('p');
        p.textContent = this.valor;
        display.appendChild(p);
    }

    adding(a,b){
        this.deleting()
        const add = parseInt(a)+parseInt(b);
        const p = document.createElement('p');
        p.textContent = add;
        display.appendChild(p);
        click = 24;
    }
    subtracting(a,b){
        this.deleting()
        const subs = parseInt(a)-parseInt(b);
        const p = document.createElement('p');
        p.textContent = subs;
        display.appendChild(p);
        click = 24;
    }
    multiplying(a,b){
        this.deleting()
        const mult = parseInt(a)*parseInt(b);
        const p = document.createElement('p');
        p.textContent = mult;
        display.appendChild(p);
        click = 24;
    }
    dividing(a,b){
        this.deleting()
        const divi = parseInt(a)/parseInt(b);
        const p = document.createElement('p');
        p.textContent = divi;
        display.appendChild(p);
        click = 24;
    }
    deleting(){
        while (display.firstChild){
        display.removeChild(display.lastChild);
        }
        arr = []
    }
}

let click = 0;
let arr = [];
let counter = 0;
let counterTwo = 0;

button.forEach(btn => btn.addEventListener('click', (e) =>{
    click = click +1;
    const objectBtn = new Button(e.currentTarget.className);
    arr.push(e.currentTarget.className);
    objectBtn.showInDisplay();

   if (e.currentTarget.className==='+' || e.currentTarget.className==='-' || e.currentTarget.className==='/' || e.currentTarget.className==='*' ){
        counter = parseInt(counter)+1;
        counterTwo=0;
        if(counter > 1){
            alert(`Error you can't use two operators at the same time`);
            objectBtn.deleting();
            click = 0;
            counter = 0;
            arr= [];
        }
        console.log(counter)
    }

    if (e.currentTarget.className === 'c'){
        objectBtn.deleting()
        click = 0;
        counter=0;
    }
  
    else if(e.currentTarget.className === '='){
        counterTwo = parseInt(counterTwo) + 1;
        counter=0;
        if(counterTwo > 1){
         objectBtn.deleting();
         click = 0;
         arr= [];
         alert(`Error you can't equal one numer`);
        }
        for(const pos in arr){
            if(arr[pos] === '+'){
            let posicion = pos;
            let left = arr.splice(0,posicion);
            let rigth = arr.splice(1,arr.length-2);
            const l = left.join('');
            const r = rigth.join('');
            objectBtn.adding(l,r);
            }  
            else if(arr[pos] === '-'){
                let posicion = pos;
                let left = arr.splice(0,posicion);
                let rigth = arr.splice(1,arr.length-2);
                const l = left.join('');
                const r = rigth.join('');
                objectBtn.subtracting(l,r);
            }
            else if(arr[pos] === '*'){
                let posicion = pos;
                let left = arr.splice(0,posicion);
                let rigth = arr.splice(1,arr.length-2);
                const l = left.join('');
                const r = rigth.join('');
                objectBtn.multiplying(l,r);
            }
            else if(arr[pos] === '/'){
                let posicion = pos;
                let left = arr.splice(0,posicion);
                let rigth = arr.splice(1,arr.length-2);
                const l = left.join('');
                const r = rigth.join('');
                objectBtn.dividing(l,r);
            }
        }
    }

    if(click >= 25){
        while (display.firstChild){
            display.removeChild(display.lastChild);
        }
        click = 0;
        arr= [];
    }
}))


