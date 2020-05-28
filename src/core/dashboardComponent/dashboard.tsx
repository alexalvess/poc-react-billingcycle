import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from"./dashboardActions";

import Row from "../../shared/layoutComponent/row";

import ContentHeader from "../../shared/template/headerComponent/contentHeader";
import Content from "../../shared/template/contentComponent/content";
import ValueBox from "../../shared/widgetComponent/valueBox";

class Dashboard extends Component<{summary: any, getSummary: any}> {
    componentWillMount() {
        this.props.getSummary();
    }

    render() {
        const { credit, debt } = this.props.summary
            ? this.props.summary
            : { credit: 0, debt: 0 };

        return (
            <div>
                <ContentHeader title="Dashboard" small="Version 1.0" />
                <Content>
                    <Row>
                        <ValueBox
                            value={credit}
                            cols="12 4"
                            color="green"
                            icon="bank"
                            text="Total of Credits"
                        />
                        <ValueBox
                            value={debt}
                            cols="12 4"
                            color="red"
                            icon="credit-card"
                            text="Total of Debts"
                        />
                        <ValueBox
                            value={credit - debt}
                            cols="12 4"
                            color="blue"
                            icon="money"
                            text="Total Value"
                        />
                    </Row>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
