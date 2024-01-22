
import { notFound } from "../errors/not-found-error";
import repositoryCode from "../repositories/repositoryCode";
import { ConflictError } from "../errors/conflict-error";

async function getCode() {
    const code = await repositoryCode.getCode()
    if(code.length === 0){
        throw notFound("Código com erro!")
    };
    return code;
};

async function updateCode( newCode: number) {
    const newCodeExist = await repositoryCode.getCodeExist(newCode)
    if(newCodeExist){
        throw ConflictError("Código de compra ja existe")
    };
    const codeUpDate = await repositoryCode.updateCode(newCode);
    
    return codeUpDate;
};

const serviceCode = {
    getCode, updateCode
};

export default serviceCode;
