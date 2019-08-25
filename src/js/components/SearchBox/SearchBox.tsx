import Container from "@utils/Container";
import * as classnames from "classnames";
import * as React from "react";
import onClickOutside from "react-onclickoutside";
import { connect } from "react-redux";
import { debounce } from "throttle-debounce";
import ApiConnect from "../../services/ApiConnect";
import SearchResults from "../SearchResults";
import * as Styles from "./SearchBox.pcss";

import { Iconfig, Igenre, Imovie } from "@types";

interface ISearchBoxProps {
  toggleSearchBox: () => void;
  collapsed: boolean;
  config: Iconfig;
}

interface IsearchBoxState {
  genres?: Igenre[];
  searchResults: Imovie[];
}

class SearchBox extends React.Component<ISearchBoxProps, IsearchBoxState> {
  public static defaultProps: any;
  private textInput: HTMLInputElement;

  constructor(props: ISearchBoxProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.callAjax = debounce(300, this.callAjax);
    this.state = {
      searchResults: []
    };
  }
  public componentWillMount() {
    ApiConnect.getGenres().then((genres: any) => this.setState({ genres }));
  }
  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.callAjax(e.target.value);
  }
  public callAjax(value: string) {
    ApiConnect.Search(value).then((response: any) =>
      this.setState({ searchResults: response.results })
    );
  }
  public handleClickOutside() {
    this.props.collapsed && this.props.toggleSearchBox();
  }
  public render() {
    this.props.collapsed && this.textInput.focus();
    const searchBoxClasses = classnames({
      [Styles.searchbox]: true,
      [Styles.collapsed]: this.props.collapsed
    });
    const resultContainerClasses = classnames({
      [Styles.resultcontainer]: true,
      [Styles.noresults]: !this.state.searchResults,
      [Styles.collapsed]: this.props.collapsed,
      container: true
    });
    return (
      <div className={searchBoxClasses}>
        <Container className={Styles.searchContainer}>
          <form>
            <label htmlFor="searcbox" className={Styles.label}>
              Search for movie
            </label>
            <input
              placeholder="Search for movie..."
              className={Styles.input}
              type="text"
              id="searchbox"
              onChange={this.handleChange}
              ref={input => {
                this.textInput = input as HTMLInputElement;
              }}
            />
          </form>
          <div className={resultContainerClasses}>
            {this.state.searchResults &&
              this.state.genres &&
              this.props.config && (
                <SearchResults
                  genres={this.state.genres}
                  searchResults={this.state.searchResults}
                  config={this.props.config}
                  toggleSearchBox={this.props.toggleSearchBox}
                />
              )}
          </div>
        </Container>
      </div>
    );
  }
}
SearchBox.defaultProps = {
  collapsed: false,
  toggleSearchBox: () => null
};
const mapStateToProps = (state: Istate, ownProps: any) => {
  return { ...ownProps, config: state.config };
};

export default connect(mapStateToProps)(onClickOutside(SearchBox));
