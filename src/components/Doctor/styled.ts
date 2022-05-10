import styled, { css } from 'styled-components/native';

export type DoctorProps = {
    type: 'primary' | 'secondary';
}

/*Lembrando, "TouchableOpacity", transforma em um componente de click*/
export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5
}) <DoctorProps>`

    width:  45%;
    margin: 7px;
   margin-top: 15%;

    padding: 22px;

    border-radius: 7px;
    background-color: ${({ theme }) => theme.COLORS.INFO};

    align-items: center;
    justify-content: center;

    ${({ type, theme }) => type === 'primary' && css`
        border: 5px solid ${theme.COLORS.TEXT_SECONDARY};
    `}
`;


export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 30px;
`;

export const Name = styled.Text`
    margin-top: 7px;
    font-size: 14px;
    text-align: center;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const Specialist = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY}
`;

