const array = ['a', 'b', 'c']

// We allow regular for loops, "no-for-loop" rule should be disabled
for (let index = 0; index < array.length; index += 1) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const element = array[index]
}
