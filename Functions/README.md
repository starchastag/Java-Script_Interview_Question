Function:
        In JavaScript, a function is a block of reusable code designed to perform a specific task. Functions help organize code, make it modular, and avoid redundancy by allowing repeated use. They can take inputs, process data, and return an output.

Here's an overview of JavaScript functions, types, and some common interview questions with sample answers.

Basic Function Syntax

    function functionName(parameters) {
                    // function body
                    return result; // optional
            }

    Function Name: Identifies the function.
    Parameters: Inputs for the function, passed in as arguments when calling the function.
    Function Body: The code block containing the statements to execute.
    Return Statement: Optional; specifies the output of the function.



Function Types in JavaScript:  >>

Function Declaration:
                 Defined with the function keyword and can be hoisted (available before declaration).


    function add(a, b) {
    return a + b;
    }
Function Expression:
                 Assigned to a variable. It is not hoisted, so it cannot be used before its declaration.


    const multiply = function(a, b) {
        return a * b;
    };


Arrow Function:
             A concise syntax introduced in ES6. Does not have its own this context and is usually used for anonymous functions or shorter syntax.


    const divide = (a, b) => a / b;

Immediately Invoked Function Expression (IIFE): 
                    A function that executes as soon as it’s defined, often used to create a private scope.


        (function() {
                console.log("IIFE executed");
        })();


जावास्क्रिप्ट में, एक function एक reuseable कोड का ब्लॉक है जिसे एक specfic

कार्य करने के लिए डिज़ाइन किया गया है। फ़ंक्शन कोड को व्यवस्थित करने, इसे 

moduler बनाने और पुनरावृत्ति(repeted use) की अनुमति देकर पुनरावृत्ति

(redundency) से बचने में मदद करते हैं।

     वे इनपुट ले सकते हैं, डेटा को संसाधित कर सकते हैं, और एक आउटपुट वापस 

     कर सकते हैं। यहाँ जावास्क्रिप्ट फ़ंक्शनों, प्रकारों और कुछ सामान्य 

     साक्षात्कार प्रश्नों के साथ नमूना उत्तरों का एक अवलोकन है।



    function functionName ( parameters ) {
                // फ़ंक्शन बॉडी
                return result; // वैकल्पिक
        }

फ़ंक्शन नाम: फ़ंक्शन की पहचान करता है।

पैरामीटर: फ़ंक्शन के लिए इनपुट, जो फ़ंक्शन को कॉल करते समय argument के रूप में पास किए जाते हैं।

फ़ंक्शन बॉडी: वह कोड ब्लॉक जिसमें contain करने के लिए कथन होते हैं।

रिटर्न स्टेटमेंट: वैकल्पिक; फ़ंक्शन के आउटपुट को निर्दिष्ट करता है।



------------------Javascript Questions:

What are higher-order functions in JavaScript?

Answer:

A higher-order function is a function that can take other functions as arguments, return a function, or both. This concept allows functions to be more flexible and reusable.

Example:

function greet(name) {
    return `Hello, ${name}!`;
}

function processUser(name, callback) {
    return callback(name);
}

console.log(processUser("Alice", greet)); // Output: Hello, Alice!

2. What is the difference between call, apply, and bind?

Answer:

call: Invokes a function with a specified this context and individual arguments.

function introduce(greeting) {
    console.log(`${greeting}, I am ${this.name}`);
}

const person = { name: "Alice" };
introduce.call(person, "Hello"); // Output: Hello, I am Alice
apply: Similar to call, but takes arguments as an array.

    introduce.apply(person, ["Hi"]); // Output: Hi, I am Alice
bind: Returns a new function with the specified this context, but does not immediately invoke it.


    const introduceAlice = introduce.bind(person, "Hey");
    introduceAlice(); // Output: Hey, I am Alice

3. What is a closure in JavaScript?

Answer: A closure is a function that remembers its outer scope, even after that scope has finished executing. This allows functions to have private variables or maintain state.

Example:

function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
In this example, increment is a closure that retains access to the count variable, even after counter has executed.

4. How can you implement a debounce function in JavaScript?

Answer: A debounce function ensures that a function is not called too frequently, especially in response to rapid events like scrolling or resizing.

Example:

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage: debounce on a scroll event
window.addEventListener('scroll', debounce(() => {
    console.log("Scroll event handler called");
}, 300));

In this example, debounce waits for the specified delay before executing the function. If the event is triggered again within the delay period, the timer resets.

5. Explain the difference between function declaration and function expression.
Answer:

A function declaration is hoisted, meaning it can be called before it’s defined.


sayHello(); // Output: Hello

function sayHello() {
    console.log("Hello");
}

A function expression is assigned to a variable and is not hoisted, so it can only be used after its declaration.


const sayGoodbye = function() {
    console.log("Goodbye");
};

sayGoodbye(); // Output: Goodbye

6. How do you implement a recursive function?

Answer: A recursive function is a function that calls itself until it reaches a base condition.

Example: Factorial of a number

function factorial(n) {
    if (n === 0) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120
In this example, factorial calls itself with n - 1 until n is 0.

7. What is the purpose of the this keyword in JavaScript functions?
Answer: 
        The this keyword in JavaScript refers to the object that is executing the current function. Its value depends on the execution context in which the function is called. In regular functions, this refers to the calling object. In arrow functions, this is lexically bound to the context where the function was defined.

Example:

    const person = {
         name: "Alice",
         sayName: function() {
          console.log(this.name);
         }
    };

person.sayName(); // Output: Alice


















===========================================================================
-----------------javascript Functions Based 50+ Questions for 

Here's a list of 50 JavaScript function-based interview questions along with their answers. These questions cover a broad range of JavaScript topics, including closures, asynchronous programming, array manipulation, object handling, recursion, and higher-order functions, which are commonly explored in technical interviews.

-

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
        } 
2. Write a function to check if a string is a palindrome.

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
        function debounce(fn, delay) 
        {
                let timer;
                return function(...args) 
                {
                        clearTimeout(timer);
                        timer = setTimeout(() => fn(...args), delay);
                };
        }

10. Write a function to throttle another function.
    Answer:👉
    function throttle(fn, limit)
     {
        let inThrottle;
        return function(...args) 
        {
                if (!inThrottle) 
                {
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
                }.

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
    Answer:👉
                function isLeapYear(year) {
                return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
                }


            function isLeapYear(year) {
                return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
            }

