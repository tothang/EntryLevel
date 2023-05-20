import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

function DropDown({...props}) {
    const {label, listItem, handleChange, value} = props;

    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={label}
                onChange={handleChange}
            >
                {listItem.map((item:any, index: any) => {
                    return (
                        <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

export default DropDown;
