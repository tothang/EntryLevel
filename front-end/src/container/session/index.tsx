import React, {useEffect} from 'react';
import {loadSession} from './actions'
import {useDispatch, useSelector} from 'react-redux';
import {Card, CardContent, CardMedia, Grid, Paper, Typography} from "@mui/material";
import Filters from "./filter";
import moment from "moment";

function ListSession() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadSession('', ''));
    }, []);
    const sessionList = useSelector((state:any) => state.session);
    return (
        <div className="App">
            <Filters/>
            <Grid container spacing={2} padding={4}>
                {sessionList.list.map((item:any, index: any) => {
                    return (
                        <Grid key={index} item xs={12} sm={4}>
                            <Card>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.program[0].thumbnail_img_url}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.program[0].display_title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {moment(item.start_date).format("MMM Do")}&nbsp;-
                                        &nbsp;{moment(item.start_date).format("MMM Do")}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default ListSession;
