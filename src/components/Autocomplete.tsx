import { ChangeEvent, useState } from 'react';
import { Combobox } from '@headlessui/react';

interface AutocompleteProps {
  usernames: string[];
  value?: any;
  onChange: any;
  onQuery: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Autocomplete({
  usernames,
  value = '',
  onChange,
  onQuery,
}: AutocompleteProps) {
  return (
    <div className="flex-1">
      <Combobox value={value} onChange={onChange}>
        <Combobox.Input
          onChange={onQuery}
          placeholder="Type the author or organization..."
          className="bg-white rounded py-6 px-7 text-xl leading-6 placeholder:text-texts-light w-full"
        />
        <Combobox.Options className="bg-white mt-1 rounded shadow-sm">
          {usernames.length === 0 ? (
            <></>
          ) : (
            usernames.map((username) => (
              <Combobox.Option
                key={username}
                value={username}
                className="border-b border-b-slate-100 py-2 px-4 hover:bg-slate-50 cursor-pointer select-none"
              >
                {username}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
