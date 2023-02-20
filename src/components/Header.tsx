import { Filters } from './Filters';

interface Props {}

export function Header({}: Props) {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters />
    </header>
  );
}
