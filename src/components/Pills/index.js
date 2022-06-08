export const Pill = ({ tipo = "Calma", positivo = true, index }) => (
  <span key={`${index}_${tipo}_${positivo}`}>{tipo}</span>
);

export const PillsMenu = (props) => {
  const { tipos, positivo } = props;

  return tipos.map((t, i) => <Pill tipo={t} positivo={positivo} index={i} />);
};
