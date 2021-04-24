import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useTranslation } from "react-i18next";
import { MdxLink, LocalizedLink } from "gatsby-theme-i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import useDarkMode from "../hook/useDarkMode";

const components = {
  a: MdxLink,
};

const Layout = ({ children }) => {
  const { t } = useTranslation();
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <React.Fragment>
      <header className="container flex flex-row justify-between ">
        <LocalizedLink to="/">{t("home")}</LocalizedLink>
        <div className="flex ">
          <LanguageSwitcher />
          <span className="ml-3 " onClick={() => setTheme(colorTheme)}>
            {colorTheme === "light" ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </span>
        </div>
      </header>
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
    </React.Fragment>
  );
};

export default Layout;
