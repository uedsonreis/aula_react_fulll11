import { type InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function MyInput({ label, ...inputProps }: Props) {
    return (
        <div>
            <span>{label}: </span>
            <input {...inputProps} />
        </div>
    )
}