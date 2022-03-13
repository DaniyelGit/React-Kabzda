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
import {HelpsToReactMemo, UseMemo} from "./Components/UseMemo/UseMemo";
import {LikeUseCallBack} from "./Components/UseCallBack/UseCallBack";




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

            <hr/>

            <h3>Rating</h3>
            {/*Rating*/}
            <Rating/>

            <hr/>

            <h3>HOK --- React.memo</h3>
            {/*HOK --- React.memo*/}
            <ReactMemo/>

            <hr/>

            <h3>HOOK --- useMemo</h3>
            {/*HOOK --- useMemo*/}
            <UseMemo/>
            <HelpsToReactMemo/>

            <hr/>

            <h3>HOOK --- useCallBack</h3>
            {/*HOOK --- useCallBack*/}
            <LikeUseCallBack/>
        </div>
    );
}

export default App;
