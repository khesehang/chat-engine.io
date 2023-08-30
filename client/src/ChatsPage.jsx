
import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {


    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="8472de7b-e112-4608-b162-fce39795b6f7"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    );

}

export default ChatsPage;