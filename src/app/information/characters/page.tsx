import Card from "@/components/Card/Card";
import { getCharacters } from "./services";
import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "@/models";

const fetchCharacters = () => getCharacters();

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} />
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
}

export default Characters;
