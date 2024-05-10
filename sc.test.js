import { quadratic } from "./sc";

// it('should return "No real roots" when discriminant is negative', () => {
//   expect(quadratic(1, 2, 3)).toBe("No real roots");
// });

// it("should return the correct root when discriminant is zero", () => {
//   expect(quadratic(1, -2, 1)).toBe(1);
// });

it("should return an array of roots when discriminant is positive", () => {
  expect(quadratic(1, -3, 2)).toEqual([2, 1]);
});
