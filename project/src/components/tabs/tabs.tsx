import LocationList from '../location-list/location-list';

type Props = {
  locations: string[]
};

function Tabs(props: Props): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">

        <LocationList {...props} />

      </section>
    </div>
  );
}

export default Tabs;
