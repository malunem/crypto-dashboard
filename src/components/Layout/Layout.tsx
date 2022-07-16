import * as React from "react";
import "./layout.css";

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div id="layout" className="" >
      <main>
        { children }
      </main>
    </div>
  )
}

export default Layout