-------------------------------------------------------------------------------------
                 String Based Question And Answer ->

-------------------------------------------------------------------------------------

Question 1. What is a string in JavaScript?

    A string in JavaScript is a sequence of characters used to represent text. It’s defined within single (' '), double (" "), or template literals (` `).
    How do you find the length of a string?

Using the .length property:

        let str = "Hello";
        console.log(str.length); // Output: 5

Question 2.How do you access a character in a string by its index?

Using charAt(index) or bracket notation:

        console.log(str.charAt(1)); // "e"
        console.log(str[1]);        // "e"

Question 3. What’s the difference between charAt() and charCodeAt()?

    charAt() returns the character at a given index, while charCodeAt() returns the Unicode value of the character.

Question 3.1 How do you convert a string to uppercase?

Using toUpperCase():

        console.log("hello".toUpperCase()); // "HELLO"

Question 4. How do you convert a string to lowercase?

Using toLowerCase():

        console.log("HELLO".toLowerCase()); // "hello"

Question 5. How do you check if a string contains a substring?

Using includes():


        console.log("hello world".includes("world")); // true

Question 6.How do you find the first occurrence of a substring?

Using indexOf():

        console.log("hello world".indexOf("world")); // 6

Question 7. How do you find the last occurrence of a substring?

Using lastIndexOf():

        console.log("hello world hello".lastIndexOf("hello")); // 12
How do you replace a substring in a string?

Using replace():

        console.log("hello world".replace("world", "JavaScript")); // "hello JavaScript"



                            Intermediate Questions
------------------------------------------------------------------------------------


Question 8. What is the difference between replace() and replaceAll()?

    replace() replaces the first occurrence of a substring; replaceAll() replaces all occurrences.

Question 8.1 How do you split a string into an array of substrings?

Using split(separator):

        console.log("apple,banana,grape".split(",")); // ["apple", "banana", "grape"]

Question 9. How do you concatenate two strings?

Using +, concat(), or template literals:

        console.log("Hello " + "world");        // "Hello world"
        console.log("Hello".concat(" world"));  // "Hello world"

Question 10. How do you get a substring from a string?

Using slice(), substring(), or substr():

        let str = "JavaScript";
        console.log(str.slice(0, 4));       // "Java"
        console.log(str.substring(0, 4));   // "Java"
        console.log(str.substr(0, 4));      // "Java"

Question 11. How do slice() and substring() differ?

slice() accepts negative indices; substring() does not.


Question 12. How do you trim whitespace from a string?

Using trim(), trimStart(), or trimEnd():

        console.log("  Hello ".trim()); // "Hello"

Question 13. How do you repeat a string multiple times?

Using repeat():

        console.log("hello".repeat(3)); // "hellohellohello"

Question 14. How do you convert a number to a string?

Using String() or .toString():

        let num = 123;
        console.log(String(num));     // "123"
        console.log(num.toString());  // "123"

Question 15. How do you check if a string starts with a specific substring?

Using startsWith():

        console.log("JavaScript".startsWith("Java")); // true
Question 16. How do you check if a string ends with a specific substring?

Using endsWith():

        console.log("JavaScript".endsWith("Script")); // true


                            Advanced Questions
--------------------------------------------------------------------------------
Question 17 . How do you find the ASCII/Unicode value of a character?

Using charCodeAt():

        console.log("A".charCodeAt(0)); // 65

Question 18. How do you convert a Unicode value to a character?

Using String.fromCharCode():

        console.log(String.fromCharCode(65)); // "A"

Question 19.How do you count occurrences of a character in a string?

Using split() or match():

        let str = "hello";
        console.log(str.split("l").length - 1); // 2

Question 20. How do you reverse a string?

Split into array, reverse, join back:

            console.log("hello".split("").reverse().join("")); // "olleh"

Question 21. How do you convert a string to title case?

Using split(), map(), and join():

        let str = "hello world";
        let titleCase = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
        console.log(titleCase); // "Hello World"

----------------------------------------------------------------------------
                                        Algorithmic Questions

-----------------------------------------------------------------------------
Question 22. Write a function to check if a string is a palindrome.


        function isPalindrome(str) {
        let reversed = str.split("").reverse().join("");
        return str === reversed;
        }

Question 23. Write a function to count vowels in a string.

        function countVowels(str) {
        return str.match(/[aeiou]/gi)?.length || 0;
        }

Question 24. Write a function to capitalize the first letter of each word in a string.


        function capitalizeWords(str) {
        return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
        }

Question 25. How do you remove duplicate characters from a string?

        function removeDuplicates(str) {
        return Array.from(new Set(str)).join("");
        }

Question 26. How do you find the longest word in a string?


        function longestWord(str) {
        return str.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
        }

------------------------------------------------------------------------------------
                                    Miscellaneous Questions
------------------------------------------------------------------------------------

Question 27. How do you compare two strings?

Using === for exact match, or localeCompare() for lexicographical comparison.

Question 28. What does localeCompare() return?

Returns -1, 0, or 1 based on string order in locale.

Question 29. Explain template literals in JavaScript.

Template literals use backticks (`) and allow embedded expressions with ${expression}.

Question 30. How do you escape special characters in a string?

Using a backslash (\):

        console.log("She said \"Hello\""); // Output: She said "Hello"
        
Question 31. How can you check if a string is empty?

        Using .length === 0:

        console.log("".length === 0); // true
