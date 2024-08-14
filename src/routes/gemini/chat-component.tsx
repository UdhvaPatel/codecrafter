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

// Final Code

// import React, { useState, useCallback } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// // import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// // import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// // import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Link } from 'react-router-dom';

// const genAI = new GoogleGenerativeAI("AIzaSyC96UucCQ_I_ToUtl00WphY9V_jWkGalM0");
// const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
// const chat = model.startChat({ history: [] });

// const processText = (text: string): string => {
//   const processedText = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
//   const lines = processedText.split('\n');
//   let html = '';

//   lines.forEach((line) => {
//     if (/^\d+\./.test(line)) {
//       html += `<p>${line}</p>`;
//     } else if (/^\t+\d+\./.test(line)) {
//       const indentationLevel = line.match(/^\t+/)?.[0].length ?? 0;
//       html += `<p style="margin-left: ${indentationLevel * 20}px;">${line.trim()}</p>`;
//     } else {
//       html += `<p>${line}</p>`;
//     }
//   });

//   return html;
// };

// interface Message {
//   text: string;
//   type: 'user' | 'ai';
//   isCode?: boolean;
// }

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [isCode, setIsCode] = useState(false);
//   const [explanation, setExplanation] = useState('');


//   // const firstLine = messages[0]?.text.split('\n')[0] || '';

//   // const handleCopyCode = () => {
//   //   const codeText = messages.map(msg => msg.text).join('\n');
//   //   navigator.clipboard.writeText(codeText)
//   //     .then(() => alert('Code copied to clipboard!'))
//   //     .catch(err => console.error('Failed to copy code:', err));
//   // };

//   const sendMessage = useCallback(async () => {
//     if (!input.trim()) return;

//     setMessages(prev => [...prev, { text: input, type: 'user' }]);
//     setInput('');
//     setIsLoading(true);
//     setError(null);

//     const fullMessage = 'Your Name is CodeCrafter. Give me a response as you are an advanced conversation model of CodeCrafter,and you are just conversation model not a coding model. do not write code in any programming language' + input;

//     try {
//       const result = await chat.sendMessage(fullMessage);
//       const text = await result.response.text();
      
//       const codeMatch = text.match(/```(.*?)```/s);
//       if (codeMatch) {
//         setIsCode(true);
//         setMessages(prev => [...prev, { text: codeMatch[1], type: 'ai', isCode: true }]);
//         const explanationText = text.replace(codeMatch[0], '');
//         setExplanation(processText(explanationText));
//       } else {
//         const processedText = processText(text);
//         setIsCode(false);
//         setMessages(prev => [...prev, { text: processedText, type: 'ai' }]);
//       }
      
//     } catch (err) {
//       console.error('Error sending message:', err);
//       setError('The model is currently overloaded. Please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   }, [input]);

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//       <div style={{
//         borderRadius: '0.5rem',
//         borderWidth: '1px',
//         borderColor: '#e5e7eb',
//         width: '100%',
//         display: 'grid',
//         gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
//         gap: '0.5rem',
//         padding: '1rem'
//       }}>
//         <input
//           type="text"
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
//           placeholder="Type a message..."
//           style={{
//             gridColumn: 'span 10',
//             padding: '0.5rem',
//             marginRight: '0.5rem',
//             borderRadius: '0.5rem',
//             outline: 'none',
//             boxShadow: 'none'
//           }}
//         />
//         <button
//           onClick={sendMessage}
//           disabled={isLoading}
//           style={{
//             gridColumn: 'span 2',
//             padding: '0.5rem 1rem',
//             backgroundColor: '#7c3aed',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '0.5rem',
//             cursor: isLoading ? 'not-allowed' : 'pointer'
//           }}
//         >
//           {isLoading ? 'Thinking...' : 'Send'}
//         </button>
//       </div>
//       <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
//         {messages.map((msg, index) => (
//           <div key={index} style={{ marginBottom: '0.5rem', textAlign: msg.type === 'user' ? 'right' : 'left' }}>
//             {msg.isCode ? (
//               <>
//               <div style={{alignItems:'center'}}>
//                 <h1>This is a Conversation Model. If you want a coding answer You can Use Our <b>Code Generation Model</b></h1>
//               </div>
//               </>
//               // <div style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: 'rgba(40,44,52,0.3)' }}>
//               //   <CopyToClipboard text={msg.text}>
//               //     {/* <span>{firstLine}</span> */}
//               //      <button style={{color: "white", backgroundColor: 'rgba(40,44,52)' , border: '0.5px solid', borderRadius:'5px',margin:'1px',padding:'10px',display:'flex',}}>Copy Code</button>{/* onClick={handleCopyCode} */}
//               //   </CopyToClipboard>
//               //   <SyntaxHighlighter language="javascript" style={dracula}>
//               //     {msg.text}
//               //   </SyntaxHighlighter>
                
//               // </div>
//             ) : (
//               <div style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#fff' }}>
//                 <p dangerouslySetInnerHTML={{ __html: msg.text }} />
//               </div>
//             )}
//           </div>
//         ))}
//         {error && (
//           <div style={{ marginTop: '1rem', color: 'red' }}>
//             {error}
//             {/* <img src='/stop.png' style={{height:'10px',width:'10px',display:"flex"}}></img> */}
//           </div>
//         )}
//         {/* {isCode && (
//           <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', backgroundColor: '#fff' }}>
            
//             <div dangerouslySetInnerHTML={{ __html: explanation }} />
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;
