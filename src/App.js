import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase.js";

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ngt: [],
      activePage: 15,
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  componentDidMount() {
    const wordRef = firebase.database().ref("ngt");
    wordRef.on("value", (snapshot) => {
      let ngt = snapshot.val();
      let newState = [];
      for (let fund_id in ngt) {
        newState.push({
          id: fund_id,
          fund_id: ngt[fund_id].fund_id,
          fund_name: ngt[fund_id].fund_name,
          date: ngt[fund_id].date,
          index: ngt[fund_id].index,
          nb_alerts: ngt[fund_id].nb_alerts,
          report_status: ngt[fund_id].report_status,
          share_class_id: ngt[fund_id].share_class_id,
          share_class_name: ngt[fund_id].share_class_name,
          subfund_id: ngt[fund_id].subfund_id,
          subfund_name: ngt[fund_id].subfund_name,
        });
      }
      this.setState({
        ngt: newState,
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <a
            href="https://nextgatetech.com/"
            target="_blank"
            class="uk-icon"
            uk-icon="icon: world; ratio: 1.3"
          />
        </div>
        <div className="uk-container pos">
          <div className="navigation uk-visible@m" uk-sticky="bottom: #offset">
            <a
              id="js-scroll-trigger"
              className="uk-button uk-button-text uk-align-left"
              href="#normal"
              uk-scroll
            >
              ngt
            </a>
          </div>
          <div className="nav uk-hidden@m" uk-sticky="bottom: #offset">
            <a
              href="#normal"
              uk-tooltip="One"
              className="uk-icon uk-align-left"
              uk-icon="home"
            />
            <a
              href="#adv"
              uk-tooltip="Two"
              className="uk-icon uk-align-right"
              uk-icon="plus"
            />
          </div>

          <section id="normal">
            <div className="uk-container-small uk-center uk-align-center">
              {this.state.ngt.map((fund_id) => {
                return (
                  <div className="cc">
                    <div className="uk-child-width-1-1@m">
                      <div className="uk-card uk-card-default uk-card-body card">
                        <h3 className="uk-card-title fund_id">
                          fund_id: {fund_id.fund_id}:
                        </h3>
                        <p className="fund_name">
                          fund_name: {fund_id.fund_name}
                        </p>
                        <p className="date">date: {fund_id.date}</p>
                        <p className="index">index: {fund_id.index}</p>
                        <p className="nb_alerts">
                          nb_alerts: {fund_id.nb_alerts}
                        </p>
                        <p className="report_status">
                          report_status: {fund_id.report_status}
                        </p>
                        <p className="share_class_id">
                          share_class_id: {fund_id.share_class_id}
                        </p>
                        <p className="share_class_name">
                          share_class_name: {fund_id.share_class_name}
                        </p>
                        <p className="subfund_id">
                          subfund_id: {fund_id.subfund_id}
                        </p>
                        <p className="subfund_name">
                          subfund_name: {fund_id.subfund_name}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="adv">
            <div className="uk-container-small uk-center uk-align-center" />
          </section>
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;
