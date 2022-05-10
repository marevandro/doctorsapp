import {
    Container,
    Avatar,
    Name,
    Specialist,
    DoctorProps
} from './styled';


export type DoctorDataProps = {
    id: string;
    name: string;
    avatar: string;
    specialist: string;
}
type Props = DoctorProps & {
    data: DoctorDataProps;
} 

export function Doctor({ type, data }:  Props) {
    return (
        <Container type= { type } >
        <Avatar source={ { uri: data.avatar }} />

            <Name>
                {data.name}
            </Name>

            <Specialist>
                {data.specialist}
            </Specialist>
            
        </Container>
    );
}
