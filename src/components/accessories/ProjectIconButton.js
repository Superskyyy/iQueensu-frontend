import React, {PureComponent, Fragment} from 'react';
import Sanbai from '../../assets/images/logos/BEASTSanBei.png';
import './ProjectIconButton.css';

class ProjectIconButton extends PureComponent{
    state={
        icon: null,
        realIconLoading: false,
    }

    updateIcon = (isIconSet) =>{
        if(isIconSet){
            // API handling
            // getUserIcon();
        }else{
            const generatedIcon = 
                        <img className="icon" src={Sanbai} />

            this.setState({icon: generatedIcon})
        }
    }

    componentDidMount(props){
        this.updateIcon(false);
    }

    render(){
        // this.updateIcon(false);

        return(
            <Fragment>
                {this.state.icon != null && 
                    <div className="cardImgClass">
                        {this.state.icon}
                    </div>}
            </Fragment>
        )
    }

}

export default ProjectIconButton;