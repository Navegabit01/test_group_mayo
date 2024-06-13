import User from '../../entities/User';
import UserRepository from '../UserRepository';
import UserModel, { IUser } from '../../models/UserModel';

class MongooseUserRepository implements UserRepository {
    async findById(id: string): Promise<User | null> {
        const user: IUser | null = await UserModel.findById(id).lean();
        if (user) {
            return new User(user._id.toString(), user.username, user.password, user.email);
        }
        return null;
    }

    async findByUsername(username: string): Promise<User | null> {
        const user: IUser | null = await UserModel.findOne({ username }).lean();
        if (user) {
            return new User(user._id.toString(), user.username, user.password, user.email);
        }
        return null;
    }

    async save(user: User): Promise<User> {
        const newUser = new UserModel({
            username: user.username,
            password: user.password,
            email: user.email,
        });
        await newUser.save();
        return new User(newUser._id.toString(), newUser.username, newUser.password, newUser.email);
    }
}

export default MongooseUserRepository;
