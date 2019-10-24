const Item = require('./item');

class ItemMeleeWeapon extends Item {

    constructor(name, mass, cost, damage) {
        super(name, mass, cost);
        this.damage = damage;
    }

}

module.exports = ItemMeleeWeapon;
