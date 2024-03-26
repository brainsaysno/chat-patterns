import { useState } from "react";
import Table from "./components/Table";
import ChatProvider from "./components/ChatProvider";

const chatAccesors = {
  Role: (message) => message.role,
  Content: (message) => message.content,
} satisfies Record<string, (msg: Message) => string>;

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <main className="h-screen bg-blue-500 text-white flex flex-col items-center justify-center gap-8">

      {/* Part 1 - React */}
      <ChatProvider>
        {({ chat }) => (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const userMessage: Message = {
                role: 'user',
                // @ts-ignore
                content: e.target.message.value,
              }

              const assistantMessage = await chat([...messages, userMessage]);

              setMessages((prevMessages) => [...prevMessages, userMessage, assistantMessage])
            }}
            className="w-1/4 flex gap-8 items-center"
          >
            <textarea
              name="message"
              className="text-black rounded-md grow py-2 px-3 resize-none"
            />
            <button className="px-4 py-2 bg-blue-800 rounded-md">Send</button>
          </form>
        )}
      </ChatProvider>


      {/* Part 2 - Typescript */}
      <Table data={messages} accesors={chatAccesors} caption="Messages" />

    </main>
  );
}

export default App;
