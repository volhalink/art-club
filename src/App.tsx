import Layout from './Layout';
import PathesList from './PathesList';
import { LearningStateProvider } from './contexts/learning-context';
import { PathStateProvider } from './contexts/learning-path-context';
import { LocaleProvider } from './contexts/locale-context';

function App() {
  return (
    <div className="font-sourceCodePro">
      <LocaleProvider locale="be" >
        <LearningStateProvider>
        <PathStateProvider>
            <Layout>
              <PathesList />
            </Layout>
          </PathStateProvider>
        </LearningStateProvider>
      </LocaleProvider>
    </div>
  )
}

export default App;
