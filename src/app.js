import { component, html, useState } from 'haunted';

function App() {
  const [name, setName] = useState('Vasile');
  const onClick = () => {
    const person = prompt('Cum te cheama?', name);
    if (person != null) {
      setName(person);
    }
  };

  return html`
    Hello ${name}
    <button @click=${onClick}>Push</button>
  `;
}

customElements.define('my-app', component(App));
