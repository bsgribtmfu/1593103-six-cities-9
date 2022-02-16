import ReactDOM from 'react-dom';
import App from './components/app/app';

const amount = 342;
const locations: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

ReactDOM.render(
  <App
    amount={amount}
    locations={locations}
  />,
  document.getElementById('root'));
