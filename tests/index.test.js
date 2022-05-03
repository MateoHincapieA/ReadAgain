const router = require('../src/routes/categorias');
const request = require('supertest');
let data = {
    nombre: "Suspenso",
    descripcion: "Genero literario creado en el año tal"
};

describe('GET /categorias', ()=>{
    test('should respond with a 200 status code', async () => {
        const response = await request(router).get('/categorias').send();
        expect(response.statusCode).toBe(200);
    })
});

describe('GET /categorias/byId', ()=>{
    test('should respond with a 200 status code', async () => {
        const response = await request(router).get('/categorias/byId').send();
        expect(response.statusCode).toBe(200);
    })
});

describe('POST /categorias/add', ()=>{
    test('should create a new category', async (done) => {
        const response = await request(router)
        .post('/categorias/add')
        .send(data)
        .set("Accept", "aplication/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    })
});


