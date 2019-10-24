const ItemMeleeWeapon = require('./melee-weapon');

class ItemMagicWeapon extends ItemMeleeWeapon {

    constructor(name, mana) {
        super(name, 0, mana * 5, 100 + mana * 10);
        this.mana = mana;
    }

    // Polymorphic call - does the same as the base class BUT MORE!
    setOwner(owner) {
        // Note the SUPER call
        super.setOwner(owner);
        owner.maxMana += this.mana;
    }

}

module.exports = ItemMagicWeapon;
