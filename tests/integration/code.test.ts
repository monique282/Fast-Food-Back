import supertest from 'supertest';
import app, { init } from '../../src/app';
import { cleanDb } from '../helpers';
import { createCode } from '../factories/code.factory';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe('Code, Get', () => {
  it('Returns 404, If it is returning as expected', async () => {
    const response = await server.get('/code').send();
    expect(response.status).toBe(404);
    expect(response.body.message).toEqual('Código com erro!');
  });

  it('Returns 409, If it is returning as expected', async () => {
    await createCode(1);
    const response = await server.post('/update').send({
      idcode: 1,
    });
    expect(response.status).toBe(409);
  });

  it('Returns 200, Successfully caught', async () => {
    await createCode(1);
    const response = await server.get('/code');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          idcode: expect.any(Number),
        }),
      ]),
    );
  });
});
