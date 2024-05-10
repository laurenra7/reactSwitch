import {Component, ReactNode, createElement} from "react";
import Switch from 'react-switch';

export interface SwitchInputProps {
    isChecked: boolean;
}

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