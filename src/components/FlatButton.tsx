import classNames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface FlatButtonProps extends React.HTMLAttributes<HTMLButtonElement> {

}

function FlatButton({className, ...props }: FlatButtonProps) {
    return (
        <button className={twMerge(classNames(
            "bg-[#FFC23E] text-black font-medium px-3 py-2 rounded",
            className,
        ))} {...props} />
    )
}

export default FlatButton;