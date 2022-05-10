import {FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

import { DoctorDataProps } from "../../components/Doctor";


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    

    /*Para poder acessar o tema, temos que acessar o conteudo
    de uma variavel. Porem precisa selecionar uma tipagem, por isso o arquivo "styled.d.ts"*/
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const List = styled(FlatList as new (props: FlatListProps<DoctorDataProps>) => FlatList<DoctorDataProps>)`
   
`;


/*export const styled = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    text: {
        fontSize: 48,
    }
})*/