// entrypoint for the umd rollup build - note the default exports
import Test from './components/test';
import Test2 from './components/test2';
import testLib from './lib/testLib';
import sortChar from './lib/sortChar';
import sortDate from './lib/sortDate';

export default { Test, Test2, testLib, sortChar, sortDate };
