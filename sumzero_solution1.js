// o(n^2) quadratic time complexity
// Input = [-5, -4, -3, -2, 0, 2, 4, 6, 8]
// output = [-4,4]


function getSumZeroProblem(array) {
    for (let number of array) {
        for (let j = 0; j < array.length; j++) {
            if (number + array[j] === 0) {
                return [number, array[j]]
            }
        }
    }
}


const result = getSumZeroProblem([-5, -4, -3, -2, 0, 2, 4, 6, 8])

console.log(result) // [-4,4]

