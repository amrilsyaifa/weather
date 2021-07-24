export type SearchInputProps = {
    label?: string;
    error?: string;
    position?: string;
    width?: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

export type LabelProps = {
    error: boolean;
};

export type IconSearchProps = {
    position: string;
    color: string;
};

export type InputProps = {
    error: boolean;
    position: string;
};
