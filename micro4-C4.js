let v1 = 155;
let v2= 15;
let operacion = 'restar';

switch (operacion) {
    case 'sumar':
        console.log(v1 + v2);
        break;
    case 'restar':
        console.log(v1 - v2);
        break;
    case 'multiplicar':
        console.log(v1*v2);
    break;
    case 'dividir':
        console.log(v1 / v2);
        break;
    default:
        console.log('Las operaciones aceptadas son: sumar - restar- multiplicar- dividir.');
        break;
}