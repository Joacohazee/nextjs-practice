import cardStyles from "./Card.module.scss";
import Image from "next/image";

export interface CardData {
  name: string;
  type?: string;
  created: string;
  image?: string;
}

interface Props {
  data: CardData;
}

function Card({ data }: Props) {
  let formattedType = data.type;
  formattedType ||= "No type";

  return (
    <div className={cardStyles.Card}>
      <p>Name: {data.name}</p>
      <p>Type: {formattedType}</p>
      <p>Created: {data.created}</p>
      {!!data.image && (
        <Image src={data.image} alt={data.name} width={300} height={300} />
      )}
    </div>
  );
}

export default Card;
