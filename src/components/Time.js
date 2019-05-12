import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SelectTime = styled.div`
  background-color: #f99825;
  text-align: center;
  padding: 10px;
  font-size: 18px;
  text-transform: uppercase;
`;
const TimeTable = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  background-color: ${props => (props.isSelect ? "#ca3f3f" : "#4b6363")};
  font-size: 22px;
  margin: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: ${props => (props.isSelect ? "#ca3f3f" : "#f99825")};
  }
`;

const TimeReservation = props => {
  const { time, select, onClick } = props;

  return (
    <Wrapper>
      <SelectTime>Выберите время  <FontAwesomeIcon icon="chevron-right" /> </SelectTime>

      {time.map(time => (
        <TimeTable
          key={time}
          isSelect={select === time}
          onClick={() => onClick(time)}>
          {time}
        </TimeTable>
      ))}
    </Wrapper>
  );
};

export default TimeReservation;
