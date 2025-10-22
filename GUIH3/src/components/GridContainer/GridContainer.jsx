import React from 'react';
import ShaqPortrait from 'C:\\Users\\Z6APT\\GUIH3\\GUIH3\\src\\assets\\images\\Lidl432025-1_38_1702x1286_4969x3153_zoom.jpg' 
import { Card } from '../Card/Card';

export const GridContainer = () => {
    return (
      <div className="grid grid-cols-3 gap-4 p-4">
        <Card title="titel 1" price="pris: 67" description="beskrivelse" buttonText="Køb" image={ShaqPortrait} />
        <Card title="titel 2" price="pris: 134" description="beskrivelse" buttonText="Køb" image={ShaqPortrait} />
        <Card title="titel 3" price="pris: 201" description="beskrivelse" buttonText="Køb" image={ShaqPortrait} />
        <Card title="titel 4" price="pris: 268" description="beskrivelse" buttonText="Køb" image={ShaqPortrait} />
        <Card title="titel 5" price="pris: 335" description="beskrivelse" buttonText="Køb" image={ShaqPortrait} />
        <Card title="titel 6" price="pris: 402" description="beskrivelse" buttonText="Køb" image={ShaqPortrait} />
        <Card title="titel 7" price="pris: 469" description="beskrivelse" buttonText="Køb" image={ShaqPortrait} />
        <Card title="titel 8" price="pris: 536" description="beskrivelse" buttonText="Køb" image={ShaqPortrait} />
        <Card title="titel 9" price="pris: 603" description="beskrivelse" buttonText="Køb" image={ShaqPortrait} />
      </div>
    );
  };
