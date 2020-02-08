import styled from 'styled-components/native';

export const Advertisement = styled.View`
  margin: 10px;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #fafafa;
`;
export const Title = styled.Text`
  font-weight: 600;
  color: #6f6f6f;
  font-size: 15px;
`;

export const Value = styled.Text`
  padding: 10px;
  color: #444;
  font-size: 17px;
  font-weight: 600;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 250px;
`;

export const Button = styled.TouchableOpacity`
  padding: 20px 50px;
  background: #008295;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: #fff;
`;
