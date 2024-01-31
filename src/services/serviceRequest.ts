import { ConflictError, notFound } from "../errors";
import { RequestSchemaTotalType } from "../protocols";
import { repositoryRequest } from "../repositories/repositoryRequest";

async function postRequest(choice: RequestSchemaTotalType[]) {
  for (const item of choice) {
    const code = item.code;
    const codeExists = await repositoryRequest.getRequestCodeExist(code);
    if (codeExists.length > 0) {
      throw ConflictError("Código do pedido ja existe");
    }
  }
  const result = await repositoryRequest.postRequest(choice);
  return result;
}

async function getRequest() {
  const allRequest = await repositoryRequest.getRequest();
  if (allRequest.length === 0) {
    throw notFound("Nenhum pedido no sistema");
  }
  return allRequest;
}

async function postError(code: number) {
  const codeExists = await repositoryRequest.getRequestCodeExist(code);
  if (codeExists.length === 0) {
    throw notFound("Código do pedido não encontrado");
  }
  for (const item of codeExists) {
    const error = item.error;
    if (error === true) {
      throw ConflictError("Pedido ja consta com erro");
    }
  }
  const updateError = await repositoryRequest.postError(code);
  return updateError;
}

async function deleteRequest(code: number) {
  const codeExists = await repositoryRequest.getRequestCodeExist(code);
  if (codeExists.length === 0) {
    throw notFound("Pedido não encontrado");
  }

  const updateDelete = await repositoryRequest.deleteRequest(code);
  return updateDelete;
}

const serviceRequest = {
  postRequest,
  getRequest,
  postError,
  deleteRequest,
};

export default serviceRequest;
