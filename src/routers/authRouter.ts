import { Router } from 'express';
import AuthService from '../services/AuthService';
import AuthController from '../controllers/AuthController';
import MongooseUserRepository from '../repositories/mongoose/MongooseUserRepository';

const authRouter = Router();
const userRepository = new MongooseUserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

authRouter.post('/login', (req, res) => authController.login(req, res));
authRouter.post('/register', (req, res) => authController.register(req, res));

export default authRouter;
