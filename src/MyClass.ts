export default class MyClass {

    constructor(private _user: string | undefined, private _password: string | undefined,
                private _race: string | undefined, private _job: string | undefined,
                private _gender: string | undefined, private _hairColor: string | undefined,
                private _eyeColor: string | undefined ){}

    public get password(): string | undefined{
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get user(): string | undefined {
        return this._user;
    }
    public set user(value: string) {
        this._user = value;
    }

    public get race(): string | undefined{
        return this._race;
    }
    public set race(value: string) {
        this._race = value;
    }

    public get job(): string | undefined{
        return this._job;
    }
    public set job(value: string) {
        this._job = value;
    }

    public get gender(): string | undefined{
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }

    public get hairColor(): string | undefined{
        return this._hairColor;
    }
    public set hairColor(value: string) {
        this._hairColor = value;
    }

    public get eyeColor(): string | undefined{
        return this._eyeColor;
    }
    public set eyeColor(value: string) {
        this._eyeColor = value;
    }
    
}

