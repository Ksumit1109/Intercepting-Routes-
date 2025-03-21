import Link from "next/link";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="container p-4">
      <Link href="/">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-4xl">
          Next.js Intercepting Routes Modal example
        </h1>
      </Link>

      <p className="my-3 text-sm font-medium text-gray-700 sm:text-lg">
        An example showing Next.js
        <a
          href="https://beta.nextjs.org/docs/routing/intercepting-routes"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Intercepting Routes
        </a>{" "}
        feature.
      </p>

      <p className="my-3 text-sm font-medium text-gray-700 sm:text-lg">
        Navigating into the photo page client-side will open a modal instead of
        a full page, while still updating the URL. Navigating directly into the
        photo page URL or refreshing the page while the modal is open will bring
        up the photo page instead.
      </p>
    </header>
  );
};

export default Header;
