export const renderMultiLineText = (t: string) => {
  return t.split(/(\n)/).map((t, i) => {
    return <div key={i}>{t}</div>;
  });
};
