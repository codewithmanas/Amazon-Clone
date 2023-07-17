// Thought Note: Understanding Server Side Data Fetching in Page Router



export async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  }