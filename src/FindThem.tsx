import { useEffect, useMemo, useState } from "react";

import { InfoBox, TextListItem } from "./FindThem.styles";

interface FindThemProps {
  words: string[];
}

const FindThem = ({ words }: FindThemProps) => {
  const [textsList, setTextsList] = useState<string[]>([]);

  const filteredTexts = useMemo(() => {
    return textsList.filter((text: string) => {
      const splitText = text.split(" ");
      return words.every((word) =>
        splitText.some((wordInText) => wordInText === word)
      );
    });
  }, [words, textsList]);

  useEffect(() => {
    fetch("./data/textList.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const lowerCaseTexts: string[] = res.map((text: string) =>
          text.toLowerCase()
        );
        setTextsList(lowerCaseTexts);
      });
  }, []);

  if (words.length === 0) {
    return (
      <InfoBox>
        Write words and separate them by comma to find some texts!
      </InfoBox>
    );
  }

  if (filteredTexts.length === 0) {
    return <InfoBox>There are no text match for those words</InfoBox>;
  }

  return (
    <ul>
      {filteredTexts.map((text, index) => (
        <TextListItem key={`text-${index}`}>{text}</TextListItem>
      ))}
    </ul>
  );
};

export default FindThem;
