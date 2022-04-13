import { AppDataSource } from "../database/connection";
import { Category } from "../models/Category";

interface CategoryUpdateRequest {
    id: string;
    name: string;
    description: string;
};

export class UpdateCategoryService {
    async execute({id, name, description}: CategoryUpdateRequest): Promise<Category | Error> {
        const repo = AppDataSource.getRepository(Category);

        const category = await repo.findOneBy({id});

        if (!category) {
            return new Error("Category does not exists!");
        }

        category.name = name || category.name;
        category.description = description || category.description;
        
        await repo.save(category);

        return category;
    }
}