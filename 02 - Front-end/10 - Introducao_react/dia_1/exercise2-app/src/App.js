import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

import './App.css';

function App() {
  return (
    <div className="App App-header">
      <header>
        <Header />
      </header>
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
