export const get = async (url, headers = {}) => {
  const response = await fetch(url, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }

  return response.json();
};

export const post = async (endpoint, payload, headers = {}) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }

  return response.json();
};

export const put = async (endpoint, payload, headers = {}) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }

  return response.json();
};

export const remove = async (endpoint, headers = {}) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: 'DELETE',
    headers,
  });

  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }

  return response.json();
};