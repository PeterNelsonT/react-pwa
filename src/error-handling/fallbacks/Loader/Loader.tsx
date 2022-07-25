import { messages } from '@/config';

function LoaderErrorBoundaryFallback() {
  return <div>{messages.loader.fail}</div>;
}

export default LoaderErrorBoundaryFallback;
