export default class Character {
    constructor(name, race, job, gender, hairColor, eyeColor) {
        this.name = name;
        this.race = race;
        this.job = job;
        this.gender = gender;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.inventory = []; // Array to store character inventory
        this.selected = false; // Add this line to define the selected property
        this._spells = [];
        this._weapons = [];
    }
    addToInventory(item) {
        this.inventory.push(item);
    }
    // Getter for spells
    get spells() {
        return this._spells;
    }
    // Getter for weapons
    get weapons() {
        return this._weapons;
    }
    // Method to add a spell to the inventory
    addSpell(spell) {
        this._spells.push(spell);
    }
    // Method to add a weapon to the inventory
    addWeapon(weapon) {
        this._weapons.push(weapon);
    }
}
//# sourceMappingURL=Character.js.map