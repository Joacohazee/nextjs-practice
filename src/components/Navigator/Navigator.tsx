import navigatorStyles from "./Navigator.module.scss";
import { Route } from "@/models";
import Link from "next/link";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  return (
    <div className={navigatorStyles.navigator}>
      {pathNames.map((pathName) => (
        <Link
          className={navigatorStyles.navigatorLink}
          key={pathName.path}
          href={pathName.path}
        >
          {pathName.name}
        </Link>
      ))}
    </div>
  );
}

export default Navigator;
