import React, {Component, Suspense} from "react";
import Preloader from "../components/common/preloader/preloader";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader />}>
            <Component />
        </Suspense>
    }
}