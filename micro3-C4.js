let palabra = 'gato'

switch (palabra) {
    case 'Perro':
    case 'perro':
    case 'PERRO':
        console.log('Dog')
        break;
    
    case 'Gato':
    case 'gato':
    case 'GATO':
        console.log('Cat')
        break;

    case 'PUERTA':
    case 'Puerta':
    case 'puerta':
        console.log('Door')
        break;

    case 'Ventana':
    case 'ventana':
    case 'VENTANA':
        console.log('Window')
        break; 

    case 'Mesa':
    case 'mesa':
    case 'MESA':
        console.log('Table')
        break;
        
    default: 
    console.log('La palabra ingresada es incorrecta ')
        break;
}