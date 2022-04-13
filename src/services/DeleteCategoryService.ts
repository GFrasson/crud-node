import { AppDataSource } from "../database/connection";
import { Category } from "../models/Category";

export class DeleteCategoryService {
    async execute(id: string) {
        const repo = AppDataSource.getRepository(Category);

        if (!await repo.findOneBy({id})) {
            return new Error('Category does not exists!');
        }

        await repo.delete(id);
    }
}