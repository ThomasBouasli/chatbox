import { UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

import Title from '@/shared/components/atom/Title';

import HeaderWithBackButton from '@/app/components/molecule/HeaderWithBackButton';

function FriendsHeader() {
    return (
        <HeaderWithBackButton>
            <div className="flex items-center justify-between w-full">
                <Title text="Friends" />
                <div className="flex items-center gap-2">
                    <Link to="/app/friends/search">
                        <UserPlus className="text-primary" height={24} width={24} />
                    </Link>
                </div>
            </div>
        </HeaderWithBackButton>
    );
}

export default FriendsHeader;
