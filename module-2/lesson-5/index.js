const log = console.log;

//! MINIMAL
const someCar = {
  manufacturer: 'Audi',
  model: 'A4',
  manYear: 2013,
  avgSpeed: 140,
  fuelCopacity: 55,
  avgConsumption: 8,
  drivers: ['Taras', 'Tanya', 'Vova'],

  // Show information about the car into console
  carInfo: () => {
    log(someCar);
  },

  // Add now driver to object someCar
  addNewDriver: function (newDriver) {
    this.drivers.push(newDriver);
    return this.drivers;
  },

  // Find if driver name is in object
  findName: function (driver) {
    if (this.drivers.includes(driver)) {
      log('This name is in a list');
    } else {
      log('It is a unique name');
    }
  },

  // Find a time to drive
  routeCalculator: function () {
    const yourDistance = prompt('Скільки кілометрів будеш долати?');
    const yourTime = +prompt('Скільки маєш часу на дорогу?');
    const findATime = yourDistance / this.avgSpeed;
    if (yourTime >= 4) {
      return findATime.toFixed(1) + 1;
    } else {
      return findATime.toFixed(1);
    }
  },
};

log(someCar.carInfo());
log(someCar.addNewDriver());
log(someCar.findName());
log(`Тобі знадобиться ${someCar.routeCalculator()} годин!`)