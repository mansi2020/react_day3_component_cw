import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import Card from './Component/Card/Card';
import Grid from './Component/Grid/Reviews';
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Card></Card>
      <Grid></Grid>
      <Footer></Footer>
    </div>
  );
}

export default App;
