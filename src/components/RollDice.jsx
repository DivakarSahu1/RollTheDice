import styled from "styled-components";
const RollDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={`/images/dices/dice_${currentDice}.png`}
          alt="dice 1"
          width={"120px"}
        />
      </div>
      <p>Click on The Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 16px;
  }
`;
