fetch("http://localhost:8000/", {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .catch((err) => {
    console.log(err);
  });
