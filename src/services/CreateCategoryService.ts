import { AppDataSource } from "../database/connection";
import { Category } from "../models/Category";

interface CategoryRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    async execute({ name, description }: CategoryRequest): Promise<Category | Error> {
        const repo = AppDataSource.getRepository(Category);

        // await repo.findOne({where: {name}})
        if (await repo.findOneBy({name})) {
            return new Error('Category already exists');
        }

        const category = repo.create({
            name,
            description
        });

        await repo.save(category);

        return category;
    }
}