import React from 'react';
import KanalListeleme from './KanalListeleme';

const Home = () => {
  const kanallar = [
    { id: 1, isim: 'TRT', aciklama: 'Kamu kanalı', durum: 'Aktif' },
    { id: 2, isim: 'Kanal D', aciklama: 'Özel kanal', durum: 'Pasif' },
    { id: 3, isim: 'Show TV', aciklama: 'Eğlence kanalı', durum: 'Aktif' }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Kanal Listesi</h1>
      <KanalListeleme kanallar={kanallar} />
    </div>
  );
};

export default Home;
