import { Component, ReactNode, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import { ReactSwitchPreviewProps } from "../typings/ReactSwitchProps";
import {SwitchInput} from "./components/SwitchInput";

export class preview extends Component<ReactSwitchPreviewProps> {
    render(): ReactNode {
        // return <HelloWorldSample sampleText={this.props.sampleText} />;
        return <SwitchInput isChecked={true} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/ReactSwitch.css");
}
