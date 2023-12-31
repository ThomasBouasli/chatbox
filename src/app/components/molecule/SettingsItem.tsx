import { useNavigate } from 'react-router-dom';

import ListItem from '../atom/ListItem';

interface SettingsItemProps {
    iconSrc: string;
    content: string;
    href?: string;
    onClick?: () => void;
}

function SettingsItem({ iconSrc, content, href, onClick }: SettingsItemProps) {
    const navigate = useNavigate();

    if (!href && !onClick) throw new Error('href or onClick must be provided');

    function handleOnClick() {
        if (onClick) {
            onClick();
        } else if (href) {
            navigate(href);
        }
    }

    return (
        <ListItem className="border-y border-primary/30" onClick={handleOnClick}>
            <img src={iconSrc} alt={content} height={20} width={20} />
            <span>{content}</span>
        </ListItem>
    );
}

export default SettingsItem;
