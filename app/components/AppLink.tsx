import Link from "next/link";

interface IAppLinkProps {
  href: string;
  title: string;
}

const AppLink = ({ href, title }: IAppLinkProps) => {
  return (
    <Link className="bg-yellow-300 p-2 mt-3 p-2 px-4" href={href}>
      {title}
    </Link>
  );
};

export default AppLink;
