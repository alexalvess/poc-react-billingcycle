import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../../shared/template/headerComponent/contentHeader";
import Content from "../../shared/template/contentComponent/content";
import Tabs from "../../shared/tabComponent/tabs";
import TabsHeader from "../../shared/tabComponent/tabsHeader";
import TabsContent from "../../shared/tabComponent/tabsContent";
import TabHeader from "../../shared/tabComponent/tabHeader";
import TabContent from "../../shared/tabComponent/tabContent";

import BillingCycleList from "./billingCycleList";
import BillingCycleForm from "./billingCycleForm";

import { init, create, update, remove } from "./billingCycleActions";

class BillingCycle extends Component<{ init:any, create: any, update: any, remove: any }> {
    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <ContentHeader title="Billing Cycles" small="Register" />

                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader
                                icon="bars"
                                label="List"
                                target="tabList"
                            />
                            <TabHeader
                                icon="plus"
                                label="Create"
                                target="tabCreate"
                            />
                            <TabHeader
                                icon="pencil"
                                label="Update"
                                target="tabUpdate"
                            />
                            <TabHeader
                                icon="trash-o"
                                label="Delete"
                                target="tabDelete"
                            />
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id="tabList">
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <BillingCycleForm onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <BillingCycleForm onSubmit={this.props.update} />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <BillingCycleForm onSubmit={this.props.remove} readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ init, create, update, remove }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
