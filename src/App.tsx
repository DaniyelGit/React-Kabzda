import React from 'react';
import './App.css';


import {
    ControlledInput,
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUnControlledInput,
    UnControlledInput
} from "./Components/UnControlledInput";

function App() {



    return (
        <div>
            {/*UnControlledInput*/}
            <UnControlledInput/>
            {/*ControlledInput*/}
            <ControlledInput/>
            {/*TrackValueOfUnControlledInput*/}
            <TrackValueOfUnControlledInput/>
            {/*GetValueOfUncontrolledInputByButtonPress*/}
            <GetValueOfUncontrolledInputByButtonPress/>
        </div>
    );
}

export default App;
