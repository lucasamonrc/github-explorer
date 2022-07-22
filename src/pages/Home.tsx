import logo from '../assets/github-explorer.svg';
import { Repository } from '../components/Repository';

export function Home() {
  return (
    <div className="max-w-5xl w-full mx-auto py-8 bg-watermark bg-no-repeat">
      <img src={logo} className="mb-24" />

      <h1 className="text-texts-dark text-5xl font-bold max-w-md leading-snug mb-10">
        Explore repositories on GitHub.
      </h1>

      <form className="mb-32 w-3/4 flex gap-1">
        <input
          type="text"
          placeholder="Type the author or organization..."
          className="bg-white rounded py-6 px-7 text-xl leading-6 placeholder:text-texts-light flex-1"
        />
        <button className="bg-success rounded py-5 px-16 font-bold text-lg text-white hover:brightness-90 transition">
          Search
        </button>
      </form>

      <div className="w-3/4 flex flex-col items-center justify-start gap-4">
        <Repository
          avatar="https://github.com/lucasamonrc.png"
          repo="lucasamonrc/something"
          description="just a simple repository"
        />
      </div>
    </div>
  );
}
