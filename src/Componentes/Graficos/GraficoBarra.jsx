import React from 'react';
import {
  Box,
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryTheme,
} from 'victory';
import BOXMUI from '@mui/material/Box';
const GraficoBarra = () => {
  return (
    <>
      <h1 style={{ paddingTop: '25px' }}>Tópicos mais acessados</h1>
      <BOXMUI
        sx={{
          maxWidth: '100%',
          height: '400px',
          mx: 'auto',
          boxShadow: '1px  2px 10px #eee',
          my: 5,
        }}
      >
        <VictoryPie
          theme={VictoryTheme.clean}
          data={[
            { x: 'Vida maritima', y: 35 },
            { x: 'Selva', y: 40 },
            { x: 'Amazônia', y: 55 },
          ]}
        />{' '}
      </BOXMUI>
    </>
  );
};

export default GraficoBarra;
