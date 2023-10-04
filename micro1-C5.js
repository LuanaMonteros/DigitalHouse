function alquiler(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe){
    
    switch (tipoDeVehiculo) {
        case 'Compacto':
            total = 14000 * diasDeAlquiler
            break;
        case 'Mediano':
            total = 17000 * diasDeAlquiler
            break;
        case 'Camioneta':
            total = 28000 * diasDeAlquiler
            break;
            
        default: return 'Estimado cliente: en base al tipo de vihiculo compacto considerando los 1 días utilizados, el monto a pagar es de 14000';
            
    }

    if ( sillaParaBebe ) {
        total = total + 1200 * diasDeAlquiler;
        return 'Estimado cliente: en base al tipo de vihiculo ' + tipoDeVehiculo + ', considerando los ' + diasDeAlquiler + ' días utilizados y la silla de bebe, el monto a pagar es de ' + total
    } 
        return 'Estimado cliente: en base al tipo de vihiculo ' + tipoDeVehiculo + ', considerando los ' + diasDeAlquiler + ' días utilizados, el monto a pagar es de ' + total;
    
}
console.log(alquiler('Camioneta', 1, true));
    

