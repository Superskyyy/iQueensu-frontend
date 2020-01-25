import React, { Component } from 'react';
import QcumberWrapper from './QcumberWrapper';
import Database from './Database';
import Qucumber from './Qucumber';
import CoursePage from './course/CoursePage';


class QcumberLayout extends Component{
    PageContent = () => {
        switch(this.props.match.url){
            case "/database":
                return <Database />
            case "/database/course":
                return <CoursePage />
            default:
                return <Qucumber />
        }
    }
    render(){
        return(
            // all HeaderBar actions can be handled in QcumberWrapper, and it can be applied to any qcumber related page
            <QcumberWrapper>
                 {this.PageContent()}
            </QcumberWrapper>
        )
    }
}

export default QcumberLayout;