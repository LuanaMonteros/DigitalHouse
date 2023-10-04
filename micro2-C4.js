let pagoMes = 200;
let consumoKWH = 200;
let incremento = consumoKWH > 300 ? console.log(' Debido a que su hoga tuvo un consumo a 450wh, en base al ajuste tarifario(hogares con sonsumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado en total a pagar, que sera' + (pagoMes+ pagoMes*0.2)) : console.log('Ud pagara: ' + pagoMes);

