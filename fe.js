let  carreritas = ["Lucía", "Roberto","Maria", "Jesus", "Andrea", "José"];
console.log(carreritas);

let carreritasEliminados = carreritas.splice(2, 4); //dejamos a los dos primeros elementos

carreritas.push('Andrea', 'Maria', 'Jesus', 'José'); //agregamos al final estos elementos para reacomodar a andrea
carreritas.pop(); //eliminamos a José
carreritas.shift(); //Eliminamos al primer elemento Lucia para poder agregar entre ella y Roberto
carreritas.unshift('Lucía','Cristobal', 'Fernanda', 'Armando'); //agregamos al inicio 
carreritas.unshift('Federico'); //agregamos al nuevo primer puesto
console.log(carreritas);
