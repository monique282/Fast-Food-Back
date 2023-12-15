import { Request, Response } from "express";
import httpStatus from "http-status";


export async function getProducts(req: Request, res: Response){
const allProducts= await serviceProducts.getProducts();
 return res.status(httpStatus.OK).send(allProducts);
}