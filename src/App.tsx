import React from 'react';
import './App.css';

import {
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUnControlledInput,
    UnControlledInput
} from "./Components/UnControlledInput";

import {
    ControlledCheckBox,
    ControlledComponents,
    ControlledSelect
} from './Components/ControlledComponents';
import {Accordion} from "./Components/Accordion/Accordion";




function App() {

    return (
        <div>
            <h3>Uncontrolled Input</h3>
            {/*UnControlledInput*/}
            <UnControlledInput/>
            {/*TrackValueOfUnControlledInput*/}
            <TrackValueOfUnControlledInput/>
            {/*GetValueOfUncontrolledInputByButtonPress*/}
            <GetValueOfUncontrolledInputByButtonPress/>

            <hr/>

            <h3>Controlled Input / Checkbox / Select</h3>
            {/*ControlledComponents*/}
            <ControlledComponents/>
            {/*ControlledCheckbox*/}
            <ControlledCheckBox/>
            {/*ControlledSelect*/}
            <ControlledSelect/>

            <hr/>

            <h3>Accordion</h3>
            {/*Accordion*/}
            <Accordion/>

            <hr/>
        </div>
    );
}

export default App;
