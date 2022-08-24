import { createRoot } from 'react-dom/client';
import Banner from './Banner';

const root = createRoot(document.getElementById('root'));
root.render(
  <Banner text="Hey there, my name is Sam and I work at OrbitRemit" />
);;
