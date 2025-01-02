import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setselectedNumber,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setselectedNumber(value);
    setError("");
  };
  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 20px;
  }
  p {
    font-size: 20px;
    font-weight: 600;
  }
  .error {
    color: red;
  }
`;
const Box = styled.div`
  height: 62px;
  width: 62px;
  border: 1px solid #000000;
  display: grid;

  place-items: center;
  font-size: 24px;
  font-weight: 500;
  background-color: ${(props) => (props.isSelected ? "#787878" : "White")};
`;
