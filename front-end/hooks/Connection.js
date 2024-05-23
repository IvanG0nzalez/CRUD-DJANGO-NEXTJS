let URL = "http://localhost:8000/movies/api/v1/";

export function url_api() {
  return URL;
}

export async function get(recurso) {
  const headers = {
    "Content-type": "application/json"
  };
  const response = await fetch(URL + recurso, {
    cache: "no-store",
    method: "GET",
    headers: headers,
  });
  const responseData = await response.json();
  return responseData;
}

export async function update(recurso, data, token) {
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
    token: token,
  };

  const response = await fetch(URL + recurso, {
    cache: "no-store",
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData;
}

export async function send(recurso, data, token) {
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
    token: token,
  };

  const response = await fetch(URL + recurso, {
    cache: "no-store",
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData;
}
