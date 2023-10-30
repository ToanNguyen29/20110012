const PORT = process.env.PORT || 8000
const app = require('./app')
const http = require('http')
const server = http.createServer(app)
const {loadPlanetsData} =  require('./models/planets.model')

async function startSever() {
    await loadPlanetsData()
    server.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}...`)
    })
}

startSever()