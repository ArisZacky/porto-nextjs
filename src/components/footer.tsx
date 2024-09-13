const Footer = () => {
  return (
    <>
      <footer className="bottom-0 left-0 z-50 h-auto px-6 py-2 w-full bg-white border-t border-gray-200 shadow fixed md:fixed md:flex md:items-center md:justify-between dark:bg-gray-800 dark:border-gray-600">
        <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400 flex item-center justify-center gap-2">
          Made with <i className="nes-icon is-small heart"></i> by Zacky.
        </span>
        <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/ArisZacky"
              className="hover:underline me-4 md:me-6"
              target="_blank"
            >
              <i className="nes-icon github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ariszacky/"
              className="hover:underline me-4 md:me-6"
              target="_blank"
            >
              <i className="nes-icon linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ariszcky/"
              className="hover:underline me-4 md:me-6"
              target="_blank"
            >
              <i className="nes-icon instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
