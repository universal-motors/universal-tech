import Link from "next/link";

type Prop = {
  text: string;
  to: string;
};

export default function CustomLink({ text, to }: Prop) {
  return (
    <Link
      className="cursor-pointer hover:text-[#00A0C1] text-[#737373]"
      href={to}
    >
      <span>{text}</span>
    </Link>
  );
}
