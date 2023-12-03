import { data } from "./data";

export const turnEachLineInto2DigitNumbers = (calibrationDoc: string, preProcessor?: (line: string) => string): number[] => {
    return calibrationDoc.split("\n").map(line => {
        const processedLine = preProcessor ? preProcessor(line) : line;
        const numbers = (processedLine.match(/\d/g) ?? []).map(Number);
        const firstNumber = numbers[0];

        if (!firstNumber) {
            console.error("No numbers found in line", line);
        }

        const lastNumber = numbers[numbers.length - 1]
        return `${firstNumber}${lastNumber}`
    }).map(parseFloat)
}

export const sumAllNumbers = (numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}

export const turnWordsIntoDigits = (line: string) => {
    let partialLine = "";
    const chars = line.split("");

    for (const char of chars) {
        partialLine += char;
        partialLine = partialLine
            .replace("one", "1ne")
            .replace("two", "2wo")
            .replace("three", "3hree")
            .replace("four", "4our")
            .replace("five", "5ive")
            .replace("six", "6ix")
            .replace("seven", "7even")
            .replace("eight", "8ight")
            .replace("nine", "9ine");
    };

    return partialLine;
}

console.log('ad', sumAllNumbers(turnEachLineInto2DigitNumbers((data), turnWordsIntoDigits)))