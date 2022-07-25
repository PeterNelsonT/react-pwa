import { giphy404 } from '@/config';

function NotFound() {
  return (
    <div>
      <iframe
        src={giphy404}
        width="100%"
        height="50%"
        style={{ maxHeight: '60%', maxWidth: '100%' }}
        frameBorder="0"
        allowFullScreen
      />
      404 Not Found
    </div>
  );
}

export default NotFound;
