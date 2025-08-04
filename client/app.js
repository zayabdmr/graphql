// fetchServerData() функцээр http://localhost:4000/ хаяг руу GraphQL ognoo query илгээнэ.

// 1. fetchServerData() дуудагдана, Сервер рүү POST хүсэлт явуулна
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

  // 2. Серверээс хариу авна, JSON форматтай хариуг response.json() гэж уншина.
  const { data } = await response.json();

  // 3. ognoo өгөгдлийг задлана, data.ognoo-г авч буцаана.
  return data.ognoo;
}

// 4. id="message"-тэй элементэд ognoo утгыг харуулна
fetchServerData().then((ognoo) => {
  document.getElementById("message").textContent = ognoo;
});
