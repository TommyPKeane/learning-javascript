import ReactDOM from "react-dom";
import Button from '@mui/material/Button';

function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}

export default function App() {
  return (
    <main>
      <header>
        <h1>Hi 👋 this is an Example Site with React.js and Material UI (MUI)</h1>
      </header>
      <div>
        <ButtonUsage />
      </div>
      <footer>
        <p>Find this Example on GitHub at <a href="https://github.com/TommyPKeane/learning-javascript">github.com/TommyPKeane/learning-javascript</a></p>
      </footer>
    </main>
  );
}
