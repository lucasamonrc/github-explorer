import { GitFork, Star, WarningCircle } from 'phosphor-react';

import { Header } from '../components/Header';
import { Repository } from '../components/Repository';

export function RepoPage() {
  return (
    <div className="max-w-5xl w-full mx-auto mb-16 py-8 bg-watermark bg-no-repeat">
      <Header back />

      <div className="flex gap-4 items-center w-3/4 mb-10">
        <img
          src="https://github.com/lucasamonrc.png"
          alt=""
          className="rounded-full w-28"
        />
        <div>
          <strong className="block font-bold text-4xl text-texts-dark mb-3">
            lucasamonrc/github-explorer
          </strong>
          <small className="block text-xl text-texts-medium line-clamp">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
            fugiat!
          </small>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-between w-1/3 mb-20">
        <div>
          <small className="flex gap-1 items-center text-xl text-texts-medium mb-1">
            <Star />
            Stars
          </small>
          <strong className="block text-4xl text-texts-dark">1808</strong>
        </div>

        <div>
          <small className="flex gap-1 items-center text-xl text-texts-medium mb-1">
            <GitFork />
            Forks
          </small>
          <strong className="block text-4xl text-texts-dark">10</strong>
        </div>

        <div>
          <small className="flex gap-1 items-center text-xl text-texts-medium mb-1">
            <WarningCircle />
            Issues
          </small>
          <strong className="block text-4xl text-texts-dark">100</strong>
        </div>
      </div>

      <div className="w-3/4 flex flex-col items-center justify-start gap-4">
        <Repository key="1" repo="Issue name" description="author" />
      </div>
    </div>
  );
}
