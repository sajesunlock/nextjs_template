import { useState, useEffect } from "react";

const usePost = (url, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const Init = {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
            mode: "cors",
            cache: "default",
            body: JSON.stringify(payload),
        };

      fetch(url, Init)
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
                setError(d.error);
                return false;
            }
            return setData(d);
        })
        .catch((err) => {
            setError(err);
        });

      return () => [error, data];
    }, [url]);
};

const usePostWithAuth = (url, token, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const Init = {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
            Authorization: `Bearer ${token}`,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(payload),
        };

        fetch(url, Init)
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
                  setError(d.error);
                  return false;
                }
                return setData(data);
            })
            .catch((err) => {
              setError(err);
            });

        return [error, data];
    }, [url]);
};

export { usePost, usePostWithAuth };
