import React from "react";
import Amitabh from "./Amitabh";
import Span from "../styled/Span";

export default function Correct() {
  const showDialogue = () => {
    return (
      <>
        <Span>ਸ਼ਾਬਾਸ਼ੇ ! ਏਹਦਾ ਜਵਾਬ ਤਾਂ ਤੂੰ ਸਹੀ ਦੇਤਾ ! ਦੇਖਦੇ ਆਂ ਅੱਗੇ ਜਾਕੇ ਤੂੰ ਕੀ ਕਰਦਾਂ </Span>
      </>
    );
  };

  return <Amitabh status={"Is encouraging"} dialogue={showDialogue()} />;
}
