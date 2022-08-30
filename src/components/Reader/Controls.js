export const Controls = ({ current, total, onChangeIdx }) => {
  return (
    <section>
      <button
        type="button"
        // disabled={current === 1}
        onClick={() => onChangeIdx(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        // disabled={current === total}
        onClick={() => onChangeIdx(1)}
      >
        Вперед
      </button>
    </section>
  );
};
