import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { ChatState } from '../Context/ChatProvider';
import SideDrawer from '../components/SideDrawer';

const ChatPage = () => {
    const { user } = ChatState();

    return (<div style={{ width: "100%" }}>
        asfsedf
    </div>
    )
}

export default ChatPage