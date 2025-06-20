import express  from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, ()=>{
console.log('server running')
})


async function server() {
    try {
        console.log(`server running port ${5000}`)
    } catch (error) {
        console.error(`server errror ${server}`)
    }
}

server()