const express = require("express");
const cors = require("cors");
const  connect_Db  = require("./connectdb");
const dotenv = require("dotenv");
const userRouter = require("./Routes/user/userRoute");
const handleError = require("./error");
dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());
server.use("/users", userRouter)
server.use(handleError)
const mongo_uri=process.env.mongo_uri
const port=process.env.port||5000






const startServer = async () => {
  try {
    await connect_Db(mongo_uri);
    server.listen(port, () => {
      console.log(`Server is actively listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message)
  }
};
startServer()