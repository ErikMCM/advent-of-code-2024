const input = await Bun.file("./input.txt").text()
const splittedInput = input.split("\n")

let list1: number[] = []
let list2: number[] = []

for (let i = 0; i < splittedInput.length; i++) {
    const splittedLine = splittedInput[i].split("   ")

    list1.push(Number(splittedLine[0]));
    list2.push(Number(splittedLine[1]));
}

list1.sort();
list2.sort();

let totalDistances = 0;

for (let i = 0; i < list1.length; i++) {
    const item1 = list1[i];
    const item2 = list2[i];

    totalDistances += Math.abs(item1 - item2)
}

console.log(totalDistances)