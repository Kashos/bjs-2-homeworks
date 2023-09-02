function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((number, index) => number === arr2[index])) {
        return true;
    } else {
        return false;
    }
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(users => users.gender === gender).map(users => users.age).reduce((age, item, index, users) => {
        age += item;
        if (index === users.length - 1) {
            return age / users.length;
        }
        return age
    }, 0);
    return result;
}