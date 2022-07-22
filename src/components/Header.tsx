import { CaretLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';

import logo from '../assets/github-explorer.svg';

interface HeaderProps {
  back?: boolean;
}

export function Header({ back = false }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-24">
      <Link to="/">
        <img src={logo} />
      </Link>
      {back && (
        <Link to="/">
          <span className="flex gap-1 justify-end items-center text-texts-light text-lg">
            <CaretLeft size={18} weight="bold" />
            back
          </span>
        </Link>
      )}
    </header>
  );
}
