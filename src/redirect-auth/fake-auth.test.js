import FakeAuth from './fake-auth';

beforeEach(() => {
  jest.useFakeTimers();
});

it('should mosk ok!', () => {
  expect(FakeAuth.isAuthenticated).toBeFalsy();
});

it('should be authenticated', () => {
  const cb = jest.fn();
  FakeAuth.authenticated(cb);
  expect(FakeAuth.isAuthenticated).toBeTruthy();
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(cb, 100);
});

it('should be signOut', () => {
  const cb = jest.fn();
  FakeAuth.signOut(cb);
  expect(FakeAuth.isAuthenticated).toBeFalsy();
  expect(setTimeout).toHaveBeenCalledTimes(1);
});
