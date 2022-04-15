const body = document.createElement ("body");
const card = document.createElement("div");
const input = document.createElement ("input");
card.classList.add("card");
input.classList.add("input");
document.body.appendChild(card)
card.appendChild(input);

const container = document.createElement("div");
container.classList.add("container");
const h1 = document.createElement("h1");
const textH1 = document.createTextNode ("Personalice su contraseña")
h1.classList.add("title");
h1.appendChild(textH1);
card.appendChild(container);
container.appendChild(h1);

const form = document.createElement ("form")
container.appendChild(form);
form.classList.add("form");

const unaFuncion = (title, tipoInput, items, key) => {

    const fieldset = document.createElement('fieldset');
    fieldset.classList.add ("box");
    const subtitle = document.createElement("h2")
    const textsub = document.createTextNode (title)
    subtitle.classList.add("subtitle")
    subtitle.appendChild(textsub)
    fieldset.appendChild(subtitle)

    for(const elem of items) {
    
        const label = document.createElement("label")
        label.classList.add("label")
        label.setAttribute ("for", `check-${elem}`)
        label.textContent = `${elem}`
      
        const input = document.createElement('input')
        input.setAttribute("type", tipoInput)       
        input.setAttribute("id", `check-${elem}`)
        input.setAttribute("name", `${key}-control`) 
        input.setAttribute("value", `${elem}`)

        input.addEventListener('change', (e) => {
            //generatePassword(e.target.value);
            console.log(e.target.value)
        })

        const container = document.createElement("div");
        container.appendChild(input)
        container.appendChild(label)

        fieldset.appendChild(container)
     }

    form.appendChild(fieldset);
}


const car = {
    numeros : '0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9',
    simbolos : '! @ $ % & * ! @ $ % & * ! @ $ % & * ! @ $ % & *',
    mayusculas:'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    minusculas :'a b c d e f g h i j k l m n o p q r s t u v w x y z'
  }
  const config = {
    caracteres: parseInt(input.value),
    numeros: true,
    simbolos: true,
    mayusculas: true,
    minusculas: true
  }
  
  input.addEventListener('click', (e) =>function generarPassword(car, config){
    
  
    
        let caracteresFinales = '';
            let password = '';
        
        let elem = config[i]
        let elem2 = car[i]
        
        for(elem in config){
          if (config[elem] == true){
            caracteresFinales += car[elem2] + ' ';
          }
  
        
        caracteresFinales = caracteresFinales.trim();
        caracteresFinales = caracteresFinales.split(' ');
        for(var i = 0; i < config[car]; i++){
          password += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
          }
    }
    
  })


const long = [12, 9, 6]; //to do
const reglas = ["Solo letras", "Lectura simple", "Todos los caracteres"] 
const caracteres = ["Mayúsculas", "Minúsculas", "Números", "Símbolos"]

unaFuncion("Longitud", 'radio', long, 'long')
unaFuncion("Reglas",'radio', reglas, 'rules')  
unaFuncion("Caracteres",'checkbox', caracteres, 'chars')


// poner la palabra carateres despues de los numeros
//subtitulo para cADA BLOQUE
//disabel
//llamar la funcion generar contraseña en el input
// refresh
// copiar


