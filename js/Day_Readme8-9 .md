
Day 8-9 


10. INTRO TO ARRAYS

################################################################################


THEORY


An Array is a REFERENCE TYPE in JavaScript (stored in heap, variable in
stack holds an address/pointer to it).
An Array is an ORDERED COLLECTION of data/items.
Arrays can hold MULTIPLE DATATYPES at once (number, string, null, undefined,
object, etc. all in one array).
Arrays are MUTABLE — elements can be changed using index based assignment.
Arrays are zero-indexed: first element → index 0.


MEMORY MODEL (Stack vs Heap)

STACK                       HEAP

+-----------+              +---------------------------+
| fruits ---|------------->| ["apple","mango","grapes"] |
+-----------+              +---------------------------+

fruits[1] = "banana"  →  modifies the SAME heap object
(No new memory created → mutation)


CREATING ARRAYS

let arr     = [1, 2, 3, 4, 5];          // Numbers
let names   = ["yatin", "siddesh"];      // Strings
let mixed   = [1, 2.3, "abc", null, undefined]; // Mixed datatypes


LOOPING THROUGH ARRAYS — for, while, for...of, for...in


for loop
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}
while loop
let i = 0;
while (i < fruits.length) {
console.log(fruits[i]);
i++;
}
for...of  → returns VALUES (works on iterables: Array, String, Map, Set...)
for (let fruit of fruits) {
console.log(fruit);
}
for...in  → returns INDEX/KEYS (enumerable properties)
for (let index in fruits) {
console.log(fruits[index]);
}


COMPARISON TABLE — for...of vs for...in

Featurefor...offor...inReturnsVALUE of elementINDEX / KEY of elementWorks onIterables (Array,String..)Enumerable properties (Object)Best used forArrays, StringsObjects



ARRAY DESTRUCTURING


Destructuring = unpacking values from an array (or properties from an
object) into separate distinct variables in a single statement.
const myarr = ["value1", "value2"];
// Old way
let var1 = myarr[0];
let var2 = myarr[1];
// Destructuring way
let [var1, var2] = myarr;
with let → variables behave like normal variables (can be reassigned)
with const → cannot reassign individual destructured variables



CLONING ARRAYS (Array.isArray, push, pop, unshift, clone methods)


Array.isArray(value) → returns true/false → checks if value is an Array.
push()    → adds element(s) at END, returns new length, MUTATES original.
pop()     → removes LAST element, returns that removed value, MUTATES.
unshift() → adds element(s) at START, MUTATES original.
shift()   → removes FIRST element, returns it, MUTATES.


Cloning Methods (create a NEW array in memory, doesn't affect original):
1. slice()          → array_1.slice(0)        (fastest)
2. concat()         → [].concat(array_1)
3. spread operator  → [...array_1]

FLOWCHART — Cloning vs Reference Assignment

    let array_2 = array_1;
          |
          v
 +-------------------+        Both point to SAME heap object
 | array_1 ----+      |        array_1 == array_2 (by reference) → effects
 | array_2 ----+----> | [data] | on one reflect on the other
 +-------------------+

    let array_2 = array_1.slice(0);  /  [...array_1]
          |
          v
 +-------------------+    +-------------------+
 | array_1 ---------->|  [data]  |   array_2 ---------->|  [data] (copy) |
 +-------------------+    +-------------------+
    Independent memory → changes to array_1 do NOT affect array_2



KEY POINTS

✅ Arrays are reference type — assigning copies the ADDRESS, not the data
✅ for...of returns values; for...in returns indexes/keys
✅ push/pop/unshift/shift mutate the original array
✅ slice(), concat(), spread (...) create a fresh, independent copy
✅ Destructuring lets you unpack array values into named variables in one line

################################################################################

11. PRIMITIVE vs REFERENCE TYPES

################################################################################


THEORY

JavaScript datatypes are divided into two categories:


PRIMITIVE TYPES   → Number, String, Boolean, null, undefined, Symbol, BigInt

Stored DIRECTLY in the STACK (by value)
Copying creates an INDEPENDENT copy



REFERENCE TYPES   → Array, Object, Function

Stored in the HEAP
The variable in the STACK holds a POINTER/ADDRESS to the heap location
Copying copies the ADDRESS, not the actual data (shared reference)





FLOWCHART — Primitive Assignment

let num1 = 6;
let num2 = num1;     // copies VALUE
num1++;              // only num1 changes

  STACK
+---------+
| num1: 7 |
+---------+
| num2: 6 |   <-- unaffected, independent copy
+---------+

FLOWCHART — Reference Assignment

let arr1 = ["item1","item2"];
let arr2 = arr1;          // copies ADDRESS (pointer)
arr1.push("item3");       // arr2 ALSO changes!

  STACK                       HEAP
+-----------+             +---------------------------+
| arr1 -----|------------>| ["item1","item2","item3"]  |
| arr2 -----|------------>|         (same object)      |
+-----------+             +---------------------------+

COMPARISON TABLE — Primitive vs Reference

AspectPrimitive TypeReference TypeExamplesNumber, String, Boolean...Array, Object, FunctionStored inStack (by value)Heap (by reference/pointer)On assignmentIndependent copy createdSame memory sharedMutation effectOther variable unaffectedOther variable also changes



KEY POINTS

✅ Primitives → copied BY VALUE → independent copies
✅ Reference types → copied BY REFERENCE (address) → shared/linked copies
✅ Mutating one reference variable affects all variables pointing to it
✅ To get an independent copy of an array/object → use cloning techniques
(slice, concat, spread, Object.assign)

################################################################################

12. INTRO TO OBJECTS

################################################################################


THEORY


Objects are also REFERENCE TYPES (stored heap, stack holds pointer).
Objects store data in KEY : VALUE pairs (unlike arrays which use index).
Objects do NOT have an index.
Arrays are good, but for real-world data (a "person", "user" etc.) Objects
are more meaningful — each property has a NAME (key).
const person = {
name: "Yatin",
age: 23,
hobbie: ["chess","games","sketches"]
};



ACCESSING DATA — DOT vs BRACKET NOTATION

person.name          // Dot Notation
person["name"]       // Bracket Notation

WHEN BRACKET NOTATION IS REQUIRED


Key contains SPACE or special character
const person = { "person hobbie": [...] };
person["person hobbie"]      ✅ works
person.person hobbie         ❌ Syntax Error
Accessing/Adding a key DYNAMICALLY via a variable
const key = "email";
person[key] = "abc@gmail.com";   // adds key "email" with value
person.key  = "abc@gmail.com";   // ❌ adds a literal key called "key"


COMPARISON TABLE — Dot vs Bracket Notation

ScenarioDot NotationBracket NotationStatic, valid identifier key✅ person.name✅ person["name"]Key has space/special char❌ Error✅ person["my key"]Key stored in a variable (dynamic)❌ wrong result✅ person[key]



COMPUTED PROPERTIES


Used when OBJECT KEYS themselves need to come from variables.
const key1 = "objkey1";
const value1 = "myvalue1";
const obj = {
[key1]: value1     // [] evaluates key1 → "objkey1" becomes the key
};
// Result → { objkey1: "myvalue1" }



ITERATING OBJECTS

Two main ways:


for...in loop          → gives KEYS (must use bracket notation to get value)
Object.keys() / Object.values() / Object.entries()
for (let key in person) {
console.log(${key} : ${person[key]});
}
Object.keys(person)    → returns ARRAY of keys
Object.values(person)  → returns ARRAY of values
for (let key of Object.keys(person))   { console.log(key); }
for (let value of Object.values(person)) { console.log(value); }


FLOWCHART — Iterating an Object

    person = {name:"Yatin", age:23, hobbie:[...]}
                |
    +-----------+-----------+
    |                       |

for...in key             Object.keys/values
|                       |
person[key]            returns Array → can use
→ value                 forEach / for...of


OBJECT DESTRUCTURING

const band = { bandName: "Led Zeppelin", famousSong: "Stairway to Heaven" };

const { bandName, famousSong } = band;
// bandName = "Led Zeppelin", famousSong = "Stairway to Heaven"


const destructured vars → cannot reassign
let destructured vars   → CAN reassign



OBJECTS INSIDE ARRAYS  &  NESTED DESTRUCTURING

const users = [
    { userid: 1, user_name: "Yatin",   gender: "male"   },
    { userid: 2, user_name: "siddesh", gender: "male"   },
    { userid: 3, user_name: "shivani", gender: "female" },
];

// Iterate
for (let user of users) {
    console.log(user.user_name, user.userid);
}

// Nested Destructuring with renaming + skipping elements
const [{ user_name: user1_username, userid }, , { gender: user3_gender }] = users;
// user1_username = "Yatin"
// userid          = 1
// user3_gender    = "female"   (3rd object's gender, 2nd skipped via comma)


SPREAD OPERATOR ( ... )

In Arrays:
const arr1 = [1,2,3];
const arr2 = [5,6,7];
const newarr = [...arr1, ...arr2];     // → [1,2,3,5,6,7]  (merged, flat)
const newarr2 = [...arr1, arr2];        // → [1,2,3,[5,6,7]] (arr2 as object)

// Spreading a STRING (iterable) → each char becomes an element
const newarr3 = [..."12345"];           // → ["1","2","3","4","5"]
// Numbers are NOT iterable → [...123] ❌ Error

In Objects:
const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { key3: "value3", key4: "value4" };
const newobj = { ...obj1, ...obj2 };    // merges both objects (cloning)

// Duplicate keys → LAST one wins (overrides)


KEY POINTS

✅ Objects = key:value pairs, no index, stored by reference (heap)
✅ Use bracket notation for dynamic keys or keys with spaces/special chars
✅ Computed properties [key] let variable values become object keys
✅ for...in + Object.keys()/values()/entries() are the main iteration tools
✅ Destructuring (array & object, including nested) extracts data cleanly
✅ Spread operator (...) clones & merges arrays/objects — last duplicate key wins

################################################################################

13. FUNCTIONS IN JS

################################################################################


THEORY — WHY FUNCTIONS?


Code Reusability — write once, call (invoke) many times.
A function is a block of reusable code that performs a task and can
optionally RETURN a value.



WAYS TO CREATE FUNCTIONS


FUNCTION DECLARATION
function addition(num1, num2) {
return num1 + num2;
}
addition(10, 20);   // 30
FUNCTION EXPRESSION
const addition = function (num1, num2) {
return num1 + num2;
};
ARROW FUNCTION (ES6)
const addition = (num1, num2) => {
return num1 + num2;
};
// implicit return (no braces, no return keyword needed)
const multiply = (num1, num2) => num1 * num2;


COMPARISON TABLE — Declaration vs Expression vs Arrow

TypeHoisted?this behaviourFunction Declaration✅ Yes (fully)dynamic (depends on caller)Function Expression❌ No (var only,dynamic (depends on caller)not initialized)Arrow Function❌ NoLEXICAL — inherits this fromenclosing (parent) scope



DEFAULT PARAMETERS

// Before ES6 - manual check
function addtwo(a, b) {
    if (typeof b === "undefined") b = 0;
    return a + b;
}

// ES6 default parameters
function addtwo(a, b = 0) {
    return a + b;
}
addtwo(4);     // 4   (b defaults to 0)
addtwo(4, 8);  // 12


REST PARAMETERS ( ...args )


Collects ALL remaining arguments into an ARRAY.
const addAll = (...numbers) => {
let total = 0;
for (let num of numbers) total += num;
return total;
};
addAll(1,2,3,4,5);   // 15



PARAMETER (OBJECT) DESTRUCTURING

const person = { firstname: "Yatin", gender: "male", age: 500 };

function printpersonDetails({ firstname, gender, age }) {
    console.log(firstname, gender, age);
}
printpersonDetails(person);
// Very common in REACT — destructuring props directly in parameters


CALLBACK FUNCTIONS

DEFINITION: A callback is a function passed as an ARGUMENT to another
function, to be EXECUTED AFTER that function finishes its own work.

function myfunc2(name) {
    console.log(`my name is ${name}`);
}

function myfunc(callback) {
    console.log("hello there, code is executed");
    callback("Yatin");   // executed AFTER above line
}

myfunc(myfunc2);

FLOWCHART — Callback Execution Order

myfunc(myfunc2)
|
v
[1] run code inside myfunc  ───►  console.log("hello there...")
|
v
[2] call callback() (myfunc2) ──► console.log("my name is Yatin")


FUNCTION RETURNING FUNCTION  (Higher Order Functions)


A function that either:
a) takes a function as a parameter (callback), OR
b) returns a function as its result, OR
c) does both
...is called a HIGHER ORDER FUNCTION.
function myfunc() {
function hello() {
return "hello world";
}
return hello;     // returning a FUNCTION (not calling it)
}
const ans = myfunc();   // ans now holds the hello function
console.log(ans());     // calling it → "hello world"



