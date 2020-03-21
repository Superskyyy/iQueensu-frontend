import React, { Component } from 'react';
import QcumberWrapper from './QcumberWrapper';
import Database from './databasePage/Database';
import Qcumber from './Qcumber';
import CoursePage from './coursePage/CoursePage';
import SearchPage from './searchResultPage/SearchPage';
import { URL_PATHS } from '../../../utilities/constants/constants';


class QcumberLayout extends Component{
    PageContent = (props) => {
        switch(this.props.match.url){
            case URL_PATHS.DATABASE_PATH:
                return (<Database id={props.id}/>)
            case URL_PATHS.DATABASE_COURSE_PATH:
                return <CoursePage id={props.id}/>
            case URL_PATHS.DATABASE_SEARCH_PATH:
                return <SearchPage id={props.id}/>
            default:
                return <Qcumber id={props.id}/>
        }
    }
    render(){
        const pageProps = {
            id: "QCumberDatabaseMain"
        }

        return(
            // all HeaderBar actions can be handled in QcumberWrapper, and it can be applied to any qcumber related page
            <QcumberWrapper>
                {this.PageContent(pageProps)}
                 {/* <Pge id={"QCumberDatabaseMain"}/> */}
            </QcumberWrapper>
        )
    }
}

export default QcumberLayout;