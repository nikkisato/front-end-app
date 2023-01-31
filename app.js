const container = document.getElementById("container");
// when fetching always look at the res.ok

function getData() {
  fetch("http://localhost:8000/")
    .then(async (res) => {
      if (!res.ok) {
        // console.error("res is not okay 1", res.status);
        const errorText = await res.text();
        //res.text() returns a promise
        throw new Error(errorText);
      } else {
        const data = await res.json();
        container.append(JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.error();
      container.append(JSON.stringify(error.message));
    });
}

getData();
