import React, { Component } from 'react';
import QcumberWrapper from './QcumberWrapper';
import Database from './databasePage/Database';
import Qcumber from './Qcumber';
import CoursePage from './coursePage/CoursePage';
import SearchPage from './searchResultPage/SearchPage';
import { URL_PATHS } from '../../../utilities/constants/constants';


class QcumberLayout extends Component{
    PageContent = () => {
        switch(this.props.match.url){
            case URL_PATHS.DATABASEPATH:
                return <Database />
            case URL_PATHS.DATABASECOURSEPATH:
                return <CoursePage />
            case URL_PATHS.DATABASESEARCHPATH:
                return <SearchPage />
            default:
                return <Qcumber />
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