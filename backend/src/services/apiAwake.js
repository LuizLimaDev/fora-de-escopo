import https from "https";

export default function apiAwake() {
  const url = "https://example.com/api/data"; // Replace with your API endpoint

  https
    .get(url, (response) => {
      let data = "";

      // A chunk of data has been received.
      response.on("data", (chunk) => {
        data += chunk;
      });

      // The response has ended, so log the data.
      response.on("end", () => {
        try {
          console.log("Data fetched:", JSON.parse(data)); // If the response is JSON
        } catch (error) {
          console.error("Error parsing JSON:", error.message);
        }
      });
    })
    .on("error", (error) => {
      console.error("Error fetching data:", error.message);
    });
}
