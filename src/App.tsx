import Layout from './Layout';
import Path from './Path';
import { PathStateProvider } from './path-context';
import { LocaleProvider } from './locale-context';

function App() {
  return (
    <div className="font-sourceCodePro">
      <LocaleProvider locale="be" >
        <PathStateProvider>
          <Layout>
            <Path />
          </Layout>
        </PathStateProvider>
      </LocaleProvider>
    </div>
  )
}

export default App;
