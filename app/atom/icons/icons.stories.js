import React from 'react';
import { ArrowRight, Calendar, Chat, ChevronRight, CreditCard, Globe, Home, MapPin, MoreVertical, Phone, Profile, Search, Video } from './Icons';
import { color } from '../../theme';
import CircleHighlight from './CircleHighlight';

export const highlightedIcon = () => {
    return (
        <CircleHighlight>
            <Video style={{ stroke: color.gray.light[1] }}/>
        </CircleHighlight>
    );
}

export { ArrowRight, Calendar, Chat, ChevronRight, CreditCard, Globe, Home, MapPin, MoreVertical, Phone, Profile, Search, Video };

export default {
    title: 'Atoms/Icons',
};
