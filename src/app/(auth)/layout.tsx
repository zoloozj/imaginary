import React, { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
