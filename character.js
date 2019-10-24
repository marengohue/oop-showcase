class Character {

    constructor(name) {
        this.name = name;
        this.maxHp = 300;
        this.maxMana = 100;
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
        weapon.setOwner(this);
    }

}

module.exports = Character;
