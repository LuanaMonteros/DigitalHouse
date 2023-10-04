let box;
let tamaño;
let suma = 0;


for (let step = 0; step < 3; step++) {
    box = prompt("Ingrese el box que desea en letras mayusculas: ");
    tamaño = prompt("Ingrese el tamaño del box como ch(chico), m(mediano) o g(grande): ")
    switch (box) {
        case "A": total = 250000
            break;
        case "B": total = 200000
            break;
        case "C": total = 175000
        break;
        case "D": total = 320000
        break;
        default: console.log("No ingreso el tipo de boz que usará");
            break;
    }
    if (box =="A" || box =="B" || box =="C") {
        switch (tamaño) {
            case "ch": total = total + total* 0.25;
                        console.log("El total para el vendedor " + step+1 +" es: "+ total);
                break;
            case "m": total = total + total* 0.4;
                        console.log("El total para el vendedor " + step+1 +" es: "+ total);     
                break;
            case "g": total = total + total* 0.5;   
                        console.log("El total para el vendedor " + step+1 +" es: "+ total);
            break;
            default: console.log("El total para el vendedor " + step+1 +" es: "+ total);
                break;   
        }
    }
    suma = suma + total;
}
console.log("El total recaudado es: " + suma);
                  
