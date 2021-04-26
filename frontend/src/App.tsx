import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './services/query-client';

import { Switch, BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import {ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';

function App() {
  return (
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
    <ToastContainer
        position={'top-right'}
        hideProgressBar={false}
        closeButton={false}
        pauseOnHover={true}
        autoClose={2000}
        transition={Slide}
        pauseOnFocusLoss={false}
        limit={3}
    />
    <GlobalStyle />
  </>
  )
}

export default App;
