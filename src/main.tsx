import React from 'react';
import * as ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
// import "sass/main.scss";
type IProps = {
  title?: string;
};
type IStates = {
  comment: boolean;
};

class App extends React.Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      comment: false,
    };
  }

  render() {
    // const { isMaterial } = this.state;
    return (
      // <div>
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{this.props.title || 'My page title'}</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='icon' href='/assets/images/favicon.svg' type='image/svg+xml' />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
            integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
            crossOrigin='anonymous'
          />
        </Helmet>
        <h1>{this.state.comment}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
