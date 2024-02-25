import Fuse from "fuse.js";
import { useState } from "react";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ["frontmatter.title", "frontmatter.excerpt"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }) {
  // User's input
  const [query, setQuery] = useState([]);

  const fuse = new Fuse(searchList, options);

  // Set a limit to the posts: 10
  const posts = !query ? searchList : fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 10);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <div>
      <label htmlFor="search" className="mb-2 font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx={10} cy={10} r={7}></circle>
            <line x1={21} y1={21} x2={15} y2={15}></line>
          </svg>
        </div>
        <input
          type="text"
          id="search"
          value={query}
          onChange={handleOnSearch}
          className="block w-full p-4 pl-10
                              text-gray-900 
                              border border-gray-300
                              rounded-lg bg-gray-50

                              focus:outline-none
                              focus:ring-sky-500
                              focus:border-sky-500"
          placeholder="Search ..."
        />
      </div>

      {(
        <div className="mt-4 mb-0 text-white">
          Found {posts.length} {posts.length === 1 ? "result" : "results"} for: <span className="text-pink-500">{query}</span>
        </div>
      )}

      <ul className="list-none">
        {posts &&
          posts.map((post) => (
            <li className="pt-6">
              <p className="text-xs text-[#b1bac4]">{post.frontmatter.date}</p>
              <a className="text-lg text-sky-500 hover:text-sky-700 hover:underline underline-offset-2" href={post.url}>{post.frontmatter.title}</a>
              <p className="text-sm text-[#b1bac4] pb-2">{post.frontmatter.excerpt}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;