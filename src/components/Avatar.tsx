import {Avatar as AvatarNavieBase,IAvatarProps} from 'native-base'

interface AvatarProps extends IAvatarProps {}
export function Avatar(props: AvatarProps) {
    return(
        
        <AvatarNavieBase
        rounded={4}
        height={12}
        width={12}
        _image={{
            rounded:4
        }}
        
        {...props}
        />
    )
}