import React from 'react';

import { Button } from 'react-toolbox/lib/button';

import './ButtonsField.css'

interface ButtonsFieldProps<T extends any> {

    label?: string;
    disabled: boolean;
    availableValues: { [key: string]: T };

    value?: T;
    onChange(value?: T): void;
}

export class ButtonsField<T extends any> extends React.Component<ButtonsFieldProps<T>> {

    static defaultProps = { disabled: false, onChange() {} };

    private onChange = (value: string) => {
        this.setState({ ...this.state, value });
    };

    render() {
        const {label, disabled, availableValues, value, onChange} = this.props;

        return (
            <div className="ButtonsField">
                {label && (
                    <div className="ButtonsField-label">{label}</div>
                )}

                <div className="ButtonsField-buttons">
                    {Object.entries(availableValues).map(([alabel, avalue]) => (
                        <Button key={avalue} onClick={() => onChange(value === avalue ? undefined : avalue)}
                                label={alabel} floating mini primary={value === avalue} disabled={disabled} />
                    ))}
                </div>
            </div>
        );
    }
}
