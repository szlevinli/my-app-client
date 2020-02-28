const FakeAuth = {
  isAuthenticated: false,
  authenticated(cb) {
    FakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signOut(cb) {
    FakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default FakeAuth;