FUNCTION INSIDE FUNCTION

const app = () => {
    const myfunction = () => console.log("Inside myFunction");
    const addition   = (a,b) => a + b;
    const multiply   = (a,b) => a * b;

    myfunction();
    console.log(addition(5,3));
    console.log(multiply(5,3));
};
app();   // outer (main) function invoked


HOISTING (Intro)


FUNCTION DECLARATIONS are FULLY HOISTED → can be called BEFORE they appear
in the code.
FUNCTION EXPRESSIONS (assigned to var/let/const) are NOT hoisted the same
way → calling before initialization throws an error.
hello();                  // ✅ works
function hello(){ ... }   // declaration
hello2();                 // ❌ ReferenceError / TypeError
const hello2 = function(){ ... }



LEXICAL SCOPE


Lexical scoping = a function's access to variables is determined by WHERE
it is WRITTEN/DEFINED in the code (its parent scope), NOT where it is
CALLED from.
A nested (child) function can access variables of its parent (enclosing)
function — this is called being "lexically bound".
const myvar = "value1";
function myApp() {
function myfunc() {
console.log("inside myFunc", myvar);  // accesses outer myvar
}
console.log(myvar);
myfunc();
}
myApp();


FLOWCHART — Lexical Scope Chain

Global Scope  { myvar = "value1" }
|
v
myApp() Scope  (no own myvar) ----┐
|                            | looks UP the chain
v                            v
myfunc() Scope --- accesses ---> myvar from Global Scope


BLOCK SCOPE vs FUNCTION SCOPE

{
    let a = "x";     // block scoped — only inside {}
    const b = "y";   // block scoped
    var c  = "z";    // function/global scoped — leaks out of {}
}
console.log(c);   // ✅ accessible (var)
console.log(a);   // ❌ ReferenceError (let)
console.log(b);   // ❌ ReferenceError (const)

COMPARISON TABLE — var vs let vs const (Scope)

KeywordScopeRe-declarableRe-assignablevarFunction / Global✅ Yes✅ YesletBlock ({ })❌ No✅ YesconstBlock ({ })❌ No❌ No



KEY POINTS

✅ 3 ways to create functions: Declaration, Expression, Arrow
✅ Only Function Declarations are fully hoisted
✅ Default parameters avoid NaN/undefined when arguments are missing
✅ Rest parameters (...args) gather extra arguments into an array
✅ Object/parameter destructuring extracts needed values directly — common in React
✅ Callback = function passed as argument, executed after the outer function's code
✅ Higher Order Function = takes and/or returns a function
✅ Lexical scope = scope determined by WHERE code is written, inner functions
can access outer variables (scope chain)
✅ let/const → block scoped | var → function/global scoped

################################################################################

14. IMPORTANT ARRAY METHODS

################################################################################


THEORY — OVERVIEW

Array methods fall into two broad categories:

MUTATING (changes original array)     NON-MUTATING (returns NEW array/value)


push, pop, shift, unshift               map, filter, slice, concat
splice, sort, fill, reverse             find, some, every, reduce, forEach



forEach() — iterate, NO return value




Executes a callback function ONCE for each array element.
Does NOT return a new array (returns undefined).
const numbers = [4,2,5,8];
numbers.forEach(function(number, index){
console.log(${number} x 2 = ${number*2} at index ${index});
});




map() — transform every element → NEW array (most used in React)



const numbers = [4,3,5,6,5];
const sqrnumber = numbers.map((number) => number * number);
// → [16,9,25,36,25]   (new array, original unchanged)

FLOWCHART — map()

[4,3,5,6,5]
|  callback applied to EACH element
v
[16,9,25,36,25]  ← NEW array returned, same length as input



filter() — keep elements that PASS a test → NEW array (subset)



const numbers = [1,3,2,6,4,8];
const isEven = (number) => number % 2 === 0;
const evenNumbers = numbers.filter(isEven);   // → [2,6,4,8]


Does NOT change the original array.
Returned array length <= original length.


FLOWCHART — filter()

[1,3,2,6,4,8]
|  for each element → callback returns true/false
v
keep TRUE  → [2,6,4,8]
discard FALSE → 1,3



reduce() — accumulate elements into a SINGLE value



const numbers = [1,2,3,4,5,10];
const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});   // 25 (no initial value → first element becomes initial accumulator)

// With INITIAL VALUE (0) — real world example:
const userCart = [
    {product_Id:1, product_Name:"mobile",  price:12000},
    {product_Id:2, product_Name:"TV",      price:22000},
    {product_Id:3, product_Name:"Laptop",  price:35000},
    {product_Id:4, product_Name:"charger", price:1000},
];
const cartTotal = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);   // → 70000

FLOWCHART — reduce() Step-by-step (cartTotal example)

accumulator (totalPrice)currentValue (item.price)returns (new acc)

    0   (initial)        |          12000               |     12000
   12000                 |          22000               |     34000
   34000                 |          35000               |     69000
   69000                 |          1000                |     70000  → FINAL




find() — return FIRST element matching condition (or undefined)



const users = [
    {userId:1, firstName:"Yatin", age:22},
    {userId:2, firstName:"mohit", age:20},
    ...
];
const user = users.find((u) => u.userId === 3);
// returns the FIRST matching object, or undefined if none found



some() vs every()  → both return BOOLEAN




some()  → true if AT LEAST ONE element passes the test.
every() → true ONLY IF ALL elements pass the test.
const numbers = [3,5,8,9];
numbers.some((n) => n % 2 === 0);    // true  (8 is even)
const numbers2 = [2,4,6,8,10];
numbers2.every((n) => n % 2 === 0);  // true  (all even)
// Real world: give discount if ANY item > 30000
userCart.some((p)  => p.price > 30000);   // true  → show discount
userCart.every((p) => p.price <= 35000);  // true  → all within budget


COMPARISON TABLE — some vs every vs find vs filter

MethodReturnsStops early?Use casesome()booleanYes, on first TRUE"does ANY item match?"every()booleanYes, on first FALSE"do ALL items match?"find()first matched itemYes, on first match"get ONE specific item"filter()new array (subset)No, checks all"get ALL matching items"




sort() — MUTATES original array, sorts by STRING/ASCII values by default




