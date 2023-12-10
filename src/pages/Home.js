export default function Home() {
  return (
    <div className="home-container">
      <div className="instructions">
        <h2>Instructions</h2>
        <p>Click the buttons on the calculator to perform basic arithmetic operations:</p>
        <ul>
          <li>Numbers (1-9)</li>
          <li>Add (+)</li>
          <li>Subtract (-)</li>
          <li>Multiply (*)</li>
          <li>Divide (/)</li>
          <li>Equals (=)</li>
        </ul>
      </div>

    <footer>
      <p className="copyright">&copy; {new Date().getFullYear()} Yamam Jamal</p>
    </footer>
    </div>
  );
};
