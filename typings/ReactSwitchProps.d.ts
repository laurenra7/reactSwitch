/**
 * This file was generated from ReactSwitch.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface ReactSwitchContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    switchAttribute: EditableValue<boolean>;
}

export interface ReactSwitchPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    switchAttribute: string;
}
