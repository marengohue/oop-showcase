const Item = require('./item');

class ItemPotion extends Item {

    constructor(name, healing) {
        // NOTE THE SUPER CONSTRUCTOR CALL!
        super(name, 10, healing * 10);
        this.healing = healing;
    }

}

module.exports = ItemPotion;