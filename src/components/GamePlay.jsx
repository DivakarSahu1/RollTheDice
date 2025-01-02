import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button, OutlineButton } from "../styles/Button";
import Rules from "./Rules";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You haven't selected any number yet!");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setcurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setselectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>

      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Read"} Game Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 20px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin-top: 30px;
  }
`;
