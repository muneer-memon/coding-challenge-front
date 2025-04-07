import HighIcon from '../img/alarm-high.svg';
import MediumIcon from '../img/alarm-medium.svg';
import LowIcon from '../img/alarm-low.svg';

export const PRIORITY = {
    HIGH: 1,
    MEDIUM: 2,
    LOW: 3
};
export const PRIORITY_MAPPING = {
    [PRIORITY.HIGH]: {
        text: 'High',
        icon: HighIcon,
        color: '#ff4444'
    },
    [PRIORITY.MEDIUM]: {
        text: 'Medium',
        icon: MediumIcon,
        color: '#ffbb33'
    },
    [PRIORITY.LOW]: {
        text: 'Low',
        icon: LowIcon,
        color: '#00C851'
    }
};