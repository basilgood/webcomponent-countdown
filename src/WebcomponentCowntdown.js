import {component, html, useState, useEffect} from 'haunted';

function Countdown({to}) {
  const toevent = Date.parse(to) - Date.parse(new Date());
  // const [seconds, setSeconds] = useState(0);
  //
  // useEffect(() => {
  //   const updateTime = () => {
  //     const now = Math.round(+new Date() / 1000);
  //     const toInSeconds = Math.round(+new Date(to) / 1000);
  //     setSeconds(toInSeconds - now);
  //   };
  //
  //   updateTime();
  //   const i = setInterval(updateTime, 1000);
  //   return () => clearInterval(i);
  // }, [to]);

  return html`
    <h3>${to}</h3>
    <div>Days ${Math.floor(toevent/(1000*60*60*24))}</div>
    <div>Hours ${Math.floor((toevent/(1000*60*60)) % 24)}</div>
    <div>Minutes ${Math.floor((toevent/(1000*60)) % 60)}</div>
  `;
}

customElements.define(
  'webcomponent-countdown',
  component(Countdown, {observedAttributes: ['to']})
);
