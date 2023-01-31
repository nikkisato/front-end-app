// async function getData(req, res) {
//   await fetch("http://localhost:8000", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "http://localhost:8000",
//       "Access-Control-Allow-Credentials": "true",
//       mode: "cors",
//     },
//   })
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// getData();

fetch(
  "http://localhost:8000/",
  { mode: "no-cors" },
  {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
    },
  }
);

// fetch("https://cors-demo.glitch.me/allow-cors", { mode: "cors" });
