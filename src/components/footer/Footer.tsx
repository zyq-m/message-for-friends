const Footer = () => {
  return (
    <footer className="border-t py-2">
      <h2 className="text-center mb-3 font-semibold text-gray-500">
        Follow me on:
      </h2>
      <ul className="flex justify-center gap-2">
        <li>
          <a href="https://twitter.com/zyq__m" target="_blank">
            <img
              className="w-7"
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
            />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@zyqq.m" target="_blank">
            <img
              className="w-7"
              src="https://img.icons8.com/ios-filled/50/000000/tiktok--v1.png"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/zyq-m" target="_blank">
            <img
              className="w-7"
              src="https://img.icons8.com/glyph-neue/64/000000/github.png"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
