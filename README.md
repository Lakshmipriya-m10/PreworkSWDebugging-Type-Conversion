# JavaScript Type Conversion Rules

JavaScript is a dynamically typed language, which means variable types can change at runtime. Type conversion can be **explicit** (type casting) or **implicit** (type coercion).

---

## Implicit Type Conversion (Type Coercion)

JavaScript automatically converts types when operating with different types.

### Addition (+) with Strings

'5' + 2      // "52" - number is coerced to string  
'5' + true   // "5true"  
'5' + null   // "5null"  

### Subtraction, Multiplication, Division with Strings

'5' - 2      // 3   - string is coerced to number  
'5' * 2      // 10  
'10' / '2'   // 5  

### Boolean Conversion

true + 1     // 2  
false + 1    // 1  
true == 1    // true  
false == 0   // true  

### Loose Equality (==) vs Strict Equality (===)

'5' == 5          // true (type coercion)  
'5' === 5         // false (strict type check)  
null == undefined // true  
null === undefined // false  

---

## Explicit Type Conversion (Type Casting)

You can manually convert types using built-in functions or constructors.

### To String

String(123)          // "123"  
String(true)         // "true"  
(123).toString()     // "123"  

### To Number

Number('123')        // 123  
Number('abc')        // NaN  
Number(true)         // 1  
Number(false)        // 0  
Number(null)         // 0  
Number(undefined)    // NaN  

### To Boolean

Boolean(0)           // false  
Boolean('')          // false  
Boolean(null)        // false  
Boolean(undefined)   // false  
Boolean(NaN)         // false  
Boolean('hello')     // true  
Boolean(123)         // true  

---

## Falsy vs Truthy Values

Falsy Values:  
- false  
- 0, -0  
- '' (empty string)  
- null  
- undefined  
- NaN  

Truthy Values:  
- true  
- non-zero numbers  
- non-empty strings  
- objects  
- arrays  

Examples:  
if (0) console.log('Falsy');         // won't run  
if ('hello') console.log('Truthy');  // runs  

---

## Conversion Summary Table

Expression            | Result    | Type    
--------------------- | --------- | --------
String(42)            | "42"      | string  
Number("42")          | 42        | number  
Boolean("0")          | true      | boolean  
Boolean("")           | false     | boolean  
+'42'                 | 42        | number  
!!'hello'             | true      | boolean  
null == undefined     | true      | boolean  
null === undefined    | false     | boolean  

---

## Special Cases

### NaN behavior

NaN === NaN         // false  
isNaN(NaN)          // true  
Number('abc')       // NaN  

### parseInt vs Number

parseInt('123abc')  // 123  
Number('123abc')    // NaN  

---

## Best Practices

- Use === and !== instead of == and != to avoid type coercion surprises.
- Be explicit with conversions to make your code easier to read and debug.
- Use Number(), String(), and Boolean() for safe type conversion.
