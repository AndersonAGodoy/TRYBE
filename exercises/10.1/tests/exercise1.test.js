const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('Text should be uppercase', () => {
  uppercase('palavra maiuscula', (callback) => {
    expect(callback).toStrictEqual('PALAVRA MAIUSCULA');
  })
})