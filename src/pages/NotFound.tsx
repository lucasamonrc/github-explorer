import { CaretLeft, GitFork, Star, WarningCircle } from 'phosphor-react';

import logo from '../assets/github-explorer.svg';
import { Header } from '../components/Header';

export function NotFound() {
  return (
    <div className="max-w-5xl w-full h-screen mx-auto py-8 bg-watermark bg-no-repeat">
      <Header back />

      <div className="w-full flex justify-center items-center">
        <h1 className="text-2xl text-texts-dark">Page not found</h1>
      </div>
    </div>
  );
}
