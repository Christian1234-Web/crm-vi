import React from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputField = React.createRef();
  }
  state = {
    isVisible: false,
    searchText: "",
  };
  handleKeyPress = (e) => {
    let nodeName = e.target.nodeName;
    if (
      document.body.classList.contains("overlay-disabled") ||
      e.target.classList.contains("js-input") ||
      nodeName === "INPUT" ||
      nodeName === "TEXTAREA"
    ) {
      return;
    } else {
      if (
        e.which !== 0 &&
        e.charCode !== 0 &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey &&
        e.keyCode !== 27 &&
        e.target.className !== "ql-editor" &&
        e.target.className !== "ql-editor ql-blank"
      ) {
        this.setState(
          {
            isVisible: true,
          },
          () => this.searchInputField.current.focus()
        );
      } else {
        this.setState({
          isVisible: false,
        });
      }
    }
  };
  handleKeyUp = (e) => {
    if (e.keyCode === 27) {
      this.setState({ isVisible: false });
    }
  };
  handleHeaderSearchInput = (e) => {
    this.setState(
      {
        isVisible: true,
      },
      () => this.searchInputField.current.focus()
    );
  };
  handleCloseSearch = (e) => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  updateInput = (e) => {
    this.setState({ searchText: e.target.value });
  };
  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
    document
      .getElementById("headerSearchInput")
      ?.addEventListener("click", this.handleHeaderSearchInput);
    document
      .getElementById("headerSearchInputSimple")
      ?.addEventListener("click", this.handleHeaderSearchInput);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyUp);
    document.removeEventListener("click", this.handleHeaderSearchInput);
  }
  render() {
    const searchContent = (
      <div className="overlay" data-pages="search">
        {/* BEGIN Overlay Content */}
        <div className="overlay-content has-results m-t-20">
          {/* BEGIN Overlay Header */}
          <div className="container-fluid">
            {/* BEGIN Overlay Logo */}
			<img
              className="overlay-brand"
              src={process.env.PUBLIC_URL + "/assets/img/logo_blue_2x.png"}
              alt="logo"
              data-src={process.env.PUBLIC_URL + "/assets/img/logo_blue_2x.png"}
              data-src-retina="/assets/img/logo_blue_2x.png"
              width="78"
              height="22"
            />
            {/* END Overlay Logo */}
            {/* BEGIN Overlay Close */}
            <a
              href="javascript:void(0);"
              onClick={() => this.handleCloseSearch()}
              className="close-icon-light btn-link btn-rounded  overlay-close text-black"
            >
              <i className="pg-icon">close</i>
            </a>
            {/* END Overlay Close */}
          </div>
          {/* END Overlay Header */}
          <div className="container-fluid">
            {/* BEGIN Overlay Controls */}
            <input
              id="overlay-search"
              onChange={this.updateInput}
              value={this.state.searchText}
              className="no-border overlay-search bg-transparent"
              placeholder="Search..."
              autoComplete="off"
              spellCheck="false"
              ref={this.searchInputField}
            />
            <br />
            <div className="d-flex align-items-center">
              <div className="form-check right m-b-0">
                <input id="checkboxn" type="checkbox" value="1" />
                <label htmlFor="checkboxn">Search within page</label>
              </div>
              <p className="fs-13 hint-text m-l-10 m-b-0">
                Press enter to search
              </p>
            </div>
            {/* END Overlay Controls */}
          </div>
          {/* BEGIN Overlay Search Results, This part is for demo purpose, you can add anything you like */}
          <div className="container-fluid">
            <span>
              <strong>suggestions :</strong>
            </span>
            {/* <span id="overlay-suggestions"></span> */}
            <span>{this.state.searchText}</span>
            <br />
            <div className="search-results m-t-30">
              <p className="bold">Pages Search Results</p>
              <div className="row">
                <div className="col-md-6">
                  {/* BEGIN Search Result Item */}
                  <div className="d-flex m-t-15">
                    {/* BEGIN Search Result Item Thumbnail */}
                    <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                      <div>
                        <img
                          width="36"
                          height="36"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/profiles/avatar.jpg"
                          }
                          data-src={
                            process.env.PUBLIC_URL +
                            "/assets/img/profiles/avatar.jpg"
                          }
                          data-src-retina="/assets/img/profiles/avatar2x.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* END Search Result Item Thumbnail */}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        <span className="semi-bold">
                          {this.state.searchText}
                        </span>{" "}
                        on pages
                      </h5>
                      <p className="hint-text">via john smith</p>
                    </div>
                  </div>
                  {/* END Search Result Item */}
                  {/* BEGIN Search Result Item */}
                  <div className="d-flex m-t-15">
                    {/* BEGIN Search Result Item Thumbnail */}
                    <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                      <div>T</div>
                    </div>
                    {/* END Search Result Item Thumbnail */}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        <span className="semi-bold ">
                          {this.state.searchText}
                        </span>{" "}
                        related topics
                      </h5>
                      <p className="hint-text">via pages</p>
                    </div>
                  </div>
                  {/* END Search Result Item */}
                  {/* BEGIN Search Result Item */}
                  <div className="d-flex m-t-15">
                    {/* BEGIN Search Result Item Thumbnail */}
                    <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                      <div>
                        <i className="fa fa-headphones large-text "></i>
                      </div>
                    </div>
                    {/* END Search Result Item Thumbnail */}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        <span className="semi-bold ">
                          {this.state.searchText}
                        </span>{" "}
                        music
                      </h5>
                      <p className="hint-text">via pagesmix</p>
                    </div>
                  </div>
                  {/* END Search Result Item */}
                </div>
                <div className="col-md-6">
                  {/* BEGIN Search Result Item */}
                  <div className="d-flex m-t-15">
                    {/* BEGIN Search Result Item Thumbnail */}
                    <div className="thumbnail-wrapper d48 circular bg-info text-white inline m-t-10">
                      <div>
                        <i className="fa fa-facebook large-text "></i>
                      </div>
                    </div>
                    {/* END Search Result Item Thumbnail */}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        <span className="semi-bold ">
                          {this.state.searchText}
                        </span>{" "}
                        on facebook
                      </h5>
                      <p className="hint-text">via facebook</p>
                    </div>
                  </div>
                  {/* END Search Result Item */}
                  {/* BEGIN Search Result Item */}
                  <div className="d-flex m-t-15">
                    {/* BEGIN Search Result Item Thumbnail */}
                    <div className="thumbnail-wrapper d48 circular bg-complete text-white inline m-t-10">
                      <div>
                        <i className="fa fa-twitter large-text "></i>
                      </div>
                    </div>
                    {/* END Search Result Item Thumbnail */}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        Tweats on{" "}
                        <span className="semi-bold ">
                          {this.state.searchText}
                        </span>
                      </h5>
                      <p className="hint-text">via twitter</p>
                    </div>
                  </div>
                  {/* END Search Result Item */}
                  {/* BEGIN Search Result Item */}
                  <div className="d-flex m-t-15">
                    {/* BEGIN Search Result Item Thumbnail */}
                    <div className="thumbnail-wrapper d48 circular text-white bg-danger inline m-t-10">
                      <div>
                        <i className="fa fa-google-plus large-text "></i>
                      </div>
                    </div>
                    {/* END Search Result Item Thumbnail */}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        Circles on{" "}
                        <span className="semi-bold ">
                          {this.state.searchText}
                        </span>
                      </h5>
                      <p className="hint-text">via google plus</p>
                    </div>
                  </div>
                  {/* END Search Result Item */}
                </div>
              </div>
            </div>
          </div>
          {/* END Overlay Search Results */}
        </div>
        {/* END Overlay Content */}
      </div>
    );
    return (
      <CSSTransition
        in={this.state.isVisible}
        appear={true}
        timeout={200}
        classNames="searchOverlay"
        unmountOnExit
        onExited={() => {
          this.setState({ searchText: "" });
        }}
      >
        {searchContent}
      </CSSTransition>
    );
  }
}

export default Component;
