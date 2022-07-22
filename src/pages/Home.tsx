import { ChangeEvent, FormEvent, useState } from 'react';

import api from '../lib/api';
import { Header } from '../components/Header';
import useDebounce from '../hooks/useDebounce';
import { Repository } from '../components/Repository';
import { Autocomplete } from '../components/Autocomplete';

interface Repo {
  id: string;
  full_name: string;
  owner: {
    avatar_url: string;
  };
  description: string;
}

export function Home() {
  const [username, setUsername] = useState('');
  const [usernames, setUsernames] = useState<string[]>([]);
  const [repositories, setRepositories] = useState<Repo[]>([]);

  const searchUser = useDebounce(
    async (username: string) => {
      if (!username) {
        setUsernames([]);
        return;
      }

      try {
        const { data } = await api.get(
          `/search/users?q=${username}&per_page=5`
        );

        const newUsernames = data.items.map(
          (item: { login: string }) => item.login
        );

        setUsernames(newUsernames);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    },
    1000,
    []
  );

  const handleQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    newUsername && searchUser(newUsername);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await api.get<Repo[]>(`/users/${username}/repos`);
      setRepositories(data);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <div className="max-w-5xl w-full mx-auto mb-16 py-8 bg-watermark bg-no-repeat">
      <Header />

      <h1 className="text-texts-dark text-5xl font-bold max-w-md leading-snug mb-10">
        Explore repositories on GitHub.
      </h1>

      <form className="mb-32 w-3/4 flex gap-1" onSubmit={handleSubmit}>
        <Autocomplete
          value={username}
          onChange={setUsername}
          usernames={usernames}
          onQuery={handleQuery}
        />
        <button
          type="submit"
          className="bg-success rounded py-5 px-16 font-bold text-lg text-white hover:brightness-90 transition self-start"
        >
          Search
        </button>
      </form>

      <div className="w-3/4 flex flex-col items-center justify-start gap-4">
        {repositories.map((repo) => (
          <Repository
            key={repo.id}
            avatar={repo.owner.avatar_url}
            repo={repo.full_name}
            description={repo.description}
            url={`/repo/${repo.id}`}
          />
        ))}
      </div>
    </div>
  );
}
