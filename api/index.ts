export const get = () => {

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
  console.log(res);
  if (!res.ok) {
    return new Error(`error: ${res.status}`)
  }
  return res.json();
}