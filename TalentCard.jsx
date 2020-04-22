import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Popup, Icon } from 'semantic-ui-react'



export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Talentfeed:[],
            ishidden: true
        }
    };

    userProfile() {
        this.setState({
            ishidden : true
        })
    }
    
    userVideo() {
        this.setState({
            ishidden: false
        })

    }
    render() {
        //this.state.Talentfeed = this.props.talentDetails;
      
        let videobtn = (
            <Icon className="large video icon" />
        );


        return (<div>
            {this.props.talentDetails.map(record => (
                    <div key={record.id} className="ui card" style={{ width: '500px', height: '400px' }}>


                    <div className="extra1 content" style={{ fontWeight: 'bold' }}>
                                {record.name}
                            <span className="right floated">
                                <Icon className="large star icon" /></span>
                        </div>
                            <div>
                        {this.state.ishidden ?
                            <div className="inline fields" style={{ paddingBottom: '0px' }}>
                                <div className="image"> 
                                    <img src="http://semantic-ui.com/images/avatar/large/jenny.jpg" height="250" width="250px" /> 
                                </div>
                                <div className="" style={{ paddingLeft: '20px' }}>
                                    <div style={{ fontWeight: 'bold' }}> Talent Snapshot</div><br />
                                    <div style={{ fontWeight: 'bold' }}> CURRENT EMPLOYER </div>
                                    <div className=" ">{record.currentEmployment}</div><br />
                                    <div style={{ fontWeight: 'bold' }}> VISA STATUS </div>
                                    <div className=" "> {record.visa} </div><br />
                                    <div style={{ fontWeight: 'bold' }}> POSITION </div>
                                    <div className=""> {record.level} </div><br />
                                </div>

                            </div> : <div style={{ maxHeight:'250', maxWidth:'500px'}}>
                                
                                <ReactPlayer
                                    height="100%"
                                    width="100%"
                                    className='react-player' 
                                    url=".mp4" // as record contain null value used dummy url for demo
                                    volume={0.8}
                                    muted={false}
                                    playing={false}
                                    controls={true}

                                />

 
                                </div>
                               
                                   
                               }

                            </div>
                        <div className="extra1 content" style={{
                            paddingLeft: '50px', paddingRight: '50px'
                        }}>
                            <a >{this.state.ishidden ?                                                     
                            <Icon className="large video icon" onClick={() => this.userVideo()} /> :
                            <Icon className="large user icon" onClick={() => this.userProfile()} /> 
                            }
                            </a>

                            <a style={{
                                paddingLeft: '100px'
                            }}>
                                <Icon className="large file pdf outline icon" />

                            </a>
                            <a style={{
                                paddingLeft: '100px'
                            }}>
                                <Icon className="large linkedin icon" />

                            </a>
                            <a className="right floated">
                                <Icon className="large github icon" />

                            </a>
                        </div>
                        <div className="extra content">
                            <button type="button" className="mini ui blue basic button"> C# </button>
                        </div>
                    </div>
                ))
        }</div>
    

        )
       
    }
}

