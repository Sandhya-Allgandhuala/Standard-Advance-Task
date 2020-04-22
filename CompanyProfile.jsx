import React from 'react';
import { Loader, Icon } from 'semantic-ui-react';

export default class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
           
            <div className="ui card" style={{ maxWidth: '250px', maxHeight: '230px'}}>
                <div className="center aligned content">
                    <img className="ui mini background grey circular image" src="/images/no-image.png" />
                        <div className="header">
                        {this.props.companydetails.name}
                    </div>
                    <div className="meta">
                        <Icon className="marker large alternate" />
                        {this.props.companydetails.location.city},{this.props.companydetails.location.country}</div>
                    <br/>
                    <div className="description"> We Currently do not have specific skills that we desire.</div>
                </div>
                <div className="extra content">
                    <a>
                        <Icon className="phone icon" />
                        :{this.props.companydetails.phone}
                    </a>
                    <div>
                    <a>
                        <Icon className="mail icon"/>
                            :{this.props.companydetails.email} 
                    </a></div>
                </div>
                </div>
                
        )
        
    }
}