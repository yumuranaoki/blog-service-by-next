import fetch from 'isomorphic-unfetch';

export const get = async (path: string, cookie: string) => {
  const res = await fetch(`http://localhost:3000/${path}`, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      'Cookie': cookie 
    }
  });
  if (!res.ok) {
    return new Error(`error: ${res.status}`)
  }
  return res.json();
}

export const post = async (path: string, body: any, cookie: string) => {
  const res = await fetch(`http://localhost:3000/${path}`, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-type': 'application/json',
      'Set-Cookie': cookie,
    }),
    credentials: 'include',
  });
  if (!res.ok) {
    return new Error(`error: ${res.status}`)
  }
  return res.json();
}