import { RequestSchemaTotalType } from "@/controllers/controlllerRequest";
import repositoryRequest from "@/repositories/repositoryRequest";

async function postRequest(choice: RequestSchemaTotalType) {
    const result = await repositoryRequest.postRequest(choice);
    return result;
};
const serviceRequest = {
    postRequest
};

export default serviceRequest;