Default sort converts elements to STRINGS and compares ASCII codes.
'0'-'9' → ASCII 48-57, 'A'-'Z' → 65-90, 'a'-'z' → 97-122
const numbers = [5,9,1200,400,3000];
numbers.sort();
// → [1200, 3000, 400, 5, 9]   (WRONG numerically! sorted as strings)
// For numeric sort → pass compare function
numbers.sort((a,b) => a - b);   // → [5,9,400,1200,3000] correct ascending




splice() — MUTATES: delete, insert, or replace elements (returns removed)



splice(start, deleteCount, ...itemsToInsert)

const array = ['item1','item2','item3','item4','item5'];

// DELETE: remove 2 elements starting at index 1
array.splice(1, 2);
// array → ['item1','item4','item5']
// returns deleted: ['item2','item3']

// INSERT: delete 0, insert new item at index 1
array.splice(1, 0, 'newitem');
// array → ['item1','newitem','item2','item3','item4','item5']

// INSERT + DELETE simultaneously (replace)
const deleted = array.splice(1, 2, "insertitem1", "insertitem2");



fill() — MUTATES: overwrite elements with a value



fill(value, start, end)   // end is EXCLUSIVE

const numbers = [1,2,3,4,5,76,6,78,9,9,8];
numbers.fill(0, 3, 7);
// → [1,2,3, 0,0,0,0, 78,9,9,8]   (index 3 to 6 filled with 0)


KEY POINTS

✅ forEach   → just iterate, returns undefined
✅ map       → transforms each element → new array, same length
✅ filter    → keeps elements passing test → new array, subset
✅ reduce    → folds array into a SINGLE value (accumulator pattern)
✅ find      → returns FIRST matching element (or undefined)
✅ some      → true if ANY element passes | every → true if ALL pass
✅ sort      → MUTATES, default sorts as STRINGS (ASCII) — use (a,b)=>a-b for numbers
✅ splice    → MUTATES — delete/insert/replace, returns removed elements array
✅ fill      → MUTATES — overwrite range of elements with a value
✅ map, filter, forEach, find, some, every, reduce → NEVER mutate original array
✅ sort, splice, fill, push, pop, shift, unshift → MUTATE original array

################################################################################

15. MORE USEFUL THINGS (Iterables, Map, Set, Optional Chaining, Object.assign)

################################################################################


THEORY — ITERABLES


An "Iterable" is anything that can be looped over with for...of.
Strings and Arrays are ITERABLE.
Plain OBJECTS are NOT ITERABLE by default (no Symbol.iterator) →
for...of on a plain object throws TypeError.
const first_name = "chaudhari";
for (let ch of first_name) { console.log(ch); }   // each character
const numbers = [1,2,3];
for (let num of numbers) { console.log(num); }    // each value
const obj = {a:1};
for (let x of obj) { }   // ❌ TypeError: obj is not iterable



CLONING WITH Object.assign()


Heap memory holds the actual object; assigning obj2 = obj1 only copies
the STACK POINTER (both point to same heap object).
// Case 1: reference copy (shared)
const obj2 = obj1;
// Case 2: SPREAD operator clone (new memory)
const obj2 = { ...obj1 };
// Case 3: Object.assign() clone (pre-spread-operator way)
const obj2 = Object.assign({}, obj1);
// First arg {} = target object, remaining args = sources to merge in



MAPS — Key/Value Data Structure (Iterable)

Properties of Map:


Stores data in ORDERED fashion (insertion order preserved).
Stores KEY-VALUE pairs (like Objects).
Duplicate keys are NOT allowed (like Objects).
Map keys can be ANY TYPE (number, array, object, function...).


COMPARISON TABLE — Map vs Object

FeatureObjectMapAllowed key typesString or Symbol onlyAny type (object, fn, num..)Order of keysNot strictly guaranteed (mostly)Guaranteed insertion orderSizeObject.keys(obj).lengthmap.sizeIterable❌ No (default)✅ YesMethods-.set() .get() .has() .delete()


const map = new Map();
map.set("name","Yatin");
map.set(1,"one");
console.log(map.get("name"));   // "Yatin"


SETS — Unique Value Collection (Iterable)

Properties of Set:


Stores data in LINEAR order (insertion order).
NO index-based access (numbers[3] → undefined).
Order is NOT strictly "guaranteed" for access purposes, but follows
insertion order when iterated.
UNIQUE items only — duplicates automatically removed.


const numbers = new Set([1,2,3,3,6,6,7]);

console.log(numbers);          // Set(5) {1,2,3,6,7}  — duplicates removed
console.log(numbers[3]);       // undefined (no index access)

// Common use: remove duplicates from array
const uniqueArr = [...new Set([1,2,2,3,3,3])];   // [1,2,3]


OPTIONAL CHAINING ( ?. )


Safely access deeply nested object properties WITHOUT throwing an error
if an intermediate property is undefined/null.
const user = { name: "Yatin", address: { city: "Kalyan" } };
console.log(user.address.city);     // "Kalyan" → works
console.log(user.contact.phone);    // ❌ TypeError: cannot read properties
//    of undefined (contact missing)
console.log(user.contact?.phone);   // ✅ undefined (no error, safely stops)


FLOWCHART — Optional Chaining

user.contact?.phone
|
v
Is "user.contact" undefined/null? ---YES---> return undefined (STOP, no error)
|
NO
v
Access .phone normally


KEY POINTS

✅ Iterables = can use for...of → Array, String, Map, Set (NOT plain Objects)
✅ Object.assign({}, obj1) and { ...obj1 } both create shallow clones
✅ Map  → key-value pairs, ANY type of key, ordered, iterable
✅ Set  → unique values only, no index access, iterable
✅ [...new Set(array)] is the classic trick to remove duplicates
✅ Optional chaining (?.) prevents "cannot read properties of undefined"
errors when accessing nested object properties that might not exist

################################################################################

16. OBJECT ORIENTED JS (Methods, this, call/apply/bind, Factory Functions)

################################################################################


THEORY — METHODS & this KEYWORD


A METHOD is a FUNCTION stored as a property of an object.
FUNCTION vs METHOD: a function is independent and called by its own name;
a method is linked to an object and called via the object's name
(object.methodName()).
this keyword → refers to the OBJECT that is EXECUTING the current
function/method. For a REGULAR function called without an object, this
refers to the GLOBAL object (window in browsers).
const person = {
first_name: "Yatin",
age: 22,
about: function () {
console.log(Person name is ${this.first_name} and age is ${this.age});
}
};
person.about();   // this → person object



ARROW FUNCTIONS & this  (Important Gotcha!)


Arrow functions do NOT have their OWN this.
They pick up this from the ENCLOSING (parent/lexical) scope — "one scope
ahead".
const user1 = {
first_name: "Yatin",
age: 24,
about: () => {
console.log(this.first_name, this.age);   // undefined undefined
}
};
user1.about();
// this here refers to outer (global) scope, NOT user1
// .call() also CANNOT change this for arrow functions


COMPARISON TABLE — Regular Function vs Arrow Function (this)

Function Typethis refers toRegular function (method)The OBJECT that called it (dynamic binding)Arrow functionthis of the ENCLOSING LEXICAL SCOPE (static binding)



call(), apply(), bind() — Controlling this

All three let you EXPLICITLY set what this refers to inside a function.


call(thisArg, arg1, arg2, ...)

INVOKES the function IMMEDIATELY with given this and comma-separated args.


function about(hobby, favMusician) {
console.log(this.first_name, this.age, hobby, favMusician);
}
const user2 = { first_name: "Siddesh", age: 26 };
about.call(user2, "Chess", "Coldplay");
// this → user2, prints: Siddesh 26 Chess Coldplay
apply(thisArg, [argsArray])

SAME as call(), but arguments passed as an ARRAY.
Internally apply() uses call() — only difference is argument format.


about.apply(user2, ["Chess", "Coldplay"]);
bind(thisArg, arg1, arg2, ...)

Does NOT invoke immediately.
Returns a NEW FUNCTION with this permanently bound — call it later.


const aboutUser2 = about.bind(user2);
aboutUser2("Chess", "Coldplay");   // invoked later, this still user2


COMPARISON TABLE — call vs apply vs bind

MethodInvokes immediately?Argument formatReturnscall✅ Yescomma separated (a,b,c)function resultapply✅ Yesarray [a,b,c]function resultbind❌ Nocomma separated (a,b,c)NEW bound function



COMMON MISTAKE — Losing this context

const myfunc = user1.about;   // assigned to a plain variable
myfunc();   // ❌ `this` is now undefined/global — NOT user1

// FIX → bind it
const myfunc = user1.about.bind(user1);
myfunc();   // ✅ `this` → user1


FACTORY FUNCTIONS — Avoiding repeated object literals

PROBLEM: Writing the SAME object structure (with methods) repeatedly for
user1, user2, user3... wastes memory (each object gets its OWN copy of
the about/is18 function).

STEP 1 — Factory Function (still duplicates functions per object)
function createUser(first_name,last_name,email,age,address){
const user = {};
user.first_name = first_name;
...
user.about = function(){ return ${this.first_name} ${this.last_name} is ${this.age}; };
user.is18  = function(){ return this.age >= 18; };
return user;
}

STEP 2 — Move methods OUT into a shared object, reference them
const userMethods = {
about: function(){ ... },
is18:  function(){ ... }
};
function createUser(...){
const user = {};
...
user.about = userMethods.about;  // reference, not a copy — better
user.is18  = userMethods.is18;
return user;
}

