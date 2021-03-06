import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/ChatProvider";
import SideDrawer from "../components/Miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";

const ChatPage = () => {
    const { user } = ChatState();
    return (
        <div style={{ width: '100%' }}>
            {user && <SideDrawer/>}
            <Box
                d='flex'
                justifyContent='space-between'
                w='100%'
                h='90vh'
                p='10px'
            >
                {user && <MyChats/>}
                {user && <ChatBox/>}

            </Box>
        </div>
    );
};

export default ChatPage