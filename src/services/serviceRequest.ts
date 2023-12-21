
import { RequestSchemaTotalType } from "@/protocols";
import { repositoryRequest } from "@/repositories/repositoryRequest";

async function postRequest(choice: RequestSchemaTotalType[]) {
    const result = await repositoryRequest.postRequest(choice);
    return result;
};

async function getRequest() {
    const allRequest = await repositoryRequest.getRequest();
    return allRequest;
};

async function postError(code: number) {
    const updateError = await repositoryRequest.postError(code);
    return updateError;
};

const serviceRequest = {
    postRequest, getRequest, postError
};

export default serviceRequest;
