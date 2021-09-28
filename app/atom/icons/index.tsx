import React from 'react';
import * as Icons from 'react-native-feather';
import { color } from '../../theme';
import { useWindowSize } from '../../utils';

interface IconProps {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    alignSelf?: string;
    marginLeft?: string;
}

const defaultProps = {
    width: 24,
    height: 24,
    fill: 'none',
    stroke: color.gray.light[1],
    strokeWidth: 2
}

export function ArrowRight(props : IconProps) {
    let [windowWidth,] = useWindowSize();
    const ratio = windowWidth / 375
    props = { ...defaultProps, ...props };
    props.width *= ratio
    props.height *= ratio
    return ( <Icons.ArrowRight {...props} /> );
}
export function Calendar( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.gray.dark[1] }
    props = {...iconProps, ...props};
    return <Icons.Calendar {...props} />;
}
export function Chat( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.gray.dark[1] }
    props = {...iconProps, ...props};
    return <Icons.MessageCircle {...props} />;
}
export function ChevronRight( props: IconProps) {
    props = {...defaultProps, ...props};
    return <Icons.ChevronRight {...props} />;
}

export function CreditCard( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.highlight.green }
    props = {...iconProps, ...props};
    return (<Icons.CreditCard {...props} />);
}
export function Globe( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.primary.green }
    props = {...iconProps, ...props};
    return <Icons.Globe {...props} />;
}
export function Home( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.gray.dark[1] }
    props = {...iconProps, ...props};
    return <Icons.Home {...props} />;
}

export function MapPin( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.primary.blue }
    props = {...iconProps, ...props};
    return <Icons.MapPin {...props} />;
}

export function MoreVertical( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.highlight.green }
    props = {...iconProps, ...props};
    return <Icons.MoreVertical {...props} />;
}

export function Phone( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.gray.light[2] }
    props = {...iconProps, ...props};
    return <Icons.Phone {...props} />;
}

export function Profile( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.gray.dark[1] }
    props = {...iconProps, ...props};
    return <Icons.User {...props} />;
}

export function Search( props: IconProps) {
    props = {...defaultProps, ...props};
    return <Icons.Search {...props} />;
}

export function Video( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.gray.light[2] }
    props = {...iconProps, ...props};
    return <Icons.Video {...props} />;
}

export function Clock( props: IconProps) {
    const iconProps = { ...defaultProps, stroke: color.gray.light[2] }
    props = {...iconProps, ...props};
    return <Icons.Clock {...props} />;
}