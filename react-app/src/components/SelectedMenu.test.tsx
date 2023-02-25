import { render, screen } from '@testing-library/react';

import SelectedMenu from './SelectedMenu';

const menu = { id: '1', name: '짜장면', price: 8000 };

const context = describe;

describe('SelectedMenu', () => {
  function renderSelectedMenu() {
    render(<SelectedMenu menu={menu} />);
  }

  context('사용자가 메뉴를 선택하면', () => {
    it('점심 바구니에 선택한 메뉴 리스트가 취소 버튼과 함께 보인다', () => {
      renderSelectedMenu();

      screen.getByText('짜장면(8,000원)');
      screen.getByText('취소');
    });
  });
});
