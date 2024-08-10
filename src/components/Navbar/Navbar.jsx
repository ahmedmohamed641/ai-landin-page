import React, { useState } from "react";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar({ searchInputRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center pt-6 sm:mb-16 md:mb-20 lg:mb-28 px-4 lg:px-16">
      <span className="flex-shrink-0">
        <img
          src="/src/assets/logo.svg.png"
          alt="Logo"
          className="w-24 lg:w-32"
        />
      </span>

      <div className="sm:hidden">
        <IconButton onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon className="text-white" />
          ) : (
            <MenuIcon className="text-white" />
          )}
        </IconButton>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } fixed inset-0 z-50 flex-col items-center justify-center xs:bg-black md:bg-transparent xs:bg-opacity-80 sm:relative sm:flex sm:flex-row sm:justify-end sm:space-x-4 lg:space-x-8`}
      >
        <ButtonGroup className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 lg:space-x-8">
          <a href="#digital-art-marketplace" onClick={closeMenu}>
            <Button
              variant="text"
              className="capitalize text-zinc-300 font-thin"
            >
              Home
            </Button>
          </a>
          <a href="#digital-art-marketplace" onClick={closeMenu}>
            <Button
              variant="text"
              className="capitalize text-zinc-300 font-thin"
            >
              Questions
            </Button>
          </a>
          <a href="#blogs" onClick={closeMenu}>
            <Button
              variant="text"
              className="capitalize text-zinc-300 font-thin"
            >
              blogs
            </Button>
          </a>

          <a href="#team" onClick={closeMenu}>
            <Button
              variant="text"
              className="capitalize text-zinc-300 font-thin"
            >
              Team
            </Button>
          </a>
          <a href="#story" onClick={closeMenu}>
            <Button
              variant="text"
              className="capitalize text-zinc-300 font-thin"
            >
              story
            </Button>
          </a>
        </ButtonGroup>
      </div>

      <ButtonGroup className="hidden sm:flex flex-col items-end space-y-2 mt-4 sm:mt-0 sm:space-y-0 sm:flex-row sm:space-x-4 lg:space-x-8">
        <Button
          variant="text"
          className="text-zinc-300"
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </Button>
      </ButtonGroup>
    </nav>
  );
}
