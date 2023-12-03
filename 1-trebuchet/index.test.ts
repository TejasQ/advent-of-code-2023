import { sumAllNumbers, turnEachLineInto2DigitNumbers, turnWordsIntoDigits } from ".";
import { describe, it, expect } from "vitest";
import { data } from "./data";

const sample1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const sample2 = `two1nine
eightwothree
eighthree
sevenine
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

describe("Trebuchet Project", () => {
    it('should turn each line into a 2 digit number by taking the first and last integer to occur in the line', () => {
        expect(turnEachLineInto2DigitNumbers(sample1)).toEqual(
            [
                12,
                38,
                15,
                77,
            ]
        );
        expect(turnEachLineInto2DigitNumbers(sample2, turnWordsIntoDigits)).toEqual(
            [
                29, 83, 83, 79, 13, 24, 42, 14, 76
            ]
        );
    })

    it("should replace textual representations of numbers with their numerical counterparts", () => {
        expect(turnWordsIntoDigits(sample2)).toEqual(`2wo19ine
8igh2wo3hree
8igh3hree
7eve9ine
abc1ne23hreexyz
x2w1ne34our
49ine8ight7even2
z1n8ight234
7pqrst6ixteen`)
    })

    it('should return the sum of all the 2 digit numbers', () => {
        expect(sumAllNumbers(turnEachLineInto2DigitNumbers(data))).toEqual(55172)
        expect(sumAllNumbers(turnEachLineInto2DigitNumbers(sample1))).toEqual(142)
    })
})