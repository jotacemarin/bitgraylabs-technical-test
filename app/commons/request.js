import 'whatwg-fetch';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const errorResponse = await parseJSON(response);
  const error = new Error(errorResponse.message);
  error.status = errorResponse.status;
  error.code = errorResponse.message ? errorResponse.message : 'E00';
  throw error;
}

async function unHandleError(err) {
  const error = new Error(err.message);
  error.code = 'E00';
  throw error;
}

export default function request(url, receivedOptions) {
  const options = Object.assign({}, receivedOptions);

  let baseURL = process.env.REACT_APP_API;

  // In case of use external URL
  if (options.externalUrl) {
    baseURL = '';
  } else {
    // Default headers
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'same-origin',
      mode: 'cors',
      'from-to': 'web',
    };

    // check autorization JSON
    if (typeof options.authorization !== 'undefined' && options.authorization) {
      headers.authorization = `Bearer ${options.authorization}`;
    }

    // Add Headers for request
    if (typeof options.headers !== 'undefined' && options.headers) {
      headers = { ...headers, ...options.headers };
    }

    options.headers = new Headers(headers);
  }

  // Execute request
  return fetch(baseURL.concat(url), options)
    .catch(unHandleError)
    .then(checkStatus)
    .then(parseJSON);
}
