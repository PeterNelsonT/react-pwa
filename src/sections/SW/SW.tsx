import { useCallback, useEffect } from 'react';

import { useRegisterSW } from 'virtual:pwa-register/react';

// TODO (Suren): this should be a custom hook :)
function SW() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);
  }, [setOfflineReady, setNeedRefresh]);

  useEffect(() => {
    if (offlineReady) {
      console.log('App is ready to work offline');
    } else if (needRefresh) {
      console.log('New content is available, click on reload button to update.');
      updateServiceWorker(true);
    }
  }, [close, needRefresh, offlineReady, updateServiceWorker]);

  return null;
}

export default SW;
