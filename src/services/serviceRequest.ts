import repositoryRequest from "@/repositories/repositoryRequest";

async function postRequest() {
    const result = await repositoryRequest.postRequest();
    return result;
};
const serviceRequest = {
    postRequest
};

export default serviceRequest;
