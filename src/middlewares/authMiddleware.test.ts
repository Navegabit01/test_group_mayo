import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import authMiddleware from './authMiddleware';

jest.mock('jsonwebtoken');

describe('authMiddleware', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;

    beforeEach(() => {
        req = {
            header: jest.fn(),
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        next = jest.fn();
    });

    it('should return 401 if no token is provided', () => {
        (req.header as jest.Mock).mockReturnValue(null);

        authMiddleware(req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: 'No token provided' });
    });

    it('should return 401 if token is invalid', () => {
        (req.header as jest.Mock).mockReturnValue('Bearer invalidtoken');
        (jwt.verify as jest.Mock).mockImplementation(() => {
            throw new Error('Invalid token');
        });

        authMiddleware(req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: 'Invalid token' });
    });

    it('should call next if token is valid', () => {
        const decodedToken = { id: '1', username: 'testuser' };
        (req.header as jest.Mock).mockReturnValue('Bearer validtoken');
        (jwt.verify as jest.Mock).mockReturnValue(decodedToken);

        authMiddleware(req as Request, res as Response, next);

        expect(req.user).toEqual(decodedToken);
        expect(next).toHaveBeenCalled();
    });
});
