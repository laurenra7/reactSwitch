import {Component, ReactNode, createElement, CSSProperties} from "react";
import Switch from 'react-switch';

export interface SwitchInputProps {
    isChecked: boolean;
    style?: CSSProperties;
    className?: string;
    tabIndex?: number;

}

// <Switch checked={this.props.isChecked}
//         style={this.props.style}
//         className={"form-control " + this.props.className}
//         tabIndex={this.props.tabIndex}
//         onChange={this.handleValueChanged} />


export class SwitchInput extends Component<SwitchInputProps> {
    render(): ReactNode {
        return <label>
            <span>Switch with new style</span>
            <Switch checked={this.props.isChecked}
                    onChange={this.handleValueChanged} />
        </label>
    }

    handleValueChanged = () => {
        // do something here when it changes
    }
}