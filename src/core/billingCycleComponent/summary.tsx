import React, { Component } from "react";

import Grid from "../../shared/layoutComponent/grid";
import Row from "../../shared/layoutComponent/row";
import ValueBox from "../../shared/widgetComponent/valueBox";

export default ({ credit, debt }) => (
    <Grid cols="12">
        <fieldset>
            <legend>Resume</legend>
            <Row>
                <ValueBox
                    cols="12 4"
                    color="green"
                    icon="bank"
                    value={credit}
                    text="Total of Credits"
                />

                <ValueBox
                    cols="12 4"
                    color="red"
                    icon="credit-card"
                    value={debt}
                    text="Total of Debts"
                />

                <ValueBox
                    cols="12 4"
                    color="blue"
                    icon="money"
                    value={credit - debt}
                    text="Total Value"
                />
            </Row>
        </fieldset>
    </Grid>
);
