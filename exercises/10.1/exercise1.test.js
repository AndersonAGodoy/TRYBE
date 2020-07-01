const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('Text should be uppercase', () => {
  uppercase('teste', (callback) => {
    expect(callback).toBe('TESTE');
  })
})