import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Survey from './pages/Survey/index';
import Home from './pages/Home/index';
import Error from './components/Error';
import Header from './components/Header/index';
import Results from './pages/Results/index';
import Freelances from './pages/Freelances/index';
import { ThemeProvider, SurveyProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';
import Footer from './components/Footer';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="*" element={<Error />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="/freelances" element={<Freelances />} />
                        <Route path="/results" element={<Results />} />
                        <Route
                            path="/survey/:questionNumber"
                            element={<Survey />}
                        />
                    </Routes>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
