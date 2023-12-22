"use client";
import React, { useEffect, useState } from "react";

const Christmas = () => {
  const [word, setWord] = useState("");
  const [clientWord, setClientWord] = useState("");
  const [isFunctionWorking, setIsFunctionWorking] = useState(false);
  const timeOutIds: any[] = [];
  const alphabet_array = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "Ө",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ү",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "ө",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ү",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ъ",
    "ы",
    "ь",
    "э",
    "ю",
    "я",
  ];

  const findAlphabet = ({ word }: any) => {
    const wordArr = word.split("");
    const returningWordArr = [""];
    let delay = 0;

    wordArr.map((wLetter: any) => {
      alphabet_array.map((aLetter) => {
        returningWordArr.push(aLetter);
        if (wLetter === aLetter) {
          returningWordArr.push(wLetter);
          console.log(wLetter);
        }
        delay += 10;

        const returningWord = returningWordArr.join("");
        let timeOutId = setTimeout(() => {
          setWord(returningWord);
        }, delay);
        timeOutIds.push(timeOutId);
        returningWordArr.pop();
      });
    });
  };
  useEffect(() => {
    console.log(word);
  }, [word]);
  return (
    <div className="flex flex-col items-center gap-2 justify-center  h-screen">
      {isFunctionWorking === true ? (
        <h1 className="text-5xl">{word}</h1>
      ) : (
        <>
          <p>ugee bich</p>
          <input
            className="bg-black border-white border-[1px]"
            onChange={(e) => {
              setClientWord(e.target.value);
            }}
          />
        </>
      )}
      <button
        onClick={() => {
          if (isFunctionWorking === false) {
            findAlphabet({ word: clientWord });
          } else {
            for (const timeoutId of timeOutIds) {
              clearTimeout(timeoutId);
            }
          }
          setIsFunctionWorking((prev: any) => !prev);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Christmas;
