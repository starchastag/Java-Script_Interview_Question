<<<<<<< HEAD
                 JavaScript Array Methods

---

$$
.push() - Adds one or more elements to the end of an array.

.pop() - Removes the last element from an array.

.shift() - Removes the first element from an array.

.unshift() - Adds one or more elements to the start of an array.

.concat() - Merges two or more arrays.

.slice() - Returns a shallow copy of a portion of an array.

.splice() - Adds/removes elements from an array at a specific index.

.indexOf() - Finds the index of the first occurrence of a specified element.

.lastIndexOf() - Finds the index of the last occurrence of a specified element.

.forEach() - Executes a function for each array element.

.map() - Creates a new array with the results of calling a function on every element.

.filter() - Creates a new array with elements that pass the test in a provided function.

.reduce() - Executes a reducer function on the array to produce a single output value.

.some() - Checks if at least one element passes a test.

.every() - Checks if every element passes a test.

.find() - Returns the first element that satisfies a condition.

.findIndex() - Returns the index of the first element that satisfies a condition.

.includes() - Checks if an array includes a certain element.

.sort() - Sorts elements in place and returns the sorted array.

.reverse() - Reverses the order of the elements in an array.

.join() - Joins all elements of an array into a string.

.flat() - Flattens nested arrays up to a specified depth.

.flatMap() - Maps each element and then flattens the result into a new array.

.fill() - Fills elements in an array with a static value.

.from() - Creates an array from an array-like or iterable object.
$$

==========================================================================

                JavaScript Object Methods

--------------------------------------------------------------------------
$$

Object.keys() - Returns an array of an object’s keys.

Object.values() - Returns an array of an object’s values.

Object.entries() - Returns an array of [key, value] pairs.

Object.assign() - Copies properties from one or more source objects to a target object.

Object.freeze() - Freezes an object, making it immutable.

Object.seal() - Seals an object, preventing the addition of new properties.

Object.create() - Creates a new object with a specified prototype.

Object.hasOwnProperty() - Checks if a property exists directly on an object.

Object.is() - Compares two values for strict equality, handling special cases like NaN.

Object.getPrototypeOf() - Returns the prototype of an object.

Object.setPrototypeOf() - Sets the prototype of an object.

Object.defineProperty() - Adds or modifies a property on an object.

Object.defineProperties() - Adds or modifies multiple properties on an object.

Object.getOwnPropertyDescriptor() - Returns the descriptor of a specific property.

Object.getOwnPropertyDescriptors() - Returns descriptors for all properties of an object.

Object.getOwnPropertyNames() - Returns an array of all property names of an object.

Object.getOwnPropertySymbols() - Returns an array of all symbol properties.

Object.isFrozen() - Checks if an object is frozen.

Object.isSealed() - Checks if an object is sealed.

Object.isExtensible() - Checks if an object can have new properties added.

Object.preventExtensions() - Prevents the addition of new properties to an object.

$$

==========================================================================

                50 JavaScript Interview Questions

---

**$$
Explain the difference between == and === in JavaScript.


What are JavaScript closures, and how do they work?

What is the difference between var, let, and const?

Explain how the this keyword works in JavaScript.

What is the difference between null and undefined?

How does prototypal inheritance work in JavaScript?

How does the async and await syntax work in JavaScript?

Explain how call(), apply(), and bind() work.

What are arrow functions, and how do they differ from regular functions?

Explain how JavaScript's event loop works.

How do map() and forEach() differ?

What is the purpose of Object.freeze()?

How can you create private variables in JavaScript?

What is a promise in JavaScript?

Explain the concept of "hoisting."

What is the purpose of use strict in JavaScript?

What are the main differences between deep copy and shallow copy?

Explain the difference between synchronous and asynchronous code.

How can you convert a string to a number in JavaScript?

What is the purpose of Object.assign()?

Explain how reduce() works in JavaScript.

What is a pure function in JavaScript?

How do JavaScript's setTimeout and setInterval work?

How does destructuring assignment work in JavaScript?

What is the difference between Function and class syntax in JavaScript?

How do you remove duplicates from an array in JavaScript?

Explain the purpose of the prototype property in JavaScript.

What are template literals, and how do they work?

How can you clone an object in JavaScript?

Explain the difference between mutable and immutable objects.

What is an Immediately Invoked Function Expression (IIFE)?

How does the spread operator work in JavaScript?

How can you merge two arrays in JavaScript?

What is the difference between .map() and .filter()?

Explain how the Array.sort() method works.

How do you check if an object has a property in JavaScript?

What is the purpose of the Symbol type in JavaScript?

Explain event delegation in JavaScript.

How does Array.find() differ from Array.filter()?

