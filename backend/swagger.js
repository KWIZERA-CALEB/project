import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'UMURAVA EDTECH API',
        version: '1.0.0',
        description: 'This is Umurava edtech API documentation'
    },
    servers: [
        {
            url: 'http://localhost:5080',
            description: 'Development server'
        },
    ]
}

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec