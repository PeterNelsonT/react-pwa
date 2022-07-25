import { messages } from '@/config';
import resetApp from '@/utils/reset-app';

function AppErrorBoundaryFallback() {
  return (
    <div>
      <div>{messages.app.crash.title}</div>
      <button onClick={resetApp}>{messages.app.crash.options.reset}</button>
    </div>
  );
}

export default AppErrorBoundaryFallback;
