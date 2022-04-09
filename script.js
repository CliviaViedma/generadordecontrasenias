const body = document.createElement ("body");
const card = document.createElement("div");
const input = document.createElement ("input");
card.classList.add("card");
input.classList.add("input");
document.body.appendChild(card)
card.appendChild(input);

const contenedor = document.createElement("div");
contenedor.classList.add("contenedor");
const h1 = document.createElement("h1");
const textH1 = document.createTextNode ("Personalice su contraseña")
h1.classList.add("titulo");
h1.appendChild(textH1);
card.appendChild(contenedor);
contenedor.appendChild(h1);

const form = document.createElement ("form")
contenedor.appendChild(form);
form.classList.add("form");

const unaFuncion = (tipoInput, items, key) => {

    const fieldset = document.createElement('fieldset');

    for(const elem of items) {
        const label = document.createElement("label")
        label.setAttribute ("for", `check-${elem}`)
        label.textContent = `${elem}`
        label.classList.add("label")
    
        const input = document.createElement('input')
        input.setAttribute("type", tipoInput)       
        input.setAttribute("id", `check-${elem}`)
        input.setAttribute("name", `${key}-control`) 
        input.setAttribute("value", `${elem}`)

        input.addEventListener('change', (e) => {
            //generatePassword(e.target.value);
            console.log(e.target.value)
        })

        const contenedor = document.createElement("div");
        contenedor.appendChild(input)
        contenedor.appendChild(label)

        fieldset.appendChild(contenedor)
     
    }

    form.appendChild(fieldset);
}

const long = [12, 9, 6]; //to do
const reglas = ["Solo letras", "Lectura simple", "Todos los caracteres"] 
const caracteres = ["Mayúsculas", "Minúsculas", "Números", "Símbolos"]
unaFuncion('radio', long, 'long')
unaFuncion('radio', reglas, 'rules')  
unaFuncion('checkbox', caracteres, 'chars')

// poner la palabra carateres despues de los numeros
//subtitulo para cADA BLOQUE
//disabel
//llamar la funcion generar contraseña en el input