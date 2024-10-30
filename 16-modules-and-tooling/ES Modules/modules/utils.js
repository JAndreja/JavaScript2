export function capitalizeWords (str) {
    return str
     .toLowerCase()
     .split(' ')
     .map(word => word[0].toUpperCase() + word.substring(1))
     .join(' ');
}

export function makeMoney(amount) {
    return `$${amount}`;
}

//export { capitalizeWords, makeMoney };