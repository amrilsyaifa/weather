import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

function SvgSearchOutline({ title, titleId, ...props }: React.SVGProps<SVGSVGElement> & SVGRProps) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby={titleId}
            {...props}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <circle cx={11} cy={11} r={7} stroke="currentColor" strokeWidth={2} />
            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        </svg>
    );
}

export default SvgSearchOutline;
