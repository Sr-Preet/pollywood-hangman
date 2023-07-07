import React, { useState } from "react";
import Button from "../styled/Button";
import Amitabh from "./Amitabh";
import Span from "../styled/Span";
import Div from "../styled/Div";

export default function Instructions(props) {
  let [num, setNum] = useState(0);

  const dialogue = [
    {
      amitabh:
        "ਮੁੰਡਿਓ  ਤੇ ਕੁੜੀਓ , _ਪੋਲੀਵੁੱਡ ਹੈਂਗਮੈਨ_ ਦੀ ਗੇਮ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ ! ਆਓ ਪੰਜਾਬੀ ਫ਼ਿਲਮਾਂ ਬਾਰੇ ਤੁਹਾਡੇ knowledge ਚੈੱਕ ਕਰੀਏ, ਆਜੋ ਫੇਰ",
      status: "ਪੇਸ਼ ਕਰ ਰਹੀ ਹੈ",
      player: "ਹਾਂ, ਆਓ ਸ਼ੁਰੂ ਕਰੀਏ!",
    },
    {
      amitabh: `ਮੈਂ IMDb ਦੀਆਂ ਟੋਪ ਦੀਆਂ ਫਿਲਮਾਂ ਵਿੱਚੋਂ ਇੱਕ ਫਿਲਮ ਬਾਰੇ ਸੋਚਾਂਗਾ। ਤੇ , ਤੁਹਾਡੇ ਪੁੱਛਣ ਤੋਂ ਪਹਿਲਾਂ, ਹਾਂ, ਮੈਂ ਉਨ੍ਹਾਂ ਸਾਰਿਆਂ ਨੂੰ ਯਾਦ ਕਰ ਲਿਆ ਹੈ!`,
      status: "ਖੇਡ ਸਮਝਾ ਰਿਹਾ ਹੈ",
      player: "ਠੀਕ ਆ",
    },
    {
      amitabh: `ਫਿਰ ਮੈਂ ਤੁਹਾਨੂੰ ਕੁਝ hint ਦੇਊਂਗਾ ਤੇ ਤੁਹਾਨੂੰ ਫਿਲਮ ਦੇ ਨਾਮ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਨਾ ਪੈਣਾ`,
      status: "self-confident feel ਕਰ ਰਿਹਾ ਹੈ",
      player: "ਠੀਕ ਆ",
    },
    {
      amitabh: `ਤੁਹਾਡੇ ਕੋਲ ਹਰ ਫ਼ਿਲਮ ਲਈ  ਸਿਰਫ਼ _6_ hint ਮਿਲਨੇ ਆ ! ਜੇ ਤੁਸੀਂ ਸਹੀ ਬੁੱਝ ਲਿਆ, ਤਾਂ ਤੁਸੀਂ ਅਗਲੇ ਲੈਵਲ ਵਿੱਚ ਜਾ ਸਕਦੇ ਆਂ !`,
      status: "self-confident feel ਕਰ ਰਿਹਾ ਹੈ",
      player: "ਹੱਲੇ ਤੱਕ ਤਾਂ ਠੀਕ ਲੱਗ ਰਿਹਾ ਆ!",
    },
    {
      amitabh: `ਜੇ ਨਹੀਂ ਤਾਂ ਖੇਡ ਖਤਮ?`,
      status: "ਸੋਚਦਾ ਹੈ ਕਿ ਉਹ ਜਿੱਤ ਜਾਵੇਗਾ",
      player: "ਮੈਂ ਤਿਆਰ ਹਾਂ",
    },
  ];

  const splitDialogue = () => {
    debugger
    if (dialogue[num]?.amitabh.includes("_6_")) {
      const firstText = dialogue[num].amitabh.split("_6_")[0];
      const secondText = dialogue[num].amitabh.split("_6_")[1];

      return (
        <>
          {firstText}
          <Span score>6</Span>
          {secondText}
        </>
      );
    } else if (dialogue[num].amitabh.includes("_Pollywood Hangman_")) {
      const firstText = dialogue[num].amitabh.split("_Pollywood Hangman_")[0];
      const secondText = dialogue[num].amitabh.split("_Pollywood Hangman_")[1];

      return (
        <>
          {firstText}
          <Span bold>Pollywood Hangman </Span>
          {secondText}
        </>
      );
    } else return dialogue[num].amitabh;
  };

  return (
    <div>
      <Amitabh dialogue={splitDialogue()} />

      <Div flexEnd>
        {/* hides when final dialogue is shown */}
        {dialogue[num].player !== "ਮੈਂ ਤਿਆਰ ਹਾਂ" && (
          <Button onClick={props.startGame} leftButton>
            ਸਿੱਧੀ game ਸ਼ੁਰੂ ਕਰੋ ਯਾਰ
          </Button>
        )}

        {/* hides when final dialogue is shown */}
        {dialogue[num].player !== "ਮੈਂ ਤਿਆਰ ਹਾਂ" && (
          <Button onClick={() => setNum(num + 1)}>
            {dialogue[num].player}
          </Button>
        )}

        {/* shows when final dialogue is shown */}
        {dialogue[num].player === "ਮੈਂ ਤਿਆਰ ਹਾਂ" && (
          <Button onClick={props.startGame}>{dialogue[num].player}</Button>
        )}
      </Div>
    </div>
  );
}
