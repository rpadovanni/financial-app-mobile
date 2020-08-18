export interface ILoggedUser {
    token: string;
    user: IUser;
}

export interface IUser {
    name: string;
    email: string;
}