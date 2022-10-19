import { useContext, useEffect, useMemo } from "react";
import { AppStateContext } from "./state/AppStateContext";
import Loading from "./components/Loading";
import SignInPage from "./components/SignInPage";
import SignedInPage from "./components/SignedInPage";
import HeaderBar from "./components/HeaderBar";
import Toast from "./components/Toast";
import AppModal from "./components/AppModal";
import * as authClient from "./services/authClient";

// eslint-disable-next-line import/no-unassigned-import
import "./App.css";

function App() {
    const { state } = useContext(AppStateContext);
    const { signedIn, appMode } = state;
    const { uiMode } = appMode;

    const loading = useMemo(() => uiMode === "init", [uiMode]);

    useEffect(() => {
        // On mount, check if user is signed in
        authClient
            .authCheckAsync()
            .then(() => {})
            .catch(() => {});
    }, []);

    return (
        <div className={`${pxt.appTarget.id}`}>
            {loading && <Loading />}
            {!loading && <HeaderBar />}
            {!loading && !signedIn && <SignInPage />}
            {!loading && signedIn && <SignedInPage />}
            <AppModal />
            <Toast />
        </div>
    );
}

export default App;
