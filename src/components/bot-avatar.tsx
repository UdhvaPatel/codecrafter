import { Avatar, AvatarImage } from "./ui/avatar"

export const BotAvatar = () => {
    return (
        <Avatar style={{height:'2rem', width:'2rem'}}>
            <AvatarImage style={{padding:'0.25rem'}} src="/logo.png"/>
        </Avatar>
    )
}