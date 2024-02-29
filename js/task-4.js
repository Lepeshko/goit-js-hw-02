function getShippingCost(country) { //перевіряє можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch. Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

let ShippingCost;
switch (country.toLowerCase()) {
    case "china":
        ShippingCost = 100;
        break;
    case "chile":
        ShippingCost = 250;
        break;
    case "australia":
    ShippingCost = 170;    
        break;
    case "jamaica":
        ShippingCost = 120;
        break;
    default:
return "Sorry, there is no delivery to your country"

}

return `Shipping to ${country} will cost ${ShippingCost} credits`;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