STEP 3 — BEST: use Object.create() + Prototype chain
function createUser(first_name,last_name,email,age,address){
const user = Object.create(userMethods);  // sets [[prototype]] link
user.first_name = first_name;
...
return user;   // no need to manually assign about/is18/sing
}
// user1.about() → JS looks at user1 first, not found,
// then walks up to userMethods via [[prototype]] → found!

FLOWCHART — Object.create() Prototype Link

user1 { first_name, last_name, age, ... }
|
| [[prototype]] (proto)
v
userMethods { about(), is18(), sing() }   ← SHARED across all users,
NOT duplicated per object


KEY POINTS

✅ Method = function stored as object property; this = object calling it
✅ Regular function this is DYNAMIC (depends on how it's called)
✅ Arrow function this is LEXICAL (inherited from enclosing scope) — cannot
be changed via call/apply/bind
✅ call()  → invoke now, args comma-separated
✅ apply() → invoke now, args as array
✅ bind()  → returns new function with this fixed, invoke later
✅ Factory functions avoid repeating object literal code
✅ Object.create(sharedMethods) links objects to a SHARED prototype —
methods are NOT duplicated in memory for every object

################################################################################

17. PROTOTYPE IN JS

################################################################################


THEORY — WHAT IS A PROTOTYPE?


In JS: FUNCTION = FUNCTION + OBJECT. Functions can have their OWN properties.
ONLY FUNCTIONS have a .prototype property (a plain object, initially {}).
Plain object literals do NOT have .prototype (it's undefined for them).
function printfunction(){ console.log("hello"); }
console.log(printfunction.prototype);   // {} (empty object exists)
const hello = { name:"Yatin" };
console.log(hello.prototype);            // undefined



THE new KEYWORD — What it does internally (3 steps)

When you call a function with new:


Creates a new EMPTY object → this = {}
Sets that object's [[prototype]] (i.e. proto) to point to
FunctionName.prototype  → equivalent to Object.create(Fn.prototype)
Executes the function body with this bound to the new object, and
RETURNS this automatically.


function createUser(first_name, age) {

    this.first_name = first_name;
    this.age = age;
}
createUser.prototype.about = function () {
    console.log(this.first_name, this.age);
};

const user1 = new createUser("Yatin", 22);
user1.about();   // "Yatin 22"
// user1.__proto__ === createUser.prototype  → true

FLOWCHART — new Keyword Steps

new createUser("Yatin", 22)
|
v
[1] this = {}                  (empty object created)
|
v
[2] this.proto = createUser.prototype   (link to prototype object)
|
v
[3] run function body → this.first_name = "Yatin", this.age = 22
|
v
return this   →  user1 = { first_name:"Yatin", age:22, proto: {about(){}} }


CONSTRUCTOR FUNCTIONS — Naming Convention


Functions meant to be used with new start with a CAPITAL LETTER
(e.g., CreateUser) — a convention to signal "this is a constructor".
function CreateUser(first_name,last_name,email,age,address){
this.first_name = first_name;
this.last_name  = last_name;
this.email = email;
this.age = age;
this.address = address;
return this;
}
CreateUser.prototype.about = function(){
return ${this.first_name} ${this.last_name} is ${this.age} years old.;
};
CreateUser.prototype.is18 = function(){ return this.age >= 18; };
const user1 = new CreateUser("Yatin","Chaudhari","c.yatin@gmail.com",25,"...");
user1.is18();    // true



hasOwnProperty()


for...in loops over ALL enumerable properties — INCLUDING inherited ones
from the prototype chain.
obj.hasOwnProperty(key) → returns true ONLY IF the property belongs
DIRECTLY to the object itself (not inherited).
for (let key in user1) {
if (user1.hasOwnProperty(key)) {
console.log(key);   // only own props: first_name, last_name, email, age, address
// (NOT about, is18 — those are on prototype)
}
}



KEY POINTS

✅ Only FUNCTIONS have a .prototype property (object literals don't)
✅ new keyword → creates {} → links proto to Fn.prototype → runs
constructor body with this → returns the object
✅ Methods placed on Fn.prototype are SHARED by all instances (memory efficient)
✅ Constructor functions conventionally start with a Capital Letter
✅ hasOwnProperty(key) → checks if property is OWN (not inherited via prototype)
✅ proto / [[prototype]] is the internal LINK used for prototype chain
lookups (the basis of "Prototypal Inheritance")

################################################################################

18. CLASSES IN JS (ES6)

################################################################################


THEORY — class KEYWORD


ES6 introduced class as SYNTACTIC SUGAR over the existing prototype-based
pattern (Object.create / constructor functions / .prototype).
A class is NOT itself an object — it's a TEMPLATE/BLUEPRINT for creating
objects.
Classes are NOT hoisted (unlike function declarations).
constructor() → special method:
• exact name "constructor"
• runs AUTOMATICALLY when new ClassName(...) is called
• used to initialize object properties
• if omitted, JS adds an empty constructor automatically
A class CANNOT be invoked without new ("Class constructor cannot be
invoked without 'new'").
class CreateUser {
constructor(first_name,last_name,email,age,address) {
this.first_name = first_name;
this.last_name  = last_name;
this.email = email;
this.age = age;
this.address = address;
}
about() {
return ${this.first_name} ${this.last_name} is ${this.age} years old.;
}
is18() { return this.age >= 18; }
sing() { return 'abc efg hijk lmno...'; }
}
const user1 = new CreateUser("Yatin","Chaudhari","c@gmail.com",25,"...");
// Object.getPrototypeOf(user1) === CreateUser.prototype  → true
// (methods like about/is18/sing live on CreateUser.prototype — same as
//  the manual prototype approach in Topic 17!)



INHERITANCE — extends & super


extends → makes a CHILD/DERIVED class inherit properties & methods of a
PARENT/BASE class.
super(...) → calls the PARENT class's constructor (must be called before
using this in the child constructor).
class Animal {                       // PARENT / BASE class
constructor(name, age) {
this.name = name;
this.age = age;
}
eat()       { return ${this.name} is Eating; }
isCute()    { return true; }
ishealthy() { return this.age <= 10; }
}
class Dog extends Animal {           // CHILD / DERIVED class (subclass)
constructor(name, age, speed) {
super(name, age);            // calls Animal's constructor
this.speed = speed;
}
run() { return ${this.name} runs at ${this.speed} km/h; }
}
const tommy = new Dog("tommy", 9, 33);
tommy.eat();      // "tommy is Eating"   ← inherited from Animal
tommy.isCute();   // true                ← inherited
tommy.run();      // "tommy runs at 33 km/h"  ← own method


FLOWCHART — Class Inheritance

class Animal (Base/Parent)
constructor(name, age)
eat(), isCute(), ishealthy()
▲
| extends
|
class Dog (Derived/Child/Sub)
constructor(name, age, speed) { super(name, age); this.speed = speed; }
run()                          ← additional method

new Dog("tommy",9,33)
|
v
tommy { name, age, speed, [[prototype]] → Dog.prototype → Animal.prototype }
tommy.eat() → not found on Dog.prototype → found on Animal.prototype ✅


METHOD OVERRIDING: if Dog defines its OWN eat() with the same name as
Animal's eat(), the CHILD's version takes priority (overrides parent).



GETTERS & SETTERS


get → lets you CALL a method LIKE A PROPERTY (no parentheses).
set → lets you ASSIGN a value, which runs custom logic internally.
class Person {
constructor(first_name, last_name, age) {
this.first_name = first_name;
this.last_name  = last_name;
this.age = age;
}
  get fullname() {                     // GETTER
      return `Full Name is ${this.first_name} ${this.last_name}.`;
  }

  set fullname(fullname) {             // SETTER
      const [first_name, last_name] = fullname.split(" ");
      this.first_name = first_name;
      this.last_name  = last_name;
  }

}
const person1 = new Person("Yatin","Chaudhari",24);
console.log(person1.fullname);        // GETTER called like a property
// "Full Name is Yatin Chaudhari."
person1.fullname = "Aditya Gaikwad";  // SETTER called via assignment
console.log(person1.fullname);        // "Full Name is Aditya Gaikwad."



STATIC METHODS & PROPERTIES


static members belong to the CLASS itself, NOT to instances.
Called directly on the class name — NO need to create an object (new).
Static members CANNOT be accessed via instance.method().
class Person {
static desc = "Represents a human being";
static classInfo() {
return "This is the Person class";
}
...
}
Person.classInfo();   // ✅ called on the CLASS directly
Person.desc;          // ✅ static property
person1.classInfo();  // ❌ Error — not available on instances


COMPARISON TABLE — Instance Method vs Static Method

AspectInstance MethodStatic MethodCalled viaobject instance (person1.method())ClassName.method()Access to thisrefers to the instancerefers to the class itselfNeeds new?Yes (to create instance first)No



KEY POINTS

✅ class = syntactic sugar over prototype-based inheritance
✅ constructor() runs automatically on new ClassName(...)
✅ extends → inherit from a parent class | super() → call parent constructor
✅ child class methods OVERRIDE parent methods of the same name
✅ get/set let methods behave like properties (read/write with custom logic)
✅ static members belong to the CLASS, accessed without creating an instance

################################################################################

19. HOW JAVASCRIPT WORKS (Compilation, Hoisting, Execution Context)

################################################################################


THEORY — TWO PHASES OF RUNNING CODE

Before EVEN executing the first line of code, JS goes through:


COMPILATION PHASE

Tokenizing/Lexing → breaks code into tokens
Parsing → builds an AST (Abstract Syntax Tree)
Code Generation → produces executable code
WHY COMPILE FIRST?
a) Early Error Checking (syntax errors caught upfront)
b) Determine appropriate SCOPE for each variable (lexical scoping)
NOTE: During this phase, variables are KNOWN to exist (and their scope is
decided), but they are NOT yet assigned their actual values.



EXECUTION PHASE

Code runs LINE BY LINE inside an "Execution Context".






EXECUTION CONTEXT — "The Environment Code Runs In"


JS is SYNCHRONOUS and SINGLE-THREADED (async behaviour comes from the
BROWSER's WebAPIs, not core JS).
GLOBAL EXECUTION CONTEXT (GEC) is created BY DEFAULT, even before any code
runs. It is associated with the global object (window in browsers).
A NEW Execution Context is created EVERY TIME a function is CALLED.
this at the global level → window object (in browser).


EXECUTION CONTEXT has TWO phases:
a) CREATION PHASE  — memory allocated for variables/functions
b) EXECUTION PHASE — code runs line by line, values assigned


