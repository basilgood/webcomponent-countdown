import { component, html } from 'haunted';

function Countdown({to}) {
  const now = +new Date();
  // const seconds = () => ({to} * 1000);

  return html`
    <h1>${now}-${to}</h1>
  `;
}

customElements.define(
  'webcomponent-countdown',
  component(Countdown, { observedAttributes: ['to'] })
);
