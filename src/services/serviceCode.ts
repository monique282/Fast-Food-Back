import repositoryCode from "@/repositories/repositoryCode";

async function getCode() {
    const code = await repositoryCode.getCode();
    return code;
};

const serviceCode = {
    getCode
};

export default serviceCode;
