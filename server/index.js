import express from 'express'
import cors from 'cors'
import router from './router/routePers.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router);

app.listen(3000, () => {
    console.log('ta rodando no 3000')
})