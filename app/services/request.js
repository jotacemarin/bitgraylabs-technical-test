/**
 * @author Julio Marin
 * @file app\commons\request.js
 * @description Button component
 */

// Dependencies
import axios from 'axios';

// URL proxy to consume endpoint
const proxy = 'http://localhost:4000/proxy?url=';

/**
 * Helper to handle unexpected error
 * @throws { error }
 */
export const unHandleError = async () => {
  throw new Error('unhandledError');
};

/**
 * Helper to make a request to endpoint
 * @param { string } url - remote endpoint
 * @param { object } receivedOptions - headers of request
 * @returns { Promise } returns a promise
 */
export default async function request(url, receivedOptions) {
  const options = Object.assign({}, receivedOptions);

  // Execute request
  return axios
    .request({ ...options, url: proxy.concat(url) })
    .catch(unHandleError)
    .then(({ data }) => data);
}
