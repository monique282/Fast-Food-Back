
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

const serviceRequest = {
    postRequest, getRequest
};

export default serviceRequest;
