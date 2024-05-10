import { Component, ReactNode, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import { SwitchInput } from "./components/SwitchInput";

import { ReactSwitchContainerProps } from "../typings/ReactSwitchProps";

import "./ui/ReactSwitch.css";

export class ReactSwitch extends Component<ReactSwitchContainerProps> {
    render(): ReactNode {
        // return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
        const isSwitched = this.props.switchAttribute.value || false; // default to false if empty
        return <SwitchInput isChecked={isSwitched}
                            style={this.props.style}
                            className={this.props.class}
                            tabIndex={this.props.tabIndex}

        />;
    }
}
