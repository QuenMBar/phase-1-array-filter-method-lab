// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driverName => driverName.toUpperCase() === name.toUpperCase());
}
function fuzzyMatch(drivers, name) {
    return drivers.filter(driverName => driverName.toUpperCase()[0] === name.toUpperCase()[0]);
}
function matchName(drivers, name) {
    return drivers.filter(driverInfo => driverInfo.name.toUpperCase() === name.toUpperCase());
}
