$.ajax({
  url: "https://jsonplaceholder.typicode.com/todos",
  type: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  data: JSON.stringify({
    userId: 1,
    title: "Yeni tapşırıq",
    completed: false,
  }),
  success: function (response) {
    console.log("POST uğurlu:", response);
  },
  error: function (xhr, status, err) {
    console.error("POST xətası:", err);
  },
});

$.ajax({
  url: "https://jsonplaceholder.typicode.com/todos",
  type: "GET",
  success: function (todos) {
    console.log("GET uğurlu, todo sayı:", todos.length);
    console.log(todos);
  },
  error: function (xhr, status, err) {
    console.error("GET xətası:", err);
  },
});