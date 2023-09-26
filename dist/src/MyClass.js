export default class MyClass {
    constructor(_user, _password, _race, _job, _gender, _hairColor, _eyeColor) {
        this._user = _user;
        this._password = _password;
        this._race = _race;
        this._job = _job;
        this._gender = _gender;
        this._hairColor = _hairColor;
        this._eyeColor = _eyeColor;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get race() {
        return this._race;
    }
    set race(value) {
        this._race = value;
    }
    get job() {
        return this._job;
    }
    set job(value) {
        this._job = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get hairColor() {
        return this._hairColor;
    }
    set hairColor(value) {
        this._hairColor = value;
    }
    get eyeColor() {
        return this._eyeColor;
    }
    set eyeColor(value) {
        this._eyeColor = value;
    }
}
//# sourceMappingURL=MyClass.js.map