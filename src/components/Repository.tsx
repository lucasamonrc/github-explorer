import { CaretRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface RepositoryProps {
  avatar?: string;
  repo: string;
  description?: string;
  url: string;
  external?: boolean;
}

export function Repository({
  avatar = '',
  repo,
  description = '',
  url,
  external = false,
}: RepositoryProps) {
  if (external) {
    return (
      <a
        href={url}
        className={`block bg-white rounded-lg w-full p-4 pr-8 ${
          !avatar && 'py-7 px-6'
        } flex justify-between items-center`}
      >
        <div className="flex gap-4 items-center w-3/4">
          {avatar && <img src={avatar} alt="" className="rounded-full w-20" />}
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
      </a>
    );
  }

  return (
    <Link
      to={url}
      className={`block bg-white rounded-lg w-full p-4 pr-8 ${
        !avatar && 'py-7 px-6'
      } flex justify-between items-center`}
    >
      <div className="flex gap-4 items-center w-3/4">
        {avatar && <img src={avatar} alt="" className="rounded-full w-20" />}
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
    </Link>
  );
}
