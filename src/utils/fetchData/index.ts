export async function fetchData() {
  try {
    const result = await new Promise(resolve => {
      resolve('Promise resolvida!');
    });

    return result;
  } catch (error) {
    console.error(error);
  }
}
