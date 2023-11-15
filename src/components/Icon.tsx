import classNames from 'classnames';
import { LucideIcon } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import parseCount from '../util/parseCount';

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    element: LucideIcon;
    count?: number;
    bg?: string;
    color?: string;
}

function Icon({ element: Icon, bg = "purple", color = "white", count, style, className, ...props }: IconProps) {
    return (
        <div className="inline-flex gap-2 items-center">
            <span className={twMerge(classNames(
                "inline-flex justify-center items-center rounded-full w-5 h-5",
                className,
            ))} style={{ backgroundColor: bg, color, ...style }} {...props}>
                <Icon size={12} strokeWidth={1} absoluteStrokeWidth />
            </span>
            {count !== undefined && <span className="text-gray-400 text-sm">{parseCount(count)}</span>}
        </div>
    )
}

export default Icon;