function greet(name?: string): string {
  return `Hello, ${name ?? "Brother"}`;
}

console.log(greet("Kadek"))