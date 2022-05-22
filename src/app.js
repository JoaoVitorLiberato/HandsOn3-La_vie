const express = require("express");
const DataBase = require("./database/index");
const routes = require("./routes/index")

const port = 3001;

const app = express();

try{

DataBase.hasConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((res) => {
    res.statusCode(404).JSON({message: ("URL is not found")})
})


app.listen(port, () => console.log(`Running server at port: ${port}`));

} catch(error)
{
    console.log(error.message);
}