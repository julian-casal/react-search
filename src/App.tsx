import { useState, ChangeEvent, useRef } from "react";

import FindThem from "./FindThem";
import { Container, SearchInput } from "./App.styles";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [wordsToSearch, setWordsToSearch] = useState<string[]>([]);
  const debounceRef = useRef<number>();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    const words = inputValue
      ? inputValue.split(",").map((word) => word.trim())
      : [];

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setWordsToSearch(words);
    }, 350);
  };

  return (
    <Container>
      <SearchInput
        value={searchInput}
        onChange={(e) => handleSearchInputChange(e)}
      />
      <FindThem words={wordsToSearch} />
    </Container>
  );
}

export default App;
