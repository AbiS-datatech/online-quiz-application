/**
 * Online Quiz Application - Question Database
 * Categories: HTML, CSS, JavaScript, General Computer Knowledge,
 * Python Programming, Java Programming, Technical Fundamentals,
 * Logical Thinking & Problem Solving
 * Total questions: 36
 */

const quizQuestions = [
  {
    "id": 1,
    "category": "HTML",
    "question": "Which HTML5 semantic element is best suited to encapsulate content that is independent, self-contained, and syndicatable (e.g., a blog post or news story)?",
    "options": [
      "<section>",
      "<article>",
      "<aside>",
      "<main>"
    ],
    "correctAnswer": 1,
    "explanation": "The <article> tag is intended for standalone, self-contained content that could theoretically be distributed or reused independently, such as a blog post or news article."
  },
  {
    "id": 2,
    "category": "HTML",
    "question": "What is the primary purpose of the 'alt' attribute on an <img> tag?",
    "options": [
      "To provide tooltip text when hovering over the image",
      "To provide an accessible textual alternative for screen readers and when images fail to load",
      "To define the alternative download URL for high-resolution screens",
      "To set the caption underneath the rendered image"
    ],
    "correctAnswer": 1,
    "explanation": "The 'alt' attribute provides alternative text for accessibility purposes (used by screen readers) and displays if image loading fails."
  },
  {
    "id": 3,
    "category": "HTML",
    "question": "Which attribute should be added to an <input> element to ensure the form cannot be submitted if the field is left empty?",
    "options": [
      "validate",
      "mandatory",
      "required",
      "checked"
    ],
    "correctAnswer": 2,
    "explanation": "The 'required' boolean attribute specifies that an input field must be filled out before submitting the form."
  },
  {
    "id": 4,
    "category": "HTML",
    "question": "What does the 'defer' attribute do when included in a <script> tag?",
    "options": [
      "Downloads and executes the script immediately, blocking HTML parsing",
      "Downloads the script in parallel and executes it immediately upon download",
      "Downloads the script in parallel with HTML parsing and executes it in order after parsing is complete",
      "Prevents the script from executing until explicitly triggered by an event listener"
    ],
    "correctAnswer": 2,
    "explanation": "The 'defer' attribute allows the script to download asynchronously while the HTML parser continues, executing in document order right before DOMContentLoaded."
  },
  {
    "id": 5,
    "category": "HTML",
    "question": "Which doctype declaration correctly identifies a document as standard HTML5?",
    "options": [
      "<!DOCTYPE html5>",
      "<!DOCTYPE html>",
      "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5.0//EN\">",
      "<doctype html type=\"html5\">"
    ],
    "correctAnswer": 1,
    "explanation": "<!DOCTYPE html> is the concise and standard doctype declaration defined in HTML5."
  },
  {
    "id": 6,
    "category": "CSS",
    "question": "In the CSS Box Model, which property sets the spacing between an element's border and its inner content?",
    "options": [
      "margin",
      "padding",
      "outline",
      "gap"
    ],
    "correctAnswer": 1,
    "explanation": "Padding creates space between the content and the border of an element, while margin creates space outside the border."
  },
  {
    "id": 7,
    "category": "CSS",
    "question": "When using 'box-sizing: border-box', how is an element's rendered width calculated?",
    "options": [
      "width = content width only (padding and border are added outside)",
      "width = content width + margin (excluding padding)",
      "width includes content, padding, and border within the declared width value",
      "width includes content, padding, border, and margin"
    ],
    "correctAnswer": 2,
    "explanation": "With 'border-box', any padding and border are included inside the specified width and height, preventing unexpected layout expansion."
  },
  {
    "id": 8,
    "category": "CSS",
    "question": "Which CSS Flexbox property aligns flex items along the cross axis (perpendicular to the main axis)?",
    "options": [
      "justify-content",
      "align-items",
      "flex-direction",
      "align-content"
    ],
    "correctAnswer": 1,
    "explanation": "'align-items' defines default alignment along the cross axis for items in the current flex line, whereas 'justify-content' aligns along the main axis."
  },
  {
    "id": 9,
    "category": "CSS",
    "question": "Which of the following CSS selectors has the highest specificity score?",
    "options": [
      "#user-profile .avatar",
      "header nav ul li a.active",
      ".card .card-body .title",
      "div#main-content"
    ],
    "correctAnswer": 0,
    "explanation": "#user-profile .avatar has 1 ID and 1 Class (specificity 0,1,1,0), which beats elements and multiple classes without IDs. div#main-content has 1 ID and 1 Element (0,1,0,1)."
  },
  {
    "id": 10,
    "category": "CSS",
    "question": "What does the CSS unit 'rem' represent?",
    "options": [
      "Font size relative to the immediate parent element",
      "Font size relative to the root (<html>) element's font-size",
      "Measurement relative to the viewport height",
      "Responsive pixel multiplier based on screen PPI"
    ],
    "correctAnswer": 1,
    "explanation": "'rem' stands for 'root em' and is relative to the font-size of the root <html> element (usually 16px by default)."
  },
  {
    "id": 11,
    "category": "JavaScript",
    "question": "What is the output of 'typeof null' in standard JavaScript?",
    "options": [
      "'null'",
      "'undefined'",
      "'object'",
      "'boolean'"
    ],
    "correctAnswer": 2,
    "explanation": "'typeof null' evaluates to 'object'. This is a legacy quirk dating back to the initial implementation of JavaScript in 1995."
  },
  {
    "id": 12,
    "category": "JavaScript",
    "question": "What is the key difference between '==' (loose equality) and '===' (strict equality)?",
    "options": [
      "'==' performs type coercion before comparison, whereas '===' requires both value and type to match",
      "'===' performs type coercion, while '==' does not",
      "'===' is only used for comparing reference objects",
      "There is no functional difference in modern ES6+"
    ],
    "correctAnswer": 0,
    "explanation": "The strict equality operator (===) checks both value and type without converting types, whereas loose equality (==) coerces types before checking."
  },
  {
    "id": 13,
    "category": "JavaScript",
    "question": "Which array method returns a brand new array containing only elements that pass a provided test function?",
    "options": [
      "map()",
      "forEach()",
      "filter()",
      "reduce()"
    ],
    "correctAnswer": 2,
    "explanation": "The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements that satisfy the predicate callback."
  },
  {
    "id": 14,
    "category": "JavaScript",
    "question": "In JavaScript, what mechanism gives a function access to its outer lexical scope even after the outer function has finished executing?",
    "options": [
      "Hoisting",
      "Closure",
      "Event Bubbling",
      "Prototype Inheritance"
    ],
    "correctAnswer": 1,
    "explanation": "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment)."
  },
  {
    "id": 15,
    "category": "JavaScript",
    "question": "What will the expression Boolean('0') return?",
    "options": [
      "false",
      "true",
      "null",
      "TypeError"
    ],
    "correctAnswer": 1,
    "explanation": "Any non-empty string in JavaScript converts to true when passed to Boolean(). Since '0' contains one character, it is truthy."
  },
  {
    "id": 16,
    "category": "General Computer Knowledge",
    "question": "What does DNS stand for in computer networking?",
    "options": [
      "Dynamic Network System",
      "Domain Name System",
      "Distributed Network Server",
      "Data Network Standard"
    ],
    "correctAnswer": 1,
    "explanation": "DNS stands for Domain Name System. It translates human-readable domain names (like google.com) into numeric IP addresses (like 142.250.190.46)."
  },
  {
    "id": 17,
    "category": "General Computer Knowledge",
    "question": "Which protocol is the secure, encrypted version of HTTP used for safe web communication?",
    "options": [
      "FTP",
      "HTTPS",
      "SSH",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "HTTPS (Hypertext Transfer Protocol Secure) encrypts communication over a computer network using TLS/SSL."
  },
  {
    "id": 18,
    "category": "General Computer Knowledge",
    "question": "In data structures, which data structure operates strictly on a First-In, First-Out (FIFO) principle?",
    "options": [
      "Stack",
      "Queue",
      "Binary Tree",
      "Heap"
    ],
    "correctAnswer": 1,
    "explanation": "A Queue operates on the FIFO (First-In, First-Out) principle, meaning the first element added is the first one removed."
  },
  {
    "id": 19,
    "category": "General Computer Knowledge",
    "question": "What does 'RAM' stand for and what is its primary characteristic?",
    "options": [
      "Read Access Memory, non-volatile long term storage",
      "Random Access Memory, volatile high-speed temporary storage",
      "Rapid Action Memory, used exclusively for graphics rendering",
      "Root Array Module, stores operating system BIOS firmware"
    ],
    "correctAnswer": 1,
    "explanation": "RAM stands for Random Access Memory. It is volatile high-speed working memory that loses its content when the system is powered off."
  },
  {
    "id": 20,
    "category": "General Computer Knowledge",
    "question": "Which HTTP status code signifies that a requested resource was not found on the server?",
    "options": [
      "200",
      "403",
      "404",
      "500"
    ],
    "correctAnswer": 2,
    "explanation": "HTTP 404 Not Found indicates that the origin server did not find a current representation for the target resource."
  },
  {
    "id": 21,
    "category": "Python Programming",
    "question": "Which of the following statements correctly describes the fundamental difference between a Python list and a tuple?",
    "options": [
      "Lists are immutable and defined with parentheses (), whereas tuples are mutable and defined with square brackets []",
      "Lists are mutable sequences that can be modified after creation, while tuples are immutable sequences whose contents cannot be altered",
      "Tuples can only store homogeneous data types, whereas lists can store heterogeneous types",
      "Lists use zero-based indexing, whereas tuples use one-based indexing"
    ],
    "correctAnswer": 1,
    "explanation": "In Python, lists are mutable (items can be added, removed, or changed in place using []), whereas tuples are immutable (created with () and cannot be modified once instantiated)."
  },
  {
    "id": 22,
    "category": "Python Programming",
    "question": "What will be the output of the following Python expression: `numbers = [10, 20, 30, 40, 50]; print(numbers[1:4:2])`?",
    "options": [
      "[20, 40]",
      "[20, 30, 40]",
      "[10, 30]",
      "[20, 50]"
    ],
    "correctAnswer": 0,
    "explanation": "Slicing syntax is [start:stop:step]. Index 1 is 20, index 4 (exclusive) limits the slice to elements before index 4 (20, 30, 40), and step 2 takes every second item, producing [20, 40]."
  },
  {
    "id": 23,
    "category": "Python Programming",
    "question": "When querying a Python dictionary `user_profile = {'name': 'Alice'}`, what is the advantage of using `user_profile.get('age', 25)` instead of `user_profile['age']`?",
    "options": [
      "`get()` automatically inserts the key and default value into the dictionary",
      "`get()` returns the provided default value (25) without raising a KeyError if the key does not exist",
      "`get()` runs in O(1) time whereas bracket notation runs in O(n) time",
      "`get()` converts the retrieved value into a string automatically"
    ],
    "correctAnswer": 1,
    "explanation": "Using square bracket syntax `user_profile['age']` raises a KeyError when the key is missing. The `.get()` method gracefully returns the fallback default value (or None) without throwing an exception."
  },
  {
    "id": 24,
    "category": "Python Programming",
    "question": "In Python, how can a function modify a variable defined in the global scope rather than creating a local variable of the same name?",
    "options": [
      "By passing the variable as an argument using ref syntax",
      "By declaring `global variable_name` inside the function before reassigning it",
      "By prefixing the variable with @global",
      "Variables in Python are always globally mutable by default inside functions"
    ],
    "correctAnswer": 1,
    "explanation": "The `global` keyword explicitly informs Python that a specific variable name inside a local function scope belongs to the global namespace, allowing assignment to affect the global variable."
  },
  {
    "id": 25,
    "category": "Java Programming",
    "question": "In Java, what is the key difference between method overloading and method overriding?",
    "options": [
      "Overloading occurs at runtime across inheritance hierarchies; overriding occurs at compile time within the same class",
      "Overloading happens within the same class with identical names but different parameter signatures; overriding redefines an inherited superclass method with the exact same signature",
      "Overloading requires the @Override annotation, whereas overriding does not allow annotations",
      "Overriding can only be applied to static methods, whereas overloading is restricted to abstract methods"
    ],
    "correctAnswer": 1,
    "explanation": "Method overloading is compile-time polymorphism where methods in the same class share names but have differing parameter lists. Method overriding is runtime polymorphism where a subclass provides its own specific implementation of an inherited method with identical name and parameter signature."
  },
  {
    "id": 26,
    "category": "Java Programming",
    "question": "In Java memory management, where are object instances allocated when created with the 'new' keyword, and where do primitive local variables reside?",
    "options": [
      "Object instances reside on the Stack; primitive local variables reside in the Metaspace",
      "Object instances reside in Heap memory; primitive local variables reside on the Thread Stack",
      "Both objects and local primitives are allocated inside the Permanent Generation memory",
      "Object instances reside in CPU L1 cache; primitives are stored in Non-Volatile RAM"
    ],
    "correctAnswer": 1,
    "explanation": "In Java, all objects created via 'new' are dynamically allocated on the Heap memory (managed by the Garbage Collector), while method execution frames and primitive local variables live on the Stack."
  },
  {
    "id": 27,
    "category": "Java Programming",
    "question": "Which core Object-Oriented Programming (OOP) principle is implemented when a Java class hides its internal data by making fields 'private' and exposing access via public getters and setters?",
    "options": [
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Abstraction"
    ],
    "correctAnswer": 2,
    "explanation": "Encapsulation binds data and the methods that operate on that data together, shielding an object's internal state from direct external modification through access control modifiers."
  },
  {
    "id": 28,
    "category": "Java Programming",
    "question": "What will the following code output in Java: `String s1 = new String(\"DevQuiz\"); String s2 = new String(\"DevQuiz\"); System.out.println((s1 == s2) + \" \" + s1.equals(s2));`?",
    "options": [
      "true true",
      "false false",
      "false true",
      "true false"
    ],
    "correctAnswer": 2,
    "explanation": "The `==` operator compares memory object references (addresses). Since `new String(...)` allocates two distinct objects on the heap, `s1 == s2` is false. The `.equals()` method compares the character sequence values, so `s1.equals(s2)` is true."
  },
  {
    "id": 29,
    "category": "Technical Fundamentals",
    "question": "In modern Operating Systems, what does a 'Context Switch' signify?",
    "options": [
      "Switching the monitor display resolution between full-screen and windowed modes",
      "Saving the state of the currently executing process or thread and restoring the state of another so execution can resume later",
      "Converting an interpreted programming script into compiled machine code",
      "Reallocating virtual memory paging files onto an external flash drive"
    ],
    "correctAnswer": 1,
    "explanation": "A context switch is an OS kernel operation that saves the CPU execution context (registers, program counter) of an active thread or process and loads another to achieve multitasking."
  },
  {
    "id": 30,
    "category": "Technical Fundamentals",
    "question": "What is the primary architectural difference in address length between IPv4 and IPv6 protocols?",
    "options": [
      "IPv4 uses 32-bit addresses (~4.3 billion addresses), while IPv6 uses 128-bit addresses (~3.4 × 10^38 addresses)",
      "IPv4 uses 64-bit addresses, while IPv6 uses 256-bit addresses",
      "IPv4 addresses are expressed in hexadecimal notation, while IPv6 uses octal representation",
      "IPv4 supports up to 16 billion devices, while IPv6 is limited to 32 billion devices"
    ],
    "correctAnswer": 0,
    "explanation": "IPv4 uses 32-bit addresses (e.g., 192.168.1.1), which allows 2^32 approx 4.3 billion addresses. IPv6 was designed with 128-bit addresses (2^128 addresses) to overcome IPv4 address exhaustion."
  },
  {
    "id": 31,
    "category": "Technical Fundamentals",
    "question": "In relational database design (SQL), what is the primary function of a 'Foreign Key'?",
    "options": [
      "To encrypt sensitive table data when transmitting queries over the internet",
      "To establish and enforce a link between data in two tables by referencing the Primary Key of another table",
      "To uniquely identify each record within its own table",
      "To automatically speed up full-text search indexing on unstructured text columns"
    ],
    "correctAnswer": 1,
    "explanation": "A Foreign Key is a column or set of columns in one table that references the Primary Key of another table, enforcing referential integrity between related entities."
  },
  {
    "id": 32,
    "category": "Technical Fundamentals",
    "question": "In cloud computing service models, how do IaaS (Infrastructure as a Service) and SaaS (Software as a Service) differ?",
    "options": [
      "IaaS delivers end-user applications over the web; SaaS provides raw virtualized computing resources like servers and storage",
      "IaaS provides fundamental compute, storage, and networking resources where the customer manages the OS and runtime; SaaS delivers fully managed, ready-to-use software applications",
      "SaaS requires customers to write their own operating system kernels, whereas IaaS does not",
      "IaaS is only available on private physical intranets; SaaS is strictly public cloud"
    ],
    "correctAnswer": 1,
    "explanation": "With IaaS (e.g., AWS EC2, Google Compute Engine), the cloud provider manages physical hardware while you manage the OS, runtime, and apps. With SaaS (e.g., Google Workspace, Salesforce), the vendor hosts and manages the entire application end-to-end for users."
  },
  {
    "id": 33,
    "category": "Logical Thinking & Problem Solving",
    "question": "Identify the next number in the following sequence: 2, 6, 12, 20, 30, ?",
    "options": [
      "40",
      "42",
      "44",
      "48"
    ],
    "correctAnswer": 1,
    "explanation": "The differences between consecutive terms increase by 2: +4, +6, +8, +10. Following this progression, the next difference is +12, so 30 + 12 = 42. (Alternatively, the pattern follows n(n+1): 1x2=2, 2x3=6, 3x4=12, 4x5=20, 5x6=30, 6x7=42)."
  },
  {
    "id": 34,
    "category": "Logical Thinking & Problem Solving",
    "question": "Consider this logic loop: Start with x = 10, y = 3. While x > y: x = x - y, y = y + 1. What is the value of x when the loop terminates?",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "Iteration 1: x = 10 - 3 = 7, y = 3 + 1 = 4. Check 7 > 4 (true). Iteration 2: x = 7 - 4 = 3, y = 4 + 1 = 5. Check 3 > 5 (false). The loop terminates with x = 3."
  },
  {
    "id": 35,
    "category": "Logical Thinking & Problem Solving",
    "question": "If you have a sorted array of 1,024 elements, what is the maximum number of comparisons needed to search for any item using Binary Search in the worst case?",
    "options": [
      "10 comparisons",
      "11 comparisons",
      "512 comparisons",
      "1,024 comparisons"
    ],
    "correctAnswer": 1,
    "explanation": "In binary search, the search interval is halved at each step: log2(1024) = 10. In the worst case (item at the last position or not found), it requires floor(log2(N)) + 1 = 10 + 1 = 11 comparisons."
  },
  {
    "id": 36,
    "category": "Logical Thinking & Problem Solving",
    "question": "A system evaluates as HEALTHY if: 'A is true OR (B is true AND C is false)'. Under which of the following conditions is the system UNHEALTHY?",
    "options": [
      "A = true, B = false, C = true",
      "A = false, B = true, C = false",
      "A = false, B = true, C = true",
      "A = true, B = true, C = true"
    ],
    "correctAnswer": 2,
    "explanation": "If A = false, the expression relies on (B is true AND C is false). In the third option, A = false, B = true, and C = true. Here, (true AND false) evaluates to false. Thus neither condition holds, making the system UNHEALTHY."
  }
];

const quizCategories = [
  {
    "id": "all",
    "name": "All Categories",
    "icon": "sparkles",
    "description": "Comprehensive test covering all 8 technical domains",
    "count": 36
  },
  {
    "id": "HTML",
    "name": "HTML5",
    "icon": "code",
    "description": "Semantics, forms, document structure, accessibility",
    "count": 5
  },
  {
    "id": "CSS",
    "name": "CSS3",
    "icon": "palette",
    "description": "Flexbox, Grid, Box Model, responsive layout",
    "count": 5
  },
  {
    "id": "JavaScript",
    "name": "JavaScript",
    "icon": "braces",
    "description": "Core syntax, ES6+, closures, array methods",
    "count": 5
  },
  {
    "id": "General Computer Knowledge",
    "name": "General Knowledge",
    "icon": "cpu",
    "description": "Networks, protocols, memory, fundamentals",
    "count": 5
  },
  {
    "id": "Python Programming",
    "name": "Python Programming",
    "icon": "terminal",
    "description": "Syntax, lists, tuples, dictionaries, loops, functions",
    "count": 4
  },
  {
    "id": "Java Programming",
    "name": "Java Programming",
    "icon": "coffee",
    "description": "OOP concepts, classes, inheritance, memory, strings",
    "count": 4
  },
  {
    "id": "Technical Fundamentals",
    "name": "Tech Fundamentals",
    "icon": "layers",
    "description": "Operating systems, networking, SQL databases, cloud",
    "count": 4
  },
  {
    "id": "Logical Thinking & Problem Solving",
    "name": "Logical Thinking",
    "icon": "lightbulb",
    "description": "Patterns, problem solving, algorithmic logic, deduction",
    "count": 4
  }
];
