import axios from 'axios';

const FakeAuth = {
  isAuthenticated: false,
  async authenticated(cb) {
    FakeAuth.isAuthenticated = true;
    const response = await axios
      .get('/api/getLoginURL')
      .catch((err) => console.log(err));
    window.location.href = response.data;
    cb();
  },
  signOut(cb) {
    FakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default FakeAuth;
