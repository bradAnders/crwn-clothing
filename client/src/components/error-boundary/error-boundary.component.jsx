import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageTitle,
  ErrorImageText,
} from "./error-boundary.styles";

//i.imgur.com/WvEu0cO.png

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
      message: "",
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true, message: error };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/WvEu0cO.png" />
          <ErrorImageTitle>Something went wrong</ErrorImageTitle>
          <ErrorImageText>{this.state.message}</ErrorImageText>
        </ErrorImageOverlay>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
