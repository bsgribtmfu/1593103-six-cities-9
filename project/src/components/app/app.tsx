import Main from '../pages/main';

type Props = {
  amount: number,
  locations: string[]
}

function App(props: Props): JSX.Element {
  return <Main { ...props} />;
}

export default App;
