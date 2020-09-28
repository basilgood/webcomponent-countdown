import { component, html, useEffect, useState } from 'haunted';

function Countdown({ to }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  const toevent = Date.parse(to) - Date.parse(now);

  return html`
    <h3>${to}</h3>
    <div>Days ${Math.floor(toevent / (1000 * 60 * 60 * 24))}</div>
    <div>Hours ${Math.floor((toevent / (1000 * 60 * 60)) % 24)}</div>
    <div>Minutes ${Math.floor((toevent / (1000 * 60)) % 60)}</div>
    <div>Seconds ${Math.floor((toevent / 1000) % 60)}</div>
  `;
}

customElements.define(
  'webcomponent-countdown',
  component(Countdown, { observedAttributes: ['to'] })
);

function App() {
  const [x, setX] = useState('2021-01-01');

  // Un exemplu de a folosi useEffect:
  // cand se schimba x, iti scrie valoarea in consola
  // useEffect(() => console.log(x), [x]);
  useEffect(() => {
    const today = new Date(x);
    if (today.getDate() === 1 && today.getMonth() === 0) {
      console.log('Happy New Year, ' + today.getFullYear());
    }
  }, [x]);

  // sa folosesti useEffect, ca atunci cand userul alege prima zi dintr-un an
  // sa ii scrie in consola, "La multi ani, 2025!"

  return html`
    <input type="date" @input=${ev => setX(ev.target.value)} />
    <webcomponent-countdown to=${x}></webcomponent-countdown>
  `;
}

customElements.define('my-app', component(App));
