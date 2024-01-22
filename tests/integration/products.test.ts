import supertest from 'supertest';
import app, { init } from '../../src/app';
import { cleanDb } from '../helpers';
import createProduct from '../factories/products.factory';

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await cleanDb();
});

const server = supertest(app);

describe('Procusts, Get', () => {
    it("Returns 404, If it is returning as expected", async () => {
        const response = await server.get('/home').send();
        expect(response.status).toBe(404);
        expect(response.body.message).toEqual("Produtos não encontrados, recarregue a pagina, se o problema persistir entre em contato com o responsavel.");
    });

    it("Returns 200, Successfully caught", async () => {
        await createProduct();
        const response = await server.get('/home');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(14);
    
        const expectedProperties = [
            'id', 'image', 'price', 'description', 'category'
        ];
    
        response.body.forEach(product => {
            expectedProperties.forEach(property => {
                expect(product[property]).toBeDefined();
            });
            if ('combo' in product) {
                expect(product.combo).toEqual(expect.any(String));
            }
        });
    });
});
