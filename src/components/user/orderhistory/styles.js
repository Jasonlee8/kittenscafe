import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Table } from 'antd';

export const TD1 = styled.td`
    scope: Col;
    width: 6rem;
`

export const TD2 = styled.td`
    width: 15rem;
    scope: Col;
`

export const TD3 = styled.td`
    width: 20rem;
    scope: Col;
`

export const HistoryContainer = styled(Container)`
    // margin-top: 1rem;
    height: 60rem;
    padding-top: 54px;
`

export const TablePanel = styled(Table)`
    padding-top: 2rem;
    font-size: 14px;
    @media (max-width: 767px) {
        tbody {
            td {
                padding: .2rem;
                text-align: center;
                font-size: 12px;
                h5 {
                    font-size: 14px;
                }
            }
        }
       
    } 
`