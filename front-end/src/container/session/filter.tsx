import React, {useEffect, useState} from 'react';
import {loadSession} from "./actions";
import {useDispatch} from "react-redux";
import DropDown from "../../component/form/dropdown";
import {Grid, SelectChangeEvent} from "@mui/material";

function Filters() {
    const dispatch = useDispatch();
    const [shortTitle, setShortTitle] = useState('');
    const [status, setStatus] = useState('');

    const handleChangeShortTile = (event: SelectChangeEvent) => {
        setShortTitle(event.target.value as string);
        dispatch(loadSession(event.target.value, status));
    };

    const handleChangeStatus = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
        dispatch(loadSession(shortTitle, event.target.value));
    };

    const arrShortTitle = [
        {label: 'all', value: ''},
        {label: 'vc', value: 'vc'},
        {label: 'product', value: 'product'},
        {label: 'data', value: 'data'},
        {label: 'data2', value: 'data2'},
        {label: 'data3', value: 'data3'},
        {label: 'scrum', value: 'scrum'},
        {label: 'product2', value: 'product2'},
        {label: 'growth', value: 'growth'},
    ]

    const arrStatus = [
        {label: 'all', value: ''},
        {label: 'offering', value: 'OFFERING'},
        {label: 'running', value: 'RUNNING'},
        {label: 'offboarding', value: 'OFFBOARDING'}
    ]
    return (
        <Grid container spacing={2} padding={4}>
            <Grid item xs={6} sm={2}>
                <DropDown
                    handleChange={handleChangeShortTile}
                    listItem={arrShortTitle}
                    label={'Short Title'}
                    value={shortTitle}
                />
            </Grid>
            <Grid item xs={6} sm={2}>
                <DropDown
                    handleChange={handleChangeStatus}
                    listItem={arrStatus}
                    label={'Status'}
                    value={status}
                />
            </Grid>
        </Grid>
    );
}

export default Filters;
