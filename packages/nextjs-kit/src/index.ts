// entrypoint for the umd rollup build - note the default exports
import Test from './components/test';
import Test2 from './components/test2';
import testLib from './lib/testLib';
import Header from './components/header';
import Footer from './components/footer';

export default { Test, Test2, Header, Footer, testLib };
