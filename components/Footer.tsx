import GithubIcon from "./svg/GithubIcon";
import LinkedinIcon from "./svg/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="text-center font-semibold text-sm px-9 items-center py-6 mt-14 bg-greenDark/10 text-greenDark flex justify-between">
      <p>Faried Idris Copyright © All Rights Reserved</p>
      <div className=" items-center border-black flex justify-center space-x-3">
        <a href="https://github.com/psyofrelief">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/faried-idris">
          <LinkedinIcon />
        </a>
      </div>
    </footer>
  );
}
