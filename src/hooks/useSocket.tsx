import { useEffect, useState } from "react";
const WS_URL =
  "  https://fa55-2401-4900-5f97-fce8-4158-2670-3247-5e30.ngrok-free.app";

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
