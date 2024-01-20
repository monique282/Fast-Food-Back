
import { ConflictError, badRequestError } from "@/errors";
import { RequestSchemaTotalType } from "@/protocols";
import { repositoryRequest } from "@/repositories/repositoryRequest";

async function postRequest(choice: RequestSchemaTotalType[]) {
    for (const item of choice) {
      const code = item.code;
      const codeExists = await repositoryRequest.getRequestCodeExist(code);
      if (codeExists.length > 0) {
        throw ConflictError("Código já existe")
      }
    };
    const result = await repositoryRequest.postRequest(choice);
    return result;
};

async function getRequest() {
  const allRequest = await repositoryRequest.getRequest();
  if(!allRequest){
    throw badRequestError
  };
  return allRequest;
};

async function postError(code: number) {
  const updateError = await repositoryRequest.postError(code);
  return updateError;
}

async function deleteRequest(code: number) {
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
