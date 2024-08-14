// import React, { useState, useCallback } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { Loader } from '@/components/loader';
// import { UserAvatar } from '@/components/user-avatar';
// import { BotAvatar } from '@/components/bot-avatar';
// import { Skeleton } from '@/components/ui/skeleton';

// const genAI = new GoogleGenerativeAI("AIzaSyC96UucCQ_I_ToUtl00WphY9V_jWkGalM0");
// const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// const ImageComponent = () => {
//   const [messages, setMessages] = useState<{ text: string; type: 'user' | 'ai' }[]>([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const fullMessage = 'Your Name is CodeCrafter.' + input;
  
//   const chat = model.startChat({ history: [] });

//   const sendMessage = useCallback(async () => {
//     if (!input.trim()) return;

//     setMessages(prev => [...prev, { text: input  , type: 'user' }]);
//     setInput('');
//     setIsLoading(true);
//     setError(null); // Reset error state before sending a new message

//     try {
//       const result = await chat.sendMessage(fullMessage);
//       setMessages(prev => [...prev, { text: result.response.text(), type: 'ai' }]);
//     } catch (err) {
//       console.error('Error sending message:', err);
//       setError('The model is currently overloaded. Please try again later.');
//       // Optionally, implement a retry mechanism here
//     } finally {
//       setIsLoading(false);
//     }
//   }, [input, chat]);

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
//         <div style={{borderRadius: '0.5rem',
//       borderWidth: '1px',
//       borderColor: '#e5e7eb',
//       width: '100%',
     
//     //   display: 'grid',
//       gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
//       gap: '0.5rem',}}>
//         <div style={{ padding: '1rem',  display: 'flex'}}>
        
//         <input
//           type="text"
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
//           placeholder="Type a message..."
//           style={{ width: 'calc(100% - 1rem)', padding: '0.5rem', marginRight: '0.5rem', display: 'flex', border: 0, outline: 'none', boxShadow: 'none', }}
//         />
//         <button
//           onClick={sendMessage}
//           disabled={isLoading}
//           style={{ padding: '0.5rem 1rem', backgroundColor: 'black', color: '#fff', border: 'none', borderRadius: '0.5rem',  }}
//         >
//           {isLoading ? 'Thinking...' : 'Send'}
//         </button>
        
//         </div>
//         </div>
//         {isLoading && (
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//           <Loader />
//           </div>
//         )}
//         <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', }}>
//         {messages.map((msg, index) => (
//           <div key={index} style={{ marginBottom: '0.5rem', textAlign: msg.type === 'user' ? 'right' : 'left' }}>
//             <span style={{ padding: '0.5rem', background: msg.type === 'user' ? '#d1fae5' : '#e5e7eb', borderRadius: '0.5rem', whiteSpace: 'pre-wrap', display: 'flex'  }}>
//               <div style={{display:'flex', flexDirection:'row'}}>
//               {msg.type === "user" ? <UserAvatar /> : <BotAvatar />}
//               </div>
//               <p style={{ fontSize: '0.875rem' , marginLeft: '10px', marginTop:'6px' , marginRight:'3px'}}>
//                 {msg.text}
//               </p>
//             </span>
            
//           </div>
//         ))}
//         {isLoading && (
//                 // <Skeleton style={{ width: '100px', height: '20px', borderRadius: '9999px' }}/>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
//                   <Skeleton style={{ height: '3rem', width: '3rem', borderRadius: '9999px' }} />
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                       <Skeleton style={{ height: '1rem', width: '250px' }} />
//                       <Skeleton style={{ height: '1rem', width: '200px' }} />
//                   </div>
//                 </div>
//             )}
//         {error && (
//           <div style={{ marginTop: '1rem', color: 'red' }}>
//             {error}
//           </div>
//         )}
//       </div>
      
//     </div>
//   );
// };

// export default ImageComponent;

// import Typewriter from 'typewriter-effect';

// export default function CaptionComponent(){
//     return(
//         <>
//         <div style={{fontSize: '25px', fontWeight:'bolder'}}>
//         <h1>
//             Hello, I'm CodeCrafter
//             <h1>
//                 This Model is in Developing Mode!
//             </h1>
            
//         </h1>
//         <h1 style={{display:'flex'}}>
//                 This Model will generate Caption For Your...
//             </h1>
//         <Typewriter
//                     options={{
//                         strings: [
//                             " Instagram, Facebook, Twitter, TikTok",
//                         ],
//                         autoStart: true,
//                         loop: true,
//                         delay: 25,
//                         deleteSpeed: 10
//                     }}
//                 />
                
//         </div>
//         </>
//     )
// }




// perfect



