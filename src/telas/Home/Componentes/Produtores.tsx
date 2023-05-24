import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

// import {carregaProdutores} from '../../../servicos/carregaDados';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({topo: Topo}: any) {
  const [titulo, lista] = useProdutores();

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
      renderItem={({item}) => <Produtor {...item} />}
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
