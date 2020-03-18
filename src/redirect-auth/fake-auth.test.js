import axios from 'axios';
import FakeAuth from './fake-auth';

jest.mock('axios');

beforeEach(() => {
  jest.useFakeTimers();
});

it('should mosk ok!', () => {
  expect(FakeAuth.isAuthenticated).toBeFalsy();
});

xit('should be authenticated', async () => {
  const cb = jest.fn();
  axios.get.mockImplementation(() => Promise.resolve('just test'));
  await FakeAuth.authenticated(cb);
  expect(FakeAuth.isAuthenticated).toBeTruthy();
  expect(cb).toHaveBeenCalledTimes(1);
});

it('should be signOut', () => {
  const cb = jest.fn();
  FakeAuth.signOut(cb);
  expect(FakeAuth.isAuthenticated).toBeFalsy();
  expect(setTimeout).toHaveBeenCalledTimes(1);
});
