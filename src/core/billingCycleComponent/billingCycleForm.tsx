import React, { Component, Dispatch } from "react";
import {
    reduxForm,
    Field,
    InjectedFormProps,
    formValueSelector,
} from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Settings from "../../_utils/settings";
import LabelAndInput from "../../shared/formComponent/labelAndInput";
import { init } from "./billingCycleActions";
import ItemList from "./itemList";
import Summary from "./summary";

interface IProps {
    init?: any;
    readOnly?: boolean;
    credits: any[];
    debts: any[]
}

class BillingCycleForm extends Component<
    IProps & InjectedFormProps<{}, IProps>
> {
    calculateSummary() {
        const sum = (t, v) => t + v;

        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(c => +c.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary();

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name="name"
                        component={LabelAndInput}
                        label="Name"
                        cols="12 4"
                        placeholder="Enter the name"
                        readOnly={readOnly}
                    />
                    <Field
                        name="month"
                        component={LabelAndInput}
                        label="Month"
                        cols="12 4"
                        placeholder="Enter the month"
                        readOnly={readOnly}
                    />
                    <Field
                        name="year"
                        component={LabelAndInput}
                        label="Year"
                        cols="12 4"
                        placeholder="Enter the year"
                        readOnly={readOnly}
                    />

                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>

                    <ItemList
                        list={credits}
                        cols="12 6"
                        readOnly={readOnly}
                        field="credits"
                        legend="Credits"
                    />

                    <ItemList
                        list={debts}
                        cols="12 6"
                        readOnly={readOnly}
                        field="debts"
                        legend="Debts"
                        showStatus={true}
                    />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                    <button
                        type="button"
                        className="ml-3 btn btn-default"
                        onClick={() => this.props.init()}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}

const billingCycleForm = reduxForm<{}, IProps>({
    form: Settings.FORMS.BILLING_CYCLE_CREATE,
    destroyOnUnmount: false,
})(BillingCycleForm);

const selector = formValueSelector(Settings.FORMS.BILLING_CYCLE_CREATE);

const mapStateToProps = (state: any) => ({
    credits: selector(state, "credits"),
    debts: selector(state, "debts"),
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(billingCycleForm);
