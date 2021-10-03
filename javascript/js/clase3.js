/*levanto informacion */
let nombre = prompt("Ingresá tu nombre!");

/*identifico el lugar en html donde lo voy a usar: div id=principal */
let miDiv = document.getElementById("principal");

/*lo imprimo ahí */
miDiv.innerHTML="Hola "+nombre;


/*identifico el lugar donde lo voy a usar */
let btn = document.getElementById("btn");
/*agrego evento: ejecutar funcion al hacer click */
btn.addEventListener('click',sumar);

function sumar(){
    /*variables locales ingresadas por ventanita */
    let num = Number(prompt("Ingresa tu primer número!"));
    let num2 = Number(prompt("Ingresa tu segundo número!"));
    let op = prompt("Escribí la operacion a  realizar \n + para sumar\n - para restar\n * para multiplicar \n / para dividir")
    let resultado=0;
    switch (op) {

        case "+": /*elección */
            resultado = num + num2; /*operacion */
            miDiv.innerHTML +="<p> El resultado de la suma de "+num +" y "+num2+ " es: " + resultado + "</p>"; /*impresion en el html */
            break;

        case "-":
            resultado = num - num2;
            miDiv.innerHTML +="<p> El resultado de la resta de "+num +" y "+num2+ " es: " + resultado + "</p>";
            break;

        case "/":
            resultado = num / num2;
            miDiv.innerHTML +="<p> El resultado de la División de "+num +" y "+num2+ " es: " + resultado + "</p>";
            break;

        case "*":
                resultado = num * num2;
                miDiv.innerHTML +="<p> El resultado de la Multiplicación de "+num +" y "+num2+ " es: " + resultado + "</p>";
                break;
        default:
            
            break;
    }
    
}