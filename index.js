const clientes = []
class Cliente
{
    constructor(nombre, apellido, edad, vecesPorSemana){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.vecesPorSemana = vecesPorSemana
    }
}

function agregarCliente(){
    let nombre
    let apellido
    let edad
    let vecesPorSemana

    do{
        nombre = prompt('Ingrese nombre')
    }while(nombre=='')

    do{
        apellido = prompt('Ingrese apellido')
    }while(apellido=='')

    edad = ingresarEdad()

    vecesPorSemana = ingresarVecesPorSemana()

    const cliente = new Cliente(nombre, apellido, edad, vecesPorSemana)

    clientes.push(cliente)
}

function ingresarEdad() {
    let edad

    do{
        edad = prompt('Ingrese edad')
        if(parseInt(edad) && parseInt(edad) > 0 && parseInt(edad) < 100){
            return parseInt(edad)
        } else {
            edad = ''
            alert('Edad incorrecta')
        }
    }while(edad=='')
}

function ingresarVecesPorSemana(){
    let vecesPorSemana
    do{
        vecesPorSemana = prompt('Ingrese cantidad de veces por semana')
        if(parseInt(vecesPorSemana) && parseInt(vecesPorSemana) > 0 && parseInt(vecesPorSemana) < 100){
            return parseInt(vecesPorSemana)
        } else {
            vecesPorSemana = ''
            alert('Cantidad de dias seleccionados incorrectos')
        }
    }while(vecesPorSemana=='')
}

function verAlumnosInfantiles() {
    let infantiles = clientes.filter((alumno) => alumno.edad < 18)
    let alumnos = ''
    for(const alumno of infantiles) {
        alumnos += `${alumno.nombre} ${alumno.apellido} - Edad: ${alumno.edad} - Clases por semana: ${alumno.vecesPorSemana}\n`
    }
    alert(alumnos)
}

function verAlumnosAdultos() {
    let adultos = clientes.filter((alumno) => alumno.edad >= 18)
    let alumnos = ''
    for(const alumno of adultos) {
        alumnos += `${alumno.nombre} ${alumno.apellido} - Edad: ${alumno.edad} - Clases por semana: ${alumno.vecesPorSemana}\n`
    }
    alert(alumnos)
}

let menu = `Bienvenido al sistema seleccione la clase para calcular el plan anual:
1- Pileta libre: $3000 x mes
2- Clases 1 vez x semana: $4000 x mes
3- Clases 2 veces x semana: $5000 x mes
4- Clases 3 veces x semana: $6000 x mes
5- Anotar alumno
6- Ver alumnos infantiles
7- Ver alumnos adultos
8- Salir`

let plan = 0
let opcion = 0
do{
    opcion = parseInt(prompt(menu))

    switch(opcion){
        case 1:
            plan = 3000*12
            alert('El plan anual es de $' + plan)
            break
        case 2:
            plan = 4000*12
            alert('El plan anual es de $' + plan)
            break
        case 3:
            plan = 5000*12
            alert('El plan anual es de $' + plan)
            break
        case 4:
            plan = 6000*12
            alert('El plan anual es de $' + plan)
            break
        case 5:
            agregarCliente()
            break
        case 6:
            verAlumnosInfantiles()
            break
        case 7:
            verAlumnosAdultos()
            break
        case 8:
            alert('Saliendo del sistema...')
            break
        default:
            alert('Opcion incorrecta, vuelva a seleccionar')
            break
    }
}while(opcion!=8)