EXAMPLE — var HOISTING

console.log(this);       // window object
console.log(window);     // window object
console.log(firstName);  // undefined  (NOT an error!)
var firstName = 'Yatin';
console.log(firstName);  // "Yatin"

WHY?  During CREATION PHASE, var firstName is registered in memory with
value undefined. During EXECUTION PHASE, line 4 assigns "Yatin".

FLOWCHART — GEC Creation & Execution

BEFORE code execution (CREATION PHASE)
Global Memory:
this  → window {}
firstName → undefined

DURING code execution (EXECUTION PHASE) — line by line:
line1: console.log(this)      → window {}
line2: console.log(window)    → window {}
line3: console.log(firstName) → undefined
line4: firstName = "Yatin"    → memory updated
line5: console.log(firstName) → "Yatin"

AFTER code execution → GEC popped off the Execution Stack


HOISTING RULES — var vs let vs const vs function

console.log("I am a " + job);   // "I am a undefined"  (NOT error)
var job = "Web Developer";
console.log("I am a " + job);   // "I am a Web Developer"

console.log(firstName);   // ❌ ReferenceError: Cannot access before initialization
let firstName = "Yatin";

COMPARISON TABLE — Hoisting Behaviour

DeclarationHoisted?Initial value before assignmentAccessing earlyvar✅ Yesundefinedgives undefinedlet / const✅ Yes*uninitialized (in TDZ)❌ ReferenceErrorfunction declaration✅ Yesfull function definition✅ works (can call early)function expressionfollows var/let/const rule of its variable-depends on var/let/const



let/const ARE hoisted, but remain in the "Temporal Dead Zone" until their
declaration line executes.



TEMPORAL DEAD ZONE (TDZ)


TDZ = the period from the START of a block until the line where a
let/const/class variable is actually DECLARED & INITIALIZED.
Accessing the variable during this zone → ReferenceError:
"Cannot access '...' before initialization"
console.log(typeof first_name);  // ❌ ReferenceError (TDZ)
let first_name = "Yatin";



KEY POINTS

✅ JS code runs in 2 phases: Compilation (syntax check + scope decided) then
Execution (line by line)
✅ Global Execution Context (GEC) is created by default; this → window
✅ A new Execution Context is created for EVERY function call
✅ var → hoisted as undefined; let/const → hoisted but in TDZ (error if
accessed before declaration)
✅ Function declarations are FULLY hoisted (usable before they appear)
✅ JS is synchronous & single threaded — async comes from browser WebAPIs

################################################################################

20. FUNCTION EXECUTION CONTEXT & SCOPE CHAIN

################################################################################


THEORY — TWO TYPES OF EXECUTION CONTEXT


GLOBAL EXECUTION CONTEXT (GEC) → created once, when script starts.
FUNCTION EXECUTION CONTEXT (FEC) → created EVERY TIME a function is
CALLED/INVOKED — represents that function's LOCAL scope.



Each Execution Context has its OWN memory for variables/arguments.
arguments → an array-like object available inside regular functions,
containing ALL arguments passed (even extra ones beyond named params).



EXAMPLE

let foo = "foo";
console.log(foo);

