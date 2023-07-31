import { useState, useEffect, useMemo, useRef, ChangeEvent } from "react";

import { Container, NoSearchValue, SearchInput, InfoBox } from "./styles";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [valueToSearch, setValueToSearch] = useState("");
  const [wordList, setWordList] = useState([]);
  const debounceRef = useRef<number>();

  const isWordMatch = useMemo(
    () => Boolean(wordList.find((word: string) => word == valueToSearch)),
    [valueToSearch, wordList]
  );

  useEffect(() => {
    fetch("./data/wordList.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setWordList(res));
  }, []);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setValueToSearch(event.target.value);
    }, 500);
  };

  return (
    <Container>
      <SearchInput
        value={searchInput}
        onChange={(e) => handleSearchInputChange(e)}
      />
      {valueToSearch.length > 0 ? (
        <InfoBox $isWordMatch={isWordMatch}>
          {isWordMatch ? "Word is in the list!" : "Word can't be found"}
        </InfoBox>
      ) : (
        <NoSearchValue>Start writting to find a word!</NoSearchValue>
      )}
    </Container>
  );
}

export default App;