What is the purpose of Object.entries()?

How does typeof differ from instanceof?

What are WeakMap and WeakSet in JavaScript?

How does JavaScript handle automatic type conversion?

What is the difference between slice() and splice()?

Explain what a callback function is.

How can you check if an array is empty in JavaScript?

What is the purpose of Object.keys()?

How can you prevent modifications to an object in JavaScript?

What are higher-order functions in JavaScript?

Explain the purpose of the Array.flatMap() method

$$**

Here are Detailed about answer :


        1. Difference between == and ===
            == (loose equality): Checks for equality with type coercion, converting data types if needed.
            Example: 5 == "5" is true.
            === (strict equality): Checks for equality without type coercion, ensuring both value and type match.
            Example: 5 === "5" is false.

        2. JavaScript Closures
        A closure is a function that has access to its outer (enclosing) function's variables, even after that function has finished executing. Closures are created when a function is defined inside another function and references variables from the outer function's scope.


                function outer() {
                let count = 0;
                return function inner() {
                    count++;
                    console.log(count);
                };
                }
                const counter = outer();
                counter(); // 1
                counter(); // 2
        3. Difference between var, let, and const
        var: Function-scoped, hoisted, and can be redeclared.
        let: Block-scoped, not hoisted (in the same way as var), and cannot be redeclared in the same scope.
        const: Block-scoped, must be initialized, and cannot be reassigned.

        4. How this Works in JavaScript
        this refers to the current execution context. In the global scope, this refers to the global object (e.g., window in a browser).
        In a method, this refers to the object the method is called on.
        Arrow functions do not have their own this; they inherit this from their enclosing context.

        5. Difference between null and undefined
        null: An intentional absence of value, often assigned explicitly.
        undefined: Indicates a variable has been declared but has not yet been assigned a value.

        6. Prototypal Inheritance in JavaScript
        In JavaScript, objects inherit properties and methods from other objects via prototypes. Each object has a hidden [[Prototype]] that links to another object, allowing property lookup to follow the prototype chain until a property is found.

                function Animal(name) {
                this.name = name;
                }
                Animal.prototype.speak = function() {
                console.log(this.name + ' makes a noise.');
                };
                const dog = new Animal('Dog');
                dog.speak(); // "Dog makes a noise."

        7. async and await Syntax
        async: Declares an asynchronous function, which always returns a promise.
        await: Pauses execution in an async function until a promise is resolved, making code more readable.
      
            async function fetchData() {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
            }

        8. call(), apply(), and bind()
        call(): Calls a function with a specific this value and arguments provided individually.
        apply(): Calls a function with a specific this value and arguments provided as an array.
        bind(): Returns a new function with a specific this value and, optionally, initial arguments.
   
            function greet(greeting) {
            console.log(greeting + ', ' + this.name);
            }
            const person = { name: 'Alice' };
            greet.call(person, 'Hello'); // "Hello, Alice"

        9. Arrow Functions vs. Regular Functions
        Arrow functions:

        Do not have their own this context.
        Cannot be used as constructors.
        Have implicit return for single expressions.
        const add = (a, b) => a + b;

        10. JavaScript's Event Loop
        JavaScript uses an event loop to handle asynchronous callbacks. The event loop continually checks the call stack and the message queue, executing tasks from the queue when the stack is clear.

        11. Difference between map() and forEach()
        map(): Returns a new array with the results of calling a function on each element.
        forEach(): Executes a function on each element without returning a new array.
        12. Purpose of Object.freeze()
        Object.freeze() makes an object immutable, preventing any modifications to properties or values.

        13. Creating Private Variables
        Private variables can be created using closures or # syntax for private class fields.

        function createCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
        }
        const counter = createCounter();

        14. JavaScript Promises
        A promise represents a value that will be available in the future. It can be in one of three states: pending, fulfilled, or rejected.

        15. Hoisting
        JavaScript hoists variable and function declarations to the top of their scope, meaning they can be referenced before being declared.

        16. Purpose of "use strict"
        "use strict" enforces a stricter parsing and error handling of JavaScript, preventing certain actions like undeclared variables.

        17. Deep Copy vs. Shallow Copy
        Shallow copy: Only copies the top-level properties, so nested objects are still referenced.
        Deep copy: Recursively copies all levels, creating independent copies of nested objects.

        18. Synchronous vs. Asynchronous Code
        Synchronous: Executes line by line.
        Asynchronous: Executes tasks in the background, allowing other tasks to run in parallel.

        19. Converting a String to a Number
        Number(), parseInt(), parseFloat(), or the unary + operator can convert strings to numbers.

        20. Purpose of Object.assign()
        Copies properties from one or more source objects to a target object.

        21. How reduce() Works
        reduce() accumulates values by applying a function to each element in an array, resulting in a single output.
        const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0); // 10

        22. Pure Function
        A pure function:

        Returns the same output for the same inputs.
        Has no side effects.

        23. setTimeout and setInterval
        setTimeout(): Executes a function after a specified delay.
        setInterval(): Executes a function repeatedly at specified intervals.

        24. Destructuring Assignment
        Allows extracting values from arrays or properties from objects.

        const [a, b] = [1, 2];
        const { name, age } = { name: 'Alice', age: 25 };

        25. Function vs. Class Syntax
        Classes are syntactical sugar over constructor functions, providing a clearer structure for creating objects.

        26. Removing Duplicates from an Array
       
        const unique = [...new Set([1, 2, 2, 3])];
        27. Prototype Property
        The prototype property allows adding methods and properties to all instances of a function.

        28. Template Literals
        Template literals allow embedding expressions within strings using ${expression} syntax.

        29. Cloning an Object
        Use Object.assign() or the spread operator { ...obj } for a shallow clone.

        30. Mutable vs. Immutable Objects
        Mutable objects can be modified after creation, while immutable objects cannot.

        31. IIFE (Immediately Invoked Function Expression)
        An IIFE is a function that runs immediately after it’s defined.

        32. Spread Operator
        Expands iterable elements into individual elements.

        33. Merging Arrays

        const merged = [...array1, ...array2];

        34. Difference between .map() and .filter()

        map(): Transforms each element.
        filter(): Returns elements that match a condition.

        35. How Array.sort() Works

        Array.sort() sorts elements alphabetically by default, requiring a comparator function for numerical sorting.

        36. Checking if an Object has a Property

        Use hasOwnProperty() or the in operator.

        37. Purpose of Symbol

        Symbol creates unique identifiers for properties to prevent conflicts.

        38. Event Delegation

        Event delegation is a technique where a single event listener is added to a parent element to handle events from multiple child elements.

        39. Difference between Array.find() and Array.filter()

        find(): Returns the first element matching a condition.
        filter(): Returns all elements matching a condition.

        40. Purpose of Object.entries()
        Returns an array of [key, value] pairs from an object.

        41. typeof vs. instanceof

        typeof: Checks the type of a variable.
        instanceof: Checks if an object is an instance of a specific constructor.

        42. WeakMap and WeakSet

        Weak collections that allow garbage collection of items without strong references.

        43. Automatic Type Conversion

        JavaScript automatically converts types when needed, known as type coercion.


