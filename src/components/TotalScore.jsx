import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <div>
        <h1>{score}</h1>
        <p>Total Points</p>
      </div>
    </ScoreContainer>
  );
};
export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 140px;
  text-align: center;
  h1 {
    font-size: 60px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
