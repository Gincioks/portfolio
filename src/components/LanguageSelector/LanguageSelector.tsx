import React, { Component } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ActionDispatchTypes } from "../../store/actions/actions";
import { SetLanguage } from "../../store/actions/LanguageActions";
import language_icon from "../../views/assets/language.png";

type Props = {};

class LanguageSelector extends Component<any, Props> {
  container: any = React.createRef();
  state: any = {
    open: false,
  };

  handleButtonClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleLangChange = (lang: string) => {
    this.props.onSetLang(lang);
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event: any) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  render() {
    return (
      <div className="language_selector" ref={this.container}>
        <button onClick={this.handleButtonClick}>
          <img src={language_icon} alt="language" />
        </button>
        {this.state.open && (
          <div className="dropdown">
            <ul>
              <li onClick={() => this.handleLangChange("lt")}>Lithuania</li>
              <li onClick={() => this.handleLangChange("en")}>English</li>
              <li onClick={() => this.handleLangChange("ru")}>Russia</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, ActionDispatchTypes, AnyAction>
) => {
  return {
    onSetLang: (lang: string) => dispatch(SetLanguage(lang)),
  };
};

export default connect(null, mapDispatchToProps)(LanguageSelector);
