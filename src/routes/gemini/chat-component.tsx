// //"AIzaSyC96UucCQ_I_ToUtl00WphY9V_jWkGalM0"
"use client";
import  { useState, useCallback } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Loader } from '@/components/loader';
import { UserAvatar } from '@/components/user-avatar';
import { BotAvatar } from '@/components/bot-avatar';
import { Skeleton } from '@/components/ui/skeleton';
import toast from 'react-hot-toast';


const genAI = new GoogleGenerativeAI("AIzaSyC96UucCQ_I_ToUtl00WphY9V_jWkGalM0");
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const ChatComponent = () => {
  const [messages, setMessages] = useState<{ text: string; type: 'user' | 'ai' }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // const fullMessage = 'Your Name is CodeCrafter. Give me a response as you are an advanced conversation model of CodeCrafter,and you are just conversation model not a coding model,so do not write code in any programming language, and if and only if user ask to write a code in any programming language then suggest them to Use Code generation model of CodeCrafter. ' + input;
  
  const chat = model.startChat({ history: [] });

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input  , type: 'user' }]);
    setInput('');
    setIsLoading(true);
    setError(null); // Reset error state before sending a new message

    try {
      
      const result = await chat.sendMessage('Your Name is CodeCrafter. Give me a response as you are an advanced conversation model of CodeCrafter,and you are just conversation model not a coding model,so do not write code in any programming language, and if and only if user ask to write a code in any programming language then suggest them to Use Code generation model of CodeCrafter. ' + input);
      setMessages(prev => [...prev, { text: result.response.text(), type: 'ai' }]);
    } catch (err) {
      
      toast.error("Something went wrong..!!")
      // Optionally, implement a retry mechanism here
    } finally {
      setIsLoading(false);
    }
  }, [input, chat]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{borderRadius: '0.5rem',
      borderWidth: '1px',
      borderColor: '#e5e7eb',
      width: '100%',
     
    //   display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '0.5rem',}}>
        <div style={{ padding: '1rem',  display: 'flex'}}>
        
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
          placeholder="Type a message..."
          style={{ width: 'calc(100% - 1rem)', padding: '0.5rem', marginRight: '0.5rem', display: 'flex', border: 0, outline: 'none', boxShadow: 'none', }}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          style={{ padding: '0.5rem 1rem', backgroundColor: 'black', color: '#fff', border: 'none', borderRadius: '0.5rem',  }}
        >
          {isLoading ? 'Thinking...' : 'Send'}
        </button>
        
        </div>
        </div>
        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Loader />
          </div>
        )}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '0.5rem', textAlign: msg.type === 'user' ? 'right' : 'left' }}>
            <span style={{ padding: '0.5rem', background: msg.type === 'user' ? '#d1fae5' : '#e5e7eb', borderRadius: '0.5rem', whiteSpace: 'pre-wrap', display: 'flex'  }}>
              <div style={{display:'flex', flexDirection:'row'}}>
              {msg.type === "user" ? <UserAvatar /> : <BotAvatar />}
              </div>
              <p style={{ fontSize: '0.875rem' , marginLeft: '10px', marginTop:'6px' , marginRight:'3px'}}>
                {msg.text}
              </p>
            </span>
            
          </div>
        ))}
        {isLoading && (
                // <Skeleton style={{ width: '100px', height: '20px', borderRadius: '9999px' }}/>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Skeleton style={{ height: '3rem', width: '3rem', borderRadius: '9999px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Skeleton style={{ height: '1rem', width: '250px' }} />
                      <Skeleton style={{ height: '1rem', width: '200px' }} />
                  </div>
                </div>
            )}
        {error && (
          <div style={{ marginTop: '1rem', color: 'red' }}>
            {error}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ChatComponent;


