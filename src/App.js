import { useState } from "react";

function fetchRepos(search) {
  return fetch(`https://api.github.com/search/repositories?q=${search}`, {
    headers: {
      // https://github.com/settings/tokens
      Authorization: process.env.REACT_APP_GITHUB_API_TOKEN,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.items.map((repo) => {
        return repo.full_name;
      });
    });
}

export default function App() {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);

  return (
    <div>
      <input
        type="text"
        list="repos"
        value={search}
        onChange={(event) => {
          const value = event.target.value;

          setSearch(value);

          if (value) {
            fetchRepos(value).then((repos) => {
              setOptions(repos);
            });
          } else {
            setOptions([]);
          }
        }}
      />

      <datalist id="repos">
        {options.map((option) => {
          return <option key={option} value={option} />;
        })}
      </datalist>
    </div>
  );
}
