import { AppDataSource } from "../database/connection";
import { Video } from "../models/Video";

export class GetAllVideosService {
    async execute() {
        const repo = AppDataSource.getRepository(Video);

        const videos = await repo.find({
            relations: ['category']
        });

        return videos;
    }
}