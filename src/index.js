module.exports = function reverse(n) {
    return parseInt(String(n)
        .split("")
        .reverse()
        .join(""), 10);
}