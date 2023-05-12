import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

import {carregaProdutores} from '../../../servicos/carregaDados';

export default function Produtores({topo: Topo}: any) {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista]: any = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  // eslint-disable-next-line react/no-unstable-nested-components
  const TopoLista = (title: string) => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item: {nome}}) => <Text>{nome}</Text>}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista(titulo)}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
