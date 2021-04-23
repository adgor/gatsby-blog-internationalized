import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useTranslation } from "react-i18next";
import { MdxLink, LocalizedLink } from "gatsby-theme-i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const components = {
  a: MdxLink,
};

const Layout = ({ children }) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <header className="container flex flex-row justify-between ">
        <LocalizedLink to="/">{t("home")}</LocalizedLink>
        <LanguageSwitcher />
      </header>
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
    </React.Fragment>
  );
};

export default Layout;
