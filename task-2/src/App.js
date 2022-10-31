import { useEffect, useState } from 'react';
import './App.css';



function App() {
    var Data = [];
    const [data, setData] = useState([]);
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
        Data = await getData();
        //setData((d) => d = Data)
        //console.log(data);

        return Data;
    };
    //useEffect(() => main(), [])
    //await main()

    return ( <
        div className = "App" >
        <
        button type = "button"
        onClick = {
            () => console.log(main())
        } > click < /button>   


        <
        /
        div >
    );
}

export default App;