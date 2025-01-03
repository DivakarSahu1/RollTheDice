import styled from "styled-components";
import { Button } from "../styles/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice-image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Let's Go!</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 950px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .content {
    h1 {
      font-size: 76px;
      white-space: nowrap;
    }
  }
`;
