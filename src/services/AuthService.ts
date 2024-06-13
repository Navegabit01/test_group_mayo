import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import UserRepository from '../repositories/UserRepository';
import User from '../entities/User';

export default class AuthService {
    constructor(private userRepository: UserRepository) {}

    async login(username: string, password: string): Promise<string | null> {
        const user = await this.userRepository.findByUsername(username);
        if (user && await bcrypt.compare(password, user.password)) {
            return jwt.sign({ id: user.id, username: user.username }, 'secret', { expiresIn: '1h' });
        }
        return null;
    }

    async register(username: string, password: string, email: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User('', username, hashedPassword, email);
        return this.userRepository.save(user);
    }
}
