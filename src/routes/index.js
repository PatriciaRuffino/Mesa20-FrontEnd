import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViaCEP from '../pages/ViaCEP';
import BrasilAPICEP from '../pages/BrasilAPICEP';
import NotFound from '../pages/NotFound';
import DDD from '../pages/DDD/index';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViaCEP />} />
      <Route path="/:cep" element={<ViaCEP />} />
      <Route path="/brasilapi/" element={<BrasilAPICEP />} />
      <Route path="/brasilapi/:cep" element={<BrasilAPICEP />} />
      <Route path="/:numeroDdd" element={<DDD />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/ddd/" element={<DDD/>} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;