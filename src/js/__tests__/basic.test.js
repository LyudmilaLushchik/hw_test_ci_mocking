import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should return current level if response status is ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 5 });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 5');
});

test('should return error message if response status is not ok', () => {
  fetchData.mockReturnValue({ status: 'error' });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
