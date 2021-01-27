import React, { useEffect } from "react";

import VirtualizedTable from './VirtualizedTable/VirtualizedTable';

import { useDispatch, useSelector } from "react-redux";
import { getColumns, getPromotions, deletePromotion, duplicatePromotion, updatePromotion } from "../actions/promotionActions";

import useStyles from "./Promotions.css";
import { Paper } from "@material-ui/core";

const PromotionsTable = (props) => {
    const dispatch = useDispatch();
    const { promotions } = useSelector((state) => state.promotion);
    const { columns } = useSelector((state) => state.promotion);

    useEffect(() => {
        dispatch(getPromotions());
        dispatch(getColumns());
    }, [dispatch]);

    const handleDeleteRow = (id) => {
        return dispatch(deletePromotion(id));
    };

    const handleDuplicateRow = (id, index) => {
        const promotion = promotions.find(curr => curr._id === id);
        return dispatch(duplicatePromotion(promotion, index));
    }

    const handleRowUpdate = (updatedRow) => {
        return dispatch(updatePromotion(updatedRow));
    }

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <VirtualizedTable
                rowGetter={({ index }) => promotions[index]}
                columns={columns}
                rows={promotions}
                hasCheckbox
                onRowUpdate={handleRowUpdate}
                onRowDelete={handleDeleteRow}
                onRowDuplicate={handleDuplicateRow}
            />
        </Paper>
    );
};

export default PromotionsTable;