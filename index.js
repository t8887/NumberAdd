function add(input) {
    if (input === "") return 0;

    let pattern = /,|\n/;
    let temp = input;

    if (input.startsWith("//")) {
        const endIdx = input.indexOf('\n');
        pattern = new RegExp(input.substring(2, endIdx));
        temp = input.substring(endIdx + 1);
    }

    const parts = temp.split(pattern);
    
    let total = 0;
    const negetiveNums = [];

    parts.forEach(val => {
        const parsed = parseInt(val);
        
        if (!isNaN(parsed)) {
            if (parsed < 0) {
                negetiveNums.push(parsed);
            } else {
                total += parsed;
            }
        }
    });

    if (negetiveNums.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negetiveNums.join(", ")}`);
    }

    return total;
}

// Example test cases:
console.log(add(""));             
console.log(add("1"));            
console.log(add("1,5"));          
console.log(add("1\n2,3"));       
console.log(add("//;\n1;2"));     

try {
    console.log(add("1,-2,3,-4"));  
} catch (error) {
    console.log(error.message);    
}
