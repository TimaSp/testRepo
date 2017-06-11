import React, {Component} from 'react';
import wilddog from 'wilddog';
import {View, TextInput, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles/styles';
import {
  Container,
  Form,
  Content,
  Card,
  CardItem,
  Body,
  InputGroup,
  Input,
  Icon,
  Item,
  Button,
	Spinner
} from 'native-base';

import {emailChanged, passwordChanged, loginUser} from '../actions';
const background = require('../../images/shadow.png');

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
	renderButton() {
		if(this.props.loading) {
			return <Spinner color='red' />
		}
		return (
			<Button block onPress={this.onButtonPress.bind(this)}>
				<Text >Login
				</Text>
			</Button>
		);
		}


  onButtonPress() {
    const {email, password} = this.props;
		console.log('we get', email, password)
    this.props.loginUser({email, password});
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
					<View  style={styles.bg}>
				<Card >
          <Form style={styles.padd}>
            <Item>
              <Input label="Email" placeholder="Email" onChangeText={this.onEmailChange.bind(this)} value={this.props.email}/>
            </Item>
            <Item style={styles.mp}>
              <Input placeholder="Password" label="Password" onChangeText={this.onPasswordChange.bind(this)} value={this.props.password} secureTextEntry/>
            </Item>
						<Text style={styles.error}> {this.props.error}</Text>

						{this.renderButton()}

          </Form>
					</Card>
					</View>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = ({auth}) => {
	const { email, password, error, loading } = auth;
  return { email, password, error, loading }
}

export default connect(mapStateToProps, {emailChanged, loginUser, passwordChanged})(LoginForm);
