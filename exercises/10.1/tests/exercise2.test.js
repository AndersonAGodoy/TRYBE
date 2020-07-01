const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

  it('should be returned user name', () => {
    expect.assertions(1);
    return getUserName(4).then( () =>{
      expect(users[4].name).toEqual("Mark")
    })
  })

  it('should be returned an Error', () => {
    expect.assertions(1);
    return getUserName(6).catch( (error) =>{
      expect(error).toEqual({ error: 'User not found.' })
    })
  })