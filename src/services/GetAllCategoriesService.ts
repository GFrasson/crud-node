import { AppDataSource } from "../database/connection";
import { Category } from "../models/Category";

export class GetAllCategoriesService {
    async execute() {
        const repo = AppDataSource.getRepository(Category);

        const categories = await repo.find();

        return categories;
    }
}