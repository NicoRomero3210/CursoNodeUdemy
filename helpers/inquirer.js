const inquirer = require('inquirer');
require('colors');

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
      { value: '1', name: '1. Crear Tarea' },
      { value: '2', name: '2. Listar Tareas' },
      { value: '3', name: '3. Listar Tareas completadas' },
      { value: '4', name: '4. Listar tareas pendientes' },
      { value: '5', name: '5. Completar tareas' },
      { value: '6', name: '6. Borrar tareas' },
      { value: '0', name: '0. Salir' },
    ],
  },
];

const confirmation = [
  {
    type: 'input',
    name: 'destroyer',
    message: `Presione ${'Enter'.green} para continuar`,
  },
];

const inquirerMenu = async () => {
  console.clear();
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pauseMenu = async () => {
  const inputOpt = await inquirer.prompt(confirmation);
  return inputOpt;
};

module.exports = {
  inquirerMenu,
  pauseMenu,
};
