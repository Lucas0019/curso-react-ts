import logo from '../../../src/assets/logo.webp';

// import * as S from './styled';
import { Container, Logo, Input, Button } from './styled';

function SignIn() {

  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" />
        <Input type="text" defaultValue="test@email.com" />
        <Input type="password" defaultValue="12345678" />
        <Button onClick={() =>{}}>
          Entrar
        </Button>
      </Container>
    </>
  )
};

export default SignIn;