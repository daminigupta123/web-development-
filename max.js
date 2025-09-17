function maxPairSum(arr) {
    if (arr.length < 2) {
        return null;  // Not enough elements to form a pair
    }
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    // Add the first two elements (which are the largest)
    return arr[0] + arr[1];
}
// Example usage:
let numbers = [5, 9, 1, 7, 3];
let maxSum = maxPairSum(numbers);
console.log("Maximum sum of two elements is:", maxSum);