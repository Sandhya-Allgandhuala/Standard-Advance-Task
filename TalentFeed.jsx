import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import TalentCard from '../TalentFeed/TalentCard.jsx';
import { Loader } from 'semantic-ui-react';
import CompanyProfile from '../TalentFeed/CompanyProfile.jsx';
import FollowingSuggestion from '../TalentFeed/FollowingSuggestion.jsx';
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx';

export default class TalentFeed extends React.Component {
    constructor(props) {
        super(props);

        let loader = loaderData
        loader.allowedUsers.push("Employer")
        loader.allowedUsers.push("Recruiter")

        this.state = {
            loadNumber: 5,
            loadPosition: 0,
            feedData: [],
            watchlist: [],
            
            companyContact: {
                location: {}
            },

            
            loaderData: loader,
            loadingFeedData: false,
            companyDetails: null
        }

        this.init = this.init.bind(this);
        this.TalentData = this.TalentData.bind(this);
        this.loadData = this.loadData.bind(this)

    };

    init() {
        let loaderData = TalentUtil.deepCopy(this.state.loaderData) 
        loaderData.isLoading = false;
        this.setState({ loaderData });//comment this
    }

    componentDidMount() {
        //window.addEventListener('scroll', this.handleScroll);
        this.loadData();
        this.TalentData()
       
    };

    loadData() {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: 'http://profile60290.azurewebsites.net/Profile/Profile/GetEmployerProfile',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res) {
                let newValues = res.employer.companyContact;
                this.setState({
                    companyContact: newValues,
                });
                
            }.bind(this)
        })
        this.init()
    }
    TalentData() {
        
        
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: 'http://profile60290.azurewebsites.net/Profile/Profile/getTalent?Number=5&Position=0',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res) {
                let newValues = res.data;
                this.setState({
                    feedData: newValues,
                });
                console.log(this.state.feedData);
            }.bind(this)
        })
        this.init()
    }
    render() {

        return (
            <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>
                <div className="ui container">
                    <div className="ui container">
                        <div className="profile">
                            <form className="ui form">
                                <div className="ui grid">
                                    <div className="ui three cards">                                                                                                    
                                        <CompanyProfile
                                            companydetails={this.state.companyContact}
                                            companylocation={this.state.companyContact.location}                                            
                                        />

                                        <TalentCard
                                            talentDetails={this.state.feedData}
                                    />
                                        
                                <FollowingSuggestion
                                />
                            
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </BodyWrapper>
        )
    }
}