// import { cn } from "@/lib/utils";
// import { LucideIcon } from "lucide-react";


// interface HeadingProps {
//     title: string;
//     description: string;
//     icon: LucideIcon;
//     iconColor?: string;
//     bgColor?: string;
// }

// export const Heading = ({
//     title,
//     description,
//     icon: Icon,
//     iconColor,
//     bgColor
// }: HeadingProps) => {
//     return(
        
//         <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
//             <div className={cn("p-2 w-fit rounded-md", bgColor)}>
//                 <Icon className={cn("w-10 h-10", iconColor)} />
//             </div>
//             <div>
//             <h2 className="text-3xl font-bold">
//                 {title}
//             </h2>
//             <p className="text-sm text-muted-foreground">
//                 {description}
//             </p>
//         </div>
//         </div>
//     );
// }

import { LucideIcon } from 'lucide-react';

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor
}: HeadingProps) => {
  
  return (
    <div style={{ paddingLeft: '1rem', paddingRight: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', ...(window.innerWidth >= 1024 && { paddingLeft: '2rem', paddingRight: '2rem' }) }}>
      <div style={{ padding: '0.5rem', width: 'fit-content', borderRadius: '0.375rem', backgroundColor: bgColor }}>
        <Icon style={{ width: '2.5rem', height: '2.5rem', color: iconColor }} />
      </div>
      <div>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>
          {title}
        </h2>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Heading;
