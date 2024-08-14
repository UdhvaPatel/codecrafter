import { useUser } from "@clerk/clerk-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";



export const UserAvatar = () => {
    const { user } = useUser();
    

    return(
        <Avatar style={{height:'2rem', width:'2rem'}}>
            <AvatarImage />
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    )
}