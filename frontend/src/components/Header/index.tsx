import {Container, LogoImg} from './styles';
import {CazooImage} from '../../assets';

const Header = () => {
    return (
        <Container>
            <LogoImg src={CazooImage} alt="cazoo" />
        </Container>
    )
}

export default Header;
