import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import update from 'immutability-helper';
import TablesScheme from "./TablesScheme";
import Time from "./Time";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 20px;
    padding-bottom: 20px;
    background: linear-gradient(#78EDFF, #FFFFFF);
    color: white;
`;
const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
`;
const Option = styled.div`
    background-color:  #f99825;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    text-transform: uppercase;
    @media screen and (max-width:672px) {
        width: 100%;
        padding:10px 0;
    }
`;
const Bar = styled.div`
    display: flex;
    width: 100px;
    height: 50px;
    padding: 20px 30px;
    background-color:#808080ab;
    font-size: 20px;
    align-items: center;
    justify-content: center;
`;
const Stage = styled.div`
    display: flex;
    width: 200px;
    height: 100px;
    background: #808080ab;
    font-size: 20px;
    align-items: center;
    justify-content: center;
`;
const SubmitReservation = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width:672px) {
        width: 100%;
        align-items: center;
    }
`;
const Tables = styled(SubmitReservation)`
    width: 50%;
`;
const Color = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    font-size: 18px;
    color: #0E8B87;
`;
const CircleFree = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #08928e;
    margin-right: 10px;
`;
const CircleReserved = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #8683834d;
    margin-right: 10px;
`;
const CircleSelected = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #08928e;
    border: 2px solid #ca3f3f;
    margin-right: 10px;
`;
const Button = styled.button`
    display: flex;
    width: 200px;
    border: none;
    background-color: #ca3f3f;
    padding: 15px 20px;
    margin-top: 20px;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 5px;
    align-self: center;
`;

const timeAndTables = [
    { time: "10:00", tablesReserved: [] },
    { time: "12:00", tablesReserved: [] },
    { time: "14:00", tablesReserved: [] },
    { time: "16:00", tablesReserved: [] },
    { time: "18:00", tablesReserved: [] },
    { time: "20:00", tablesReserved: [] },
    { time: "22:00", tablesReserved: [] }
];

class TableReservation extends Component {
    state = {
        tables: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
        time: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
        reservedTimeTables: [],
        currentTime: null,
        selectedTables: []
    };

    componentDidMount() {
        const reserved = JSON.parse(localStorage.getItem("reserved"));
        this.setState({ reservedTimeTables: reserved || timeAndTables });
    }

    handleSelectedTime = (time) => {
        this.setState({ currentTime: time, selectedTables: [] });
    };

    handleSelectedTable = (table) => {
        const { currentTime, reservedTimeTables, selectedTables } = this.state;
        const index = reservedTimeTables.findIndex(
            el => el.time === currentTime
        );
        const timeObj = reservedTimeTables[index];
        if (currentTime && !timeObj.tablesReserved.includes(table)) {
            if (!selectedTables.includes(table)) {
                selectedTables.push(table);
                this.setState({ selectedTables })
            } else {
                const index = selectedTables.findIndex(
                    el => el === table
                );
                selectedTables.splice(index, 1);
                this.setState({ selectedTables })
            }
        }
    };

    handleReserveTables = () => {
        const { reservedTimeTables, selectedTables, currentTime } = this.state;
        if (selectedTables) {
            const index = reservedTimeTables.findIndex(
                el => el.time === currentTime
            );
            const newArr = update(reservedTimeTables, {
                [index]: { tablesReserved: { $push: selectedTables } }
            });
            this.setState({ reservedTimeTables: newArr, selectedTables: [] });
            localStorage.setItem("reserved", JSON.stringify(newArr));
        }
    }

    render() {
        const { tables, time, reservedTimeTables, currentTime, selectedTables } = this.state;
        let reservedTables = [];
        if (currentTime != null) {
            const currentObj = reservedTimeTables.find(el => el.time === currentTime);
            reservedTables = currentObj.tablesReserved;
        }
        return (
            <Wrapper>

                <Time
                    time={time}
                    select={currentTime}
                    onClick={this.handleSelectedTime} />
                <Tables>
                    <Option> Выберите столик <FontAwesomeIcon icon="chevron-right" /></Option>
                    <Section>
                        <Bar> Бар </Bar>
                        <TablesScheme
                            tables={tables}
                            select={selectedTables}
                            reserved={reservedTables}
                            onClick={this.handleSelectedTable}
                        />
                        <Stage>Сцена</Stage>
                    </Section>
                </Tables>
                <SubmitReservation>
                    <Option> Подтвердите бронь</Option>
                    <Color>
                        <CircleFree /> Свободные столы
                    </Color>
                    <Color>
                        <CircleReserved /> Забронированные столы
                    </Color>
                    <Color>
                        <CircleSelected /> Выбранный Вами стол
                    </Color>
                    <Button type="submit" onClick={this.handleReserveTables}>Забронировать</Button>
                </SubmitReservation>
            </Wrapper>
        );
    }
}

export default TableReservation;
