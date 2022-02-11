import React, {ChangeEvent} from 'react';



export const ControlledComponents = () => {

    const [value, setValue] = React.useState<string>('');

    const handlerChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={handlerChangeInput}/>
        </div>
    );
};

export const ControlledCheckBox = () => {

    const [checked, setChecked] = React.useState(true);

    const handlerChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked);
    }

    return (
      <div>
          <input type="checkbox" checked={checked} onChange={handlerChangeChecked}/>
          <span>checkbox</span>
      </div>
    );
}

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = React.useState<string | undefined>('3');

    const handlerChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return (
        <div>
            <select value={parentValue} onChange={handlerChangeSelect}>
                <option value="1">Даниель</option>
                <option value="2">Виктория</option>
                <option value="3">Тереса</option>
                <option value="4">Андрей</option>
            </select>
        </div>
    );
}


