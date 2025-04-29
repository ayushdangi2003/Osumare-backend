const axios = require("axios");

axios
  .post("http://localhost:3000/tasks", {
    title: "Buy eggs",
    description: "Free-range only",
  })
  .then((res) => console.log("Created:", res.data))
  .catch((err) => console.error("Error:", err.response?.data || err.message));
