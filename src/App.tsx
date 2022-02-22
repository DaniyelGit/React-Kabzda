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
import {Select} from "./Components/Select/Select";
import {Rating} from "./Components/Rating/Rating";
import {ReactMemo} from "./Components/ReactMemo/ReactMemo";




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

            <h3>Select</h3>
            {/*Select*/}
            <Select/>

            <h3>Rating</h3>
            {/*Rating*/}
            <Rating/>

            <h3>HOK --- React.memo</h3>
            {/*HOK --- React.memo*/}
            <ReactMemo/>
        </div>
    );
}

export default App;
