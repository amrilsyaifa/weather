export type TextProps = {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
};

export type CardProps = {
    data: DataProps;
};

export type DataProps = {
    date: string;
    date_text: string;
    data: SubDataProps;
    weather: any;
    main: any;
};

export type SubDataProps = {
    clouds?: any;
    dt: number;
    dt_txt: string;
    main?: any;
    pop?: number;
    weather?: any;
    wind?: any;
};
