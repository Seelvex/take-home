import Input from '@/components/shared/input';
import React from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import useSearch from '@/hooks/useSearch';
import Button from '@/components/shared/button';

interface LibrarySearchBarProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const LibrarySearchBar: React.FC<LibrarySearchBarProps> = (props) => {
  const { searchValue, setSearchValue } = props;

  const [showRecent, setShowRecent] = React.useState(false);

  const { recentSearches } = useSearch();

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue],
  );

  const handleSelectSearch = React.useCallback(
    (search: string) => {
      setSearchValue(search);
      setShowRecent(false);
    },
    [setSearchValue],
  );

  /**
   * @todo implement logic to clear recent searches
   */
  const handleClearSearches = React.useCallback(() => {
    setShowRecent(false);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Input
        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        placeholder="Type to search..."
        value={searchValue}
        onChange={handleInputChange}
        onFocus={() => setShowRecent(true)}
        onBlur={() => setTimeout(() => setShowRecent(false), 150)}
        clearable
      />

      {showRecent && recentSearches && recentSearches.length > 0 ? (
        <div className=" w-full bg-white border border-gray-200 rounded-lg shadow-lg py-2">
          <ul>
            {recentSearches.map((search) => (
              <li
                key={search._id}
                onClick={() => handleSelectSearch(search.value)}
                className="px-4 py-2 cursor-pointer hover:bg-slate-200"
              >
                {search.value}
              </li>
            ))}
            <li
              onClick={handleClearSearches}
              className="px-4 py-2 cursor-pointer text-slate-500 hover:bg-slate-200 underline text-right"
            >
              Clear searches
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default LibrarySearchBar;
