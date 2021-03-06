
// This `<reference ...>` directive is necessary to include the adapter's
// extensions to types in the "preact" and "enzyme" packages.

/// <reference types="enzyme-adapter-preact-pure"/>

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

// Setup Enzyme
configure({ adapter: new Adapter() });