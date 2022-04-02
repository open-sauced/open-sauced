import React from "react";
import { FaGithub, FaTwitter, FaDiscord, FaYoutube, FaDev } from 'react-icons/fa';
import {Container} from "../styles/Footer";

function Footer() {
  return (
    <Container>
      <ul className="flex sm:flex-row text-xl font-righteous text-accent font-bold justify-center items-center cursor-pointer">
        <li className="p-2 sm:mr-5">
          <a target="_blank" href="https://github.com/open-sauced/hot" rel="noreferrer">
            <FaGithub className="text-offWhite hover:text-accent" />
          </a>
        </li>
        <li className="p-2 sm:mr-5">
          <a target="_blank" href="https://twitter.com/saucedopen" rel="noreferrer">
            <FaTwitter className="text-offWhite hover:text-accent" />
          </a>
        </li>
        <li className="p-2 sm:mr-5">
          <a target="_blank" href="https://discord.com/invite/U2peSNf23P" rel="noreferrer">
            <FaDiscord className="text-offWhite hover:text-accent" />
          </a>
        </li>
        <li className="p-2 sm:mr-5">
          <a target="_blank" href="https://www.youtube.com/opensauced" rel="noreferrer">
            <FaYoutube className="text-offWhite hover:text-accent" />
          </a>
        </li>
        <li className="p-2 sm:mr-5">
          <a target="_blank" href="https://www.dev.to/opensauced" rel="noreferrer">
            <FaDev className="text-offWhite hover:text-accent" />
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Footer;
