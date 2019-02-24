export const get = () => {

}

export const post = async (path: string, body: any) => {
  const res = await fetch(`http://localhost:3000/${path}`, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(body),
  });
  return res.json();
}