function getFullName(firstName, lastName) {
    console.log(arguments);          // array-like object of all args
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("harshit", "sharma");
console.log(personName);   // "harshit sharma"

FLOWCHART — Execution Stack (Call Stack)

STEP 1: Global Execution Context (GEC) pushed onto stack (default)
Global Memory (Creation Phase):
foo → uninitialized
getFullName → function definition
personName → uninitialized

STEP 2: Code runs line by line (Execution Phase)
foo = "foo"  → printed
getFullName("harshit","sharma") CALLED
|
v
STEP 3: NEW Function Execution Context (FEC) PUSHED on top of GEC
FEC Memory:
firstName = "harshit"
lastName  = "sharma"
arguments = ["harshit","sharma"]
myVar = "var inside func"
fullName = "harshit sharma"
→ returns "harshit sharma"
→ FEC POPPED off the stack

STEP 4: personName = "harshit sharma" (back in GEC)
STEP 5: GEC popped after all code finishes

CALL STACK (Execution Stack) = LIFO (Last In, First Out) structure that
tracks all active Execution Contexts.


SCOPE CHAIN


JS resolves a variable by searching the CURRENT scope first; if not found,
it walks UP to the PARENT (lexical/enclosing) scope, and so on, until the
GLOBAL scope — this chain of lookups is the SCOPE CHAIN.
Scope chain is determined LEXICALLY (by where code is WRITTEN).
const last_name = "Chaudhari";
const printName = function () {
const first_name = "Yatin";
  function myfunction() {
      console.log(first_name);  // found in printName's scope
      console.log(last_name);   // not found locally → walk up → Global ✅
  }
  myfunction();

};
printName();


FLOWCHART — Scope Chain Lookup

myfunction() scope    -- looking for last_name --
|  not found
v
printName() scope     -- still not found --
|
v
Global scope           -- FOUND: last_name = "Chaudhari" ✅


KEY POINTS

✅ A new Function Execution Context is created on EVERY function call
✅ Call Stack = LIFO structure tracking active execution contexts
✅ arguments object captures ALL passed arguments inside regular functions
✅ Scope Chain = lookup path from innermost scope outward to Global scope
✅ Scope chain is LEXICAL — determined by code structure, not call location

################################################################################

21. CLOSURES IN JS

################################################################################


THEORY — WHAT IS A CLOSURE?


A CLOSURE is a function that "remembers" and continues to have ACCESS to
variables from its PARENT (lexical) scope, EVEN AFTER the parent function
has finished executing ("closed").
Closures are created AUTOMATICALLY whenever a function is created inside
another function.
Built on top of LEXICAL SCOPING (Topic 13/20).
Useful for: maintaining STATE between function calls (event-driven code),
and creating PRIVATE variables (data hiding).



BASIC EXAMPLE — Function Returning a Function

function printFullName(first_name, last_name) {
    function printName() {
        console.log(first_name, last_name);
    }
    return printName;     // returning the INNER function (not calling it)
}

const ans2 = printFullName("Yatin", "chaudhari");
ans2();   // "Yatin chaudhari"
// Even though printFullName() has FINISHED executing,
// printName() still remembers first_name & last_name → CLOSURE


EXAMPLE 2 — Closure capturing MULTIPLE variables + parameter

function hello(x) {
    const a = "varA";
    const b = "varB";
    return function () {
        console.log(a, b, x);   // closure over a, b, x
    };
}
const ans = hello("arg");
ans();   // "varA varB arg"


EXAMPLE 3 — Closures for "configured" functions (square, cube)

function myfunction(power) {
    return function (number) {
        return number ** power;   // closure remembers `power`
    };
}

const square = myfunction(2);
console.log(square(3));   // 9   (3^2)

const cube = myfunction(3);
console.log(cube(3));     // 27  (3^3)


square and cube are two DIFFERENT closures, each with its OWN
remembered power value (2 and 3 respectively).



EXAMPLE 4 — Closures for PRIVATE STATE (Counter / Call Limiter)

function func() {
    let counter = 0;            // PRIVATE variable — not accessible outside
    return function () {
        if (counter < 1) {
            counter++;
            console.log("Hie function is Been Called!!!");
        } else {
            console.log("Hie You have exceeded Call limit");
        }
    };
}

const myFunc = func();
myFunc();   // "Hie function is Been Called!!!"  (counter: 0→1)
myFunc();   // "Hie You have exceeded Call limit"
myFunc();   // "Hie You have exceeded Call limit"

const myFunc2 = func();   // NEW independent closure, own `counter`
myFunc2();  // "Hie function is Been Called!!!"  (fresh counter starts at 0)

FLOWCHART — Closure Memory Model

func()  called
|
v
Creates: counter = 0  (in func's scope)
|
v
Returns inner function ── KEEPS A REFERENCE to func's scope (closure)
|
v
myFunc = <inner function + closure over {counter}>
|
v
myFunc() called → reads/updates counter (1) even though func() already
finished executing!

myFunc2 = func()  → NEW separate closure → its OWN independent counter
(myFunc's counter and myFunc2's counter do NOT interfere with each other)


KEY POINTS

✅ Closure = inner function + access to outer (parent) function's variables,
even after the outer function has returned/finished
✅ Built on lexical scoping — each function "remembers" where it was created
✅ Each call to the outer function creates a NEW, INDEPENDENT closure
✅ Used for: private/encapsulated state, counters, memoization, currying
(e.g. myfunction(power) → returns square/cube functions)

################################################################################

22. DOM TUTORIAL (Document Object Model — Basics)

################################################################################


THEORY — WHAT IS THE DOM?


HTML structures the page; JS adds BEHAVIOUR — but JS cannot understand HTML
tags directly.
When the browser loads an HTML file, it creates a corresponding
representation called the DOM (Document Object Model) — the SAME document,
but represented as OBJECTS (e.g., the <h1> tag becomes an h1 object)
that JS CAN understand and manipulate.
DOM = TREE / FOREST structure. Each branch ends in a NODE; nodes can have
event listeners attached.
"Object Model" → because the document's STRUCTURE and BEHAVIOUR are modeled
using OBJECTS (tags become objects with properties/attributes).
window.document        // the DOM — JS object representation of the page
console.dir(window.document)   // shows the actual JS object/tree



SELECTING ELEMENTS


getElementById("id")

Returns a SINGLE element with the given id.
If duplicates exist, returns the FIRST one (ids should be unique).


const headerELement = document.getElementById("main-heading");
headerELement.style.color = "red";
querySelector("css-selector")

Returns the FIRST element matching a CSS selector (id, class, tag, etc.)
Throws SYNTAX_ERR if selector invalid.


const header   = document.querySelector(".header");
const navItem  = document.querySelector(".nav-item");   // first match only
querySelectorAll("css-selector")

Returns ALL matching elements as a NodeList.


const navItems = document.querySelectorAll(".nav-item");
getElementsByClassName("class")

Returns an HTMLCollection (array-like, NOT a real array).





COMPARISON TABLE — Element Selection Methods

MethodReturnsMultiple?TypegetElementByIdsingle ElementNoElementquerySelectorfirst matchNoElementquerySelectorAllall matchesYesNodeList (static)getElementsByClassNameall matchesYesHTMLCollection (live)getElementsByTagNameall matchesYesHTMLCollection (live)


NOTE: HTMLCollection & NodeList are "ARRAY-LIKE" — support indexing & length,
but DO NOT have array methods (map, filter...) directly — must convert with
Array.from() or spread [...collection] to use array methods, OR iterate
with for...of / forEach (NodeList supports forEach).


innerHTML vs textContent vs innerText

const headLine = document.querySelector(".headline");

headLine.innerHTML;                 // GET html markup inside element
headLine.innerHTML = "<h1>New</h1>"; // SET — replaces inner HTML (parses tags)
headLine.innerHTML += "<button>...</button>"; // append HTML

mainHeading.textContent;   // gets ALL text, including HIDDEN (display:none) text
mainHeading.innerText;     // gets only VISIBLE text (respects CSS display:none)

COMPARISON TABLE — innerHTML vs textContent vs innerText

PropertyParses HTML tags?Includes hidden text (display:none)?innerHTML✅ Yes✅ YestextContent❌ No (plain text)✅ YesinnerText❌ No (plain text)❌ No (only visible text)



CHANGING STYLES — .style property

const heading2 = document.querySelector("div.headline h2");
heading2.style.color = "#fff";
heading2.style.backgroundColor = "purple";  // camelCase for hyphenated CSS
heading2.style.border = "5px solid black";
heading2.style.padding = "5px";


CSS properties with HYPHENS (e.g., background-color) must be written in
CAMEL CASE in JS (backgroundColor) — heading2.style.background-color
throws an error (interpreted as subtraction).



GET / SET ATTRIBUTES

const link = document.querySelector("a");
link.getAttribute("href");              // get value of an attribute
link.setAttribute("href", "https://google.com");  // set/change attribute


getAttribute() returns null/"" if attribute doesn't exist.



SCRIPT LOADING: async vs defer


Plain <script src="...">  in <head>

HTML parsing PAUSES, JS loads & executes, THEN HTML parsing resumes.
Bad: blocks rendering, and JS may run before rest of HTML exists.




<script src="..." async>
- HTML parsing & JS file LOADING happen in PARALLEL.
- As soon as JS is loaded, HTML PARSING PAUSES while JS EXECUTES.
- Risk: JS may run before HTML below it is parsed → errors if JS
  references elements not yet parsed. Scripts don't wait for each other
  (order not guaranteed).




<script src="..." defer>  ✅ BEST PRACTICE
- HTML parsing & JS loading happen in PARALLEL.
- JS EXECUTION is DELAYED until AFTER the ENTIRE HTML is parsed.
- Scripts maintain relative ORDER. Executes before DOMContentLoaded.





COMPARISON TABLE — Script Loading Strategies

AttributeHTML parsing blocked while loading?Execution timingOrder preserved?(none)✅ Yes (blocks immediately)Immediately, in place✅ Yesasync❌ No (loads in parallel)As soon as script is loaded❌ Nodefer❌ No (loads in parallel)After full HTML parsing done✅ Yes


FLOWCHART — defer (recommended)

HTML parsing starts
|
+------> JS file loading STARTS in PARALLEL
|               |
HTML parsing CONTINUES (not blocked)
|               |
HTML parsing FINISHES        JS file FINISHES loading (waits)
|               |
+-------+-------+
|
v
JS EXECUTES (DOM fully ready)


KEY POINTS

✅ DOM = tree-like object representation of HTML that JS can manipulate
✅ getElementById/querySelector → single element | querySelectorAll/
getElementsByClassName → multiple elements (array-like, not real arrays)
✅ innerHTML parses tags & includes hidden text | textContent = plain text +
hidden | innerText = plain VISIBLE text only
✅ .style.property uses camelCase for hyphenated CSS properties
✅ getAttribute()/setAttribute() read/write HTML attributes
✅ defer is the BEST way to load JS — parses HTML & loads JS in parallel,
executes JS only after HTML parsing completes

################################################################################

23. DOM TREE (Traversing, Creating, Cloning, Live vs Static Lists)

################################################################################


THEORY — DOM TREE STRUCTURE

[Document] (Root Node, a JS Object)
     |
     v
   [HTML] (Root Element — child of document)
     |

+-----+------+
|             |
[HEAD]        [BODY]
|             |
...tags...    ...tags... (each tag = ELEMENT NODE; text inside = TEXT NODE)


document.getRootNode() → returns the document object (Root Node)
document.childNodes → NodeList containing <html> (Root Element)
element.childNodes  → NodeList of ALL child nodes (including TEXT nodes
for whitespace/newlines between tags!)
element.parentNode  → the parent of a node
element.nextSibling / previousSibling → adjacent nodes at same tree level



TRAVERSING THE DOM

const rootNode = document.getRootNode();          // document object
const childOfRoot = rootNode.childNodes;          // NodeList [html]
const htmlNode = childOfRoot[0];

const htmlChildren = htmlNode.childNodes;          // NodeList(3) [head, text, body]
const headNode = htmlChildren[0];
const bodyNode = htmlChildren[2];

headNode.parentNode;     // → htmlNode

FLOWCHART — Traversal Properties

              parentNode
                  ▲
                  |

previousSibling <--[ NODE ]--> nextSibling
|
v
childNodes (NodeList, includes text nodes for whitespace)


CREATING NEW ELEMENTS — Modern Approach

PROBLEM with innerHTML for ADDING elements:


Re-renders/re-parses ALL existing content too → PERFORMANCE issue.
Best used for EDITING existing content, not repeatedly ADDING.


SOLUTION — createElement + textContent + append:
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "New Students";

const todolist = document.querySelector(".todo-list");
todolist.append(newTodoItem);

Useful methods: append(), prepend(), remove(), before(), after()


OLD METHODS (Legacy / IE support)


appendChild(node)            → adds node as last child
insertBefore(newNode, refNode) → ul.insertBefore(li, referenceNode)
replaceChild(newNode, oldNode) → swaps an existing child
removeChild(node)            → removes a child node



insertAdjacentHTML(position, html)  — less commonly used

Four positions relative to the element:
"beforebegin"  → before the element itself
"afterbegin"   → inside element, before its first child
"beforeend"    → inside element, after its last child
"afterend"     → after the element itself

todolist.insertAdjacentHTML("beforeend", "<li>beforeEnd</li>");

FLOWCHART — insertAdjacentHTML positions

beforebegin ---> <ul class="todo-list">
afterbegin ---> <li>item1</li>
<li>item2</li>
beforeend  --->
</ul>
afterend    --->


CLONING NODES — cloneNode()

const li2 = li.cloneNode();       // shallow clone — NO children/innerHTML
const li2 = li.cloneNode(true);   // DEEP clone — includes children & innerHTML


Useful when needing the SAME element in TWO places (e.g. append AND
prepend) — you cannot move the same node to two locations directly, so
clone first.



classList — Add / Remove / Toggle / Contains

sectionTodo.classList         // returns DOMTokenList of all classes
sectionTodo.classList.add("bg-dark");
sectionTodo.classList.remove("bg-dark");
sectionTodo.classList.toggle("bg-dark");      // add if absent, remove if present
sectionTodo.classList.contains("bg-dark");    // true/false


GET DIMENSIONS — getBoundingClientRect()

const info = sectionTodo.getBoundingClientRect();
// returns { top, bottom, left, right, width, height, x, y }
// dimensions relative to the VIEWPORT


STATIC LIST vs LIVE LIST


querySelectorAll() → returns a STATIC NodeList — a SNAPSHOT at the time it
was called. Adding new elements LATER does NOT update this list.
getElementsByTagName() / getElementsByClassName() → return a LIVE
HTMLCollection — AUTOMATICALLY updates as the DOM changes.
const listItems = document.querySelectorAll(".todo-list li");  // STATIC
// ...append a new li to ul...
console.log(listItems);   // length UNCHANGED (snapshot)
const liItems = ul.getElementsByTagName("li");   // LIVE
// ...append a new li to ul...
console.log(liItems);     // length INCREASED automatically


COMPARISON TABLE — Static vs Live Lists

MethodList typeUpdates automatically on DOM change?querySelectorAllStatic (NodeList)❌ NogetElementsByClassName/TagNameLive (HTMLCollection)✅ Yes



KEY POINTS

✅ DOM tree: Document → html → head/body → nested element & text nodes
✅ childNodes/parentNode/nextSibling/previousSibling → traverse the tree
✅ createElement + append/prepend = performant way to add new elements
(avoid repeated innerHTML appends — causes re-rendering)
✅ insertAdjacentHTML has 4 positions: beforebegin, afterbegin, beforeend, afterend
✅ cloneNode(true) → deep clone (includes children); cloneNode() → shallow
✅ classList.add/remove/toggle/contains manage CSS classes via JS
✅ getBoundingClientRect() → element's size & position relative to viewport
✅ querySelectorAll = STATIC snapshot | getElementsBy... = LIVE, auto-updating

################################################################################

24. INTRO TO EVENTS

################################################################################


THEORY — WHAT IS AN EVENT?


An EVENT is an action/occurrence in the browser (click, keypress,
mouseover, scroll, etc.) that JS can "listen" for and respond to.


3 WAYS TO ADD EVENTS:


Inline HTML (OLD, bad practice — mixes JS with HTML)
<button onclick="console.log('clicked')">Learn More</button>
DOM property — element.onclick
const btn = document.querySelector(".btn-headline");
btn.onclick = function () { console.log("You Clicked Me!!"); };
// LIMITATION: can only assign ONE handler per event (overwrites)
addEventListener(event, function, capture)  ✅ BEST PRACTICE
const btn = document.querySelector(".btn-headline");
function clickMe() { console.log("You Clicked Me!!"); }
btn.addEventListener("click", clickMe);
// Can attach MULTIPLE listeners for the SAME event on SAME element



EVENTS BEHIND THE SCENES (Browser = JS Engine + WebAPIs)


BROWSER = JS Engine + extra features (WebAPIs).
JS Engine executes code LINE BY LINE (synchronous).
When user performs an action (e.g., click), the BROWSER (JS Engine +
WebAPI) does TWO things:

Hands the CALLBACK function to the JS Engine to run.
Passes an EVENT OBJECT containing info about WHAT happened.





FLOWCHART — Event Handling Flow

User performs action (click)
|
v
Browser (WebAPI) detects event
|
v
Callback function handed to JS Engine, with Event Object (e)
|
v
JS Engine executes callback → e.g. console.log(e.target)


THE EVENT OBJECT (e) — target vs currentTarget

firstbtn.addEventListener("click", function (e) {
    console.log(e.target);          // element that TRIGGERED the event
    console.log(e.currentTarget);    // element the LISTENER is ATTACHED to
});


e.target        → the ACTUAL element clicked (could be a child element).
e.currentTarget → the element the addEventListener was called ON.
(In a function declaration callback, this === e.currentTarget)



this IN EVENT LISTENERS

btn.addEventListener("click", function () {
    console.log(this);   // `this` → the button element (currentTarget)
});

btn.addEventListener("click", () => {
    console.log(this);   // Arrow function → `this` is LEXICAL
                          // → refers to outer/enclosing scope, NOT the button
});

COMPARISON TABLE — this in Event Listeners

Callback typethis valuefunction() {...}the element the listener is attached to (button)() => {...} (arrow)inherited from enclosing lexical scope (NOT button)



EVENTS ON MULTIPLE ELEMENTS

const allBtns = document.querySelectorAll("button");
allBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        console.log(this.textContent);   // `this` → the clicked button
    });
});


