import {component, html, useState, useEffect} from 'haunted';

function Countdown({to}) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = Math.round(+new Date() / 1000);
      const toInSeconds = Math.round(+new Date(to) / 1000);
      setSeconds(toInSeconds - now);
    };

    updateTime();
    const i = setInterval(updateTime, 1000);
    return () => clearInterval(i);
  }, [to]);

  return html`<div>${seconds} sec</div>`;
}

customElements.define(
  'webcomponent-countdown',
  component(Countdown, {observedAttributes: ['to']})
);
