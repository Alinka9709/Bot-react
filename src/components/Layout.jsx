import MessageField from "./MessageField";
import ChatList from "./ChatList";
import { useParams } from "react-router-dom";

const Layout = () => {
    const params = useParams();

    const chatId = params?.chatId || 1;
    return (
        <div className='layout'>
            <div className="layout-canvas">
                <div className="layout-left-side">
                    <ChatList />
                </div>
                <div className="right">
                    <MessageField />
                </div>
            </div>
        </div>
    )
}

export default Layout
