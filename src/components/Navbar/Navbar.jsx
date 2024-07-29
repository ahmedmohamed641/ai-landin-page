import { Button, ButtonGroup } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  return (
    <nav className="flex justify-between pt-6 mb-28">
      <span>
        <img src="/src/assets/logo.svg.png" alt="" />
      </span>

      <ButtonGroup>
        <Button variant="text" className="capitalize text-zinc-300 font-thin">
          Home <span className="ml-1">+</span>
        </Button>
        <Button variant="text" className="capitalize text-zinc-300 font-thin">
          Services <span className="ml-1">+</span>
        </Button>
        <Button variant="text" className="capitalize text-zinc-300 font-thin">
          Innerpage <span className="ml-1">+</span>
        </Button>
        <Button variant="text" className="capitalize text-zinc-300 font-thin">
          Articles <span className="ml-1">+</span>
        </Button>
        <Button variant="text" className="capitalize text-zinc-300 font-thin">
          Store <span className="ml-1">+</span>
        </Button>
      </ButtonGroup>

      <ButtonGroup className="gap-3">
        <Button variant="text" className="text-zinc-300">
          <SearchIcon />
        </Button>
        <Button
          variant="outlined"
          className="capitalize rounded border-zinc-400 text-zinc-300 "
        >
          try for free
        </Button>
      </ButtonGroup>
    </nav>
  );
}
