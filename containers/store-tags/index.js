import Link from 'next/link';

import { useGetAllGamesQuery } from 'hooks/api/games';

function genTagsFromGames(games = []) {
  const all = games.reduce((acc, curr) => {
    return [...acc, ...curr.tags];
  }, []);
  const unique = [...new Set(all)];
  const trimmed = unique.map((item) => item.trim());
  const filtered = trimmed.filter((item) => item !== '');
  return filtered;
}

function StoreTags() {
  const { data } = useGetAllGamesQuery();
  const tags = genTagsFromGames(data);
  return (
    <nav>
      <h1>Tag</h1>
      <ul className="tag-navigation vertical-nav nav">
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <Link href={`/?tag=${tag}`}>
                <a>{tag}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

StoreTags.propTypes = {};

StoreTags.defaultProps = {};

export default StoreTags;
