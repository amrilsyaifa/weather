import React from 'react';
import { Wrapper, CardComponent, TitleComponent, BodyComponent } from './Styles';
import { CardProps } from './types';

const Title: React.FunctionComponent = ({ children }) => <TitleComponent>{children}</TitleComponent>;
const Body: React.FunctionComponent = ({ children }) => <BodyComponent>{children}</BodyComponent>;
const Footer: React.FunctionComponent = ({ children }) => <>{children}</>;

const Card: React.FC<CardProps> & { Title: React.FC; Body: React.FC; Footer: React.FC } = ({
    width,
    backgroundColor,
    borderRadius,
    padding,
    children,
    Title,
    Body,
    Footer,
}): JSX.Element => {
    return (
        <Wrapper width={width} backgroundColor={backgroundColor}>
            <CardComponent borderRadius={borderRadius} padding={padding}>
                {Title}
                {Body}
                {children}
                {Footer}
            </CardComponent>
        </Wrapper>
    );
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
