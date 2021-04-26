import { ChangeEventHandler, forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Inputs } from '../../model/Form';
import {SelectOptions} from './styles';

interface ISelectProps {
    label: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    option?: Option[];
    optionGroup?: OptionGroup[];
}

interface Option {
    value: string;
    text: string;
}

interface OptionGroup {
    label: string;
    option: Option[];
}

// const Select = forwardRef<HTMLSelectElement, { label: string } & ReturnType<UseFormRegister<Inputs>>>
// (({ onChange, name, label }, ref) => {
const Select = ({label, onChange, option, optionGroup}: ISelectProps) => {
    return (
        <SelectOptions>
            <label>{label}</label>
            <select onChange={onChange}>
                {option && option.map(option => (
                    <option value={option.value}>{option.text}</option>
                ))}
                {optionGroup && optionGroup.map(optionGroup => (
                    <optgroup label={optionGroup.label}>
                        {optionGroup.option.map(opt => (
                            <option value={opt.value}>{opt.text}</option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </SelectOptions>
    )
}

export default Select;