// import React, { useState } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// // Initialize the Google Generative AI with your API key
// const genAI = new GoogleGenerativeAI("AIzaSyC96UucCQ_I_ToUtl00WphY9V_jWkGalM0"); // Replace with your actual API key
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// interface GenerativePart {
//   inlineData: {
//     data: string;
//     mimeType: string;
//   };
// }

// function fileToGenerativePart(file: File): Promise<GenerativePart> {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       if (reader.result) {
//         const base64Data = (reader.result as string).split(',')[1];
//         resolve({
//           inlineData: {
//             data: base64Data,
//             mimeType: file.type,
//           },
//         });
//       } else {
//         reject(new Error("File reading failed"));
//       }
//     };
//     reader.onerror = () => {
//       reject(new Error("File reading failed"));
//     };
//     reader.readAsDataURL(file);
//   });
// }

// const CaptionComponent: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [response, setResponse] = useState<string>('');

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!file) return;

//     const prompt = "Generate Fancy Captions with emoji and hastags for this photo";
//     try {
//       const imagePart = await fileToGenerativePart(file);
//       const result = await model.generateContent([prompt, imagePart]);
//       setResponse(result.response.text());
//     } catch (error) {
//       console.error("Error generating content:", error);
//     }
//   };

//   return (
//     <div style={{alignContent:'center', alignItems:'center'}}>
//         <div style={{border:'0.5px' , borderRadius:'20px', padding:'20px', boxShadow:'1px 1px 9px gray'}}>
        
//         <Input id="picture" type="file" onChange={handleFileChange} style={{display: 'flex', flexDirection:'row', width:'100%', marginBottom:'10px', borderRadius:'25px', boxShadow:'0.5px 0.5px 3px gray'}} />
//         <Button onClick={handleSubmit} style={{display:'flex', flexDirection:'row', width:'100%', borderRadius:'25px'}}>Generate Caption</Button>
//         </div>
      
//       <div style={{padding:'20px'}}>
//         {response && <p>{response}</p>}
//       </div>
//     </div>
//   );
// }

// export default CaptionComponent;
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI("AIzaSyC96UucCQ_I_ToUtl00WphY9V_jWkGalM0"); // Replace with your actual API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

interface GenerativePart {
  inlineData: {
    data: string;
    mimeType: string;
  };
}

function fileToGenerativePart(file: File): Promise<GenerativePart> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        const base64Data = (reader.result as string).split(',')[1];
        resolve({
          inlineData: {
            data: base64Data,
            mimeType: file.type,
          },
        });
      } else {
        reject(new Error("File reading failed"));
        toast.error("File reading Failed!!");
      }
    };
    reader.onerror = () => {
      reject(new Error("File reading failed"));
      toast.error("File reading Failed!!");
    };
    reader.readAsDataURL(file);
  });
}

const CaptionComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    const prompt = "Generate Fancy Captions, Short Captions, Funny Captions, Flirty Captions and Many More captions with emoji and hashtags for this photo";
    setIsLoading(true);
    try {
      const imagePart = await fileToGenerativePart(file);
      const result = await model.generateContent([prompt, imagePart]);
      const rawResponse = await result.response.text();
      
      // Process and format response
      const formattedResponse = rawResponse
        .replace(/\*\*/g, '') // Remove bold markers
        .split(/\n\s*\n/) // Split based on double newlines
        .map(caption => caption.trim()) // Trim each caption
        .filter(caption => caption) // Remove empty captions
        .join('\n\n'); // Join captions with double newlines
      
      setResponse(formattedResponse);
    } catch (error) {
        toast.error("Error in Generating Caption !!");
        toast.error("Choose Jpeg, jpg or png Filetype...")
      console.error("Error generating content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ alignContent: 'center', alignItems: 'center' }}>
      <div style={{ border: '0.5px', borderRadius: '20px', padding: '20px', boxShadow: '1px 1px 9px gray' }}>
        <Input
          id="picture"
          type="file"
          accept="image/jpeg, image/png, image/heic"
          onChange={handleFileChange}
          style={{ display: 'flex', flexDirection: 'row', width: '100%', marginBottom: '10px', borderRadius: '25px', boxShadow: '0.5px 0.5px 3px gray' }}
        />
        <Button
          onClick={handleSubmit}
          style={{ display: 'flex', flexDirection: 'row', width: '100%', borderRadius: '25px' }}
        >
          {isLoading ? 'Generating...' : 'Generate Caption'}
        </Button>
      </div>

      <div style={{ padding: '20px' }}>
        {response && <pre>{response}</pre>}
      </div>
    </div>
  );
}

export default CaptionComponent;


