
import { repositoryRealy } from "@/repositories/repositoryReady";

async function postReady(code: number) {
    const updateCode = await repositoryRealy.postReady(code);
    return updateCode;
};

const serviceReadt = {
    postReady
};

export default serviceReadt;