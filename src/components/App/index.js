import Footer from '../Footer';
import reactLogo from './logo.png';
import './styles.css';

function App() {
  return (
    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <h1>Le site Eco-Friendly sera en rendu public dans :</h1>
      <CountDownd />
    </div>
  );
}

export default App;

function CountDownd() {
  const s = 1000;
  const m = s * 60;
  const h = m * 60;
  const d = h * 24;

  const countDown = new Date('Mar 13, 2023 00:00:00').getTime();
  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDown - now;

    document.getElementById('jours').textContent = Math.floor(distance / d);
    document.getElementById('heures').textContent = Math.floor(
      (distance % d) / h,
    );
    document.getElementById('minutes').textContent = Math.floor(
      (distance % h) / m,
    );
    document.getElementById('secondes').textContent = Math.floor(
      (distance % m) / s,
    );

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('jours').textContent = '0';
      document.getElementById('heures').textContent = '0';
      document.getElementById('minutes').textContent = '0';
      document.getElementById('secondes').textContent = '0';
    }
  }, s);

  return (
    <p>
      <span id="jours">0</span>
      <span> jours </span>
      <span id="heures">0</span>
      <span> heures </span>
      <span id="minutes">0</span>
      <span> minutes </span>
      <span id="secondes">0</span>
      <span> secondes </span>
    </p>
  );
}
