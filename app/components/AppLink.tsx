import Link from "next/link";

interface IAppLinkProps {
  href?: string;
  title?: string;
}

const AppLink = ({ href, title }: IAppLinkProps) => {
  if (!href)
    return (
      <p className="bg-gray-300 text-gray-500 mt-3 p-2 px-4">Unavailable</p>
    );

  return (
    <Link
      className="bg-yellow-300 p-2 mt-3 px-4"
      href={href}
      role="link"
      aria-label={title || "view details about this item"}
    >
      {title || "View Details"}
    </Link>
  );
};

export default AppLink;
