import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

function SvgInfoCircle({ title, titleId, ...props }: React.SVGProps<SVGSVGElement> & SVGRProps) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby={titleId}
            {...props}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
                opacity={0.4}
                d="M25.666 14c0 6.444-5.223 11.666-11.666 11.666-6.444 0-11.667-5.222-11.667-11.666C2.333 7.557 7.556 2.333 14 2.333c6.443 0 11.666 5.224 11.666 11.667z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.015 14.736c0 .562-.459 1.02-1.021 1.02-.562 0-1.02-.458-1.02-1.02V9.579c0-.562.458-1.02 1.02-1.02s1.02.458 1.02 1.02v5.157zm-2.036 3.701a1.025 1.025 0 012.048 0c0 .563-.458 1.021-1.021 1.021a1.025 1.025 0 01-1.027-1.02z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgInfoCircle;
