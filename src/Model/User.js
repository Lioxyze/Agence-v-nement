class User {
  constructor(
    email,
    password,
    firstName,
    lastName,
    role,
    gdpr,
    createdAt,
    isActive
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.gdpr = gdpr;
    this.createdAt = createdAt;
    this.isActive = isActive;
  }
}
module.exports = { User };
