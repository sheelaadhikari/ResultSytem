import Express from "express";
import {

    testController, uploadController, viewController,

} from '../controllers/resultController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = Express.Router()



// test routes
router.get('/test', requireSignIn, isAdmin, testController,);
router.get('/upload', requireSignIn, isAdmin, uploadController,);

router.get('/view', viewController,);











export default router;