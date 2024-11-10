import https from "https";

export default function apiAwake() {
  const url = "https://fora-de-escopo-api.onrender.com/tp";

  https
    .get(url, (response) => {
      response.on("end", () => {
        try {
          console.log("Awaked!"); // If the response is JSON
        } catch (error) {
          console.error("Error parsing JSON:", error.message);
        }
      });
    })
    .on("error", (error) => {
      console.error("Error fetching data:", error.message);
    });
}
