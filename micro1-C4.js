let perfil = 'Administrador'

switch (perfil) {
    case 'Administrador':
    case 'administrador':
    case 'ADMINISTRADOR':

    console.log('Ud. tiene todos los privilegios de uso del sistema')
        break;
    
    case 'Asistente':
    case 'asistente':
    case 'ASISTENTE':
    console.log('Ud. sólo tiene permisos de registrar, modificar y consultar datos')
    break;

    case 'Invitado':
        console.log('Ud. sólo tiene permiso para consultar datos')
        break;
    
    case ' ':
    console.log('Ud debe especificar el perfil del usuario')
    break;
    default: 
    console.log('Ud. debe especcificar un perfil valido ')
        break;
}