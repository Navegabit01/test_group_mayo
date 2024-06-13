import User from './User';

describe('User Entity', () => {
    it('should create a user entity with the correct properties', () => {
        const id = '1';
        const username = 'testuser';
        const password = 'password123';
        const email = 'testuser@example.com';

        const user = new User(id, username, password, email);

        expect(user.id).toBe(id);
        expect(user.username).toBe(username);
        expect(user.password).toBe(password);
        expect(user.email).toBe(email);
    });

    it('should have properties of the correct type', () => {
        const user = new User('1', 'testuser', 'password123', 'testuser@example.com');

        expect(typeof user.id).toBe('string');
        expect(typeof user.username).toBe('string');
        expect(typeof user.password).toBe('string');
        expect(typeof user.email).toBe('string');
    });
});
