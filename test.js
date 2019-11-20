const func = require('./function');

// let arr = ['sdfgfdfdg', 'rrrrrrr', 'tttttttt'];
// for (let i=0; i<1000; i++) {
//     // console.log('[' + i  + '] ' + func.getRandomValue(0,1));
//     // console.log('[' + i  + '] ' + func.getRandomFirstName() + ' ' + func.getRandomLastName());
//     // console.log('[' + i  + '] ' + func.getRandomAccountNumber());
//     console.log('[' + i  + '] ' + func.getRandomPhone());
// }

// let str = 'f34g 5%$fd^^ g ##..//dgg..,fh, ';
// for (let i=0; i<str.length-1; i++) {
//     console.log('[' + i  + '] ' + str[i]);
// }

for (let i=0; i<1000; i++) {
    console.log('[' + i  + '] ' + func.getRandomUrl());
}