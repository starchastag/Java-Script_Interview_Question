-----------------javascript Functions Based 50+ Questions for 
Here's a list of 50 JavaScript function-based interview questions along with their answers. These questions cover a broad range of JavaScript topics, including closures, asynchronous programming, array manipulation, object handling, recursion, and higher-order functions, which are commonly explored in technical interviews.

--------------------------------------------------------------------------------------------------------
Question 1: Write a function that creates a counter using closures.
Question:
Write a function createCounter that returns a function that increments and returns a counter value each time it's called. The counter should start at 0.

Answer:

javascript
Copy code
function createCounter() {
    let count = 0; // Private variable
    
    return function() {
        count += 1;
        return count;
    };
}

// Example usage:
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
Explanation:
This demonstrates the concept of closures. The createCounter function returns an inner function that has access to the outer count variable, which it modifies each time it’s called.

Question 2: Write a function to flatten a nested array.
Question:
Write a function flattenArray that takes a nested array and returns a single-level array (flattened array).

Answer:

javascript
Copy code
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

// Example usage:
const nestedArray = [1, [2, [3, 4]], 5];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5]
Explanation:
This recursive solution uses Array.isArray to check for nested arrays and reduce to concatenate each element into a single-level array.

Question 3: Write a function that returns a debounced version of a given function.
Question:
Write a function debounce that takes a function fn and a delay delay, and returns a debounced version of fn. The debounced function should only execute once every delay milliseconds, no matter how many times it’s called.

Answer:

javascript
Copy code
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

// Example usage:
const log = () => console.log("Function executed");
const debouncedLog = debounce(log, 1000);

debouncedLog(); // Waits 1 second and then logs
debouncedLog(); // Restarts timer, waits another 1 second
Explanation:
The debounce function delays execution of fn by resetting the timer whenever the debounced function is called, effectively limiting the rate at which fn can be executed.

Question 4: Write a recursive function to calculate the factorial of a number.
Question:
Write a function factorial that calculates the factorial of a given non-negative integer n.

Answer:

javascript
Copy code
function factorial(n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}

// Example usage:
console.log(factorial(5)); // Output: 120
Explanation:
The function uses recursion with a base case (n <= 1) to stop the recursive calls. For each call, it multiplies n by factorial(n - 1) until reaching the base case.

Question 5: Write an async function that fetches data from an API.
Question:
Write an async function fetchData that takes a URL as a parameter and returns the JSON response data. Use fetch and handle any errors with a try-catch block.

Answer:

javascript
Copy code
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

// Example usage (uncomment below in a real environment with a valid URL):
// fetchData('https://api.example.com/data')
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));
Explanation:
The fetchData function uses async/await to handle asynchronous API calls. The try-catch block is used to handle any errors that may occur, such as network issues or invalid responses.

1. Write a function to reverse a string.
javascript
Copy code
function reverseString(str) {
    return str.split("").reverse().join("");
}
2. Write a function to check if a string is a palindrome.
javascript
Copy code
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
3. Write a function to find the factorial of a number using recursion.
javascript
Copy code
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
4. Write a function to flatten a nested array.
javascript
Copy code
function flattenArray(arr) {
    return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}
5. Write a function to find the maximum element in an array.
javascript
Copy code
function findMax(arr) {
    return Math.max(...arr);
}
6. Write a function to remove duplicates from an array.
javascript
Copy code
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
7. Write a function that returns the nth Fibonacci number.
javascript
Copy code
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
8. Write a function to sort an array in ascending order.
javascript
Copy code
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
9. Write a function to debounce another function.
javascript
Copy code
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}
10. Write a function to throttle another function.
javascript
Copy code
function throttle(fn, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
11. Write a function to check if a number is prime.
javascript
Copy code
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
12. Write a function to merge two sorted arrays into one sorted array.
javascript
Copy code
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
13. Write a function to capitalize the first letter of each word in a sentence.
javascript
Copy code
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
14. Write a function to count the occurrences of each character in a string.