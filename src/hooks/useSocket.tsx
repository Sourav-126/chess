import { useEffect, useState } from "react";
const WS_URL = "https://40f5-1-187-225-47.ngrok-free.app";

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>();

  useEffect(() => {
    const ws = new WebSocket(WS_URL);
    ws.onopen = () => {
      //   console.log("connected");
      setSocket(ws);
    };

    ws.onclose = () => {
      //   console.log("disconnected");
      setSocket(null);
    };

    return () => {
      if (socket?.readyState == 1) {
        socket.close();
      }
    };
  }, []);

  return socket;
};
