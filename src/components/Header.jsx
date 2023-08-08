export default function Header() {
  return (
    <header>
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen h-[100px]">
        <a href="https://www.linkedin.com/in/daniel-lancheros/"
            className="flex items-center">
        <img
              src="/Game_On.png"
              className="mr-3 h-60 md:h-60 -mt-12"
              alt="GameOn Logo"
            />          
          </a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Get your friends together and have fun</h5>
        </div>
    </header>
  );
}
<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap');
</style>