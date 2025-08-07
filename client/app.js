async function fetchServerData() {
  const response = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "query { ognoo }",
    }),
  });

  const { data } = await response.json();

  return data.ognoo;
}

fetchServerData().then((ognoo) => {
  document.getElementById("message").textContent = ognoo;
});
