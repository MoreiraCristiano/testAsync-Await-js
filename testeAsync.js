function espera5seg() {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(error);
    }

    setTimeout(() => {
      const resolved = "Promise return ok";
      resolve(resolved);
    }, 1000);
  });
}

/**
 * Promise using async/await
 */
async function useAsyncAwait() {
  try {
    const result = await espera5seg();
    const alteredResult =
      (await result) +
      ` Add new string to promise inside function useAsyncAwait`;

    // Here I have access to promise resolve
    console.log(result);
    console.log(alteredResult);

    return result;
  } catch (error) {
    return error;
  }
}
useAsyncAwait();

// This function call doesnot return the promise resolve
// console.log(useAsyncAwait());

/**
 * Promise with .then()
 */
// espera5seg()
//   .then((resolved) => console.log(resolved))
//   .catch((error) => console.error(error));
