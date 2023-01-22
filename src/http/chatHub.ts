import type { MessageDto, SendMessageDto } from "./models/chatDtos";

export default class ChatHub {
  private socket: WebSocket;
  private messages: MessageDto[];

  constructor(url: string) {
    this.messages = [];
    this.socket = new WebSocket(url);

    this.socket.onmessage = (event) => {
      console.log("Message was: ", event.data);
      this.messages.push(event.data);
    };
  }

  connect() {
    const msg = {
      protocol: "json",
      version: 1,
    };
    this.socket.send(`${JSON.stringify(msg)}`);
  }

  formatEvent<T>(type: string, payload: T): string {
    const msg = {
      type: 1,
      target: type,
      arguments: [payload],
    };
    return `${JSON.stringify(msg)}`;
  }

  sendMessage(payload: SendMessageDto) {
    const event = this.formatEvent("SendMessage", payload);
    this.socket.send(event);
  }
}

// const messages: string[] = [];

// export function useChatHub(url: string): ChatHub {
//   return {};
// }
