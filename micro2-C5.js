function Armado (tipoDeHamb, J, Q, ST, My, Mo, T, L, C){
    switch (tipoDeHamb) {
        case 'Carne': total = 1800;
            break;
        case 'Pollo': total = 1500;
        break;
        case 'Vegetariano': total = 1200;
        break;
        
        default: total = 1200
            break;
    }

    J==true? total= total + 30: total;
    Q==true ? total = total + 25 :total;
    ST==true ? total = total + 5 :total;
    My==true ? total = total + 5 :total;
    Mo==true ? total = total + 5 :total;
    T==true ? total = total + 15 :total;
    L==true ? total = total + 10 :total;
    C==true ? total = total + 10 :total;

    
    return total;   

}

function mensaje(nombre, apellido, tipoDeHamburguesa) {
    return "Estimado "+ nombre +" "+apellido+ " su total a pagar sera de $"+ tipoDeHamburguesa ;
}


console.log(mensaje('Matías', 'Carlino', Armado( 'Carne', false, false, false, false, false, false, false, false)));
