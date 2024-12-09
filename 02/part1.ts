const input: string = await Bun.file("./input.txt").text();
const splittedInput: string[] = input.split("\n");

let safeRows = 0;

const equal = (array1: Array<any>, array2: Array<any>) => {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false
        }
    }
    return true
}

for (let i = 0; i < splittedInput.length; i++) {
    const row = splittedInput[i]
    const stringItems = row.split(" ");
    const items = []
    
    for (let v = 0; v < stringItems.length; v++) {
        items.push(parseInt(stringItems[v], 10))
    }

    const sorted = Array.from(items).sort((a, b) => { return a - b })
    const reversed = Array.from(sorted).reverse()
    
    let isIncreasing = equal(sorted, items)

    if (!equal(sorted, items) && !equal(reversed, items)) {
        continue;
    } 
    
    for (let j = 1; j < items.length; j++) {
        const prevChar: number = items[j - 1]        
        const char: number = items[j]
        
        if (Math.abs(char - prevChar) == 0 || Math.abs(char - prevChar) > 3 || (char >= prevChar && isIncreasing == false) || (char <= prevChar && isIncreasing == true)) {
            break
        } else if (j == items.length - 1) {
            safeRows += 1;
        }
    }
}

console.log(safeRows)