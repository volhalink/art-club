import './App.css';
import Layout from './Layout';
import Path from './Path';
import { PathStateProvider } from './path-context';
import steps from './data';

function App() {
  return (
    <>
    <PathStateProvider steps={steps}>
      <Layout>
        <Path />
      </Layout>
      </PathStateProvider>
    </>
  )
}

export default App;
