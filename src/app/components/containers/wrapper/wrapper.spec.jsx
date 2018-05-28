/* global it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from './wrapper';

it('component should render child', () => {
  const comp = shallow(<Wrapper><div className="child" /></Wrapper>);
  expect(comp.find('[className="child"]').length).to.be.equal(1);
});
