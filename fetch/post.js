export async function postData(url, payload) {
  const Init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    credential: "included",
    mode: "cors",
    cache: "default",
    body: JSON.stringify(payload),
};

  return  fetch(url, Init)
    .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 201) {
            return res.json();
        }
        return false;
    })
    .then((d) => {
        if (!d || d.error) {
          return `${d.error}`;
        }
        return d;
    })
    .catch((err) => `${err}`);
}

export async function postDataWithAuth(url, payload, token) {
  const Init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    credential: "included",
    mode: "cors",
    cache: "default",
    body: JSON.stringify(payload),
};

  return fetch(url, Init)
    .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 201) {
            return res.json();
        }
        return false;
    })
    .then((d) => {
        if (!d || d.error) {
          return `${d.error}`;
        }
        return d;
    })
    .catch((err) => `${err}`);
}

export async function postBinary(url, payload, token) {
  const Init = {
    method: "POST",
    headers: {
      // "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
   
    mode: "cors",
    cache: "default",
    body: payload, // JSON.stringify(payload),
};

  return fetch(url, Init)
    .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 201) {
            return res.json();
        }
        return false;
    })
    .then((d) => {
        if (!d || d.error) {
          return `${d.error}`;
        }
        return d;
    })
    .catch((err) => `${err}`);
}
