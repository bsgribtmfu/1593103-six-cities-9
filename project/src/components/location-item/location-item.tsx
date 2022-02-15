type Props = {
  city: string;
};

function LocationItem(props: Props): JSX.Element {

  const { city } = props;

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationItem;
