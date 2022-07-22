import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GitFork, Star, WarningCircle } from 'phosphor-react';

import { Header } from '../components/Header';
import { Repository } from '../components/Repository';
import api from '../lib/api';

interface Repository {
  full_name: string;
  owner: {
    avatar_url: string;
  };
  description: string;
  forks: number;
  open_issues: number;
  stargazers_count: number;
}

interface Issue {
  title: string;
  html_url: string;
}

export function RepoPage() {
  const { repoId } = useParams();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function queryRepo() {
      try {
        const { data: repo } = await api.get<Repository>(
          `/repositories/${repoId}`
        );
        const { data: issues } = await api.get<Issue[]>(
          `/repositories/${repoId}/issues?per_page=10`
        );

        setRepository(repo);
        setIssues(issues);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    }

    if (!repository) {
      queryRepo();
    }
  }, []);

  return (
    <div className="max-w-5xl w-full mx-auto mb-16 py-8 bg-watermark bg-no-repeat">
      <Header back />

      <div className="flex gap-4 items-center w-3/4 mb-10">
        <img
          src={repository?.owner.avatar_url}
          alt=""
          className="rounded-full w-28"
        />
        <div>
          <strong className="block font-bold text-4xl text-texts-dark mb-3">
            {repository?.full_name}
          </strong>
          <small className="block text-xl text-texts-medium">
            {repository?.description}
          </small>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-between w-1/3 mb-20">
        <div>
          <small className="flex gap-1 items-center text-xl text-texts-medium mb-1">
            <Star />
            Stars
          </small>
          <strong className="block text-4xl text-texts-dark">
            {repository?.stargazers_count}
          </strong>
        </div>

        <div>
          <small className="flex gap-1 items-center text-xl text-texts-medium mb-1">
            <GitFork />
            Forks
          </small>
          <strong className="block text-4xl text-texts-dark">
            {repository?.forks}
          </strong>
        </div>

        <div>
          <small className="flex gap-1 items-center text-xl text-texts-medium mb-1">
            <WarningCircle />
            Issues
          </small>
          <strong className="block text-4xl text-texts-dark">
            {repository?.open_issues}
          </strong>
        </div>
      </div>

      <div className="w-3/4 flex flex-col items-center justify-start gap-4">
        {issues.map((issue, i) => (
          <Repository
            key={i}
            repo={issue.title}
            url={issue.html_url}
            external
          />
        ))}
      </div>
    </div>
  );
}
