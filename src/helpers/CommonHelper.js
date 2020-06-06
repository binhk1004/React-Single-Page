import {appActions} from "../redux/actionCreators";

export const setPropsByScrollTop = (point, prop) => {
    if (scrollY > 200) {
        if (!app.showBio) {
            appActions.updateState({
                showBio: true

            })
        }
    } else {
        if (app.showBio) {
            appActions.updateState({
                showBio: false
            })

        }
    }

}