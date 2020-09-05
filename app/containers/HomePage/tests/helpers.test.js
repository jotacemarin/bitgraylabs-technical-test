import { parseElements } from '../helpers';

describe('parseElements', () => {
  it('transform element', () => {
    const data = {
      image: { original_url: '1' },
      date_added: '1',
      issue_number: '1',
      api_detail_url: '1',
      name: '1',
    };
    expect(parseElements([data])).toBeTruthy();
  });
});
