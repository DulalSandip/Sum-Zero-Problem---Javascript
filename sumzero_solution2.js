// o(n) linear time complexity
// Input = [-5, -4, -3, -2, 0, 2, 4, 6, 8]
// output = [-4,4]
function getSumZeroProblem(array) {
    let left = 0;
    let right = array.length - 1

    while (left < right) {
        let sum = array[left] + array[right]
        if (sum === 0) {
            return [array[left], array[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

const result = getSumZeroProblem([-5, -4, -3, -2, 0, 2, 4, 6, 8])

console.log(result) // [-4,4]