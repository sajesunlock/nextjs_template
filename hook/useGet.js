import { useState, useEffect } from "react";

const useGet = (url) => {
    const [data, setData] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      fetch(url)
        .then((res) => {
            if (res.status === 200) {
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
    }, [url]);

    return [error, data];
};

const useGetWithAuth = (url, token) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const Init = {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
            Authorization: `Bearer ${token}`,
            mode: "cors",
            cache: "default",
        };

        fetch(url, Init)
            .then((res) => {
                if (res.status === 200) {
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
    }, [url]);

    return [error, data];
};

export { useGet, useGetWithAuth };
