import fetch from 'isomorphic-unfetch';

export const get = async (path: string) => {
  const res = await fetch(`http://localhost:3000/${path}`, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
  });
  if (!res.ok) {
    return new Error(`error: ${res.status}`)
  }
  return res.json();
}

export const post = async (path: string, body: any) => {
  const res = await fetch(`http://localhost:3000/${path}`, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-type': 'application/json'
    }),
    credentials: 'include',
  });
  if (!res.ok) {
    return new Error(`error: ${res.status}`)
  }
  return res.json();
}

export const deleteReq = async (path: string) => {
  const res = await fetch(`http://localhost:3000/${path}`, {
    mode: 'cors',
    method: 'DELETE',
    headers: new Headers({
    }),
    credentials: 'include',
  });
  if (!res.ok) {
    return new Error(`error: ${res.status}`)
  }
  return res.json();
}