---

=======
-----------------javascript Functions Based 50+ Questions for 
Here's a list of 50 JavaScript function-based interview questions along with their answers. These questions cover a broad range of JavaScript topics, including closures, asynchronous programming, array manipulation, object handling, recursion, and higher-order functions, which are commonly explored in technical interviews.
=======================================================================================================
--------------------------------------------------------------------------------------------------------
>>>>>>> dbb19076008a45530e8d13293e898110d69c4ba4
Question 1: Write a function that creates a counter using closures.
⤵️
Write a function createCounter that returns a function that increments and returns a counter value each time it's called. The counter should start at 0.

Answer: ⬇️

function createCounter() {
let count = 0;
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

Explanation:👉
This demonstrates the concept of closures. The createCounter function returns an inner function that has access to the outer count variable, which it modifies each time it’s called.

Question 2: Write a function to flatten a nested array.
⤵️
Write a function flattenArray that takes a nested array and returns a single-level array (flattened array).

Answer: ⬇️

function flattenArray(arr) {
return arr.reduce((flat, toFlatten) => {
return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
}, []);
}

// Example usage:
const nestedArray = [1, [2, [3, 4]], 5];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5]

Explanation:👉
This recursive solution uses Array.isArray to check for nested arrays and reduce to concatenate each element into a single-level array.

Question 3: Write a function that returns a debounced version of a given function.

Write a function debounce that takes a function fn and a delay delay, and returns a debounced version of fn. The debounced function should only execute once every delay milliseconds, no matter how many times it’s called.

Answer:

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

Explanation:👉
The debounce function delays execution of fn by resetting the timer whenever the debounced function is called, effectively limiting the rate at which fn can be executed.

Question 4: Write a recursive function to calculate the factorial of a number.

Write a function factorial that calculates the factorial of a given non-negative integer n.

Answer:

function factorial(n) {
if (n <= 1) return 1; // Base case
return n \* factorial(n - 1); // Recursive case
}

// Example usage:
console.log(factorial(5)); // Output: 120

Explanation:👉
The function uses recursion with a base case (n <= 1) to stop the recursive calls. For each call, it multiplies n by factorial(n - 1) until reaching the base case.

Question 5: Write an async function that fetches data from an API.

