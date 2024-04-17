class User {
  constructor(id, lastname, firstname, email, password, isActive, gdpr) {
    this.id = id;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.isActive = isActive;
    this.gdpr = gdpr;
  }
}
module.exports = { User };
