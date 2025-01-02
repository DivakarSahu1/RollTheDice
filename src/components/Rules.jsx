import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>Read The Following Rules To Play The Game</h2>
      <div className="text">
        <p>
          you have to select a number from 1 to 6 and then click on the dice to
          roll the dice after clicking on the dice if selected number matches
          with the dice number you will get the points otherwise you will lose 2
          points
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: rgba(157, 145, 145, 0.76);
  max-width: 700px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px h2 {
    font-size: 24px;
  }
  . text {
    margin-top: 20px;
  }
`;
