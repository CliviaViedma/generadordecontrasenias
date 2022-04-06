const body = document.createElement ("body");
const input = document.createElement ("input");
input.classList.add("input");


const contenedor = document.createElement("div");
contenedor.classList.add("contenedor");
const h1 = document.createElement("h1");
const textH1 = document.createTextNode ("Personalice su contraseña")
h1.appendChild(textH1);
const form = document.createElement ("form")
form.classList.add("form");
contenedor.appendChild(h1);
contenedor.appendChild(form);
document.body.appendChild(input);
document.body.appendChild(contenedor);


const long = [12, 9, 6];
for(const elem of long) {
    const contenedor = document.createElement ("div");
    const label = document.createElement("label")
        label.setAttribute ("for", "check-${elem}")
        label.textContent = `${elem} caracteres`

    const input = document.createElement('input')
    input.setAttribute("type", "radio")
    input.setAttribute("id", `check-${elem}`)
    input.setAttribute("name", "select-length")
    input.setAttribute("value", `${elem}`)

    contenedor.appendChild(input)
    contenedor.appendChild(label)
    form.appendChild(contenedor)

    input.addEventListener('change', (e) => {
        generatePassword(e.target.value);
    })
   
}

const reglas = ["Solo letras", "Lectura simple", "Todos los caracteres"]
const titulo = document.createElement("h3");
const texth3 = document.createTextNode ("reglas");
titulo.appendChild(texth3)
contenedor.appendChild(titulo);

for( const elem of reglas){
const contenedor = document.createElement ("div");
    contenedor.classList.add(`contenedorUno`);
    //const titulo = document.createElement("h3");
    //contenedor.appendChild(titulo);
    
    const label = document.createElement("label");
        label.setAttribute ("for", "check-${elem}")
        label.textContent = `${elem} `
    const input = document.createElement('input')
        input.setAttribute("type", "radio")
        input.setAttribute("id", `check-${elem}`)
        
input.setAttribute("name", "select-length")
        input.setAttribute("value", `${elem}`)
        contenedor.appendChild(input)
        contenedor.appendChild(label)
        form.appendChild(contenedor)
    
        input.addEventListener('change', (e) => {
            generatePassword(e.target.value);
        })
       
    }
const caracteres = ["Mayúsculas", "Minúsculas", "Numeros", "Simbolos"]
for(const elem of caracteres){
const contenedor = document.createElement ("div");
const label = document.createElement("label")
            label.setAttribute ("for", "check-${elem}")
            label.textContent = `${elem} `
const input = document.createElement('input')
            input.setAttribute("type", "checkbox")
            input.setAttribute("id", `check-${elem}`)

            input.setAttribute("name", "select-length")
                input.setAttribute("value", `${elem}`)
                contenedor.appendChild(input)
                contenedor.appendChild(label)
                form.appendChild(contenedor)
            
                input.addEventListener('change', (e) => {
                    generatePassword(e.target.value);
                })
               
            }  