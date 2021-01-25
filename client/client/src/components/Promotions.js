import React, { useState, useEffect, useCallback } from "react";
// react virtualized
import VirtualizedTable from './VirtualizedTable/VirtualizedTable';
// temp
import { columns } from "../temp/columns";
//import promotions from "../temp/rows";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getPromotions, deletePromotion } from "../actions/promotionActions";
// style
import useStyles from "./Promotions.css";
import { Paper } from "@material-ui/core";
import { sizing } from "@material-ui/system";

// TODO: clean code and rearange by best practice
const PromotionsTable = (props) => {
    const promotions = useSelector((state) => state.promotion.promotions);

    // TODO: get columns
    //const { columns } = useSelector((state) => state.columns);
    const dispatch = useDispatch();

    const handleOnClick = (id) => {
        dispatch(deletePromotion(id));
    };

    useEffect(() => {
        dispatch(getPromotions());
    }, [dispatch]);

    const classes = useStyles();

    // TODO: format date to dd/mm/yyyy
    return (
        <Paper style={{ height: 650, width: '100%' }}>
            <VirtualizedTable
                rowCount={promotions.length}
                rowGetter={({ index }) => promotions[index]}
                columns={columns}
            />
        </Paper>
    );
};

export default PromotionsTable;

{/* <DataGrid
className={classes.table}
density={"dense"}
rows={promotions}
columns={columns}
pageSize={12}
//loading={!isLoaded}
checkboxSelection
onSelectionChange={() => {
    return;
}} 
/> */}
