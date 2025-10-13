function requestValidator(request) {
  const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const uriMatch = /^(?:\*|(?=[A-Za-z0-9.]*[A-Za-z0-9])[A-Za-z0-9.]+)$/g;
  const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const messageMatch = /^[^<>\\&'"]*$/g;

  if (!request.hasOwnProperty('method') || !validMethods.includes(request.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (!uriMatch.test(request.uri) || !request.hasOwnProperty('uri')) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!request.hasOwnProperty('version') || !validVersion.includes(request.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  const message = request.message
  if(!request.hasOwnProperty('message') || !messageMatch.test(message)) {
    throw new Error("Invalid request header: Invalid Message");
  }

  return request;
}

const request = {
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
};

const requestValidation = requestValidator(request);
console.log(requestValidation);