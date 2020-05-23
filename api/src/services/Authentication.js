'use strict';

class Authentication {
  constructor(payload, SECRET_AUTH) {
    this.payload = payload;
    this.SECRET_AUTH = SECRET_AUTH;
  }

  static generate() {
    try {
      const data = jwt.sign(this.payload, this.SECRET_AUTH);
      return data;
    } catch (err) {
      throw new Error('The token could not be generated.');
    }
  } 
  
  static decode() {
    try {
      const data = jwt.decode(payload, SECRET_AUTH);
    return data;
    } catch (err) {
      throw new Error('The token could not be decoded.');
    }
  }
}

module.exports = Authentication;

