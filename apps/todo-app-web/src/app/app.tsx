import styled from '@emotion/styled';
import { Hello } from '@react-native-todo-app/my-library';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Hello />
    </StyledApp>
  );
}

export default App;
