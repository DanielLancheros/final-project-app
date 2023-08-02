export default function Header() {
  return (
    <header>
      <nav className="bg-white px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen h-[100px]">
          <a
            href="https://www.linkedin.com/in/daniel-lancheros/"
            className="flex items-center"
          >
            <img
              src="/favicon3.ico"
              className="mr-3 h-60 md:h-60 -mt-12"
              alt="GameOn Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
