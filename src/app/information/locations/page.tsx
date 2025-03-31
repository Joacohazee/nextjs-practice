import Card from "@/components/Card/Card";
import { getLocations } from "./services";
import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "@/models";

const fetchLocations = async () => await getLocations();

async function Locations() {
  const locations = await fetchLocations();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
}

export default Locations;
