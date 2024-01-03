// keyword 'async' makes any function an async function that can use promises
// keyword await is used before a function that returns a promise to make the rest of the code wait until the promise is resolved (successful or failed)

async function fetchProducts() {
    try {
        // code will wait till the response is fetched & the promise returned as either succesful or fail
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

        // checking if the response has a status of 200(ok) or did not fail
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        // waiting again for the request to be settled(that is, return a success/fail promise)
        // if successful code continues, if failed throws the error in the catch block (same as above)
        const data = await response.json();
        console.log(data[3]);
    }
    catch (err) {
        console.error(`Could not fetch the products: ${err}`);
    }
}

fetchProducts();