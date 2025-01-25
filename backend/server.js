import bodyParser from 'body-parser'
import cors from 'cors'
import { config } from 'dotenv'
import { connectDB } from './database.js'
import cookieParser from "cookie-parser";
import express from 'express'
import challengeRoutes from './routes/challenge.route.js'
import swaggerSpec from './swagger.js'
import swaggerUI from  'swagger-ui-express'
config()

const app = express()

app.use(cookieParser());

const corsOptions = {
    origin: [
        'http://localhost:5173',             
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}

app.use(cors(corsOptions))
app.use(bodyParser.json())


server.listen(process.env.APP_PORT, () => {
    console.log(`App conected and running on port ${process.env.APP_PORT}`)
    connectDB()
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.use('/api', challengeRoutes)




