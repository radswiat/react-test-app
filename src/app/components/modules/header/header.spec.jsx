/* global it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

it('component should render', () => {
  const comp = shallow(<Header />);
  expect(comp.find('div').length).to.be.least(1);
});

it('component should render: [intro, title, info]', () => {
  const comp = shallow(<Header />);
  expect(comp.find('[styleName="header__intro"]').length).to.be.equal(1);
  expect(comp.find('[styleName="header__title"]').length).to.be.equal(1);
  expect(comp.find('[styleName="header__info"]').length).to.be.equal(1);
});
