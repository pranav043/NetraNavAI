"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faChrome } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row gap-4">
      <a href="https://github.com/pranav043" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/pranavgupta99/"
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://pranavgupta.vercel.app/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faCircleUser} size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
