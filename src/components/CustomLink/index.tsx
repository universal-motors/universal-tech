import { Link } from "react-scroll";
type Prop = {
  text: string;
  to: string;
};
export default function CustomLink({ text, to }: Prop) {
  return (
    <Link
      className="cursor-pointer hover:text-[#00A0C1] text-[#737373]"
      to={to}
      // activeclassname="active"
      spy={true}
      smooth={true}
      duration={500}
    >
      <span>{text}</span>
    </Link>
  );
}
