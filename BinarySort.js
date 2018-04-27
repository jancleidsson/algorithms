function binarySort(array) {

    let majorElements = [];
    let minorElements = [];
    let result = new Array(array.length);

    array.forEach(element => {
        for (let index = 0; index < array.length; index++) {
            (element > array[index]) ? majorElements.push(element) : minorElements.push(element);
        }
        if (majorElements.length >= 0) {
            result[majorElements.length] = element;
            majorElements = [];
            minorElements = [];
        }
    });

    return result;
 }

let array = [10, 13, 50, 5, 7, 6, 35, 4, 16, 10];
console.log(binarySort(array));
