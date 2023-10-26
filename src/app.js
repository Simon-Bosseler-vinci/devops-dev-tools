console.log('Hello world');

function checkNames(names) {
    const updatedNames = [];
    names.forEach(name => {
        if (name.indexOf('X') === -1) {
            updatedNames.push(name)
        }
    });
    return updatedNames;
}
module.exports = checkNames;