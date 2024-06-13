import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import AuthController from './AuthController';

jest.mock('../services/AuthService');

describe('AuthController', () => {
    let authService: AuthService;
    let authController: AuthController;
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: jest.Mock;

    beforeEach(() => {
        authService = new AuthService({} as any);
        authController = new AuthController(authService);

        req = {
            body: {}
        };
        res = {
            json: jest.fn().mockReturnThis(),
            status: jest.fn().mockReturnThis()
        };
        next = jest.fn();
    });

    describe('login', () => {
        it('should return a JWT token if credentials are valid', async () => {
            const token = 'mockToken';
            req.body = { username: 'testuser', password: 'password' };
            jest.spyOn(authService, 'login').mockResolvedValue(token);

            await authController.login(req as Request, res as Response);

            expect(authService.login).toHaveBeenCalledWith('testuser', 'password');
            expect(res.json).toHaveBeenCalledWith({ token });
        });

        it('should return 401 if credentials are invalid', async () => {
            req.body = { username: 'testuser', password: 'password' };
            jest.spyOn(authService, 'login').mockResolvedValue(null);

            await authController.login(req as Request, res as Response);

            expect(authService.login).toHaveBeenCalledWith('testuser', 'password');
            expect(res.status).toHaveBeenCalledWith(401);
            expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
        });
    });

    describe('register', () => {
        it('should create a new user and return it', async () => {
            const user = { id: '1', username: 'testuser', password: 'hashedpassword', email: 'testuser@example.com' };
            req.body = { username: 'testuser', password: 'password', email: 'testuser@example.com' };
            jest.spyOn(authService, 'register').mockResolvedValue(user);

            await authController.register(req as Request, res as Response);

            expect(authService.register).toHaveBeenCalledWith('testuser', 'password', 'testuser@example.com');
            expect(res.json).toHaveBeenCalledWith(user);
        });
    });
});
