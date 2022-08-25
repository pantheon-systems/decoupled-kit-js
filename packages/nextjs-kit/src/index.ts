// entrypoint for the umd rollup build - note the default exports
import Header from './components/header';
import Footer from './components/footer';
import Paginator from './components/paginator';
import sortChar from './lib/sortChar';
import sortDate from './lib/sortDate';

export default { Header, Footer, Paginator, sortChar, sortDate };
