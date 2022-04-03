import React from "react";
import {FaGithub, FaTwitter, FaDiscord, FaYoutube, FaDev} from 'react-icons/fa';
import {Container} from "../styles/Footer";

function Footer() {
  return (
    <Container>
      <ul className="flex sm:flex-row text-xl font-righteous text-accent font-bold justify-center items-center cursor-pointer">
        <li className="p-2 sm:mr-5">
          <a href="https://github.com/open-sauced/hot"
            target="_blank" rel="noreferrer"
            aria-label="Visit Open Sauced GitHub Organisation">
            <FaGithub className="text-offWhite hover:text-accent" />
          </a>
        </li>
        <li className="p-2 sm:mr-5">
          <a href="https://twitter.com/saucedopen"
             target="_blank" rel="noreferrer"
             aria-label="Visit Open Sauced GitHub Organisation">
            <FaTwitter className="text-offWhite hover:text-accent" />
          </a>
        </li>
        <li className="p-2 sm:mr-5">
          <a href="https://discord.com/invite/U2peSNf23P"
             target="_blank" rel="noreferrer"
             aria-label="Visit Open Sauced GitHub Organisation">
            <FaDiscord className="text-offWhite hover:text-accent" />
          </a>
        </li>
        <li className="p-2 sm:mr-5">
          <a href="https://www.youtube.com/opensauced"
             target="_blank" rel="noreferrer"
             aria-label="Visit Open Sauced GitHub Organisation">
            <FaYoutube className="text-offWhite hover:text-accent" />
          </a>
        </li>
        <li className="p-2 sm:mr-5">
          <a href="https://www.dev.to/opensauced"
             target="_blank" rel="noreferrer"
             aria-label="Visit Open Sauced GitHub Organisation">
            <FaDev className="text-offWhite hover:text-accent" />
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Footer;
