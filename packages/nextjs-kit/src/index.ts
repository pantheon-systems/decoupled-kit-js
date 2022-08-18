// entrypoint for the umd rollup build - note the default exports
import testLib from './lib/testLib';
import Header from './components/header';
import Footer from './components/footer';

export default { Header, Footer, testLib };
