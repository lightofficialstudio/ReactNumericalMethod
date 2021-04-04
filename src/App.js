import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import './font.css';

function App() {
  return (
    <div className="App">
      <nav class="site-header py-1 container d-flex flex-column flex-md-row justify-content-between">
                <a href="index.html" class="py-3" d-none d-md-inline-block>หน้าหลัก</a>
                <a href="portfolio.html" class="py-3" d-none d-md-inline-block>PORTFOLIO</a>
                <a href="#" class="py-3" d-none d-md-inline-block>WORK</a>
                <a href="#" class="py-3" d-none d-md-inline-block>CONTACT</a>
            </nav>
      <header className="App-header">
          <h2 class="text-white">React VS. Numerical Method</h2>
          <p class="text-white">รีแอค นิวเมอร์</p>
      </header>
      <body>
        <div class="bg-dark">
        </div>
      </body>
      <footer>
        <p></p>
      </footer>
    </div>
   
  );
}

export default App;
