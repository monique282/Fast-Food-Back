import { ConflictError, notFound } from '../errors';
import { repositoryRealy } from '../repositories/repositoryReady';
import { repositoryRequest } from '../repositories/repositoryRequest';

async function postReady(code: number) {
  const readyTrueCodeExists = await repositoryRequest.getRequestCodeExist(code);
  if (readyTrueCodeExists.length === 0) {
    throw notFound('Pedido não encontrado');
  }
  for (const item of readyTrueCodeExists) {
    const realy = item.ready;
    if (realy === true) {
      throw ConflictError('Pedido ja consta como pronto');
    }
  }
  const updateCode = await repositoryRealy.postReady(code);
  return updateCode;
}

const serviceReadt = {
  postReady,
};

export default serviceReadt;
