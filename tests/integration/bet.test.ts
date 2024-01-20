

import supertest from 'supertest';
import app, { init } from '@/app';
import { cleanDb } from 'tests/helpers';

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await cleanDb();
});

const server = supertest(app);

