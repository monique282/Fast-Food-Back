import repositoryCode from "../repositories/repositoryCode";

async function getCode() {
    const code = await repositoryCode.getCode()
    return code;
};

async function updateCode(code: number, newCode: number) {
    const codeUpDate = await repositoryCode.updateCode(code, newCode);
    return codeUpDate;
};

const serviceCode = {
    getCode, updateCode
};

export default serviceCode;
