import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import Home from './src/pages/Home';

moment.locale('pt-br');

export default function App() {
  return <Home />;
}
