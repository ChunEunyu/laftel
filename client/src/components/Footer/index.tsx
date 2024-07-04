import FooterMenuList from './components/FooterMenuList';
import FooterBusinessInformation from './components/FooterBusinessInformation';
import FooterSNS from './components/FooterSNS';

const Footer = () => {
  return (
    <div className='bg-purple-gray pl-12 pr-12 max-lg:pl-5 max-lg:pr-5 text-white pt-4 pb-12'>
      <div className='flex justify-between max-lg:flex-col'>
        <FooterMenuList />
        <FooterSNS />
      </div>
      <FooterBusinessInformation />
    </div>
  );
}

export default Footer;
