import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

function SvgArrowLeftRounded({ title, titleId, ...props }: React.SVGProps<SVGSVGElement> & SVGRProps) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby={titleId}
            {...props}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <circle opacity={0.2} cx={16} cy={16} r={16} fill="currentColor" />
            <path
                d="M8 16.128l-.707-.707-.707.707.707.707.707-.707zm15 1a1 1 0 100-2v2zm-9.707-7.713l-6 6.006 1.414 1.414 6-6.006-1.414-1.414zm-6 7.42l6 6.006 1.414-1.414-6-6.006-1.414 1.414zm.707.293h15v-2H8v2z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgArrowLeftRounded;
