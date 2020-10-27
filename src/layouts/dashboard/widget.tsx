import React from 'react';
import styled from 'styled-components';
import { BarChart } from '@material-ui/icons'

const Container = styled.div`
    min-width: 300px;
    max-width: 300px;
    background-color: white;
    border-radius: 10px;
    padding: 16px 25px;
    display: flex;
    flex-direction: column;
    transition: all 0.1s ease-in-out;
    backface-visibility: hidden;
    
    cursor: pointer;
    &:hover {
        transform: perspective(1px) scale(1.05);
        /* transform: translate3d( 0, 0, 0); */
    }
    .stats {
        margin-top: 1em;
        font-size: 13px;
        font-weight: 300;

        span {
            color: lightgreen;
            margin-right: 1em;
        }
    }
    .header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .icon {
        border-radius: 50%;
        background: linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%);
        padding: 8px;
        color: white;
    }

    h2 {
        text-transform: uppercase;
        font-size: 14px;
        color: rgb(136, 152, 170);
        font-weight: 500;
        margin: 0;
    }
    h3 {
        margin: 0;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;
    }
`;

export const Widget = () => {

    return (
        <Container>
            <div className="header">
                <div>
                    <h2>Total traffic</h2>
                    <h3>350,897</h3>
                </div>
                <div className="icon"><BarChart /></div>
            </div>
            <div className="stats">
                <span>3.48% </span>Since last month
            </div>
        </Container>
    )
}