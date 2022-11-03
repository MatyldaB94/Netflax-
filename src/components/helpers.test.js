import { getRandomArrayElement, truncate } from "./helpers"


test("test are working", () => {
    expect(1).toBe(1)
})

describe("getRandomArrayElement", () => {
    test("gets random Element from array", () => {
        const array = [1]
        const result = getRandomArrayElement(array)
        expect(result).toBe(1)
    })

    test("throw if you pass empty array", () => {
        try {
            getRandomArrayElement([])
        } catch (error) {
            expect(error.message).toBe("can not get random element of empty element")
        }
    })
})

describe("truncate", () => {
    test("truncate longer text than maxlength", () => {
        const text = "wedwuehfbeufbgieurfb"
        const maxLength = 3
        const result = truncate(text, maxLength)
        expect(result).toBe("wed...")
    })
    test("return all text", () => {
        const text = "Matylda"
        const maxLength = 15
        const result = truncate(text, maxLength)
        expect(result).toBe("Matylda")
    })
})

