const HANDLE_SUBMIT = "HANDLE_SUBMIT";

interface Form {
  name: string,
  email: string,
  password: string,
}

export const handleSubmit = (form : Form) => {
  return ({
    type: "HANDLE_SUBMIT" as typeof HANDLE_SUBMIT,
    payload: form,
  });
}


export const formActions = { handleSubmit };