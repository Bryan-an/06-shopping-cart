import './Footer.css';

interface Props {}

export function Footer({}: Props) {
  return (
    <footer className="footer">
      <h4>
        Prueba técnica de React - <span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  );
}
