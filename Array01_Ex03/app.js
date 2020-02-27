let str = "The Quick Brown Fox";
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lower = 'abcdefghijklmnopqrstuvwxyz';
let result = [];

for (x = 0; x < str.length; x++) {
    if (upper.indexOf(str[x]) !== -1) {
        result.push(str[x].toLowerCase());
    } else if (lower.indexOf(str[x]) !== -1) {
        result.push(str[x].toUpperCase());
    } else {
        result.push(str[x]);
    }
}
document.write(result.join(""));