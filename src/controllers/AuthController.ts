import { Request, Response } from 'express';
import AuthService from '../services/AuthService';

export default class AuthController {
    constructor(private authService: AuthService) {}

    async login(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;
        const token = await this.authService.login(username, password);
        if (token) {
            return res.json({ token });
        }
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    async register(req: Request, res: Response): Promise<Response> {
        const { username, password, email } = req.body;
        const user = await this.authService.register(username, password, email);
        return res.json(user);
    }
}
