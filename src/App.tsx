import React from 'react';
import './App.css';

import {
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUnControlledInput,
    UnControlledInput
} from "./Components/UnControlledInput/UnControlledInput";

import {
    ControlledCheckBox,
    ControlledComponents,
    ControlledSelect
} from './Components/ControlledComponents/ControlledComponents';
import {Accordion} from "./Components/Accordion/Accordion";
import {Select} from "./Components/Select/Select";
import {Rating} from "./Components/Rating/Rating";
import {ReactMemo} from "./Components/ReactMemo/ReactMemo";
import {HelpsToReactMemo, UseMemo} from "./Components/UseMemo/UseMemo";
import {LikeUseCallBack} from "./Components/UseCallBack/UseCallBack";
import {SuperUseState} from "./Components/UseState/SuperUseState";
import {UseEffect} from "./Components/useEffect/UseEffect";




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

            <hr/>

            <h3>HOOK --- useState</h3>
            {/*HOOK --- useState*/}
            <SuperUseState/>

            <hr/>

            <h3>HOOK --- useEffect</h3>
            {/*HOOK --- useEffect*/}
            <UseEffect/>

            <hr/>


        </div>
    );
}

export default App;
