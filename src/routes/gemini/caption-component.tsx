
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


