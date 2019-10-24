// Old (ES5) way of defining a class

function Item(name, mass, cost) {
    // Here we encapsulate some data (fields)
    this.name = name;
    this.mass = mass;
    this.cost = cost;
}

// As well as some behaviour (methods)
Item.prototype.setOwner = function(owner) {
    this.owner = owner;
}

// Nodejs module exports
module.exports = Item;
