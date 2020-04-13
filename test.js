const random = require('./utils/random');

for (let i=0; i<10; i++) {
  console.log('================================ [' + i  + '] ================================');
  console.log(random.getRandomPerson());
}