Write an async function fetchData that takes a URL as a parameter and returns the JSON response data. Use fetch and handle any errors with a try-catch block.

Answer:

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
// .then(data => console.log(data))
// .catch(error => console.error("Error:", error));

Explanation:👉
The fetchData function uses async/await to handle asynchronous API calls. The try-catch block is used to handle any errors that may occur, such as network issues or invalid responses.

1. Write a function to reverse a string.

Answer:👉
function reverseString(str) {
return str.split("").reverse().join("");
} 2. Write a function to check if a string is a palindrome.

Answer:👉
function isPalindrome(str) {
const reversed = str.split("").reverse().join("");
return str === reversed;
}

3. Write a function to find the factorial of a number using recursion.

Answer:👉
function factorial(n) {
return n <= 1 ? 1 : n \* factorial(n - 1);
}

4. Write a function to flatten a nested array.

Answer:👉
function flattenArray(arr) {
return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}

5. Write a function to find the maximum element in an array.
   Answer:👉
   function findMax(arr) {
   return Math.max(...arr);
   }
6. Write a function to remove duplicates from an array.
   Answer:👉
   function removeDuplicates(arr) {
   return [...new Set(arr)];
   }

7. Write a function that returns the nth Fibonacci number.
   Answer:👉
   function fibonacci(n) {
   if (n <= 1) return n;
   return fibonacci(n - 1) + fibonacci(n - 2);
   }
8. Write a function to sort an array in ascending order.
   Answer:👉
   function sortArray(arr) {
   return arr.sort((a, b) => a - b);
   }
9. Write a function to debounce another function.
   Answer:👉
   function debounce(fn, delay) {
   let timer;
   return function(...args) {
   clearTimeout(timer);
   timer = setTimeout(() => fn(...args), delay);
   };
   }
10. Write a function to throttle another function.
    Answer:👉
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
    Answer:👉
    function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
    }
    return true;
    }
12. Write a function to merge two sorted arrays into one sorted array.
    Answer:👉
    function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
    }
13. Write a function to capitalize the first letter of each word in a sentence.
    Answer:👉
    function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
    }
14. Write a function to count the occurrences of each character in a string.
    Answer:👉
    function charCount(str) {
    const count = {};
    for (let char of str) {
    count[char] = (count[char] || 0) + 1;
    }
    return count;
    }
15. Write a function to find the missing number in a sequence.
    Answer:👉
    function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sum = (n \* (n + 1)) / 2;
    const actualSum = arr.reduce((a, b) => a + b, 0);
    return sum - actualSum;
    }
16. Write a function to shuffle an array.
    Answer:👉
    function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() \* (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
    }
17. Write a function to calculate the sum of an array.
    Answer:👉
    function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
    }
18. Write a function to count vowels in a string.
    Answer:👉
    function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
    }
19. Write a function to convert Celsius to Fahrenheit.
    Answer:👉
    function celsiusToFahrenheit(celsius) {
    return (celsius \* 9) / 5 + 32;
    }
20. Write a function to remove falsy values from an array.
    Answer:👉
    function removeFalsy(arr) {
    return arr.filter(Boolean);
    }
21. Write a function to reverse an array in place.
    Answer:👉
    function reverseArray(arr) {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
    }
22. Write a function that returns the largest word in a sentence.
    Answer:👉
    function largestWord(str) {
    return str.split(" ").reduce((longest, word) => (word.length > longest.length ? word : longest), "");
    }
23. Write a function to generate a random integer within a range.
    Answer:👉
    function randomInt(min, max) {
    return Math.floor(Math.random() \* (max - min + 1)) + min;
    }
24. Write a function to clone an object.
    Answer:👉
    function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
    }
25. Write a function to check if two arrays are equal.
    Answer:👉
    function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
    }
26. Write a function to get unique values from an array.
    Answer:👉
    function uniqueValues(arr) {
    return [...new Set(arr)];
    }
27. Write a function to rotate an array by k elements.
    Answer:👉
    function rotateArray(arr, k) {
    k %= arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
    }
28. Write a function to convert a camelCase string to snake*case.
    Answer:👉
    function camelToSnake(str) {
    return str.replace(/([A-Z])/g, "*$1").toLowerCase();
    }
29. Write a function to calculate the power of a number using recursion.
    Answer:👉
    function power(base, exponent) {
    return exponent === 0 ? 1 : base \* power(base, exponent - 1);
    }
30. Write a function to check if a given year is a leap year.
<<<<<<< HEAD
    Answer:👉
    function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
=======
Answer:👉
            function isLeapYear(year) {
                return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
            }
>>>>>>> dbb19076008a45530e8d13293e898110d69c4ba4
