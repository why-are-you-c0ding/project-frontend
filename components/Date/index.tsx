import React, {useState} from "react";
import {SelectBox ,SelectOptions ,Option,Label} from "@components/Date/styles"

const CustomSelect = (optionData:any) => {
    const [currentValue, setCurrentValue] = useState(Grade[0].value);
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (e:any) => {
        setCurrentValue(e.target.getAttribute("value"));
    };

    return (
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <Label>{currentValue}</Label>
            <SelectOptions show={showOptions}>
                {optionData.map((data:any) => (
                    <Option
                        key={data.key}
                        value={data.value}
                        onClick={handleOnChangeSelectValue}
                    >
                        {data.value}
                    </Option>
                ))}
            </SelectOptions>
        </SelectBox>
    );
};

export default CustomSelect;