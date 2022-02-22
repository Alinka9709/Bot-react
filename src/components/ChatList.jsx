import { List, ListItem } from 'material-ui/List';
import { Link } from "react-router-dom";

const ChatList = () => {
    return (
        <List>
            <ListItem>
                <Link to='/chat/1' className='chatItem'>Чат 1</Link>
                <Link to='/chat/2' className='chatItem'>Чат 2</Link>
                <Link to='/chat/3' className='chatItem'>Чат 3</Link>
            </ListItem>
        </List>
    )
}

export default ChatList
