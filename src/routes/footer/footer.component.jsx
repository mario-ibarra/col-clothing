import {FooterContainer, FooterItems} from './footer.styles';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItems>
        <div>
          <p>
            Designed and Developed by: <strong>Mario Ibarra</strong>
          </p>
        </div>
        <div>
          <p>&copy; Copyright {currentYear}</p>
        </div>
      </FooterItems>
    </FooterContainer>
  );
};
export default Footer;
