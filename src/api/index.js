const BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT || "";
/**
 *
 * @param method
 * @param endpoint
 * @param params
 * @returns Promise
 */
const _request = async ({ method = "GET", endpoint, params }) => {
  let url = BACKEND_ENDPOINT + endpoint;

  const options = {
    headers: {
      Authorization: ``,
    },
    method,
  };

  if (params)
    if (["POST", "PUT"].includes(method)) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(params);
    } else {
      const queryString = Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&");
      url += "?" + queryString;
    }

  return fetch(url, options)
    .then(async (res) => ({
      status: res.status,
      data: await res.json(),
    }))
    .then(({ status, data }) => {
      if (status !== 200) {
        console.log({ status, data });
        const error = new Error(`${data?.type}: ${data?.message}`);
        error.code = data?.code;
        error.status = status;
        error.name = data?.error;
        throw error;
      }
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export default _request;