COMMON EVENTS — keypress, mouseover/mouseout

document.body.addEventListener("keypress", (e) => {
    console.log(e.key);    // which key was pressed
});

COMPARISON TABLE — Mouse Events

EventFires when...mouseoverpointer enters the element (or its children)mouseoutpointer leaves the element (or one of its children)mouseleavepointer leaves the element itself (not children)



KEY POINTS

✅ 3 ways to add events: inline HTML, .onclick property, addEventListener()
✅ addEventListener() is preferred — supports multiple handlers per event
✅ Event Object (e) → e.target (what triggered) vs e.currentTarget (where
listener attached)
✅ this in normal function callback = element listener attached to
(= currentTarget); arrow functions use LEXICAL this
✅ Use forEach/for...of on querySelectorAll() results to attach listeners to
multiple elements at once

################################################################################

25. EVENT FLOW (Bubbling, Capturing, Delegation)

################################################################################


THEORY — THREE CONCEPTS OF EVENT FLOW


EVENT BUBBLING (Event Propagation) — DEFAULT behaviour

When an event occurs on an element, it FIRST runs on that element, then
"BUBBLES UP" to its ANCESTORS (parent → grandparent → body → document),
triggering their listeners too (if any).



EVENT CAPTURING (Trickling)

The OPPOSITE direction — event travels DOWN from the OUTERMOST ancestor
to the TARGET element FIRST, BEFORE bubbling happens.
Enabled by passing true (or {capture:true}) as the 3rd argument to
addEventListener.



EVENT DELEGATION

Instead of attaching listeners to MANY child elements individually,
attach ONE listener to a COMMON PARENT, and use e.target to identify
which child was actually clicked.
Efficient — works even for DYNAMICALLY ADDED children.






SYNTAX

element.addEventListener(event, callback, useCapture);
// useCapture = true  → CAPTURING phase
// useCapture = false (default) → BUBBLING phase


EXAMPLE — HTML Structure

<div class="grandparent">
    <div class="parent">
        <div class="child">Click Me</div>
    </div>
</div>

CAPTURING EXAMPLE (capture = true)
child.addEventListener("click", () => console.log("Capture Child"), true);
parent.addEventListener("click", () => console.log("Capture Parent"), true);
grandparent.addEventListener("click", () => console.log("Capture Grandparent"), true);
document.body.addEventListener("click", () => console.log("Capture Body"), true);

// Click on "child" → OUTPUT ORDER:
// Capture Body → Capture Grandparent → Capture Parent → Capture Child

BUBBLING EXAMPLE (default, capture = false)
child.addEventListener("click", () => console.log("Bubble Child"));
parent.addEventListener("click", () => console.log("Bubble Parent"));
grandparent.addEventListener("click", () => console.log("Bubble Grandparent"));
document.body.addEventListener("click", () => console.log("Bubble Body"));

// Click on "child" → OUTPUT ORDER:
// Bubble Child → Bubble Parent → Bubble Grandparent → Bubble Body

FLOWCHART — Full Event Flow (Capturing → Target → Bubbling)

CAPTURING PHASE (top → down)              BUBBLING PHASE (bottom → up)
document/body                                       ▲
|                                              |
v                                              |
.grandparent  -------------------------------> .grandparent
|                                              |
v                                              |
.parent       -------------------------------> .parent
|                                              |
v                                              |
.child  <===  TARGET ELEMENT (event happens here)  ==> .child


EVENT DELEGATION

grandparent.addEventListener("click", (e) => {
    console.log(e.target);   // tells us exactly which inner element was clicked
});


Benefits:
a) ONE listener instead of many → less memory, cleaner code.
b) Works automatically for elements ADDED to the DOM LATER (dynamic
content) — because the listener is on the stable PARENT, and the
click event still BUBBLES UP to it.


COMPARISON TABLE — Bubbling vs Capturing vs Delegation

ConceptDirection of event travelTypical UseBubblingTarget → up to ancestors (default)Default event handlingCapturingAncestors → down to targetIntercept events before target seesDelegationUses bubbling + e.target on parentEfficient handling for many/dynamic children



KEY POINTS

✅ Default event flow = BUBBLING (target → outward to ancestors)
✅ Pass true as 3rd arg to addEventListener for CAPTURING (ancestors → target)
✅ Capturing happens BEFORE bubbling for the same event
✅ Event Delegation = attach ONE listener on a parent, use e.target to detect
which child triggered it — efficient & works for dynamically added elements

################################################################################

26. ASYNCHRONOUS JS (Callbacks, setTimeout/Interval, Promises)

################################################################################


THEORY — SYNCHRONOUS vs ASYNCHRONOUS


JS is SYNCHRONOUS & SINGLE-THREADED — operations execute SEQUENTIALLY,
one after another; each operation waits for the previous one to finish.
ASYNCHRONOUS behaviour (timers, network requests, etc.) is provided by the
BROWSER (WebAPIs), NOT by the JS engine itself.



setTimeout() — Run code ONCE after a delay

console.log("script Start");
setTimeout(() => {
    console.log("inside Timeout Function");
}, 3000);   // milliseconds (1000ms = 1 sec)
console.log("Script Ends");

// OUTPUT ORDER:
// "script Start"
// "Script Ends"        ← runs BEFORE the timeout (non-blocking)
// "inside Timeout Function"   (after ~3 sec)


setTimeout runs ONCE. Use clearTimeout(timerId) to cancel before it fires.



setInterval() — Run code REPEATEDLY at fixed intervals

setInterval(() => {
    console.log(Math.random());
}, 1000);   // repeats every 1 second until cleared


Use clearInterval(intervalId) to stop it.


FLOWCHART — setTimeout & the "Non-blocking" behaviour

console.log("script Start")  --------> printed immediately
|
setTimeout(fn, 3000)  ----> handed to BROWSER (WebAPI timer), JS moves on
|
console.log("Script Ends")  --------> printed immediately
|
... 3 seconds pass (browser timer counting, JS keeps running other code) ...
|
fn() pushed to callback queue → executed when JS engine is free


