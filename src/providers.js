import React from "react";
import App from "./App";
import { GlobalCSS } from "./global/globalCSS";
import GithubProvider from "./providers/github-provider";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <GlobalCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
