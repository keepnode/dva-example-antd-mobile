import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import { TabBar } from 'antd-mobile';
import { Helmet } from 'react-helmet'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      title: '首页'
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
           onClick={(e) => {
             e.preventDefault();
             this.setState({
               hidden: !this.state.hidden,
             });
           }}
        >
          click to show/hide tab-bar
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="application">
        <Helmet>
          <title>{this.state.title}</title>
        </Helmet>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="首页"
          key="Index"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(http://admin.gemuwenhua.com/content/image/svg/首页.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(http://admin.gemuwenhua.com/content/image/check_svg/首页.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
              title: '首页'
            });
          }}
          data-seed="logId"
        >
          {this.renderContent('Index')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://admin.gemuwenhua.com/content/image/svg/预约.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://admin.gemuwenhua.com/content/image/check_svg/预约.svg) center center /  21px 21px no-repeat' }}
            />
          }
          title="预约"
          key="cooking"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              title: '预约'
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('预约')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://admin.gemuwenhua.com/content/image/svg/订单.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://admin.gemuwenhua.com/content/image/check_svg/订单.svg) center center /  21px 21px no-repeat' }}
            />
          }
          title="订单"
          key="Order"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              title: '订单'
            });
          }}
        >
          {this.renderContent('Order')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'http://admin.gemuwenhua.com/content/image/svg/我的.svg' }}
          selectedIcon={{ uri: 'http://admin.gemuwenhua.com/content/image/check_svg/我的.svg' }}
          title="我的"
          key="my"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
              title: '我的'
            });
          }}
        >
          {this.renderContent('My')}
        </TabBar.Item>
      </TabBar>
      </div>
    );
  }
}

IndexPage.propTypes = {
  title: PropTypes.string
};

export default connect()(IndexPage);
