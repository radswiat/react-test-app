/* eslint "import/order": "off" */
import 'raf/polyfill';
import chai from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

// extend chai with sinon
chai.use(sinonChai);

// move default jest expect into `jestExpect`
global.jestExpect = global.expect;

// overwrite `expect` with `chai` expect
global.expect = chai.expect;

configure({ adapter: new Adapter() });
