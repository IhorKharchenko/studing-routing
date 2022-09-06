import errorImage from '../../images/error.jpg';
export const PokemonErrorView = ({ message }) => {
  return (
    <div>
      <img src={errorImage} width="240" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
};
