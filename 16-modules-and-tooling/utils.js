function capitalizeWords (str) {
    return str
     .toLowerCase()
     .split(' ')
     .map(word => word[0].toUpperCase() + word.substring(1))
     .join(' ');
}

function makeMoney(amount) {
    return `$${amount}`;
}


module.exports = {capitalizeWords, makeMoney};