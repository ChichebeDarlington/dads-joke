const url = "https://icanhazdadjoke.com/";
const result = document.querySelector(".result");
const button = document.querySelector(".btn");

// console.log(result, button);

button.addEventListener("click", () => {
  fetchPapaJoke();
});

const fetchPapaJoke = async () => {
  result.textContent = "Loading";
  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json", "User-Agent": "learning app" },
      method: "GET",
    });
    const data = await response.json();
    console.log(response);
    result.textContent = data.joke;
    if (!response.ok) {
      throw new Error("URL does not match");
    }
  } catch (error) {
    console.log(error.message);
    result.textContent = "An error occurred, try again later";
  }
};

fetchPapaJoke();
