import { CaretRight } from 'phosphor-react';

interface RepositoryProps {
  avatar: string;
  repo: string;
  description: string;
}

export function Repository({ avatar, repo, description }: RepositoryProps) {
  return (
    <div className="bg-white rounded-lg w-full p-4 pr-8 flex justify-between items-center">
      <div className="flex gap-4 items-center w-3/4">
        <img src={avatar} alt="" className="rounded-full w-20" />
        <div>
          <strong className="block font-bold text-2xl leading-7 text-texts-dark mb-1">
            {repo}
          </strong>
          <small className="block text-lg leading-5 text-texts-medium line-clamp">
            {description}
          </small>
        </div>
      </div>
      <CaretRight size={24} />
    </div>
  );
}
