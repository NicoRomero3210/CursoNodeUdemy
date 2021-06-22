const { mostrarMenu, pausa } = require('./helpers/messages');
const { inquirerMenu, pauseMenu } = require('./helpers/inquirer');
const main = async () => {
  let opt = '';
  do {
    opt = await inquirerMenu();
    console.log(opt);
    console.log('\n');
    if (opt !== '0') inputOpt = await pauseMenu();
    // if (opt !== '0') await pausa();
  } while (opt !== '0');
};

main();
