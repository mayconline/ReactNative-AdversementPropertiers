import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #f0e3ff;
  flex: 1;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size:'large',
  color:'#008295'
})`

`

export const Error = styled.Text`
  font-size:15px;
  color:#f00;
  align-items:center;
  justify-content:center;


`;
