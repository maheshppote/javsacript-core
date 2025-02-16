class User {
    constructor(email, password) {
      this.email = email;
      this.password = password; // Calls the setter
    }
  
    // Getter for password
    get password() {
      return `Your password is: ${this._password}`;
    }
  
    // Setter for password with validation
    set password(value) {
      if (value.length < 6) {
        throw new Error("Password must be at least 6 characters long.");
      }
      this._password = value;
    }
  }
  
  const u1 = new User("mpote97@gmail.com", "123456"); // Valid password
  console.log(u1.password); // "Your password is: 123456"
  
  const u2 = new User("test@example.com", "123"); // Throws an error