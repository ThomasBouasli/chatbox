import { Link } from 'react-router-dom';

import ChatIcon from '@/shared/assets/icon/chat-light.svg';
import ChatList from '@/shared/components/organism/ChatList';
import ChatsHeader from '@/shared/components/organism/ChatsHeader';
import { Button } from '@/shared/components/ui/button';

function Home() {
    return (
        <main className="h-full w-full flex flex-col">
            <ChatsHeader />
            <Link to="/app/friends">
                <Button className="rounded-full absolute bottom-4 right-4 p-3">
                    <img className="text-primary-foreground" src={ChatIcon} alt="Back" height={16} width={16} />
                </Button>
            </Link>
            <ChatList />
        </main>
    );
}

export default Home;
