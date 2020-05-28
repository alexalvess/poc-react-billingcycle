import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, arrayInsert, arrayRemove } from "redux-form";

import Grid from "../../shared/layoutComponent/grid";
import Input from "../../shared/formComponent/input";
import Select from "../../shared/formComponent/select";
import If from "../../shared/operatorComponent/if";

class ItemList extends Component<{
    cols: any;
    readOnly: any;
    list: any[];
    arrayInsert: any;
    arrayRemove: any;
    field: any;
    legend: any;
    showStatus?: any;
}> {
    add = (i, item = {}) => {
        if (!this.props.readOnly) {
            this.props.arrayInsert(
                "billingCycleForm",
                this.props.field,
                i,
                item
            );
        }
    };

    remove = (i) => {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove("billingCycleForm", this.props.field, i);
        }
    };

    renderRows = () => {
        const list = this.props.list || [];
        const optionsState = [
            {label: "Payed", value: 0},
            {label: "Pending", value: 1},
            {label: "Scheduled", value: 2}
        ];

        return list.map((item, i) => {
            return (
                <tr key={i}>
                    <td>
                        <Field
                            placeholder="Enter the name"
                            readOnly={this.props.readOnly}
                            name={`${this.props.field}[${i}].name`}
                            component={Input}
                        />
                    </td>
                    <td className="td-input-value">
                        <Field
                            placeholder="Enter the value"
                            readOnly={this.props.readOnly}
                            name={`${this.props.field}[${i}].value`}
                            component={Input}
                        />
                    </td>
                    <If test={this.props.showStatus}>
                        <td>
                            <Field
                                readOnly={this.props.readOnly}
                                name={`${this.props.field}[${i}].status`}
                                component={Select}
                            >
                                <option />
                                <option key={0}>Payed</option>
                                <option key={1}>Pending</option>
                                <option key={2}>Scheduled</option>
                            </Field>
                        </td>
                    </If>
                    <td className="td-button-actions">
                        <button
                            type="button"
                            className="btn btn-sm btn-success"
                            onClick={() => this.add(i + 1)}
                        >
                            <i className="fa fa-plus"></i>
                        </button>

                        <button
                            type="button"
                            className="btn btn-sm btn-warning"
                            onClick={() => this.add(i + 1, item)}
                        >
                            <i className="fa fa-clone"></i>
                        </button>

                        <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => this.remove(i)}
                        >
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            );
        });
    };

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <label>{this.props.legend}</label>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderRows()}</tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, mapDispatchToProps)(ItemList);
