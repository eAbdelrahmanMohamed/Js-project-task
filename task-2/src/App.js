import { useState } from 'react';
import './App.css';



function App() {

    const main = async() => {
        const getData = async() => {
            try {
                let response = await fetch('http://localhost:3001/test', {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                    },
                });
                let info = await response.json();
                return info;
            } catch (err) {
                console.log(err);
            }
        };
        const data = await getData();
        console.table(data.wordList);
    };
    return ( <
        div className = "App" >

        <
        /
        div >
    );
}

export default App;