function binarySort(array) {

    let minElements = [];
    let result = [];
    result.length = array.length;

    array.forEach(element => {
        for (let index = 0; index < array.length; index++) {
            if (element > array[index]) {
                minElements.push(element);
            } 
        }   

        if (minElements.length >= 0) {
            result[minElements.length] = element;
        }

        minElements = [];
    });

    return result;
 }

let array = [10, 13, 50, 5, 7, 6, 35, 4, 16, 10, 16];
console.log(binarySort(array));
