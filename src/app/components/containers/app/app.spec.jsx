/* global it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';

import App from './app';

it('component should render child', () => {
  const comp = shallow(<App><div className="child" /></App>);
  expect(comp.find('[className="child"]').length).to.be.equal(1);
});
