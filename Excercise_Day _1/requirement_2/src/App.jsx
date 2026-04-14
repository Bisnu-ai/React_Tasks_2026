import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Button from './components/common/Button';
import Input from './components/common/Input';
import './assets/App.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />
      
      <main style={{ padding: '20px', flex: 1 }}>
        <h1>Component Structure Demo</h1>
        <p>This demonstrates our new component folder structure.</p>
        
        <div style={{ margin: '20px 0' }}>
          <Button label="Click Me!" color="#e74c3c" onClick={() => alert('Clicked!')} />
        </div>
        
        <div style={{ maxWidth: '300px' }}>
          <Input placeholder="Enter something..." />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
