//contador de id
let idCounter = 0;
//recogemos y guardamos en una variable el valor del input (tipo texto):
const input = document.querySelector('input[type="text"]')
//detectamos cuando el usuario escriba una tarea
userInput.addEventListener('submit', (event) => {
    event.preventDefault();//para que no se nos borre el mensaje de consola
    console.log('el usuario ha escrito una tarea');
    addTask();
});
/**creamos la función addtask() con la función flecha. Conservamos el console.log 
 * a modo de log.
 * vamos a usar backticks en vez de comillas porque nos permitirá usar ${} para 
 * añadir valores dentro de un string*/
let addTask = () => {
    idCounter++;
    let newvalue = input.value;
    if (input.value != '') {
        console.log('evento desde función flecha addTaask');//log
        //list.innerHTML += '<h2>Nueva tarea</h2>';---->¡prueba!
        //seleccionamos y le añadimos contenido al div con id=list:
        list.innerHTML += `
    <div class="task-container" id='${idCounter}'> 
        <label>
            <input type="checkbox">
            ${newvalue}
        </label>
        <img src="./img/cubo-de-basura.png" class="close-btn">
    </div> `
        //dejamos el input sin contenido:
        input.value = '';
        actualizarStats();
    }

};
/**Para añadir una tarea/acción primero debo escuchar un evento. 
 * Debemos "escuchar" la acción check. Al imprimir el evento 
 * podemos verEsta acción check dentro 
 * del div list nos devuelve tres eventos:
 * 1.click en el div
 * 2.click en input checkbox
 * 3.click en la imagen del trash.*/
list.addEventListener('click', (event) => {
    // console.log('Se ha hecho click en la lista');
    // console.log(event);
    // console.log(event.srcElement.nodeName);
    if (event.srcElement.nodeName == 'INPUT') {
        actualizarStats();
    } else if (event.srcElement.nodeName == 'IMG') {
        // console.log('borramos una tarea');
        //console.log(event);
        //console.log(event.srcElement.parentNode.id);
        deleteTarea(event.srcElement.parentNode.id);
    }
});
/**^para borrar una tarea necesitamos saber el id del elemento */
//Función que actualiza la estadística:
let actualizarStats = () => {
    /**esta variable (elementList)contendrá el valor del elemento stats. al genrarse varios 
     * párrafos tendremos un nodeList y queremos quedarnos con su longitud, 
     * es decir con su cantidad de elementos.*/
    let elementList = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');//m mostrarará todos los elementos input checkbox seleccionados(checked)

    stats.innerHTML = `<p>Tareas pendientes: ${elementList.length} Tareas completadas: ${checkbox.length}<p>`
};

//Función que borra las tareas:
let deleteTarea = (id) => {
    let tareaBorrada = document.getElementById(id);
    list.removeChild(tareaBorrada);
    actualizarStats();
};
