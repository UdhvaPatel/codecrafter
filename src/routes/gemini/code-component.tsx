import { useState, useCallback } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Loader } from '@/components/loader';
import { UserAvatar } from '@/components/user-avatar';
import { BotAvatar } from '@/components/bot-avatar';
import { Skeleton } from '@/components/ui/skeleton';
import ReactMarkdown from 'react-markdown'
import toast from 'react-hot-toast';



const genAI = new GoogleGenerativeAI("AIzaSyC96UucCQ_I_ToUtl00WphY9V_jWkGalM0");
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const CodeComponent = () => {
  const [messages, setMessages] = useState<{ text: string; type: 'user' | 'ai' }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  const chat = model.startChat({ history: [] });

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input  , type: 'user' }]);
    setInput('');
    setIsLoading(true);
    setError(null); // Reset error state before sending a new message

    try {
      const result = await chat.sendMessage('Your Name is CodeCrafter. Give me a response as you are an advanced Code Generation model of CodeCrafter. You must answer only in markdown code snippets. Explain code after writing code as a Explanation. ' + input);
      setMessages(prev => [...prev, { text: result.response.text(), type: 'ai' }]);
    } catch (err) {
      toast.error("Something went wrong..!!")
      // console.error('Error sending code:', err);
      // setError('The model is currently overloaded. Please try again later.');
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
          placeholder="Write a Code for..."
          style={{ width: 'calc(100% - 1rem)', padding: '0.5rem', marginRight: '0.5rem', display: 'flex', border: 0, outline: 'none', boxShadow: 'none', }}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          style={{ padding: '0.5rem 1rem', backgroundColor: 'black', color: '#fff', border: 'none', borderRadius: '0.5rem',  }}
        >
          {isLoading ? 'Generating...' : 'Generate'}
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
            <span style={{ padding: '1rem', background: msg.type === 'user' ? '#d1fae5' : '#e5e7eb', borderRadius: '0.5rem', whiteSpace: 'pre-wrap', display: 'flex'  }}>
              <div style={{display:'flex', flexDirection:'row'}}>
              {msg.type === "user" ? <UserAvatar /> : <BotAvatar />}
              </div>
              <div style={{ fontSize: '0.868rem', overflow: 'hidden', lineHeight: '15px', marginLeft:'10px', marginTop:'10px' }}>
              <ReactMarkdown
              components={{
                pre: ({  ...props }) => (
                    <div style={{ overflow: 'auto', width: '100%', marginTop: '0.5rem', marginBottom: '0.5rem', backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '0.5rem', borderRadius: '0.5rem' ,lineHeight: '1px',}}> 
                        <pre {...props} />
                    </div>
                ),
                code: ({  ...props }) => (
                    <code style={{ fontWeight: 'bolder',lineHeight: '18px', borderRadius: '0.5rem', padding: '0.2rem'}} {...props} />
                )
              }}
              >
              {/* line 91 96 node, */}
                {msg.text || ""}
              
              </ReactMarkdown>
              </div>
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

export default CodeComponent;
