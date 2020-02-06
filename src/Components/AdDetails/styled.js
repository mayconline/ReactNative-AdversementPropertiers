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
  font-size: 17px;
`;

export const Value = styled.Text`
  padding: 10px;
  line-height: 15px;
  color: #444;
  font-size: 20px;
  font-weight: 600;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 400px;
`;
