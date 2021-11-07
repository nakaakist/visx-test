export const renderMultiLineText = (t: string) => {
  return t.split(/(\n)/).map((t, i) => {
    return <p key={i}>{t}</p>;
  });
};
