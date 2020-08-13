export default function signIn() {
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
