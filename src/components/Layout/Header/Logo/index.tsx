import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={`${getImagePrefix()}images/logo/logo01.png`}
        alt="logo"
        width={150} // reduced width
        height={70}
        quality={100}
        style={{ height: "auto" }} // maintain aspect ratio
      />
    </Link>
  );
};

export default Logo;
