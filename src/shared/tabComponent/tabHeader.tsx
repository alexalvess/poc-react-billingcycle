import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { TabHeaderModel } from "../../_model/properties/tabHeaderModel";
import { selectTab } from "./tabActions";
import If from "../operatorComponent/if";

class TabHeader extends Component<TabHeaderModel> {
    render() {
        const selected = this.props.tab.selected === this.props.target;
        const visible = this.props.tab.visible[this.props.target];

        return (
            <If test={visible}>
                <li className={selected ? "active" : ""}>
                    <a
                        href="#!"
                        data-toggle="tab"
                        data-target={this.props.target}
                        onClick={() => this.props.selectTab(this.props.target)}
                    >
                        <i className={`fa fa-${this.props.icon}`}></i>{" "}
                        {this.props.label}
                    </a>
                </li>
            </If>
        );
    }
}

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ selectTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);