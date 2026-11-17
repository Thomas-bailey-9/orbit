import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../../styles/global.css';
import { AssetTest } from './AssetTest';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AssetTest />
  </StrictMode>,
);
