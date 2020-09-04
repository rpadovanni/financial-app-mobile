import { ILoggedUser } from '../interfaces/IUser';
import api from './api';

export function signIn(): Promise<ILoggedUser> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'hauehuasuhhuaehuhuadfhu',
                user: {
                    userId: 1,
                    name: 'Rafael Padovani',
                    email: 'r.padovanni@hotmail.com',
                },
            });
        }, 1000);
    });
}
