/**
 * This function will format the price to currency IDR
 * @param {Number} num 
 */
export function currency(num: Number) {
    if (num !== undefined) {
        let NumberFormat = num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        return 'Rp.' + NumberFormat + ',00';
    }
    return 'Rp.0,00';
}

/**
 * This function will limit the value of description base on max
 * @param {String} description 
 * @param {Number} totalChar 
 */
export function maxDescription(description: String, totalChar: Number) {
    const maxChar = 114
    return description.substring(0, maxChar) + `${totalChar > maxChar ? '...' : ''}`;
}