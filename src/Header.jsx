import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isDeskstopView, setIsDeskstopView] = useState(true);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / totalHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  const handleResize = (e) => {
    if (e.target.innerWidth >= 1024) {
      setIsDeskstopView(true);
      setIsMenuOpen(true);
    } else {
      setIsDeskstopView(false);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function scrollToSection(id) {
    const container = document.getElementById(id);
    container.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <header className="fixed w-full top-0 z-10">
      <div
        className={`px-16 py-8 flex items-center justify-between text-xl font-bold text-gray-950 transition-colors ${
          scrollProgress > 2 ? "bg-white" : "bg-transparent"
        }`}
      >
        <div>
          Deeptha's Portfolio{" "}
          <span
            className={scrollProgress > 2 ? "text-indigo-600" : "text-white"}
          >
          </span>
        </div>
        <nav
          className="hidden absolute top-[92px] left-0 bg-white w-screen lg:block lg:static lg:bg-transparent lg:w-fit lg:block"
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          <ol className="flex gap-8 flex-col items-center p-4 lg:gap-12 lg:flex-row lg:flex-start lg:p-0">
            <li>
              <a
                className="hover:text-indigo-600 transition-colors cursor-pointer"
                onClick={() => {
                  if (!isDeskstopView) setIsMenuOpen(false);
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-indigo-600 transition-colors cursor-pointer"
                onClick={() => {
                  if (!isDeskstopView) setIsMenuOpen(false);
                  scrollToSection("work");
                }}
              >
                Work
              </a>
            </li>
            <li>
              <a
                className="hover:text-indigo-600 transition-colors cursor-pointer"
                onClick={() => {
                  if (!isDeskstopView) setIsMenuOpen(false);
                  scrollToSection("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/Deeptha_Resume.pdf"
                download="Deeptha_Resume.pdf"
                className="hover:text-indigo-600 transition-colors cursor-pointer"
              >
                Resume
              </a>
            </li>
          </ol>
        </nav>
        {!isMenuOpen ? (
          <RxHamburgerMenu
            size={28}
            className="font-bold cursor-pointer select-none lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          />
        ) : (
          <MdClose
            size={28}
            className="font-bold cursor-pointer select-none lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
      <div
        className="h-1.5 bg-indigo-600 transition-colors"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </header>
  );
}

export default Header;
