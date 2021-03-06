import { ILoggedUser } from '../interfaces/IUser';

export function signIn(): Promise<ILoggedUser> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'hauehuasuhhuaehuhuadfhu',
                user: {
                    name: 'Rafael Padovani',
                    email: 'r.padovanni@hotmail.com',
                },
            });
        }, 1000);
    });
}
