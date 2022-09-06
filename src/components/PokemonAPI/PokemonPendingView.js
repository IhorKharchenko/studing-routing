import { Spinner } from './Pokemon.styled';
import { PokemonDataView } from './PokemonDataView';
import pendingImage from '../../images/pending.png';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div style={styles.spinner}>
      <Spinner size="32" />
      Loading ...
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};
