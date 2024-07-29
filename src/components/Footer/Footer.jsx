import {
  Button,
  Typography,
  Container,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Container maxWidth="xl" className="grid grid-cols-4 bg-graay pt-20 pb-20">
      <section className="flex flex-col gap-4">
        <figure>
          <img src="/src/assets/logo-footer.png" alt="" />
        </figure>

        <Typography variant="h7" className="text-zinc-400 text-left">
          In hac habitasse platea dictumst. <br /> Duis eget purus sit amet
          ipsum posuere.
        </Typography>
        <ul className="flex gap-0 -ml-1">
          <IconButton aria-label="">
            <FacebookIcon className="border-0 text-orange" />
          </IconButton>
          <IconButton aria-label="">
            <InstagramIcon className="border-0 text-orange" />
          </IconButton>
          <IconButton aria-label="">
            <TwitterIcon className="border-0 text-orange" />
          </IconButton>
          <IconButton aria-label="">
            <LinkedInIcon className="border-0 text-orange" />
          </IconButton>
        </ul>
      </section>

      <section className="ml-20">
        <Typography variant="h5" className="text-orange text-left font-bold">
          Contact
        </Typography>

        <ul className="flex flex-col gap-6 text-left pt-4 m-0">
          <li className="flex">
            <IconButton className="text-left mr-2 p-0">
              <LocationOnIcon className="border-0 text-orange" />
            </IconButton>
            <Typography variant="body2" className="text-zinc-400 text-left">
              No: 58 A, Ease Madison Street
            </Typography>
          </li>
          <li className="flex">
            <IconButton className="text-left mr-2  p-0">
              <EmailIcon className="border-0 text-orange" />
            </IconButton>
            <Typography variant="body2" className="text-zinc-400 text-left">
              info@example.com
            </Typography>
          </li>
          <li className="flex">
            <IconButton className="text-left mr-2 p-0">
              <PhoneIcon className="border-0 text-orange" />
            </IconButton>
            <Typography variant="body2" className="text-zinc-400 text-left">
              +00 123 456 789
            </Typography>
          </li>
        </ul>
      </section>

      <section className="ml-20">
        <Typography variant="h5" className="text-orange text-left font-bold">
          Links
        </Typography>

        <ul className="flex flex-col gap-3 text-left pt-4 m-0">
          <li className="flex">
            <a href="#">
              <Typography variant="body2" className="text-zinc-400 text-left">
                Home
              </Typography>
            </a>
          </li>
          <li className="flex">
            <a href="#">
              <Typography variant="body2" className="text-zinc-400 text-left">
                services
              </Typography>
            </a>
          </li>
          <li className="flex">
            <a href="#">
              <Typography variant="body2" className="text-zinc-400 text-left">
                About Us
              </Typography>
            </a>
          </li>

          <li className="flex">
            <a href="#">
              <Typography variant="body2" className="text-zinc-400 text-left">
                Shop
              </Typography>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <Typography variant="h5" className="text-orange text-left font-bold">
          Newsletter
        </Typography>

        <ul className="flex flex-col gap-2 text-left pt-4 m-0">
          <li className="text-left">
            <Typography variant="h7" className="text-zinc-400 text-left">
              Habitasse duis purus sit amet ipsum <br /> posuere. In hac
              dictumst. 
            </Typography>
          </li>

          <div className="flex w-auto h-fit p-2 pl-6 rounded-lg shadow-sm mb-4 border-2 border-orange-dark">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full rounded-lg shadow-sm focus:outline-none focus:border-blue-500 placeholder:italic placeholder:text-zinc-600 bg-transparent flex-grow text-white"
            />
            <IconButton className="text-orange rounded-md p-1 pl-2 pr-2">
              <SendIcon />
            </IconButton>
          </div>
        </ul>
      </section>
    </Container>
  );
}
