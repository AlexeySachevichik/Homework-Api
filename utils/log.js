module.exports = function(type, message) {

  const date = new Date();

  let h = date.getHours();
  h = (h < 10) ? '0' + h : h;

  let m = date.getMinutes();
  m = (m < 10) ? '0' + m : m;

  let s = date.getSeconds();
  s = (s < 10) ? '0' + s : s;

  let separator  = ':';

  if (type.length == 0) type = 'info';

  let buffer = '';
  if (type.length < 5) {
    for (let i=0; i<5-type.length; i++) {
      buffer += ' ';
    }
  }

  console.log(`${h}${separator}${m}${separator}${s} [${type.slice(0, 5).toUpperCase()}]${buffer} ${message}`);
}
