async function getData(req, res) {
  await fetch("http://localhost:8000/", {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
    .then((res) => {
      console.log(res);
      res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
getData();
