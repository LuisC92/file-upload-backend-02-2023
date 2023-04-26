const imageRouter = require('./image.routes');

const setUpRoutes = (server) =>{
    server.use("/images", imageRouter)
}

module.exports ={
    setUpRoutes
}