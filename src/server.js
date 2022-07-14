const {PORT} = process.env;
const app = require("./src/app")

const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);