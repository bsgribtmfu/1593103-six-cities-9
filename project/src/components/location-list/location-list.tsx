import LocationItem from '../location-item/location-item';

type Props = {
  locations: string[];
};

function LocationList(props: Props): JSX.Element {

  const { locations } =  props;

  const items = locations.map((item) => <LocationItem city={item} key={item} />);

  return (
    <ul className="locations__list tabs__list">
      {items}
    </ul>
  );
}

export default LocationList;
