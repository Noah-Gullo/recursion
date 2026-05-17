import {fibs, fibsRec} from "../src/fibonacci.js"

test("Iterative cases when 0 < n < 3", () => {
    expect(fibs(1)).toEqual([0]);
    expect(fibs(2)).toEqual([0, 1]);
})

test("Iterative case when n > 2", () => {
    expect(fibs(3)).toEqual([0, 1, 1]);
    expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibs(6)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
})

test("Recursive cases when 0 < n < 3", () => {
    expect(fibsRec(1)).toEqual([0]);
    expect(fibsRec(2)).toEqual([0, 1]);
})

test("Recursive case when n > 2", () => {
    expect(fibsRec(3)).toEqual([0, 1, 1]);
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibsRec(6)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibsRec(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
})