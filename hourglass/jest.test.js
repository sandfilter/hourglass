test('come martcher', () =>{ 
  expect (2+2).toBe(4);
  expect (1 + 2 ).not.toBe(4);
})

test('to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('number', () => {
  expect(4).toBeGreaterThan(2)
  expect(2).toBeLessThan(3)
})

test('obj', () => {
  expect( { name:'vince'}).toEqual({ name:'vince'})
})