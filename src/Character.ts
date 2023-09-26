export default class Character {
    public inventory: string[] = []; // Array to store character inventory

    public selected: boolean = false; // Add this line to define the selected property

    constructor(public name: string, public race: string, public job: string, 
                public gender: string, public hairColor: string, public eyeColor: string) {}

    addToInventory(item: string) {
        this.inventory.push(item);
    }

    private _spells: string[] = [];
    private _weapons: string[] = [];

    // Getter for spells
    public get spells(): string[] {
        return this._spells;
    }

    // Getter for weapons
    public get weapons(): string[] {
        return this._weapons;
    }

    // Method to add a spell to the inventory
    public addSpell(spell: string) {
        this._spells.push(spell);
    }

    // Method to add a weapon to the inventory
    public addWeapon(weapon: string) {
        this._weapons.push(weapon);
    }
}
