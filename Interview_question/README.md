==========================================================================

                50 JavaScript Interview Questions

Some Basic Questions For Freser : -->

1. Difference between == and ===:

            == (loose equality): Checks for equality with type coercion, converting data types if needed.
            Example: 5 == "5" is true.
            === (strict equality): Checks for equality without type coercion, ensuring both value and type match.
            Example: 5 === "5" is false.

 2. JavaScript Closures:

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
3. Difference between var, let, and const:

        var: Function-scoped, hoisted, and can be redeclared.
        let: Block-scoped, not hoisted (in the same way as var), and cannot be redeclared in the same scope.
        const: Block-scoped, must be initialized, and cannot be reassigned.

4. How this Works in JavaScript:

        this refers to the current execution context. In the global scope, this refers to the global object (e.g., window in a browser).
        In a method, this refers to the object the method is called on.
        Arrow functions do not have their own this; they inherit this from their enclosing context.

5. Difference between null and undefined:

        null: An intentional absence of value, often assigned explicitly.
        undefined: Indicates a variable has been declared but has not yet been assigned a value.

6. Prototypal Inheritance in JavaScript:

        In JavaScript, objects inherit properties and methods from other objects via prototypes. Each object has a hidden [[Prototype]] that links to another object, allowing property lookup to follow the prototype chain until a property is found.

                function Animal(name) {
                this.name = name;
                }
                Animal.prototype.speak = function() {
                console.log(this.name + ' makes a noise.');
                };
                const dog = new Animal('Dog');
                dog.speak(); // "Dog makes a noise."

7. async and await Syntax:

        async: Declares an asynchronous function, which always returns a promise.
        await: Pauses execution in an async function until a promise is resolved, making code more readable.
      
            async function fetchData() {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
            }

8. call(), apply(), and bind():

        call(): Calls a function with a specific this value and arguments provided individually.
        apply(): Calls a function with a specific this value and arguments provided as an array.
        bind(): Returns a new function with a specific this value and, optionally, initial arguments.
   
            function greet(greeting) {
            console.log(greeting + ', ' + this.name);
            }
            const person = { name: 'Alice' };
            greet.call(person, 'Hello'); // "Hello, Alice"

9. Arrow Functions vs. Regular Functions:

        Arrow functions:

                Do not have their own this context.
                Cannot be used as constructors.
                Have implicit return for single expressions.
                const add = (a, b) => a + b;

10. JavaScript's Event Loop:

        JavaScript uses an event loop to handle asynchronous callbacks. The event loop continually checks the call stack and the message queue, executing tasks from the queue when the stack is clear.

11. Difference between map() and forEach():

        map(): Returns a new array with the results of calling a function on each element.
        forEach(): Executes a function on each element without returning a new array.

12. Purpose of Object.freeze():

        Object.freeze() makes an object immutable, preventing any modifications to properties or values.

13. Creating Private Variables:

        Private variables can be created using closures or # syntax for private class fields.

        function createCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
        }
        const counter = createCounter();

14. JavaScript Promises:

        A promise represents a value that will be available in the future. It can be in one of three states: pending, fulfilled, or rejected.

15. Hoisting:

        JavaScript hoists variable and function declarations to the top of their scope, meaning they can be referenced before being declared.

16. Purpose of "use strict":

        "use strict" enforces a stricter parsing and error handling of JavaScript, preventing certain actions like undeclared variables.

 17. Deep Copy vs. Shallow Copy:

        Shallow copy: Only copies the top-level properties, so nested objects are still referenced.
        Deep copy: Recursively copies all levels, creating independent copies of nested objects.

18. Synchronous vs. Asynchronous Code:

        Synchronous: Executes line by line.
        Asynchronous: Executes tasks in the background, allowing other tasks to run in parallel.

19. Converting a String to a Number:

        Number(), parseInt(), parseFloat(), or the unary + operator can convert strings to numbers.

20. Purpose of Object.assign():

        Copies properties from one or more source objects to a target object.

 21. How reduce() Works:

        reduce() accumulates values by applying a function to each element in an array, resulting in a single output.
        const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0); // 10

22. Pure Function:

        A pure function:

        Returns the same output for the same inputs.
        Has no side effects.

23. setTimeout and setInterval:

        setTimeout(): Executes a function after a specified delay.
        setInterval(): Executes a function repeatedly at specified intervals.

24. Destructuring Assignment:

        Allows extracting values from arrays or properties from objects.

        const [a, b] = [1, 2];
        const { name, age } = { name: 'Alice', age: 25 };

25. Function vs. Class Syntax:

        Classes are syntactical sugar over constructor functions, providing a clearer structure for creating objects.

26. Removing Duplicates from an Array:

       
        const unique = [...new Set([1, 2, 2, 3])];
        27. Prototype Property
        The prototype property allows adding methods and properties to all instances of a function.

28. Template Literals:

        Template literals allow embedding expressions within strings using ${expression} syntax.

29. Cloning an Object:

        Use Object.assign() or the spread operator { ...obj } for a shallow clone.

30. Mutable vs. Immutable Objects:

        Mutable objects can be modified after creation, while immutable objects cannot.

31. IIFE (Immediately Invoked Function Expression):

        An IIFE is a function that runs immediately after it’s defined.

32. Spread Operator:

        Expands iterable elements into individual elements.

33. Merging Arrays:


        const merged = [...array1, ...array2];

34. Difference between .map() and .filter()

        map(): Transforms each element.
        filter(): Returns elements that match a condition.

35. How Array.sort() Works:

        Array.sort() sorts elements alphabetically by default, requiring a comparator function for numerical sorting.

36. Checking if an Object has a Property

        Use hasOwnProperty() or the in operator.

37. Purpose of Symbol:

        Symbol creates unique identifiers for properties to prevent conflicts.

38. Event Delegation:

        Event delegation is a technique where a single event listener is added to a parent element to handle events from multiple child elements.

39. Difference between Array.find() and Array.filter()

        find(): Returns the first element matching a condition.
        filter(): Returns all elements matching a condition.

40. Purpose of Object.entries():

        Returns an array of [key, value] pairs from an object.

41. typeof vs. instanceof

        typeof: Checks the type of a variable.
        instanceof: Checks if an object is an instance of a specific constructor.

42. WeakMap and WeakSet

        Weak collections that allow garbage collection of items without strong references.

43. Automatic Type Conversion

        JavaScript automatically converts types when needed, known as type coercion.



