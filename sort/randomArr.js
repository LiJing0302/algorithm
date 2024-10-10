genRandomArr = () => {
    const arr = new Array(100).fill(0).map(() => Math.floor(Math.random() * 100))
    return arr
}

module.exports = {
    genRandomArr
}