import muiLogo from '@/assets/logos/mui.svg';
import pwaLogo from '@/assets/logos/pwa.svg';
import reactLogo from '@/assets/logos/react_ed.svg';
import recoilLogo from '@/assets/logos/recoil.svg';
import rrLogo from '@/assets/logos/rr.svg';
import tsLogo from '@/assets/logos/ts.svg';
import viteLogo from '@/assets/logos/vite.svg';
import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';

import { Image } from './styled';

function Welcome() {
  const isPortrait = useOrientation();
  console.log(isPortrait);
  return (
    <>
      <Meta title="Welcome" />
      <div>
        <Image alt="react-router" src={rrLogo} />
        <Image alt="vite" src={viteLogo} />
        <Image alt="typescript" src={tsLogo} />
        <Image alt="react" src={reactLogo} />
        <Image alt="mui" src={muiLogo} />
        <Image alt="recoil" src={recoilLogo} />
        <Image alt="pwa" src={pwaLogo} />
      </div>
    </>
  );
}

export default Welcome;
