import App from 'App';
import Header from './Header';
import Greeting from './Greeting';
import Button from './button';
import Footer from './footer';

const App = () => {

  const handleClick =  () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Header />
      <Greeting name="john" />
      <Button labe="click this" onClick={handleClick} />
      <Footer />
    </div>
  );
};

export default App;
