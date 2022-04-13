import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateVideoController } from './controllers/CreateVideoController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { GetAllVideosController } from './controllers/GetAllVideosController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';

const router = Router();

router.post('/categories', new CreateCategoryController().handle);
router.get('/categories', new GetAllCategoriesController().handle);
router.delete('/categories/:id', new DeleteCategoryController().handle);
router.put('/categories/:id', new UpdateCategoryController().handle);

router.post('/videos', new CreateVideoController().handle);
router.get('/videos', new GetAllVideosController().handle);

export { router };