CALLBACK HELL ("Pyramid of Doom")


Occurs when MULTIPLE asynchronous operations DEPEND on each other,
each nested inside the previous one's callback.
setTimeout(() => {
heading1.textContent = "Heading 1";
setTimeout(() => {
heading2.textContent = "Heading 2";
setTimeout(() => {
heading3.textContent = "Heading 3";
// ...and so on — deeply nested, hard to read/maintain
}, 1000);
}, 3000);
}, 1000);


FLOWCHART — Callback Hell (Pyramid shape)

setTimeout( task1, 1000 ms )
└─ setTimeout( task2, 3000 ms )
└─ setTimeout( task3, 1000 ms )
└─ setTimeout( task4, ... )
└─ ... deeper and deeper (PYRAMID shape) → unreadable

PROBLEMS: hard to read, hard to debug, hard to handle errors consistently.
SOLUTION → PROMISES (flatten the structure).


PROMISES — Representing a "FUTURE VALUE"


A PROMISE represents a value that may be available NOW, LATER, or NEVER.
A Promise object has TWO internal properties: STATE and RESULT.


THREE STATES of a Promise:


PENDING    → initial state, result = undefined (task in progress)
FULFILLED  → task succeeded, result = resolved VALUE
REJECTED   → task failed, result = ERROR object


CREATING A PROMISE
const friedRicePromise = new Promise((resolve, reject) => {
if (bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')) {
resolve({ value: "Fried Rice" });   // → FULFILLED
} else {
reject(new Error("something missing in bucket"));  // → REJECTED
}
});


new Promise((resolve, reject) => {...}) — resolve/reject are FUNCTIONS
passed to your "executor" function.


CONSUMING A PROMISE — .then() / .catch()
friedRicePromise
.then((myfriedrice) => {
console.log(lets Eat my, myfriedrice);   // runs if RESOLVED
})
.catch((error) => {
console.log(error);                        // runs if REJECTED
});


.then(onFulfilled, onRejected) → both callbacks OPTIONAL.
You CANNOT directly access state/result — must use .then()/.catch().


FLOWCHART — Promise Lifecycle

    new Promise((resolve, reject) => {...})
                |
                v
           [ PENDING ]
           /          \
   resolve(value)   reject(error)
        |                  |
        v                  v
  [ FULFILLED ]       [ REJECTED ]
        |                  |
   .then(cb) runs     .catch(cb) runs



PROMISE CHAINING


.then() ALWAYS returns a NEW Promise — enabling CHAINING.
If a .then() callback returns a plain VALUE, it is automatically wrapped
as Promise.resolve(value).
function myPromise() {
return new Promise((resolve) => resolve("foo"));
}
myPromise()
.then((value) => {
console.log(value);     // "foo"
return value + "bar";   // returned value → wrapped in Promise.resolve()
})
.then((value) => {
console.log(value);     // "foobar"
return value + "baaz";
})
.then((value) => {
console.log(value);     // "foobarbaaz"
});



KEY POINTS

✅ JS is synchronous/single-threaded — async features come from the browser
✅ setTimeout → runs once after delay | setInterval → repeats every interval
✅ Callback Hell = deeply nested dependent callbacks → hard to maintain
✅ Promise = represents a future value with 3 states: pending, fulfilled, rejected
✅ new Promise((resolve,reject) => {...}) → create | .then()/.catch() → consume
✅ .then() always returns a new Promise → enables CHAINING (flattens nested code)

################################################################################

27. AJAX IN JS (XHR, fetch API, async/await, Modules)

################################################################################


THEORY — WHAT IS AJAX?


AJAX = Asynchronous JavaScript And XML.
GOAL: enable CLIENT ↔ SERVER communication via HTTP requests WITHOUT
reloading the whole page.
Modern apps use JSON (not XML) for data exchange.
3 common ways to send requests:

XMLHttpRequest (XHR)  → old way
fetch API              → modern, Promise-based
axios                  → third-party library






XHR — XMLHttpRequest (Old Way)

const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", url);     // configure the request
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {        // 4 = request complete
        const data = JSON.parse(xhr.response);  // response is a STRING → parse it
        console.log(data);
    }
};
xhr.send();                // fire the request

XHR readyState VALUES

readyStateMeaning0UNSENT — request not initialized1OPENED — open() called2HEADERS_RECEIVED3LOADING — response being downloaded4DONE — request fully complete


XHR with PROMISES & ERROR HANDLING
function sendRequest(method, url) {
return new Promise((resolve, reject) => {
const xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.onload = () => resolve(JSON.parse(xhr.response));
xhr.onerror = () => reject(new Error("Network Error"));  // network issue
xhr.send();
});
}


fetch API — Modern, Promise-based

const URL = "https://jsonplaceholder.typicode.com/posts";
const promise = fetch(URL);   // returns a PROMISE

promise
    .then((response) => {
        // response.json() PARSES the body — returns ANOTHER Promise
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("inside catch block", error);
    });

IMPORTANT GOTCHA — fetch & 404/error responses


fetch() ONLY rejects the promise (goes to .catch) for NETWORK errors
(e.g., server unreachable) — NOT for HTTP error STATUS CODES like 404/500.
For 404, fetch still RESOLVES — .then runs normally, with response.ok = false.
MUST manually check response.ok and throw an error if needed:
promise.then((response) => {
if (response.ok) {
return response.json();
} else {
throw new Error("Something Went Wrong!!");
}
})
.catch((error) => console.log(error));



async / await — Cleanest way to consume Promises


async function → ALWAYS returns a PROMISE (even if you return a plain value).
await → PAUSES execution of the async function until the Promise
settles, then "unwraps" the resolved value (or throws on rejection).
await can ONLY be used INSIDE an async function (or top-level module).
const getPosts = async () => {
const response = await fetch(URL);
if (!response.ok) {
throw new Error("Something went Wrong!");
}
const data = await response.json();
return data;
};
getPosts()
.then((data) => console.log(data))
.catch((error) => console.error(error));


COMPARISON TABLE — .then()/.catch() vs async/await

Aspect.then()/.catch()async/awaitSyntax styleChained callbacksLooks SYNCHRONOUS (sequential)Error handling.catch()try/catch (or .catch on the call)Readability for manyCan get nested/chainedCleaner, linear top-to-bottomsequential requests


FLOWCHART — async/await Flow

getPosts() called (async function)
|
v
await fetch(URL)  --- PAUSES here until Promise settles ---
|
v
response received → check response.ok
|          

OK          NOT OK
|              |
v              v
await response.json()   throw new Error(...)
|
v
return data   (wrapped automatically in a resolved Promise)


KEY POINTS

✅ AJAX = async client-server communication, modern apps use JSON not XML
✅ XHR (old): readyState 4 = DONE, response is a STRING → JSON.parse() needed
✅ fetch() returns a Promise; response.json() returns ANOTHER Promise
✅ fetch only rejects on NETWORK errors — manually check response.ok for
HTTP errors (404/500) and throw if needed
✅ async function ALWAYS returns a Promise
✅ await pauses execution until a Promise settles — usable only inside
async functions
✅ async/await = syntactic sugar over Promises, more readable for sequential
async operations

################################################################################

28. JS MODULES (ES6 import / export)

################################################################################


THEORY — WHY MODULES?

PROBLEM: Putting ALL data/functions/classes in ONE huge file becomes hard to
manage as the project grows.

SOLUTION: ES6 MODULES — split code into SEPARATE FILES, then IMPORT what's
needed where it's needed.

BENEFITS:


REUSABILITY — same module used across multiple files, no duplication.
MAINTAINABILITY — easier to organize, find, and update code.



ENABLING MODULES IN HTML

<script src="./app.js" type="module"></script>


type="module" is REQUIRED, otherwise:
"Cannot use import statement outside a module" error.
type="module" AUTOMATICALLY behaves like defer (no need to add defer
separately).



NAMED EXPORTS — multiple per file

// utils/fname.js
const firstName = "Yatin";
export { firstName as fname };     // export with ALIAS (renamed on export)

// OR directly:
export const firstName = "Yatin";

// app.js
import { fname } from './utils/fname.js';
import { age } from './utils/age.js';
console.log(fname, age);


Anything can be exported: variables, functions, classes, objects, arrays.
A file can have MULTIPLE named exports.
Import using EXACT NAME (or aliased name) inside { } braces.



DEFAULT EXPORT — only ONE per file

// utils/person.js
export default class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age = age;
    }
    info() {
        console.log(`Clients FullName is ${this.firstName} ${this.lastName} and Age is ${this.age}.`);
    }
}

// app.js — NO curly braces needed, and CAN BE RENAMED freely on import:
import Person from './utils/person.js';
import AnyNameYouWant from './utils/person.js';   // both valid — same default export


Each file can have ONLY ONE export default.
Adding a second → "Duplicate export of 'default'" error.


COMPARISON TABLE — Named Export vs Default Export

AspectNamed ExportDefault ExportCount per fileMultiple allowedOnly ONE allowedImport syntaximport { name } from '...'import anyName from '...'Import name must match?Yes (or use as alias)No — choose ANY name



KEY POINTS

✅ ES6 Modules split code across files for reusability & maintainability
✅ Enable with <script type="module"> (auto-defers, allows import/export)
✅ Named exports: export {x} / export const x = ... → import with {x}
(multiple per file, optional aliasing with as)
✅ Default export: export default ... → import with ANY name, NO braces
(only ONE per file)
✅ Variables, functions, classes, objects, arrays — all exportable/importable