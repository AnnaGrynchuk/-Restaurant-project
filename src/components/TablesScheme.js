import React from "react";
import styled from "styled-components";


const Table = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${props => (props.isReserved > -1 ? "#8683834d" : "#08928e")};
    border: 2px solid ${props => (props.isSelect > -1 ? "#ca3f3f" : "transparent")};
    font-size: 24px;
    margin: 20px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
      background-color: ${props => (props.isReserved > -1 ? "#8683834d" : "#f99825")};
    };
`;

const TablesScheme = props => {
    const { tables, onClick, reserved, select } = props;

    return (
        <>
            {tables.map(table => (
                <Table
                    isReserved={reserved.indexOf(table)}
                    isSelect={select.indexOf(table)}
                    key={table}
                    onClick={() => onClick(table)}
                >
                    {table}
                </Table>
            ))}

        </>
    );
};

export default TablesScheme;
