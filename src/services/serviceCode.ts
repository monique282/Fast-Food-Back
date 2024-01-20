import { badRequestError } from "@/errors";
import repositoryCode from "../repositories/repositoryCode";

async function getCode() {
    const code = await repositoryCode.getCode()
    if(!code){
        throw badRequestError
    }
    return code;
};

async function updateCode( newCode: number) {
    const codeUpDate = await repositoryCode.updateCode(newCode);
    if(!codeUpDate){
        throw badRequestError
    }
    return codeUpDate;
};

const serviceCode = {
    getCode, updateCode
};

export default serviceCode;
