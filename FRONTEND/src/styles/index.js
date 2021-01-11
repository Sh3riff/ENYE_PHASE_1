import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    outline: none;
    text-decoration: none;
    }
`;

export const TablePlus = styled.div`
    background-color: #009879;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

export const SearchBar = styled.span`
    input{
        padding: 10px;
        color: #009879;
        border-radius: 500px;
        text-align: center;
        font-weight: bold;
        ::placeholder{
            color: #009879;
        }
    }
`;

export const ToggleButton = styled.button`
    background-color: white;
    border-radius: 500px;
    font-weight: bold;
    color: #009879;
    padding: 10px;
    margin: 0 5px;
`;

export const ColumnControl = styled.div`
    position: absolute;
    z-index: 10;
    color: #009879;
    color: black;
    border-radius: 8px;
    padding: 20px;
    background: rgba( 255, 255, 255, 0.2 );
    border: solid 1px rgba(255,255,255,0.3);
    backgroud-clip: padding-box;
    backdrop-filter: blur(10px );
    width: min(300px, 50vw);
    input{
        margin: 8px;
        backgroud-color: white;
        color: #009879;
    }

`;

export const TableContainer = styled.div`
    background-image: url('https://i.picsum.photos/id/973/536/354.jpg?hmac=9m2LTFMqLEEfHYc4fab0grXDEwmcLzJ7qEEbVmuvcbU');
    background-image: url('https://i.picsum.photos/id/898/536/354.jpg?hmac=cjHKNwmMn5B9k5HQgDUwq28D9m70da1id0wvvgUcr9I');
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 15px;
    margin: 0 2vw;
    padding: 10px 20px;
    min-width: 400px;
    overflow: auto;
    border-collapse: collapse;
    font-size: 1em;
    font-family: sans-serif;
    thead{
        tr{
            th{
                color: #ffffff;
                font-size: 1.2em;
                text-align: center;
                padding: 10px 5px;
                input{
                    padding: 5px;
                    margin: 10px 0 0;
                    color: #009879;
                    border-radius: 500px;
                    text-align: center;
                    font-weight: bold;
                    ::placeholder{
                        color: #009879;
                    }
                }
            }
        }
    }
    tbody{
        tr{
            border-bottom: thin solid #dddddd;
            background-color: transparent;
            color: #009879;
            td {
                padding: 7px 15px;
            }
            :nth-of-type(even) {
                background-color: #009879;
                color: white;
            }
        }
    }
`;

export const Pager = styled.div`
    background-color: #009879;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    button{
        background-color: white;
        border-radius: 5px;
        color: #009879;
        padding: 10px;
        margin: 0 5px;
    }
    span{
        color: white;
        padding: 0 10px;
    }
`;