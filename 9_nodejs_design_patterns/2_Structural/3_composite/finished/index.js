var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

// console.log( 'boots total: ', `$${boots.total}` );
// boots.print();
// sneakers.print();

var group_shoes = new CatalogGroup('Shoes & Such', [ boots, sneakers, flipFlops]);
// console.log( 'Shoes total: ', `$${group_shoes.total}` );
// group_shoes.print();

var group_for_food = new CatalogGroup('Food for while you try on clothes', [
    new CatalogItem('MilkShake', 5.99),
    new CatalogItem('French Fries', 3.99),
    new CatalogItem('Burger', 4.99),
]);
var keyChain = new CatalogItem('Key Chain', 0.99);

var shopping_group = new CatalogGroup('Shopping Group', [
    group_for_food, keyChain, group_shoes
]);
console.log('Shopping Group Total: ', `$${shopping_group.total}`);
shopping_group.print();
