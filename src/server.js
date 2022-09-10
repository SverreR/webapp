const express = require("express");
const app = express();
const port = 8080;

app.get("/", async (req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.status(200);
	res.sendFile(path.join(__dirname,"/config/todo.html"));
});

app.listen(port);
console.log("Server started at http://localhost" + port);
