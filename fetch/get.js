export async function getData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.error(`Could not get products: ${error}`);
    }
};

export async function getDataWithAuth(url, token) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.error(`Could not get products: ${error}`);
    }
};
