/* global it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';

import Page from './page';

it('component should render child', () => {
  const comp = shallow(<Page><div className="child" /></Page>);
  expect(comp.find('[className="child"]').length).to.be.equal(1);
});
