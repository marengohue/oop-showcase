
const Potion = require('./potion');
const ItemMagicWeapon = require('./magic-weapon');
const ItemBag = require('./bag');

const Character = require('./character');

const player = new Character('Player');
const potionSmall = new Potion('Small Healing Flask', 10);
const potionLarge = new Potion('Large Healing Flask', 50);
const magicSword = new ItemMagicWeapon('Sword of Stars', 100);
const bag = new ItemBag('Leather Bag of Holding', 1, 20, 500);

bag.put(potionSmall);
bag.put(potionLarge);
bag.put(magicSword);

player.equipWeapon(magicSword);

console.log("DONE");