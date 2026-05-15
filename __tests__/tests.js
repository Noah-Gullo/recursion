import {fibs} from "../src/index.js"

test("Iterative base cases when 0 < n < 3", () => {
    expect(fibs(1)).toEqual([0]);
    expect(fibs(2)).toEqual([0, 1]);
})

test("Iterative case when n > 2", () => {
    expect(fibs(3)).toEqual([0, 1, 1]);
    expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibs(6)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
})