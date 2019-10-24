const Item = require('./item');

class ItemBag extends Item {
    
    constructor(name, mass, cost, capacity) {
        super(name);
        this.ownMass = mass;
        this.ownCost = cost;
        this.capacity = capacity;
        this.contents = [];
    }

    // Polymorphic properties - depends on the masses of the child items
    get mass() {
        return this.contents.reduce((acc, val) => acc + val.mass, this.ownMass);
    }

    get cost() {
        return this.contents.reduce((acc, val) => acc + val.cost, this.ownCost);
    }

    canFit(item) {
        if (item instanceof ItemBag) {
            return false;
        }
        const occupiedMass = this.mass - this.ownMass;
        return this.capacity - occupiedMass > item.mass;
    }

    put(item) {
        if (!(item instanceof Item)) {
            throw new Error("You can only put items in bags!");
        }
        if (this.canFit(item)) {
            this.contents.push(item);
        } else {
            throw new Error("No more space!");
        }
    }
}

module.exports = ItemBag;
