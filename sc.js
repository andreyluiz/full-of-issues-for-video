export function quadratic(a, b, c) {
  let discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return "No real roots";
  } else if (discriminant === 0) {
    return -b / (2 * a);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}
