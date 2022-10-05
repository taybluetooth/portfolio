/* Author: Callum Taylor */
/* Filename: ResponsiveNavbar.tsx */

import * as React from "react";
import styled from "styled-components";

const ResponsiveNavContainer = styled.div`
  width: 100%;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f2e45;
`;

const ResponsiveNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ResponsiveNavItem = styled.li`
  padding: 2em;
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  transition: 300ms;

  &:hover {
    color: #66fcf1;
    transition: color 300ms;
  }
`;

const ResponsiveNavButton = styled.button`
  padding: 12px 32px;
  border: 1px solid #66fcf1;
  color: #66fcf1;
  background: transparent;
  font-weight: 500;
  font-size: 100%;
  border-radius: 4px;
  transition: 300ms

  &:hover {
    background-color: #66fcf13d;
    cursor: pointer;
    transition: background-color 300ms;
  }
`;

const ResponsiveNavbar = ({
  setSidebarOpen,
}: {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ResponsiveNavContainer>
      <ResponsiveNav>
        <ResponsiveNavItem>
          <Link onMouseDown={() => setSidebarOpen(false)} href="#home">
            Home
          </Link>
        </ResponsiveNavItem>
        <ResponsiveNavItem>
          <Link onMouseDown={() => setSidebarOpen(false)} href="#about">
            About
          </Link>
        </ResponsiveNavItem>
        <ResponsiveNavItem>
          <Link onMouseDown={() => setSidebarOpen(false)} href="#work">
            Work
          </Link>
        </ResponsiveNavItem>
        <ResponsiveNavItem>
          <Link onMouseDown={() => setSidebarOpen(false)} href="#contact">
            Contact
          </Link>
        </ResponsiveNavItem>
        <ResponsiveNavItem>
          <Link
            onMouseDown={() => setSidebarOpen(false)}
            href="https://drive.google.com/file/d/1OoPCPqxgZHd7fqEjzNPNNQEUxd0PdrZH/view?usp=sharing"
          >
            <ResponsiveNavButton>Resume</ResponsiveNavButton>
          </Link>
        </ResponsiveNavItem>
      </ResponsiveNav>
    </ResponsiveNavContainer>
  );
};

export default ResponsiveNavbar;
