// Packages
import React, { Fragment, PureComponent } from "react";
//
import Sanbai from "../../assets/images/logos/BEASTSanBei.png";
// Styles
import styles from "./ProfilePicButton.module.css";

class ProfilePicButton extends PureComponent {
    state = {
        icon: null,
        realIconLoading: false,
    };

    updateIcon = (isIconSet) => {
        if (isIconSet) {
            // API handling
            // getUserIcon();
        } else {
            const generatedIcon = <img className={styles.Icon} src={Sanbai} alt="userProfilePicture" />;

            this.setState({ icon: generatedIcon });
        }
    };

    componentDidMount(props) {
        this.updateIcon(false);
    }

    render() {
        // this.updateIcon(false);

        return (
            <Fragment>{this.state.icon != null && <div className={styles.CardImg}>{this.state.icon}</div>}</Fragment>
        );
    }
}

export default ProfilePicButton;
