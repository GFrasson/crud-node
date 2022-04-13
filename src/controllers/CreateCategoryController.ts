import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;
        
        const service = new CreateCategoryService();

        const result = await service.execute({name, description});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result);
    }
}