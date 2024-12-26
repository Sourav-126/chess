import { useEffect, useState } from "react";
const WS_URL = "ws://localhost:8080";

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
