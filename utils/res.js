module.exports = function(request, code, body) {
  let status;
  if (code == 200) status = 'SUCCESS';
  else if (code == 404 || code == 500) status = 'ERROR';

  return JSON.stringify({
    // 'request': {
    //   'httpVersion': request.httpVersion || '',
    //   'headers': request.headers || '',
    //   'url': request.url || '',
    //   'method': request.method || '',
    //   'params': request.params || ''
    // },
    'status': status || '',
    'body': body
  });
}