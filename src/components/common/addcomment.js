import React, {Component} from 'react';
import wilddog from 'wilddog';
import {View, TextInput, Text, Image} from 'react-native';
import {connect} from 'react-redux';
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

import {commentChanged, submitComment} from '../../actions';

class CommentForm extends Component {
  onCommentChanged(text) {
    this.props.commentChanged(text);
  }

  onButtonPress() {
    const {comment} = this.props;
    const {uid} = this.props.event;
    this.props.submitComment({comment, uid});
  }
  render() {
    return (
      <Container >
        <Content>
          <View >
        <Card >
          <Form>
            <Item>
              <Input label="Email" placeholder="Email" onChangeText={this.onCommentChanged.bind(this)} value={this.props.comment}/>
            </Item>
          </Form>
          <Button onPress={this.onButtonPress.bind(this)}>
            <Text>
              Send Comment
            </Text>
          </Button>
          </Card>
          </View>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = ({comm}) => {
	const { comment } = comm;
  return { comment }
}

export default connect(mapStateToProps, {commentChanged, submitComment})(CommentForm);
