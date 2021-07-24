import React from 'react';

export interface WrapperProps {
    width?: number;
    backgroundColor?: string;
}

export interface CardComponentProps {
    borderRadius?: number;
    padding?: number;
}

export interface CardProps {
    width?: number;
    backgroundColor?: string;
    borderRadius?: number;
    padding?: number;
    children: React.ReactNode;
    Title?: React.ReactNode;
    Body?: React.ReactNode;
    Footer?: React.ReactNode;
}
