import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["creativity", "innovations", "inventions", "projects, designs"];

const App = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      7000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index] % TEXTS.length}
      </TextTransition>
    </h1>
  );
};
export default App;
